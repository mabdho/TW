// Standardized error handling system
import { toast } from '@/hooks/use-toast';

export enum ErrorType {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTH = 'auth',
  NOT_FOUND = 'not_found',
  SERVER = 'server',
  CLIENT = 'client',
  UNKNOWN = 'unknown'
}

export interface AppError {
  type: ErrorType;
  message: string;
  details?: any;
  statusCode?: number;
  timestamp: Date;
  userMessage?: string;
}

export class AppErrorHandler {
  private static instance: AppErrorHandler;
  private errorLog: AppError[] = [];

  private constructor() {}

  static getInstance(): AppErrorHandler {
    if (!AppErrorHandler.instance) {
      AppErrorHandler.instance = new AppErrorHandler();
    }
    return AppErrorHandler.instance;
  }

  // Create standardized error
  createError(
    type: ErrorType,
    message: string,
    details?: any,
    statusCode?: number,
    userMessage?: string
  ): AppError {
    return {
      type,
      message,
      details,
      statusCode,
      timestamp: new Date(),
      userMessage: userMessage || this.getDefaultUserMessage(type)
    };
  }

  // Handle different types of errors
  handleError(error: AppError | Error | unknown): void {
    const appError = this.normalizeError(error);
    
    // Log error
    this.logError(appError);
    
    // Show user-friendly message
    this.showUserMessage(appError);
    
    // Report to monitoring service (if available)
    this.reportError(appError);
  }

  // Handle API errors
  handleApiError(response: Response, context?: string): AppError {
    const error = this.createError(
      this.getErrorTypeFromStatus(response.status),
      `API Error: ${response.statusText}`,
      { url: response.url, status: response.status, context },
      response.status
    );
    
    this.handleError(error);
    return error;
  }

  // Handle network errors
  handleNetworkError(error: Error, context?: string): AppError {
    const appError = this.createError(
      ErrorType.NETWORK,
      `Network Error: ${error.message}`,
      { context, originalError: error },
      0,
      'Connection problem. Please check your internet and try again.'
    );
    
    this.handleError(appError);
    return appError;
  }

  // Handle validation errors
  handleValidationError(field: string, message: string): AppError {
    const error = this.createError(
      ErrorType.VALIDATION,
      `Validation Error: ${field} - ${message}`,
      { field },
      400,
      message
    );
    
    this.handleError(error);
    return error;
  }

  // Handle component errors (for React Error Boundaries)
  handleComponentError(error: Error, errorInfo: any): AppError {
    const appError = this.createError(
      ErrorType.CLIENT,
      `Component Error: ${error.message}`,
      { stack: error.stack, errorInfo },
      500,
      'Something went wrong. Please refresh the page.'
    );
    
    this.handleError(appError);
    return appError;
  }

  // Normalize different error types
  private normalizeError(error: any): AppError {
    if (error instanceof Error) {
      return this.createError(
        ErrorType.UNKNOWN,
        error.message,
        { stack: error.stack }
      );
    }
    
    if (typeof error === 'object' && error.type) {
      return error as AppError;
    }
    
    return this.createError(
      ErrorType.UNKNOWN,
      String(error)
    );
  }

  // Get error type from HTTP status
  private getErrorTypeFromStatus(status: number): ErrorType {
    if (status >= 400 && status < 500) {
      switch (status) {
        case 401:
        case 403:
          return ErrorType.AUTH;
        case 404:
          return ErrorType.NOT_FOUND;
        case 400:
          return ErrorType.VALIDATION;
        default:
          return ErrorType.CLIENT;
      }
    }
    
    if (status >= 500) {
      return ErrorType.SERVER;
    }
    
    return ErrorType.UNKNOWN;
  }

  // Get default user message for error type
  private getDefaultUserMessage(type: ErrorType): string {
    switch (type) {
      case ErrorType.NETWORK:
        return 'Connection problem. Please check your internet and try again.';
      case ErrorType.AUTH:
        return 'You need to log in to access this feature.';
      case ErrorType.NOT_FOUND:
        return 'The requested resource was not found.';
      case ErrorType.VALIDATION:
        return 'Please check your input and try again.';
      case ErrorType.SERVER:
        return 'Server error. Please try again later.';
      case ErrorType.CLIENT:
        return 'Something went wrong. Please refresh the page.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  // Log error to console and storage
  private logError(error: AppError): void {
    this.errorLog.push(error);
    
    // Keep only last 100 errors
    if (this.errorLog.length > 100) {
      this.errorLog = this.errorLog.slice(-100);
    }
    
    // Console logging
    console.error(`[${error.type.toUpperCase()}] ${error.message}`, error.details);
  }

  // Show user-friendly message
  private showUserMessage(error: AppError): void {
    if (error.userMessage) {
      toast({
        title: 'Error',
        description: error.userMessage,
        variant: 'destructive',
      });
    }
  }

  // Report error to monitoring service
  private reportError(error: AppError): void {
    // Send to analytics or monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: error.type === ErrorType.SERVER,
        error_type: error.type
      });
    }
  }

  // Get error history
  getErrorHistory(): AppError[] {
    return [...this.errorLog];
  }

  // Clear error history
  clearErrorHistory(): void {
    this.errorLog = [];
  }
}

// Global error handler instance
export const errorHandler = AppErrorHandler.getInstance();

// React Error Boundary component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<{ error: AppError }> },
  { hasError: boolean; error?: AppError }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean; error: AppError } {
    const appError = errorHandler.handleComponentError(error, {});
    return { hasError: true, error: appError };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    errorHandler.handleComponentError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return React.createElement(FallbackComponent, { error: this.state.error! });
    }

    return this.props.children;
  }
}

// Default error fallback component
const DefaultErrorFallback: React.FC<{ error: AppError }> = ({ error }) => {
  return React.createElement(
    'div',
    { className: 'min-h-screen flex items-center justify-center bg-gray-50' },
    React.createElement(
      'div',
      { className: 'text-center max-w-md mx-auto p-6' },
      React.createElement(
        'div',
        { className: 'w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center' },
        React.createElement(
          'svg',
          { 
            className: 'w-8 h-8 text-red-600', 
            fill: 'none', 
            stroke: 'currentColor', 
            viewBox: '0 0 24 24' 
          },
          React.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
            d: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          })
        )
      ),
      React.createElement('h1', { className: 'text-2xl font-bold text-gray-900 mb-2' }, 'Something went wrong'),
      React.createElement('p', { className: 'text-gray-600 mb-6' }, error.userMessage),
      React.createElement(
        'button',
        {
          onClick: () => window.location.reload(),
          className: 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
        },
        'Refresh Page'
      )
    )
  );
};

// Utility functions
export const withErrorHandling = <T extends (...args: any[]) => any>(
  fn: T,
  errorContext?: string
): T => {
  return ((...args: any[]) => {
    try {
      const result = fn(...args);
      if (result instanceof Promise) {
        return result.catch((error) => {
          errorHandler.handleError(error);
          throw error;
        });
      }
      return result;
    } catch (error) {
      errorHandler.handleError(error);
      throw error;
    }
  }) as T;
};

// API request wrapper with error handling
export const apiRequest = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      errorHandler.handleApiError(response);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      errorHandler.handleNetworkError(error as Error, url);
    }
    throw error;
  }
};

import React from 'react';