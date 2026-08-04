# Repository Guidelines for AI Coding Agents

This repository is **Rupee Travel** (`rupeetravel`), a Next.js web application providing travel guides, zero-forex financial tools, currency converters, and travel checklists for Indian travelers.

## Tech Stack & Architecture

- **Framework**: Next.js App Router (`src/app/`)
- **Package Manager**: Bun (`bun install`, `bun run dev`, `bun run build`, `bun run lint`)
- **Styling**: Tailwind CSS with CSS custom variables in `src/styles/globals.css`
- **Component System**: Modular UI components in `src/components/ui/` with `class-variance-authority` (`cva`)
- **Icons**: `lucide-react`
- **Data Layer**: Static content in `src/data/` and Markdown blog posts in `_posts/`

---

## Key Development Rules & Patterns

### 1. Component Styling & Design System
- Use standard `Button` variants (`variant="default" | "outline" | "secondary" | "ghost"`, `size="default" | "sm" | "lg"`) defined in `src/components/ui/button.tsx`.
- Avoid hardcoded inline element hex colors. Use Tailwind theme tokens (`bg-muted`, `border-border`, `text-foreground`, `text-muted-foreground`, etc.).
- Ensure all interactive elements have responsive layouts (`grid-cols-1 md:grid-cols-2/3`), mobile touch targets (`inputMode="decimal"` for numeric inputs), and text-wrap protection (`max-w-full`).

### 2. Header & Mobile Navigation
- The header ([header.tsx](file:///Users/harshvardhan/Documents/GitHub/rupeetravel/src/components/ui/header.tsx)) uses `relative md:sticky md:top-0` to scroll away naturally on mobile viewports while staying sticky with glassmorphism blur on desktop screens.

### 3. Data Separation
- Keep page component files (`page.js` / `page.tsx`) focused on UI layout and routing.
- Place large static content arrays and list data inside `src/data/` modules instead of embedding them directly in page components.

---

## Verification Commands

Always run verification commands before declaring completion:
```bash
# Check ESLint rules
bun run lint

# Verify production compilation
bun run build
```
