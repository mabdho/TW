#!/usr/bin/env node

/**
 * Google Cloaking Compliance Audit Tool
 * 
 * This tool audits a website for potential Google cloaking violations
 * by analyzing server code, routing patterns, and content delivery mechanisms.
 * 
 * Google's definition of cloaking:
 * - Showing different content to search engines than to users
 * - Using user-agent strings to detect and serve different content to crawlers
 * - Serving different URLs, content, or metadata to search engines vs users
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class CloakingComplianceAuditor {
  constructor() {
    this.auditResults = {
      summary: {
        overallScore: 0,
        riskLevel: 'UNKNOWN',
        totalIssues: 0,
        criticalIssues: 0,
        warningIssues: 0
      },
      cloakingDetection: {
        score: 0,
        issues: [],
        findings: []
      },
      contentConsistency: {
        score: 0,
        issues: [],
        findings: []
      },
      userAgentAnalysis: {
        score: 0,
        issues: [],
        findings: []
      },
      routingAnalysis: {
        score: 0,
        issues: [],
        findings: []
      },
      recommendations: []
    };
    
    this.serverFiles = [
      'server/index.ts',
      'server/routes.ts',
      'server/firebase-server.ts',
      'server/vite.ts'
    ];
    
    this.cloakingPatterns = [
      // Direct bot detection patterns
      /isSearchEngineBot/gi,
      /isBot\s*=\s*isSearchEngineBot/gi,
      /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot/gi,
      
      // User-agent manipulation patterns
      /req\.get\(['"]user-agent['"].*bot/gi,
      /req\.headers\['user-agent'\].*bot/gi,
      /userAgent.*test.*bot/gi,
      
      // Conditional serving patterns
      /if\s*\(\s*isSearchEngine/gi,
      /if\s*\(\s*isBot/gi,
      /isSearchEngine\s*\?\s*.*:\s*.*/gi,
      
      // File serving patterns that might indicate cloaking
      /res\.sendFile.*seo.*html/gi,
      /htmlPath.*seo/gi,
      /\.html.*bot/gi,
      
      // Route discrimination patterns
      /route.*bot/gi,
      /middleware.*bot/gi,
      /next\(\).*bot/gi
    ];
    
    this.suspiciousFilePatterns = [
      '*seo*.html',
      '*-seo.html',
      '*bot*.html',
      '*crawler*.html'
    ];
  }

  /**
   * Main audit function
   */
  async runAudit() {
    console.log('🔍 Starting Google Cloaking Compliance Audit...\n');
    
    try {
      // 1. Analyze server code for cloaking patterns
      await this.analyzeServerCode();
      
      // 2. Check for suspicious HTML files
      await this.analyzeSuspiciousFiles();
      
      // 3. Analyze routing patterns
      await this.analyzeRoutingPatterns();
      
      // 4. Check content consistency
      await this.analyzeContentConsistency();
      
      // 5. Analyze user-agent handling
      await this.analyzeUserAgentHandling();
      
      // 6. Calculate overall score and risk level
      this.calculateOverallScore();
      
      // 7. Generate recommendations
      this.generateRecommendations();
      
      // 8. Output results
      this.outputResults();
      
    } catch (error) {
      console.error('❌ Audit failed:', error.message);
      process.exit(1);
    }
  }

  /**
   * Analyze server code for cloaking patterns
   */
  async analyzeServerCode() {
    console.log('📁 Analyzing server code for cloaking patterns...');
    
    let totalViolations = 0;
    let criticalViolations = 0;
    
    for (const serverFile of this.serverFiles) {
      const filePath = path.join(process.cwd(), serverFile);
      
      if (!fs.existsSync(filePath)) {
        console.log(`  ⚠️  File not found: ${serverFile}`);
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf-8');
      const lineCount = content.split('\n').length;
      
      console.log(`  📄 Analyzing ${serverFile} (${lineCount} lines)`);
      
      // Check for cloaking patterns
      for (const pattern of this.cloakingPatterns) {
        const matches = content.match(pattern);
        if (matches) {
          const severity = this.assessPatternSeverity(pattern, matches);
          totalViolations += matches.length;
          
          if (severity === 'CRITICAL') {
            criticalViolations += matches.length;
          }
          
          this.auditResults.cloakingDetection.issues.push({
            file: serverFile,
            pattern: pattern.source,
            matches: matches.length,
            severity: severity,
            samples: matches.slice(0, 3) // Show first 3 matches
          });
        }
      }
      
      // Check for specific problematic code blocks
      await this.analyzeCodeBlocks(serverFile, content);
    }
    
    // Calculate cloaking detection score
    if (totalViolations === 0) {
      this.auditResults.cloakingDetection.score = 100;
      this.auditResults.cloakingDetection.findings.push('✅ No cloaking patterns detected in server code');
    } else {
      this.auditResults.cloakingDetection.score = Math.max(0, 100 - (totalViolations * 10) - (criticalViolations * 20));
      this.auditResults.cloakingDetection.findings.push(`❌ Found ${totalViolations} cloaking violations (${criticalViolations} critical)`);
    }
    
    console.log(`  📊 Cloaking Detection Score: ${this.auditResults.cloakingDetection.score}/100`);
  }

  /**
   * Analyze specific code blocks for cloaking behavior
   */
  async analyzeCodeBlocks(fileName, content) {
    // Look for user-agent based conditional serving
    const userAgentConditionals = content.match(/if\s*\([^)]*user-agent[^)]*\)\s*{[^}]*sendFile[^}]*}/gi);
    if (userAgentConditionals) {
      this.auditResults.cloakingDetection.issues.push({
        file: fileName,
        type: 'USER_AGENT_CONDITIONAL_SERVING',
        severity: 'CRITICAL',
        description: 'User-agent based conditional file serving detected',
        count: userAgentConditionals.length
      });
    }

    // Look for bot-specific middleware
    const botMiddleware = content.match(/app\.use\([^)]*bot[^)]*\)/gi);
    if (botMiddleware) {
      this.auditResults.cloakingDetection.issues.push({
        file: fileName,
        type: 'BOT_MIDDLEWARE',
        severity: 'HIGH',
        description: 'Bot-specific middleware detected',
        count: botMiddleware.length
      });
    }

    // Look for search engine specific routes
    const searchEngineRoutes = content.match(/app\.(get|post|put|delete)\([^)]*search[^)]*engine[^)]*\)/gi);
    if (searchEngineRoutes) {
      this.auditResults.cloakingDetection.issues.push({
        file: fileName,
        type: 'SEARCH_ENGINE_ROUTES',
        severity: 'CRITICAL',
        description: 'Search engine specific routes detected',
        count: searchEngineRoutes.length
      });
    }
  }

  /**
   * Check for suspicious HTML files that might indicate cloaking
   */
  async analyzeSuspiciousFiles() {
    console.log('🔍 Checking for suspicious HTML files...');
    
    const suspiciousFiles = [];
    const publicDir = path.join(process.cwd(), 'dist/public');
    
    if (fs.existsSync(publicDir)) {
      const files = await this.findFiles(publicDir, '.html');
      
      for (const file of files) {
        const fileName = path.basename(file);
        
        // Check for SEO-specific files
        if (fileName.includes('seo') || fileName.includes('bot') || fileName.includes('crawler')) {
          suspiciousFiles.push({
            file: file,
            type: 'SEO_SPECIFIC_FILE',
            severity: 'CRITICAL',
            reason: 'File name suggests it\'s specifically for search engines'
          });
        }
        
        // Check for duplicate content files
        const baseName = fileName.replace(/-(seo|bot|crawler)/, '');
        const potentialDuplicate = path.join(path.dirname(file), baseName);
        if (fs.existsSync(potentialDuplicate) && file !== potentialDuplicate) {
          suspiciousFiles.push({
            file: file,
            type: 'DUPLICATE_CONTENT',
            severity: 'HIGH',
            reason: 'Potential duplicate content file detected'
          });
        }
      }
    }
    
    // Analyze findings
    if (suspiciousFiles.length === 0) {
      this.auditResults.contentConsistency.score = 100;
      this.auditResults.contentConsistency.findings.push('✅ No suspicious HTML files detected');
    } else {
      this.auditResults.contentConsistency.score = Math.max(0, 100 - (suspiciousFiles.length * 25));
      this.auditResults.contentConsistency.issues = suspiciousFiles;
      this.auditResults.contentConsistency.findings.push(`❌ Found ${suspiciousFiles.length} suspicious HTML files`);
    }
    
    console.log(`  📊 Content Consistency Score: ${this.auditResults.contentConsistency.score}/100`);
  }

  /**
   * Analyze routing patterns for cloaking behavior
   */
  async analyzeRoutingPatterns() {
    console.log('🛣️  Analyzing routing patterns...');
    
    const routingIssues = [];
    const routeFile = path.join(process.cwd(), 'server/routes.ts');
    
    if (fs.existsSync(routeFile)) {
      const content = fs.readFileSync(routeFile, 'utf-8');
      
      // Look for conditional routing based on user-agent
      const conditionalRoutes = content.match(/if\s*\([^)]*user-agent[^)]*\)\s*{[^}]*route[^}]*}/gi);
      if (conditionalRoutes) {
        routingIssues.push({
          type: 'CONDITIONAL_ROUTING',
          severity: 'CRITICAL',
          description: 'User-agent based conditional routing detected',
          count: conditionalRoutes.length
        });
      }
      
      // Look for bot-specific route handlers
      const botRoutes = content.match(/app\.(get|post|put|delete)\([^)]*bot[^)]*,/gi);
      if (botRoutes) {
        routingIssues.push({
          type: 'BOT_SPECIFIC_ROUTES',
          severity: 'HIGH',
          description: 'Bot-specific route handlers detected',
          count: botRoutes.length
        });
      }
      
      // Look for search engine middleware
      const searchEngineMiddleware = content.match(/isSearchEngine.*next\(\)/gi);
      if (searchEngineMiddleware) {
        routingIssues.push({
          type: 'SEARCH_ENGINE_MIDDLEWARE',
          severity: 'CRITICAL',
          description: 'Search engine specific middleware detected',
          count: searchEngineMiddleware.length
        });
      }
    }
    
    // Calculate routing score
    if (routingIssues.length === 0) {
      this.auditResults.routingAnalysis.score = 100;
      this.auditResults.routingAnalysis.findings.push('✅ No problematic routing patterns detected');
    } else {
      this.auditResults.routingAnalysis.score = Math.max(0, 100 - (routingIssues.length * 20));
      this.auditResults.routingAnalysis.issues = routingIssues;
      this.auditResults.routingAnalysis.findings.push(`❌ Found ${routingIssues.length} routing issues`);
    }
    
    console.log(`  📊 Routing Analysis Score: ${this.auditResults.routingAnalysis.score}/100`);
  }

  /**
   * Analyze user-agent handling
   */
  async analyzeUserAgentHandling() {
    console.log('🕵️  Analyzing user-agent handling...');
    
    const userAgentIssues = [];
    
    for (const serverFile of this.serverFiles) {
      const filePath = path.join(process.cwd(), serverFile);
      
      if (!fs.existsSync(filePath)) continue;
      
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Check for user-agent access patterns
      const userAgentAccess = content.match(/req\.get\(['"]user-agent['"].*\)/gi);
      if (userAgentAccess) {
        userAgentIssues.push({
          file: serverFile,
          type: 'USER_AGENT_ACCESS',
          severity: 'MEDIUM',
          description: 'User-agent header access detected',
          count: userAgentAccess.length
        });
      }
      
      // Check for bot detection functions
      const botDetectionFunctions = content.match(/function\s+\w*bot\w*\s*\(/gi);
      if (botDetectionFunctions) {
        userAgentIssues.push({
          file: serverFile,
          type: 'BOT_DETECTION_FUNCTION',
          severity: 'HIGH',
          description: 'Bot detection function detected',
          count: botDetectionFunctions.length
        });
      }
      
      // Check for user-agent based branching
      const userAgentBranching = content.match(/if\s*\([^)]*user-agent[^)]*\)\s*{/gi);
      if (userAgentBranching) {
        userAgentIssues.push({
          file: serverFile,
          type: 'USER_AGENT_BRANCHING',
          severity: 'CRITICAL',
          description: 'User-agent based conditional logic detected',
          count: userAgentBranching.length
        });
      }
    }
    
    // Calculate user-agent handling score
    if (userAgentIssues.length === 0) {
      this.auditResults.userAgentAnalysis.score = 100;
      this.auditResults.userAgentAnalysis.findings.push('✅ No problematic user-agent handling detected');
    } else {
      const criticalIssues = userAgentIssues.filter(issue => issue.severity === 'CRITICAL').length;
      this.auditResults.userAgentAnalysis.score = Math.max(0, 100 - (userAgentIssues.length * 10) - (criticalIssues * 20));
      this.auditResults.userAgentAnalysis.issues = userAgentIssues;
      this.auditResults.userAgentAnalysis.findings.push(`❌ Found ${userAgentIssues.length} user-agent handling issues`);
    }
    
    console.log(`  📊 User-Agent Analysis Score: ${this.auditResults.userAgentAnalysis.score}/100`);
  }

  /**
   * Analyze content consistency between versions
   */
  async analyzeContentConsistency() {
    console.log('📊 Analyzing content consistency...');
    
    // This would involve comparing content served to different user agents
    // For now, we'll check for obvious indicators
    
    const consistencyIssues = [];
    
    // Check for multiple HTML files for the same route
    const publicDir = path.join(process.cwd(), 'dist/public');
    if (fs.existsSync(publicDir)) {
      const htmlFiles = await this.findFiles(publicDir, '.html');
      const routeMap = new Map();
      
      for (const file of htmlFiles) {
        const relativePath = path.relative(publicDir, file);
        const route = this.inferRouteFromFile(relativePath);
        
        if (routeMap.has(route)) {
          routeMap.get(route).push(file);
        } else {
          routeMap.set(route, [file]);
        }
      }
      
      // Check for routes with multiple HTML files
      for (const [route, files] of routeMap) {
        if (files.length > 1) {
          consistencyIssues.push({
            route: route,
            type: 'MULTIPLE_HTML_FILES',
            severity: 'HIGH',
            description: 'Multiple HTML files for same route detected',
            files: files
          });
        }
      }
    }
    
    this.auditResults.contentConsistency.issues.push(...consistencyIssues);
  }

  /**
   * Assess the severity of a cloaking pattern
   */
  assessPatternSeverity(pattern, matches) {
    const patternStr = pattern.source.toLowerCase();
    
    // Critical patterns
    if (patternStr.includes('sendfile') || patternStr.includes('issearchengine') || patternStr.includes('isbot')) {
      return 'CRITICAL';
    }
    
    // High severity patterns
    if (patternStr.includes('googlebot') || patternStr.includes('bingbot') || patternStr.includes('user-agent')) {
      return 'HIGH';
    }
    
    // Medium severity patterns
    return 'MEDIUM';
  }

  /**
   * Calculate overall compliance score
   */
  calculateOverallScore() {
    const scores = [
      this.auditResults.cloakingDetection.score,
      this.auditResults.contentConsistency.score,
      this.auditResults.userAgentAnalysis.score,
      this.auditResults.routingAnalysis.score
    ];
    
    this.auditResults.summary.overallScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    
    // Determine risk level
    if (this.auditResults.summary.overallScore >= 90) {
      this.auditResults.summary.riskLevel = 'LOW';
    } else if (this.auditResults.summary.overallScore >= 70) {
      this.auditResults.summary.riskLevel = 'MEDIUM';
    } else if (this.auditResults.summary.overallScore >= 50) {
      this.auditResults.summary.riskLevel = 'HIGH';
    } else {
      this.auditResults.summary.riskLevel = 'CRITICAL';
    }
    
    // Count issues
    const allIssues = [
      ...this.auditResults.cloakingDetection.issues,
      ...this.auditResults.contentConsistency.issues,
      ...this.auditResults.userAgentAnalysis.issues,
      ...this.auditResults.routingAnalysis.issues
    ];
    
    this.auditResults.summary.totalIssues = allIssues.length;
    this.auditResults.summary.criticalIssues = allIssues.filter(issue => issue.severity === 'CRITICAL').length;
    this.auditResults.summary.warningIssues = allIssues.filter(issue => issue.severity === 'HIGH' || issue.severity === 'MEDIUM').length;
  }

  /**
   * Generate recommendations based on findings
   */
  generateRecommendations() {
    const recommendations = [];
    
    if (this.auditResults.cloakingDetection.score < 100) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Cloaking Detection',
        title: 'Remove User-Agent Based Content Serving',
        description: 'Remove all code that serves different content based on user-agent detection. This includes bot detection functions and conditional serving logic.',
        impact: 'Critical for Google compliance'
      });
    }
    
    if (this.auditResults.contentConsistency.score < 100) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Content Consistency',
        title: 'Ensure Content Consistency',
        description: 'Remove duplicate HTML files and ensure the same content is served to all users regardless of their user-agent.',
        impact: 'Prevents content cloaking violations'
      });
    }
    
    if (this.auditResults.userAgentAnalysis.score < 100) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'User-Agent Handling',
        title: 'Minimize User-Agent Dependencies',
        description: 'Reduce or eliminate user-agent based logic in your server code. Use feature detection instead of user-agent sniffing where possible.',
        impact: 'Reduces risk of accidental cloaking'
      });
    }
    
    if (this.auditResults.routingAnalysis.score < 100) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Routing',
        title: 'Implement Consistent Routing',
        description: 'Ensure all routes serve the same content to all users. Remove any bot-specific or search engine-specific routing logic.',
        impact: 'Ensures fair content distribution'
      });
    }
    
    // General recommendations
    recommendations.push({
      priority: 'MEDIUM',
      category: 'General',
      title: 'Implement Progressive Enhancement',
      description: 'Use progressive enhancement techniques to serve basic HTML to all users and enhance with JavaScript for interactive features.',
      impact: 'Google-compliant way to optimize for search engines'
    });
    
    recommendations.push({
      priority: 'LOW',
      category: 'Monitoring',
      title: 'Regular Compliance Monitoring',
      description: 'Run this audit regularly to ensure continued compliance with Google\'s guidelines.',
      impact: 'Maintains long-term compliance'
    });
    
    this.auditResults.recommendations = recommendations;
  }

  /**
   * Output audit results
   */
  outputResults() {
    console.log('\n' + '='.repeat(60));
    console.log('🔍 GOOGLE CLOAKING COMPLIANCE AUDIT RESULTS');
    console.log('='.repeat(60));
    
    // Summary
    console.log('\n📊 SUMMARY');
    console.log(`Overall Score: ${this.auditResults.summary.overallScore}/100`);
    console.log(`Risk Level: ${this.auditResults.summary.riskLevel}`);
    console.log(`Total Issues: ${this.auditResults.summary.totalIssues}`);
    console.log(`Critical Issues: ${this.auditResults.summary.criticalIssues}`);
    console.log(`Warning Issues: ${this.auditResults.summary.warningIssues}`);
    
    // Detailed Results
    console.log('\n📋 DETAILED RESULTS');
    
    this.outputSectionResults('🎯 Cloaking Detection', this.auditResults.cloakingDetection);
    this.outputSectionResults('📄 Content Consistency', this.auditResults.contentConsistency);
    this.outputSectionResults('🕵️ User-Agent Analysis', this.auditResults.userAgentAnalysis);
    this.outputSectionResults('🛣️ Routing Analysis', this.auditResults.routingAnalysis);
    
    // Recommendations
    console.log('\n💡 RECOMMENDATIONS');
    for (const rec of this.auditResults.recommendations) {
      console.log(`\n[${rec.priority}] ${rec.title}`);
      console.log(`Category: ${rec.category}`);
      console.log(`Description: ${rec.description}`);
      console.log(`Impact: ${rec.impact}`);
    }
    
    // Compliance Status
    console.log('\n' + '='.repeat(60));
    if (this.auditResults.summary.riskLevel === 'LOW') {
      console.log('✅ COMPLIANCE STATUS: GOOD - Low risk of Google penalties');
    } else if (this.auditResults.summary.riskLevel === 'MEDIUM') {
      console.log('⚠️  COMPLIANCE STATUS: NEEDS ATTENTION - Medium risk of Google penalties');
    } else {
      console.log('❌ COMPLIANCE STATUS: CRITICAL - High risk of Google penalties');
    }
    console.log('='.repeat(60));
    
    // Save results to file
    const resultPath = path.join(process.cwd(), 'cloaking-audit-results.json');
    fs.writeFileSync(resultPath, JSON.stringify(this.auditResults, null, 2));
    console.log(`\n💾 Full results saved to: ${resultPath}`);
  }

  /**
   * Output results for a specific section
   */
  outputSectionResults(title, section) {
    console.log(`\n${title}`);
    console.log(`Score: ${section.score}/100`);
    
    if (section.findings.length > 0) {
      console.log('Findings:');
      section.findings.forEach(finding => console.log(`  ${finding}`));
    }
    
    if (section.issues.length > 0) {
      console.log('Issues:');
      section.issues.forEach(issue => {
        console.log(`  [${issue.severity}] ${issue.description || issue.type}`);
        if (issue.file) console.log(`    File: ${issue.file}`);
        if (issue.count) console.log(`    Count: ${issue.count}`);
      });
    }
  }

  /**
   * Helper function to find files recursively
   */
  async findFiles(dir, extension) {
    const files = [];
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        files.push(...await this.findFiles(fullPath, extension));
      } else if (entry.isFile() && fullPath.endsWith(extension)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  /**
   * Infer route from file path
   */
  inferRouteFromFile(filePath) {
    if (filePath === 'index.html') return '/';
    if (filePath.endsWith('/index.html')) return '/' + filePath.replace('/index.html', '');
    if (filePath.endsWith('.html')) return '/' + filePath.replace('.html', '');
    return '/' + filePath;
  }
}

// Run the audit
const auditor = new CloakingComplianceAuditor();
auditor.runAudit().catch(console.error);