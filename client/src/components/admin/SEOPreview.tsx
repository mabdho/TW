/**
 * SEO Preview Component for TravelWanders Admin
 * Provides real-time SEO validation and Google search result preview
 */

import React, { useMemo } from 'react';
import { SEOData } from '../../utils/seo';
import { validateSEO } from '../../utils/seoValidation';
import { getSEOGrade } from '../../utils/seoValidation';

interface SEOPreviewProps {
  seoData: SEOData;
  contentData: any;
  contentType: 'city' | 'blog';
  onUpdateSEO?: (updates: Partial<SEOData>) => void;
}

export const SEOPreview: React.FC<SEOPreviewProps> = ({
  seoData,
  contentData,
  contentType,
  onUpdateSEO
}) => {
  // Validate SEO data
  const validationResult = useMemo(() => {
    return validateSEO(seoData, contentData, contentType);
  }, [seoData, contentData, contentType]);

  const seoGrade = getSEOGrade(validationResult.score);

  // Truncate text for preview
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="seo-preview bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
      {/* SEO Score Header */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          SEO Analysis
        </h3>
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            seoGrade.color === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
            seoGrade.color === 'yellow' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
            seoGrade.color === 'orange' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            Grade: {seoGrade.grade}
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {validationResult.score}/{validationResult.maxScore}
          </div>
        </div>
      </div>

      {/* Google Search Preview */}
      <div className="google-search-preview">
        <h4 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-3">
          Google Search Preview
        </h4>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 font-arial">
          {/* URL */}
          <div className="text-sm text-green-700 dark:text-green-400 mb-1">
            {seoData.canonicalUrl}
          </div>
          
          {/* Title */}
          <div className="text-blue-600 dark:text-blue-400 text-lg font-medium hover:underline cursor-pointer mb-1">
            {truncateText(seoData.title, 60)}
            {seoData.title.length > 60 && (
              <span className="text-red-500 text-xs ml-1">(Title too long)</span>
            )}
          </div>
          
          {/* Description */}
          <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {truncateText(seoData.description, 160)}
            {seoData.description.length > 160 && (
              <span className="text-red-500 text-xs ml-1">(Description too long)</span>
            )}
          </div>
          
          {/* Rich snippets preview */}
          {contentType === 'city' && (
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              ★★★★★ Rating • {contentData.attractions?.length || 0} attractions • Travel guide
            </div>
          )}
        </div>
      </div>

      {/* SEO Validation Results */}
      <div className="validation-results">
        <h4 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-3">
          SEO Validation Results
        </h4>
        
        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
            <span>SEO Score</span>
            <span>{validationResult.score}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                validationResult.score >= 90 ? 'bg-green-500' :
                validationResult.score >= 70 ? 'bg-yellow-500' :
                validationResult.score >= 50 ? 'bg-orange-500' :
                'bg-red-500'
              }`}
              style={{ width: `${validationResult.score}%` }}
            />
          </div>
        </div>

        {/* Errors */}
        {validationResult.errors.length > 0 && (
          <div className="mb-4">
            <h5 className="text-sm font-medium text-red-700 dark:text-red-400 mb-2">
              Issues to Fix ({validationResult.errors.length})
            </h5>
            <div className="space-y-2">
              {validationResult.errors.map((error, index) => (
                <div key={index} className={`p-3 rounded-lg ${
                  error.severity === 'error' 
                    ? 'bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500' 
                    : 'bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500'
                }`}>
                  <div className="flex items-start gap-2">
                    <span className={`text-sm ${
                      error.severity === 'error' ? 'text-red-700 dark:text-red-400' : 'text-yellow-700 dark:text-yellow-400'
                    }`}>
                      {error.severity === 'error' ? '❌' : '⚠️'}
                    </span>
                    <div>
                      <p className={`text-sm font-medium ${
                        error.severity === 'error' ? 'text-red-700 dark:text-red-400' : 'text-yellow-700 dark:text-yellow-400'
                      }`}>
                        {error.field.charAt(0).toUpperCase() + error.field.slice(1)}
                      </p>
                      <p className={`text-sm ${
                        error.severity === 'error' ? 'text-red-600 dark:text-red-300' : 'text-yellow-600 dark:text-yellow-300'
                      }`}>
                        {error.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Warnings */}
        {validationResult.warnings.length > 0 && (
          <div className="mb-4">
            <h5 className="text-sm font-medium text-orange-700 dark:text-orange-400 mb-2">
              Recommendations ({validationResult.warnings.length})
            </h5>
            <div className="space-y-2">
              {validationResult.warnings.map((warning, index) => (
                <div key={index} className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-start gap-2">
                    <span className="text-sm text-orange-700 dark:text-orange-400">💡</span>
                    <div>
                      <p className="text-sm font-medium text-orange-700 dark:text-orange-400">
                        {warning.field.charAt(0).toUpperCase() + warning.field.slice(1)}
                      </p>
                      <p className="text-sm text-orange-600 dark:text-orange-300">
                        {warning.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggestions */}
        {validationResult.suggestions.length > 0 && (
          <div className="mb-4">
            <h5 className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-2">
              Suggestions for Improvement
            </h5>
            <div className="space-y-1">
              {validationResult.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-blue-600 dark:text-blue-300">
                  <span>•</span>
                  <span>{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="quick-stats grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="stat-card bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {seoData.title.length}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Title Length
          </div>
          <div className={`text-xs ${
            seoData.title.length >= 10 && seoData.title.length <= 60 ? 'text-green-600' : 'text-red-600'
          }`}>
            {seoData.title.length >= 10 && seoData.title.length <= 60 ? 'Good' : 'Needs Fix'}
          </div>
        </div>

        <div className="stat-card bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {seoData.description.length}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Description Length
          </div>
          <div className={`text-xs ${
            seoData.description.length >= 120 && seoData.description.length <= 160 ? 'text-green-600' : 'text-red-600'
          }`}>
            {seoData.description.length >= 120 && seoData.description.length <= 160 ? 'Good' : 'Needs Fix'}
          </div>
        </div>

        <div className="stat-card bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {seoData.keywordDensity.toFixed(1)}%
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Keyword Density
          </div>
          <div className={`text-xs ${
            seoData.keywordDensity >= 1.0 && seoData.keywordDensity <= 2.0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {seoData.keywordDensity >= 1.0 && seoData.keywordDensity <= 2.0 ? 'Good' : 'Needs Fix'}
          </div>
        </div>

        <div className="stat-card bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {contentData.content ? Math.ceil(contentData.content.split(' ').length / 200) : 0}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Reading Time (min)
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Estimated
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {onUpdateSEO && (
        <div className="action-buttons flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              // Auto-optimize SEO data
              const optimizedData: Partial<SEOData> = {};
              
              // Fix title length
              if (seoData.title.length > 60) {
                optimizedData.title = seoData.title.substring(0, 57) + '...';
              }
              
              // Fix description length
              if (seoData.description.length > 160) {
                optimizedData.description = seoData.description.substring(0, 157) + '...';
              }
              
              if (Object.keys(optimizedData).length > 0) {
                onUpdateSEO(optimizedData);
              }
            }}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Auto-Optimize
          </button>
          
          <button
            onClick={() => {
              // Refresh validation
              window.location.reload();
            }}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Refresh Analysis
          </button>
        </div>
      )}
    </div>
  );
};

export default SEOPreview;