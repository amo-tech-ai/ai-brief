# Phase 1: MVP Foundation - Google AI Studio Design Prompt

**Phase**: Phase 1 - MVP Foundation  
**Goal**: Create minimal viable dashboard with sidebar navigation  
**Routes**: `/`, `/dashboard`, `/dashboard/brief/:id`  
**Timeline**: Week 1-2

---

## 🎯 **Design Task**

Design a **minimal, clean dashboard** with **fixed sidebar navigation** that allows users to:
1. View all their AI-generated briefs in a card grid
2. Search briefs by project name
3. Click a brief card to view details
4. Navigate back to the list
5. Create new briefs via sidebar link

**The design should be production-ready, responsive, and match our minimal aesthetic.**

---

## 🧱 **Page Layout Structure**

### Overall Layout (2-Column System)

```
┌─────────────┬─────────────────────────────┐
│             │                             │
│  SIDEBAR    │    MAIN CONTENT AREA        │
│  (Fixed)    │    (Scrollable)              │
│  280px      │                             │
│             │  - Header                   │
│  - Logo     │  - Search Bar               │
│  - Nav      │  - Brief Cards Grid         │
│  - Sign Out │  - Empty State (if none)   │
│             │                             │
└─────────────┴─────────────────────────────┘
```

### Sidebar Navigation (Left, Fixed)

**Design Requirements:**
- **Fixed position** - Stays visible while scrolling
- **Width**: 280px (desktop), hidden (mobile)
- **Logo Section**: "AMO AI" branding at top
  - Logo text: "AMO AI" (purple/orange accent)
  - Simple, minimal logo mark (optional)
- **Active State**: Current page highlighted with orange accent (`#E87C4D`)
  - Orange left border (4px) OR orange background tint
- **Menu Items** (minimal - only 3 items):
  - 📊 **Dashboard** → `/dashboard` (Active - orange highlight)
  - ➕ **New Brief** → `/` (links to wizard)
  - 🚪 **Sign Out** → `/logout` (bottom, grayed out for MVP)
- **Hover States**: Light gray background (`#F3F4F6`)
- **Typography**: 14-16px, clean sans-serif

**Visual Style:**
- Background: White `#FFFFFF` or light beige `#FBF8F5`
- Border-right: Light gray `#E5E7EB` (subtle)
- Icon + text layout (left-aligned)
- Spacing: 24px vertical padding, 20px horizontal padding

### Main Content Area (Center, Scrollable)

#### Top Header
- **Left**: "My AI Briefs" (h1, 32px, bold, dark gray `#0F172A`)
- **Right**: (Empty for MVP - no user menu yet)
- **Spacing**: 32px margin-bottom

#### Search Bar Section
- **Full-width search input**
- **Placeholder**: "Search briefs by project name..."
- **Icon**: Magnifying glass (left side, gray)
- **Clear button**: X icon (right side, appears when text entered)
- **Styling**: 
  - White background
  - Light gray border (`#E5E7EB`)
  - Orange border on focus (`#E87C4D`)
  - Rounded corners (8px)
  - Padding: 12px vertical, 16px horizontal

#### Brief Cards Grid Section
- **Responsive Grid**:
  - Mobile (< 640px): 1 column, full width
  - Tablet (640-1024px): 2 columns, gap-4
  - Desktop (> 1024px): 3 columns, gap-4
- **Card Design**:
  - White background (`#FFFFFF`)
  - Rounded corners (12px)
  - Subtle shadow: `0 1px 3px rgba(0,0,0,0.05)`
  - Hover shadow: `0 4px 6px rgba(0,0,0,0.1)`
  - Padding: 24px
  - **Card Content**:
    - **Project Name** (h3, 20px, bold, dark gray `#0F172A`)
      - Clickable (entire card is clickable)
      - Truncate if too long (max 2 lines)
    - **Created Date** (14px, gray `#6B7280`)
      - Format: "2 days ago" or "Nov 2, 2025"
      - Small text below project name
    - **Brief Preview** (optional, 14px, gray `#9CA3AF`)
      - 2 lines max, truncated with ellipsis
    - **"View Brief" button** (secondary style, gray border)
      - On hover: Orange background (`#E87C4D`)
      - Text: "View Brief"
      - Small, bottom-right of card

#### Empty State (When No Briefs)
- **Centered layout** (vertical and horizontal)
- **Large icon**: Document/sparkle icon (minimal line art, 64px, gray)
- **Heading**: "No briefs yet" (24px, bold, dark gray)
- **Subtext**: "Create your first AI brief to get started" (16px, gray)
- **CTA Button**: "Create Your First Brief" (orange primary button `#E87C4D`)
  - Links to `/` (wizard)
  - Rounded corners (8px)
  - Padding: 12px 24px
- **Generous white space**: 64px margin on all sides

#### Loading State
- **Skeleton cards** matching card grid layout
- **3-6 skeleton cards** shown
- **Shimmer animation**: Subtle left-to-right shimmer
- **Gray rectangles**: Light gray background with shimmer effect

---

## 🎨 **Visual Design System**

### Color Palette (Minimal)

- **Page Background**: Light beige `#FBF8F5` (entire page)
- **Sidebar Background**: White `#FFFFFF`
- **Card Background**: White `#FFFFFF`
- **Accent Color**: Orange `#E87C4D` (active states, primary buttons, hover)
- **Text Primary**: Dark gray `#0F172A` (headings, main text)
- **Text Secondary**: Medium gray `#6B7280` (body, metadata)
- **Borders**: Light gray `#E5E7EB` (dividers, card borders)
- **Hover States**: Very light gray `#F3F4F6`

**Color Rules:**
- ✅ Orange ONLY for active sidebar items and primary buttons
- ✅ Gray scale for all other elements
- ❌ NO green, blue, red, or other colors
- ❌ NO colored status badges

### Typography

- **Page Title**: 32px, bold, dark gray (`#0F172A`)
- **Card Titles**: 20px, semibold, dark gray
- **Body Text**: 16px, regular, medium gray (`#6B7280`)
- **Metadata**: 14px, regular, light gray (`#9CA3AF`)
- **Sidebar Nav**: 14-16px, medium weight

### Spacing

- **Sidebar Width**: 280px (desktop)
- **Card Padding**: 24px (p-6)
- **Card Gap**: 16px (gap-4)
- **Section Margin**: 32px (mb-8)
- **Sidebar Padding**: 24px vertical, 20px horizontal

### Shadows & Effects

- **Card Shadow**: `0 1px 3px rgba(0,0,0,0.05)`
- **Card Hover**: `0 4px 6px rgba(0,0,0,0.1)`
- **Border Radius**: 12px (cards), 8px (buttons, inputs)

---

## 📱 **Responsive Design**

### Mobile (< 640px)
- **Sidebar**: Hidden by default
- **Hamburger Menu**: Top-left (3-line icon)
- **Sidebar Opens**: As drawer/modal overlay
- **Main Content**: Full width
- **Cards**: Single column, stacked
- **Search**: Full width, prominent
- **Header**: Simplified (just title)

### Tablet (640px - 1024px)
- **Sidebar**: Collapsible (can toggle)
- **Main Content**: 2-column card grid
- **Search**: Full width
- **Header**: Full title visible

### Desktop (> 1024px)
- **Sidebar**: Always visible, fixed position
- **Main Content**: 3-column card grid
- **Search**: Full width
- **Header**: Full title visible

---

## ✨ **Interactive Elements**

### Sidebar Navigation
- **Active State**: Orange left border (4px) + orange text
- **Hover State**: Light gray background (`#F3F4F6`)
- **Click**: Smooth transition, instant navigation
- **Icons**: Minimal line icons (20px, gray, orange when active)

### Brief Cards
- **Hover**: Elevates slightly, shadow increases
- **Click**: Entire card is clickable, navigates to `/dashboard/brief/:id`
- **Button Hover**: "View Brief" button turns orange on hover

### Search Input
- **Focus**: Orange border (`#E87C4D`)
- **Active**: Clear button (X) appears on right
- **Results**: Cards filter in real-time (smooth transition)

---

## 📊 **Brief Detail Page** (`/dashboard/brief/:id`)

### Layout Structure

```
┌─────────────────────────────────────────────────────┐
│  ← Back to Dashboard                                │
├─────────────────────────────────────────────────────┤
│  Project Name (Large Heading)                       │
│  Created: Nov 2, 2025                               │
├─────────────────────────────────────────────────────┤
│  Summary (Collapsible - Collapsed by Default)      │
│  • Goal: [text]                                     │
│  • Audience: [text]                                 │
│  • Budget: $5K - $10K                               │
│  • Timeline: 1-2 Months                             │
├─────────────────────────────────────────────────────┤
│  Generated Brief Content                            │
│  ┌─────────────────────────────────────────────┐  │
│  │ [Markdown rendered content]                  │  │
│  │                                               │  │
│  │ ## Project Overview                          │  │
│  │ ...                                          │  │
│  └─────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  [Export PDF]                                       │
└─────────────────────────────────────────────────────┘
```

### Components Needed
- **Back Link**: "← Back to Dashboard" (gray, 16px)
- **Project Name**: Large heading (32px, bold)
- **Created Date**: Small gray text (14px)
- **Summary Card**: Collapsible section (collapsed by default)
- **Content Viewer**: Markdown renderer (prose styling)
- **Export Button**: "Export PDF" (orange primary button)

---

## ✅ **Design Deliverables**

### What Google AI Studio Should Generate

1. **Complete Dashboard Layout**
   - Fixed sidebar (280px, desktop)
   - Main content area (scrollable)
   - Header with title
   - Search bar
   - Brief cards grid (responsive)
   - Empty state
   - Loading skeletons

2. **Brief Detail Page Layout**
   - Back navigation
   - Project header
   - Collapsible summary
   - Content viewer
   - Export button

3. **Responsive Breakpoints**
   - Mobile: Hamburger menu, 1-column grid
   - Tablet: Collapsible sidebar, 2-column grid
   - Desktop: Fixed sidebar, 3-column grid

4. **Interactive States**
   - Sidebar active/hover states
   - Card hover effects
   - Search focus state
   - Button hover states
   - Loading animations

5. **Component Breakdown**
   - Sidebar component structure
   - BriefCard component structure
   - BriefGrid component structure
   - EmptyState component structure
   - LoadingState component structure

---

## 🎯 **Design Success Criteria**

### Visual Design
- [ ] Minimal, clean, calm aesthetic achieved
- [ ] Orange accent (`#E87C4D`) used only for active states and primary buttons
- [ ] Light beige background (`#FBF8F5`) applied consistently
- [ ] Generous white space throughout
- [ ] Clear typography hierarchy
- [ ] No unnecessary colors or decorations

### Functionality
- [ ] Sidebar navigation clearly visible and functional
- [ ] Search bar prominent and accessible
- [ ] Card grid responsive (1/2/3 columns)
- [ ] Empty state friendly and actionable
- [ ] Loading states smooth and elegant
- [ ] Brief detail page complete

### Responsive Design
- [ ] Mobile: Sidebar hidden, hamburger menu works
- [ ] Tablet: Sidebar collapsible, 2-column grid
- [ ] Desktop: Full sidebar, 3-column grid
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Text readable without zooming (min 16px)

### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] ARIA labels on all interactive elements
- [ ] Focus indicators visible (orange outline)
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Screen reader compatible

---

## 📋 **Routes to Verify**

- [ ] `/` - Wizard starts correctly
- [ ] `/dashboard` - Brief list loads
- [ ] `/dashboard/brief/:id` - Brief detail loads
- [ ] Navigation between routes works
- [ ] Back button works correctly
- [ ] Sidebar links work
- [ ] Footer links work (legal only)

---

## 🎨 **Content & Copywriting**

### Headings
- **Page Title**: "My AI Briefs"
- **Empty State**: "No briefs yet"
- **Search Placeholder**: "Search briefs by project name..."

### CTAs
- **Primary**: "+ New Brief" (sidebar)
- **Secondary**: "Create Your First Brief" (empty state)
- **Tertiary**: "View Brief" (card button)
- **Action**: "Export PDF" (detail page)

### Labels
- **Sidebar**: "Dashboard", "New Brief", "Sign Out"
- **Cards**: Project name, created date
- **Detail**: "Back to Dashboard", "Summary", "Export PDF"

---

## 🔄 **User Flows to Visualize**

### Flow 1: First-Time User
```
1. User lands on dashboard (empty state)
2. Sees "Create Your First Brief" CTA
3. Clicks → Goes to wizard (/)
4. Completes wizard → Returns to dashboard
5. Sees their first brief card
```

### Flow 2: User Searches Briefs
```
1. User opens dashboard (sees all briefs)
2. Types in search bar
3. Cards filter in real-time
4. Clicks filtered card
5. Views brief detail
```

### Flow 3: User Views Brief Detail
```
1. User clicks brief card
2. Navigates to detail page
3. Views full brief content
4. Clicks "Back to Dashboard"
5. Returns to list
```

---

## 📝 **Implementation Notes**

### Component Structure
```
Sidebar
  ├─ Logo
  ├─ Dashboard (active)
  ├─ New Brief
  └─ Sign Out

Main Content
  ├─ Header
  ├─ SearchBar
  ├─ BriefGrid
  │   └─ BriefCard (repeat)
  ├─ EmptyState (conditional)
  └─ LoadingState (conditional)
```

### Route Structure
```
/ → Wizard (existing)
/dashboard → Brief List (new)
/dashboard/brief/:id → Brief Detail (new)
```

---

**Deliverable**: Complete, pixel-perfect Phase 1 dashboard design ready for implementation.
