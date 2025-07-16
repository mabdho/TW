#!/usr/bin/env node
/**
 * Test script for TSX-HTML Synchronization System
 * Verifies the automatic synchronization is working correctly
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testTsxHtmlSync() {
  console.log('🧪 Testing TSX-HTML Synchronization System');
  console.log('==========================================\n');

  try {
    // Import the synchronizer
    const { TSXHTMLSynchronizer } = await import('../server/utils/tsx-html-sync.ts');
    const synchronizer = new TSXHTMLSynchronizer();

    // Test batch synchronization
    console.log('📊 Running batch synchronization test...');
    const results = await synchronizer.synchronizeAll();
    
    console.log('📈 Test Results:');
    console.log(`  Total cities: ${results.total}`);
    console.log(`  Successful: ${results.success}`);
    console.log(`  Failed: ${results.failed}`);
    console.log(`  Success rate: ${results.total > 0 ? ((results.success / results.total) * 100).toFixed(1) : 0}%`);

    if (results.success === results.total) {
      console.log('\n✅ TSX-HTML Synchronization System Test: PASSED');
      console.log('🎉 All cities are perfectly synchronized!');
      return true;
    } else {
      console.log('\n⚠️  TSX-HTML Synchronization System Test: PARTIAL SUCCESS');
      console.log(`💡 ${results.failed} cities need attention`);
      return false;
    }

  } catch (error) {
    console.error('\n❌ TSX-HTML Synchronization System Test: FAILED');
    console.error('💥 Error:', error.message);
    return false;
  }
}

// Run test if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testTsxHtmlSync().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    console.error('Test execution failed:', error);
    process.exit(1);
  });
}

export { testTsxHtmlSync };