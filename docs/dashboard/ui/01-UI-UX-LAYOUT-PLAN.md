# 13. UI/UX Layout Plan - Simple Structure for Google AI Studio

**Document Version**: 1.0  
**Date**: November 2025  
**Purpose**: Simple layout structure for Google AI Studio to generate polished UI  
**Design Tool**: Google AI Studio (handles visual design, colors, spacing, animations)

---

## 🎯 Design Philosophy

**Keep it Simple**: This plan defines structure and flow only. Google AI Studio will handle:
- Visual design (colors, typography, spacing)
- Component styling and polish
- Animations and transitions
- Responsive breakpoints
- Accessibility enhancements

**Our Role**: Define the information architecture, component hierarchy, and user flows.

---

## 📐 Layout Structure

### Overall Application Layout

```
┌─────────────────────────────────────────────────────┐
│  Top Navigation Bar (Fixed)                        │
│  [Logo] [My Briefs] [New Brief] [User Menu]       │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Main Content Area (Scrollable)                     │
│  ┌─────────────────────────────────────────────┐  │
│  │  Page Content (varies by route)              │  │
│  │                                             │  │
│  │  - Dashboard List View                      │  │
│  │  - Brief Detail View                        │  │
│  │  - Wizard Steps                             │  │
│  └─────────────────────────────────────────────┘  │
│                                                     │
├─────────────────────────────────────────────────────┤
│  Footer (Optional - minimal)                        │
└─────────────────────────────────────────────────────┘
```

---

## 🏗️ Page Layouts

### 1. Dashboard List Page (`/dashboard`)

**Layout**:
```
┌─────────────────────────────────────────────────────┐
│  Header Section                                     │
│  "My AI Briefs"              [+ New Brief Button]   │
├─────────────────────────────────────────────────────┤
│  Filters Bar (Collapsible)                         │
│  [Search] [Status ▼] [Category ▼] [Date ▼]        │
├─────────────────────────────────────────────────────┤
│  Brief Cards Grid (Responsive)                      │
│  ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │Card 1│ │Card 2│ │Card 3│                       │
│  └──────┘ └──────┘ └──────┘                       │
│  ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │Card 4│ │Card 5│ │Card 6│                       │
│  └──────┘ └──────┘ └──────┘                       │
└─────────────────────────────────────────────────────┘
```

**Key Elements**:
- Header with title and primary action
- Collapsible filter bar (hidden on mobile, expandable)
- Responsive grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop)
- Empty state when no briefs exist

---

### 2. Brief Detail Page (`/dashboard/brief/:id`)

**Layout**:
```
┌─────────────────────────────────────────────────────┐
│  Navigation Bar                                     │
│  [← Back to Dashboard]  [Edit] [Export] [Share] [⋯]│
├─────────────────────────────────────────────────────┤
│  Brief Header Section                               │
│  Project Name (Large)                               │
│  Status Badge | Created Date | Last Updated        │
├─────────────────────────────────────────────────────┤
│  Summary Card (Collapsible)                         │
│  • Goal: [text]                                    │
│  • Audience: [text]                                │
│  • Category: [tags]                                 │
│  • Budget: $X - $Y                                  │
│  • Timeline: X-Y Months                            │
├─────────────────────────────────────────────────────┤
│  Company Intelligence Card (if available)          │
│  • Industry: [text]                                 │
│  • Competitors: [list]                              │
│  • Social Links: [icons]                            │
├─────────────────────────────────────────────────────┤
│  Generated Brief Content (Scrollable)               │
│  ┌─────────────────────────────────────────────┐  │
│  │ [Markdown rendered content]                 │  │
│  │                                             │  │
│  │ ## Project Overview                         │  │
│  │ ...                                         │  │
│  └─────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  Action Footer (Sticky Bottom)                     │
│  [Regenerate] [Export PDF] [Export MD] [Share]    │
└─────────────────────────────────────────────────────┘
```

**Key Elements**:
- Back navigation to `/dashboard`
- Edit button links to `/dashboard/brief/:id/edit`
- Collapsible summary sections
- Scrollable content area
- Sticky action buttons at bottom

---

### 3. Wizard Flow (`/` through steps)

**Layout**:
```
┌─────────────────────────────────────────────────────┐
│  Top Navigation (Step Indicators)                   │
│  [Welcome] [Contact] [Scope] [Category] [Budget]   │
│  [Management] [Review] [Finalize]                  │
├─────────────────────────────────────────────────────┤
│  Wizard Step Content (Centered)                    │
│  ┌─────────────────────────────────────────────┐  │
│  │                                             │  │
│  │      [Step Content Card]                    │  │
│  │      Form fields, inputs, etc.              │  │
│  │                                             │  │
│  │      [Back Button]      [Next Button]      │  │
│  └─────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

**Key Elements**:
- Horizontal step indicator at top
- Centered content card (max-width: 4xl)
- Back/Next navigation buttons
- Progress indication

---

## 🧩 Component Hierarchy

### Component Structure

```
App
├── TopNav (Global)
├── Router
│   ├── DashboardPage
│   │   ├── DashboardHeader
│   │   ├── FilterBar (collapsible)
│   │   ├── BriefGrid
│   │   │   └── BriefCard (repeat)
│   │   └── EmptyState (conditional)
│   │
│   ├── BriefDetailPage
│   │   ├── BriefDetailHeader
│   │   ├── BriefSummaryCard (collapsible)
│   │   ├── CompanyIntelligenceCard (conditional)
│   │   ├── BriefContentViewer
│   │   └── BriefActionFooter (sticky)
│   │
│   └── BriefWizard
│       ├── TopNav (step indicators)
│       └── Step Components
│           ├── WelcomeStep
│           ├── ContactStep
│           ├── ScopeStep
│           ├── CategoryStep
│           ├── BudgetStep
│           ├── ProjectManagementStep
│           ├── ReviewStep
│           └── FinalStep
└── Footer (optional)
```

---

## 📱 Responsive Breakpoints (Tailwind Defaults)

**Standard 3-tier system** (matches Tailwind CSS defaults):
- **Mobile**: < 640px (`sm` breakpoint)
  - Single column layout
  - Stacked components
  - Collapsible filters/drawers
  - Full-width buttons
  - Touch targets minimum 44x44px
- **Tablet**: 640px - 1024px (`sm` to `lg`)
  - 2-column grid for cards
  - Condensed but readable layout
  - Filters visible (may be simplified)
- **Desktop**: > 1024px (`lg` and above)
  - 3-column grid for cards
  - Full feature set visible
  - Optimal spacing and typography

**Best Practices**:
- **Mobile-first**: Design for mobile, enhance for larger screens
- **Touch targets**: Minimum 44x44px on mobile (Apple HIG)
- **Typography**: Base font size 16px minimum (prevents iOS zoom)
- **Spacing**: Use consistent spacing scale (4px base unit)
- **Images**: Optimize and lazy-load for mobile
- **Navigation**: Bottom nav or hamburger menu on mobile
- **Filters**: Collapse to drawer/modal on mobile
- **Forms**: Stack inputs vertically on mobile
- **Tables**: Horizontal scroll or card layout on mobile

---

## 🎨 Visual Design Notes (for Google AI Studio)

### Minimal Color Palette (Breef Aesthetic - see 7.jpg, 8.jpg)

**Core Colors** (strictly minimal):
- **Primary Background**: Light beige/off-white `#FBF8F5` (entire page background)
- **Accent Color**: Warm orange `#E87C4D` (progress bars, active states, primary buttons when active)
- **Content Card Background**: Pure white `#FFFFFF` (all cards, content areas)
- **Text Primary**: Dark gray/black `#0F172A` or `#1F2937` (headings, main text)
- **Text Secondary**: Medium gray `#6B7280` or `#64748B` (sub-text, metadata)
- **Inactive/Borders**: Light gray `#E5E7EB` or `#D1D5DB` (borders, unselected elements, disabled buttons)

**No Additional Colors**:
- ❌ Avoid: Green, blue, red, or other accent colors
- ❌ Avoid: Colored status badges (use text labels with gray instead)
- ❌ Avoid: Multiple background colors (only beige + white)
- ✅ Use: Orange ONLY for progress bars and active/selected states
- ✅ Use: Gray scale for all other states and elements

### Typography Hierarchy
- **Page Titles**: Large, bold (H1)
- **Section Headers**: Medium, semibold (H2)
- **Card Titles**: Medium, regular (H3)
- **Body Text**: Base size, regular
- **Metadata**: Small, muted

### Spacing System
- **Card Padding**: Consistent (p-6)
- **Card Gap**: Consistent (gap-4)
- **Section Margin**: Large (mb-8)
- **Content Max Width**: Constrained (max-w-4xl for forms, max-w-7xl for dashboards)

### Interactive Elements
- **Buttons**: Clear hierarchy (primary/secondary/ghost)
- **Cards**: Hover elevation, click feedback
- **Inputs**: Focus states, error states
- **Loading**: Skeleton screens or spinners
- **Empty States**: Friendly illustrations/icons

---

## 🔄 User Flows

### Flow 1: Create New Brief
```
/ → Wizard Welcome → Contact → Scope → Category → 
Budget → Management → Review → Generate → FinalStep → 
/dashboard/brief/:id (saved & navigated)
```

**Routes**:
- `/` - Wizard (root)
- `/dashboard` - Brief list
- `/dashboard/brief/:id` - Brief detail
- `/dashboard/brief/:id/edit` - Edit brief (future)

### Flow 2: View Existing Brief
```
/dashboard → Click Card → /dashboard/brief/:id
```

**Navigation Links**:
- Dashboard header: "+ New Brief" → `/` (wizard)
- Brief card click → `/dashboard/brief/:id`
- Detail page "Back" → `/dashboard`
- Detail page "Edit" → `/dashboard/brief/:id/edit` (future)

### Flow 3: Filter & Search
```
Dashboard List → Apply Filters → View Filtered Results → 
Clear Filters → Return to Full List
```

### Flow 4: Export Brief
```
Brief Detail View → Click Export → Select Format → 
Download File
```

---

## 🎯 Key UX Principles

1. **Progressive Disclosure**: Show summary cards that expand for details
2. **Clear Hierarchy**: Important actions always visible
3. **Feedback**: Loading states, success toasts, error messages
4. **Consistency**: Same patterns across all pages
5. **Accessibility**: Keyboard navigation, ARIA labels, focus management

---

## 📋 Design Handoff Checklist for Google AI Studio

**Pages & Routes**:
- [ ] Route `/` - Wizard (all 8 steps)
- [ ] Route `/dashboard` - Brief list page
- [ ] Route `/dashboard/brief/:id` - Brief detail page
- [ ] Navigation links between all pages correct

**Components**:
- [ ] Top navigation bar with logo and main actions
- [ ] Dashboard list page with card grid
- [ ] Brief detail page with collapsible sections
- [ ] Wizard flow with step indicators
- [ ] Filter bar (collapsible on mobile)
- [ ] Empty states for all lists
- [ ] Loading states for async operations
- [ ] Error states with clear messages

**Responsive Design**:
- [ ] Mobile (< 640px): Single column, stacked, collapsible filters
- [ ] Tablet (640-1024px): 2-column grid, condensed layout
- [ ] Desktop (> 1024px): 3-column grid, full layout
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Base font size 16px minimum (prevents iOS zoom)

**Design Consistency**:
- [ ] Consistent spacing and typography
- [ ] Interactive hover/click states
- [ ] Form validation visual feedback
- [ ] Toast notifications for actions
- [ ] Color consistency (orange primary, beige background)

**Accessibility**:
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] ARIA labels on interactive elements
- [ ] Focus indicators visible
- [ ] Color contrast WCAG AA compliant (4.5:1)
- [ ] Screen reader compatible

---

## 🚀 Implementation Notes

**For Developers**:
- Use Tailwind CSS for styling (Google AI Studio will generate classes)
- Follow component structure defined in `04-component-structure.md`
- Implement responsive breakpoints as defined above
- Use existing Button, Card, and shared components
- Reference `AGENTS.md` for agent-driven development

**For Google AI Studio**:
- Focus on visual polish and design consistency
- Ensure all components match the defined structure
- Generate accessible, semantic HTML
- Optimize for mobile-first responsive design
- Use existing color palette (orange primary, etc.)

---

**Next Document**: Implementation begins with Phase 0 setup (`00-SETUP-PHASE-ZERO.md`)

