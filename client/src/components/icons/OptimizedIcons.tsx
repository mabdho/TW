/**
 * Optimized Icon Components for Bundle Size Reduction
 * Replaces large lucide-react imports with essential icons only
 */

import React from 'react';

// Core Essential Icons - Only import what's absolutely necessary
import { 
  MapPin, 
  Clock, 
  Star, 
  ArrowRight, 
  Search, 
  Menu, 
  X,
  Globe,
  Camera,
  Heart,
  Eye,
  DollarSign
} from 'lucide-react';

// Icon mapping for consistent usage across components
export const icons = {
  // Navigation & UI
  menu: Menu,
  close: X,
  search: Search,
  arrow: ArrowRight,
  
  // Location & Travel
  location: MapPin,
  globe: Globe,
  
  // Time & Rating
  clock: Clock,
  star: Star,
  
  // Media & Actions
  camera: Camera,
  heart: Heart,
  eye: Eye,
  
  // Commerce
  dollar: DollarSign,
} as const;

// Type-safe icon component
interface IconProps {
  name: keyof typeof icons;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", size = 16 }) => {
  const IconComponent = icons[name];
  
  return (
    <IconComponent 
      className={className} 
      width={size} 
      height={size}
    />
  );
};

// Direct exports for backward compatibility
export {
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Search,
  Menu,
  X,
  Globe,
  Camera,
  Heart,
  Eye,
  DollarSign
};

// Alternative simple icon components using SVG paths for critical icons
export const SimpleIcons = {
  Star: ({ className = "", size = 16 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  
  Location: ({ className = "", size = 16 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  
  Clock: ({ className = "", size = 16 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  ),
  
  Arrow: ({ className = "", size = 16 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12,5 19,12 12,19"/>
    </svg>
  )
};

export default { Icon, SimpleIcons, icons };