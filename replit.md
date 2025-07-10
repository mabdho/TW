# WanderGuide - Travel Website Application

## Overview

This is a modern travel website called "WanderGuide" built with React frontend and Express backend. The application showcases beautiful destinations, travel experiences, and curated travel guides. It features a stunning visual design with travel-themed components, comprehensive mobile-first responsive layouts, and modern animations. The website includes hero sections, travel categories, comprehensive city directory, and individual city guide pages with TripAdvisor-style layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

### Mobile-First Responsive Design Implementation
- ✅ Implemented comprehensive mobile-first responsive design across all components
- ✅ Enhanced Hero component with mobile-optimized spacing, typography, and search functionality
- ✅ Updated Navigation with mobile-friendly hamburger menu and touch-friendly interactions
- ✅ Optimized CityDirectory with responsive grid layouts (2-6 columns based on screen size)
- ✅ Enhanced TravelCategories with mobile-optimized cards and responsive typography
- ✅ Improved Footer with mobile-first layout and responsive social media icons
- ✅ Updated CityPage component with responsive tabs and mobile-optimized content layouts
- ✅ Added custom Tailwind utilities for consistent responsive patterns
- ✅ Enhanced Tailwind configuration with additional breakpoints (xs: 475px)
- ✅ Removed featured destinations section as requested by user

### TripAdvisor-Style Design Implementation
- ✅ Transformed city pages with professional TripAdvisor-inspired design system
- ✅ Added hero header with city ratings, badges, and traveler information
- ✅ Implemented clean white cards with subtle shadows and gray borders
- ✅ Added star ratings and review scores to attractions
- ✅ Enhanced Overview tab with sidebar layout and quick facts section
- ✅ Redesigned Top Attractions with numbered rankings and compact info cards
- ✅ Updated All Attractions with professional grid layout and placeholder images
- ✅ Improved Plan Your Trip section with color-coded information cards
- ✅ Enhanced FAQ section with Q&A styling and improved readability
- ✅ Applied TripAdvisor color scheme (greens, oranges, grays) throughout
- ✅ Added consistent icons and badges for better visual hierarchy

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Structure**: RESTful APIs with `/api` prefix
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Monorepo Structure
```
├── client/          # React frontend application
├── server/          # Express backend application
├── shared/          # Shared TypeScript schemas and types
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized in `shared/schema.ts` with Zod validation
- **Current Tables**: Users table with username/password fields
- **Connection**: Neon Database serverless PostgreSQL instance

### Storage Interface
- **Abstraction**: `IStorage` interface for CRUD operations
- **Implementation**: `MemStorage` class for in-memory development storage
- **Methods**: User creation, retrieval by ID and username

### UI Component System
- **Base**: shadcn/ui components with Radix UI primitives
- **Theming**: CSS variables-based design system with light/dark mode support
- **Typography**: Inter font family with multiple weights
- **Color Scheme**: Neutral base with customizable accent colors

### Client-Side Features
- **Query Management**: Centralized API client with error handling
- **Mobile Responsiveness**: Custom mobile detection hook
- **Toast Notifications**: Built-in notification system
- **Form Handling**: React Hook Form integration with Zod validation

## Data Flow

### Request/Response Cycle
1. Frontend makes API requests using the centralized `apiRequest` function
2. Express server handles requests with comprehensive logging middleware
3. Route handlers interact with the storage interface
4. Database operations performed through Drizzle ORM
5. Responses formatted and sent back to frontend

### State Management
- Server state managed by TanStack Query with automatic caching
- Local UI state managed with React hooks
- Form state handled by React Hook Form with Zod validation

## External Dependencies

### Database
- **Provider**: Neon Database (serverless PostgreSQL)
- **Connection**: Environment variable `DATABASE_URL` required
- **Features**: Connection pooling, automatic scaling

### UI Libraries
- **Component Base**: Radix UI primitives for accessibility
- **Icons**: Lucide React icon library
- **Styling**: Tailwind CSS with PostCSS processing
- **Carousel**: Embla Carousel for interactive components

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESBuild for production bundling
- **Development**: Hot module replacement and error overlay

## Deployment Strategy

### Build Process
1. Frontend built with Vite to `dist/public` directory
2. Backend bundled with ESBuild to `dist/index.js`
3. Database migrations can be applied with `npm run db:push`

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution
- **Production**: Runs compiled JavaScript with Node.js
- **Database**: Requires `DATABASE_URL` environment variable

### Static Asset Serving
- Production build serves React app from Express server
- Vite handles development server with proxy configuration
- Static assets optimized and bundled for production

### Session Management
- PostgreSQL-backed sessions for scalability
- Session configuration handled by connect-pg-simple
- Secure session handling for authentication workflows

The application is designed to be deployment-ready with support for both development and production environments, comprehensive error handling, and a scalable architecture that can grow with application needs.