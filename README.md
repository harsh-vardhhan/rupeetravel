# Rupee Travel - Vietnam Travel Guide Platform

A modern, SEO-optimized travel platform built with Next.js 15, featuring comprehensive travel guides for Indians visiting Vietnam. This project demonstrates advanced web development patterns, database design, and performance optimization techniques.

## 🚀 Technology Stack

### Frontend & Framework
- **Next.js 15** - React framework with App Router for server-side rendering and static generation
- **React 18** - Modern React with hooks and concurrent features
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **TypeScript/JavaScript** - Type-safe development with modern ES6+ features

### Database & ORM
- **Turso (LibSQL)** - Serverless SQLite database for edge computing
- **Drizzle ORM** - Type-safe database query builder with SQLite dialect
- **Database Migrations** - Automated schema management with Drizzle Kit

### Performance & SEO
- **Static Site Generation (SSG)** - Pre-rendered pages for optimal performance
- **Image Optimization** - Next.js Image component with WebP format support
- **SEO Optimization** - Structured data, meta tags, and sitemap generation
- **Core Web Vitals** - Optimized for Google's performance metrics

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing
- **Environment Management** - Secure configuration with dotenv

## 🏗️ Architecture Patterns

### 1. App Router Architecture
```
src/app/
├── layout.js          # Root layout with metadata
├── page.js           # Homepage with static generation
├── [dynamic-routes]/ # SEO-optimized content pages
└── posts/[slug]/     # Blog post dynamic routing
```

### 2. Database Design Pattern
- **Type-safe Schema**: Drizzle ORM with SQLite table definitions
- **Centralized Data Access**: Repository pattern in `src/lib/flightData.js`
- **Query Optimization**: Efficient filtering, pagination, and sorting
- **Error Handling**: Graceful error management with proper logging

### 3. Component Architecture
```
src/
├── components/        # Reusable UI components
│   ├── ui/          # Design system components
│   └── server/      # Server-side components
├── component/        # Feature-specific components
└── lib/             # Utility functions and data access
```

### 4. Performance Optimization Patterns
- **Static Generation**: `export const dynamic = "force-static"`
- **Image Optimization**: WebP format with responsive sizing
- **Lazy Loading**: Intersection Observer for performance
- **Code Splitting**: Automatic route-based code splitting

## 📊 Key Features Implemented

### 1. Flight Search System
- Real-time flight data filtering and sorting
- Multi-criteria search (price, airline, season)
- Pagination with efficient database queries
- Weather integration for travel planning

### 2. Content Management
- Markdown-based blog system with gray-matter parsing
- SEO-optimized URL structure
- Structured data for search engines
- Image optimization with Next.js

### 3. User Experience
- Responsive design with Tailwind CSS
- Interactive components with React hooks
- Accessibility-first development
- Performance monitoring and optimization

## 🔧 Development Patterns

### 1. Data Fetching Strategy
```javascript
// Centralized data access with error handling
export async function getFlightsFromDb(searchParams) {
  // Type-safe database queries
  // Efficient filtering and pagination
  // Proper error boundaries
}
```

### 2. Component Composition
```javascript
// Server-side components for performance
// Client-side interactivity where needed
// Reusable design system components
```

### 3. SEO Implementation
```javascript
// Metadata management
export const metadata = {
  title: 'Rupee Travel',
  description: 'The ultimate checklist for Vietnam travel from India 🇻🇳',
};
```

## 📈 Performance Metrics

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **SEO Performance**: High search engine visibility
- **Database Performance**: Efficient queries with proper indexing
- **Image Optimization**: WebP format with responsive sizing

## 🛠️ Development Workflow

### Prerequisites
- Node.js >= 18.18.0
- npm or yarn package manager

### Setup
```bash
npm install
npm run dev
```

### Database Operations
```bash
npm run db:seed    # Seed database with sample data
npm run build      # Build with database seeding
```

### Deployment
- **Vercel**: Optimized for Next.js deployment
- **Environment Variables**: Secure configuration management
- **Database**: Turso serverless SQLite

## 🎯 Technical Highlights

1. **Modern React Patterns**: Hooks, Context, and Server Components
2. **Database Design**: Type-safe ORM with efficient query patterns
3. **Performance Optimization**: Static generation and image optimization
4. **SEO Excellence**: Structured data and meta tag management
5. **Scalable Architecture**: Modular component system
6. **Developer Experience**: TypeScript support and modern tooling

## 📚 Learning Outcomes

This project demonstrates:
- Advanced Next.js 15 features and App Router
- Modern database design with Drizzle ORM
- Performance optimization techniques
- SEO best practices implementation
- Scalable component architecture
- Production-ready deployment strategies

---

*Built with modern web technologies and best practices for optimal performance and user experience.*

