/**
 * Lazy-loaded Radix UI Components
 * Dynamic imports for heavy Radix components to reduce initial bundle size
 */

import { lazy, ComponentType, Suspense, ReactNode } from 'react';
import { Skeleton } from '../skeleton';

// Loading fallback components
const DialogSkeleton = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-lg p-6 w-96 max-w-[90vw]">
      <Skeleton className="h-6 w-48 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <div className="flex gap-2 justify-end">
        <Skeleton className="h-9 w-16" />
        <Skeleton className="h-9 w-16" />
      </div>
    </div>
  </div>
);

const DropdownSkeleton = () => (
  <div className="absolute top-full right-0 mt-1 w-48 bg-white border rounded-md shadow-lg p-1">
    <Skeleton className="h-8 w-full mb-1" />
    <Skeleton className="h-8 w-full mb-1" />
    <Skeleton className="h-8 w-full" />
  </div>
);

const SelectSkeleton = () => (
  <div className="relative">
    <Skeleton className="h-10 w-full" />
  </div>
);

const TabsSkeleton = () => (
  <div className="w-full">
    <div className="flex border-b">
      <Skeleton className="h-10 w-24 mr-4" />
      <Skeleton className="h-10 w-24 mr-4" />
      <Skeleton className="h-10 w-24" />
    </div>
    <div className="py-4">
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </div>
);

const AccordionSkeleton = () => (
  <div className="w-full">
    <div className="border-b py-4">
      <Skeleton className="h-6 w-3/4 mb-2" />
    </div>
    <div className="border-b py-4">
      <Skeleton className="h-6 w-2/3 mb-2" />
    </div>
    <div className="border-b py-4">
      <Skeleton className="h-6 w-4/5 mb-2" />
    </div>
  </div>
);

// Helper component for consistent loading states
interface LazyComponentWrapperProps {
  fallback?: ReactNode;
  children: ReactNode;
}

const LazyComponentWrapper = ({ fallback, children }: LazyComponentWrapperProps) => (
  <Suspense fallback={fallback || <Skeleton className="h-10 w-full" />}>
    {children}
  </Suspense>
);

// Dynamic imports for heavy Radix components
export const LazyDialog = lazy(() => 
  import('../dialog').then(module => ({ default: module.Dialog }))
);

export const LazyDialogContent = lazy(() => 
  import('../dialog').then(module => ({ default: module.DialogContent }))
);

export const LazyDialogHeader = lazy(() => 
  import('../dialog').then(module => ({ default: module.DialogHeader }))
);

export const LazyDialogTitle = lazy(() => 
  import('../dialog').then(module => ({ default: module.DialogTitle }))
);

export const LazyDialogTrigger = lazy(() => 
  import('../dialog').then(module => ({ default: module.DialogTrigger }))
);

export const LazyDropdownMenu = lazy(() => 
  import('../dropdown-menu').then(module => ({ default: module.DropdownMenu }))
);

export const LazyDropdownMenuContent = lazy(() => 
  import('../dropdown-menu').then(module => ({ default: module.DropdownMenuContent }))
);

export const LazyDropdownMenuItem = lazy(() => 
  import('../dropdown-menu').then(module => ({ default: module.DropdownMenuItem }))
);

export const LazyDropdownMenuTrigger = lazy(() => 
  import('../dropdown-menu').then(module => ({ default: module.DropdownMenuTrigger }))
);

export const LazySelect = lazy(() => 
  import('../select').then(module => ({ default: module.Select }))
);

export const LazySelectContent = lazy(() => 
  import('../select').then(module => ({ default: module.SelectContent }))
);

export const LazySelectItem = lazy(() => 
  import('../select').then(module => ({ default: module.SelectItem }))
);

export const LazySelectTrigger = lazy(() => 
  import('../select').then(module => ({ default: module.SelectTrigger }))
);

export const LazySelectValue = lazy(() => 
  import('../select').then(module => ({ default: module.SelectValue }))
);

export const LazyTabs = lazy(() => 
  import('../tabs').then(module => ({ default: module.Tabs }))
);

export const LazyTabsContent = lazy(() => 
  import('../tabs').then(module => ({ default: module.TabsContent }))
);

export const LazyTabsList = lazy(() => 
  import('../tabs').then(module => ({ default: module.TabsList }))
);

export const LazyTabsTrigger = lazy(() => 
  import('../tabs').then(module => ({ default: module.TabsTrigger }))
);

export const LazyAccordion = lazy(() => 
  import('../accordion').then(module => ({ default: module.Accordion }))
);

export const LazyAccordionContent = lazy(() => 
  import('../accordion').then(module => ({ default: module.AccordionContent }))
);

export const LazyAccordionItem = lazy(() => 
  import('../accordion').then(module => ({ default: module.AccordionItem }))
);

export const LazyAccordionTrigger = lazy(() => 
  import('../accordion').then(module => ({ default: module.AccordionTrigger }))
);

export const LazyScrollArea = lazy(() => 
  import('../scroll-area').then(module => ({ default: module.ScrollArea }))
);

export const LazyToast = lazy(() => 
  import('../toast').then(module => ({ default: module.Toast }))
);

export const LazyToaster = lazy(() => 
  import('../toaster').then(module => ({ default: module.Toaster }))
);

// Wrapper components with optimized loading states
export const OptimizedDialog = ({ children, ...props }: any) => (
  <LazyComponentWrapper fallback={<DialogSkeleton />}>
    <LazyDialog {...props}>{children}</LazyDialog>
  </LazyComponentWrapper>
);

export const OptimizedDropdownMenu = ({ children, ...props }: any) => (
  <LazyComponentWrapper fallback={<DropdownSkeleton />}>
    <LazyDropdownMenu {...props}>{children}</LazyDropdownMenu>
  </LazyComponentWrapper>
);

export const OptimizedSelect = ({ children, ...props }: any) => (
  <LazyComponentWrapper fallback={<SelectSkeleton />}>
    <LazySelect {...props}>{children}</LazySelect>
  </LazyComponentWrapper>
);

export const OptimizedTabs = ({ children, ...props }: any) => (
  <LazyComponentWrapper fallback={<TabsSkeleton />}>
    <LazyTabs {...props}>{children}</LazyTabs>
  </LazyComponentWrapper>
);

export const OptimizedAccordion = ({ children, ...props }: any) => (
  <LazyComponentWrapper fallback={<AccordionSkeleton />}>
    <LazyAccordion {...props}>{children}</LazyAccordion>
  </LazyComponentWrapper>
);

// Preloading utility for route-based optimization
export const preloadRadixForRoute = (route: string) => {
  if (typeof window === 'undefined') return;
  
  const routeComponents: Record<string, (() => Promise<any>)[]> = {
    '/admin': [
      () => import('../dialog'),
      () => import('../dropdown-menu'),
      () => import('../select'),
      () => import('../tabs'),
      () => import('../toast'),
    ],
    '/blog': [
      () => import('../scroll-area'),
      () => import('../accordion'),
    ],
    '/city': [
      () => import('../tabs'),
      () => import('../accordion'),
      () => import('../scroll-area'),
    ],
  };
  
  const components = routeComponents[route] || [];
  
  // Preload on idle
  requestIdleCallback(() => {
    components.forEach(componentLoader => {
      componentLoader().catch(() => {
        // Silent fail for preloading
      });
    });
  }, { timeout: 2000 });
};

// Bundle size tracking
export const trackRadixUsage = (componentName: string) => {
  if (process.env.NODE_ENV === 'development') {
    const usage = JSON.parse(localStorage.getItem('radix-usage') || '{}');
    usage[componentName] = (usage[componentName] || 0) + 1;
    localStorage.setItem('radix-usage', JSON.stringify(usage));
  }
};

export default {
  LazyDialog,
  LazyDropdownMenu,
  LazySelect,
  LazyTabs,
  LazyAccordion,
  LazyScrollArea,
  LazyToast,
  OptimizedDialog,
  OptimizedDropdownMenu,
  OptimizedSelect,
  OptimizedTabs,
  OptimizedAccordion,
  preloadRadixForRoute,
  trackRadixUsage,
};