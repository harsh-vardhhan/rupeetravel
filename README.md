# Rupee Travel: Technical Specification

## 1. System Overview

A web application providing a travel checklist, guides, and blog content for Indian travelers to Vietnam. The system is optimized for SEO and performance, and supports dynamic and static content.

## 2. Architecture

- **Frontend:** Next.js 15 (App Router), React 18, Tailwind CSS
- **Backend/Data Layer:** Serverless SQLite (Turso/LibSQL) accessed via Drizzle ORM
- **Content:** Markdown files for blog posts, dynamic data for flights and checklists
- **Deployment:** Vercel (optimized for static and dynamic rendering)

## 3. Main Modules & Responsibilities

- **App Router (src/app/):**
  - Route-based code splitting and static generation
  - Dynamic routes for guides, checklists, and blog posts
- **Components (src/components/, src/component/):**
  - UI library (buttons, cards, tables, etc.)
  - Feature-specific components (e.g., Currency Converter, Flight Search)
- **Database (src/db/):**
  - Schema defined with Drizzle ORM (SQLite)
  - Stores flight data and other structured content
- **Data Access (src/lib/):**
  - Centralized data fetching and business logic (e.g., flight search, markdown parsing)
- **Content (/\_posts):**
  - Markdown files for blog content, parsed at build time

## 4. Data Flow

- **Static Content:**
  - Blog posts and guides are written in Markdown, parsed at build time using gray-matter and remark.
  - Static pages are generated for SEO and performance.
- **Dynamic Content:**
  - Flight data and checklists are fetched from the SQLite database using Drizzle ORM.
  - API-like data access is handled via server components and utility functions.

## 5. Key Technical Features

- **Static Site Generation (SSG):**
  - Most pages are statically generated for fast load times and SEO.
- **Server Components:**
  - Used for data fetching and rendering on the server where possible.
- **ORM & Database:**
  - Drizzle ORM provides type-safe access to a serverless SQLite database (Turso/LibSQL).
- **SEO Optimization:**
  - Structured data, meta tags, and sitemap generation for high search visibility.
- **Image Optimization:**
  - Next.js Image component with WebP support for performance.
- **Responsive UI:**
  - Tailwind CSS for mobile-first, accessible design.

## 6. Constraints & Patterns

- **Type Safety:**
  - TypeScript used throughout for type safety (where applicable).
- **Centralized Data Logic:**
  - All data access and business logic is centralized in `src/lib/`.
- **Modular Component Design:**
  - UI and feature components are reusable and composable.
- **Environment Management:**
  - Sensitive config via environment variables (dotenv).

## 7. Deployment & Operations

- **Build:**
  - `npm run build` seeds the database and builds the static site.
- **Deployment:**
  - Deployed on Vercel for optimal static/dynamic rendering.
- **Database:**
  - Turso serverless SQLite, managed migrations with Drizzle Kit.

---

_This document provides a high-level technical overview for developers and technical reviewers._
