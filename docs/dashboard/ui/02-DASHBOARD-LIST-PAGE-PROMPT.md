# 02. Dashboard List Page - Design Prompt for Google AI Studio

**Page**: My Briefs Dashboard  
**Route**: `/dashboard`  
**Purpose**: Central hub for viewing and managing all generated briefs

---

## 🎨 Design Prompt

Design a **beautiful, minimal, and calm dashboard page** that helps users view and manage their AI-generated project briefs. The page should feel clean, intelligent, and production-ready, matching a calm, professional aesthetic.

### Visual Style Reference (Breef Aesthetic - see 7.jpg, 8.jpg)
Match the **minimal, clean, calm** style with **strictly minimal color palette**:

**Color Palette**:
- **Page Background**: Light beige/off-white `#FBF8F5` (entire page)
- **Card Background**: Pure white `#FFFFFF` (all brief cards)
- **Accent Color**: Warm orange `#E87C4D` (ONLY for active/selected states, progress indicators)
- **Text Primary**: Dark gray/black `#0F172A` (project names, headings)
- **Text Secondary**: Medium gray `#6B7280` (dates, metadata, sub-text)
- **Borders/Inactive**: Light gray `#E5E7EB` (card borders, unselected elements)

**Design Elements**:
- **Generous white space** between sections
- **Clean sans-serif typography** with clear hierarchy
- **Subtle shadows** and rounded corners for cards (minimal, not heavy)
- **No colored status badges** - use text labels with gray tones instead
- **Single accent color** - orange ONLY, no green/blue/red

---

## 📐 Page Structure

### Top Section - Header
Create a clean header bar with:
- **Left side**: Large heading "My AI Briefs" in dark gray/black
- **Right side**: Orange primary button "+ New Brief" with rounded corners
  - **Link**: Navigates to `/` (wizard start)
  - **Accessibility**: `aria-label="Create new brief"`
- Keep it simple, minimal, and aligned horizontally

### Filters Bar (Below Header)
Design a collapsible filter section:
- **Search input**: Clean text field with subtle border
- **Filter dropdowns**: Status, Category, Date Range (if needed)
- **Clear filters button**: Secondary style
- On mobile: Make this collapsible/hidden by default
- Use light background, subtle borders, plenty of spacing

### Main Content - Brief Cards Grid
Create a responsive grid of brief cards:

**Desktop (>1024px)**: 3 columns  
**Tablet (640-1024px)**: 2 columns  
**Mobile (<640px)**: 1 column

**Each Card Should Include**:
- **Project name** (large, bold, dark text) - **Clickable** → Links to `/dashboard/brief/:id`
- **Status label** (text only, gray `#6B7280` - NO colored badges)
- **Created date** (small, muted gray text)
- **Category tags** (small pills/badges)
- **Budget and timeline** (small text)
- **Action menu** (three dots icon, dropdown):
  - View → `/dashboard/brief/:id`
  - Edit → `/dashboard/brief/:id/edit` (future)
  - Export → Download PDF/MD
  - Delete → Confirmation modal
- **Hover effect**: Subtle elevation/shadow
- **Accessibility**: `role="link"`, `aria-label="View brief: {projectName}"`

**Card Styling**:
- White background
- Rounded corners (12px)
- Subtle border (light gray)
- Generous padding (24px)
- Smooth hover transition
- Clean, minimal layout

### Empty State (When No Briefs)
Design a friendly empty state:
- **Centered layout**
- **Icon or illustration** (simple, line-art style)
- **Heading**: "No briefs yet"
- **Sub-text**: "Create your first AI brief to get started"
- **CTA button**: Orange "Create Your First Brief" button
- Lots of white space around it

---

## 🎯 Key Design Principles

1. **Minimal & Clean**: Remove all unnecessary elements. Focus on clarity.
2. **Calm Aesthetic**: Use soft colors, gentle shadows, ample spacing.
3. **Clear Hierarchy**: Project names stand out, metadata is subtle.
4. **Intuitive Actions**: Primary actions (New Brief) are obvious and accessible.
5. **Responsive**: Adapts beautifully to mobile, tablet, and desktop.

---

## 🎨 Minimal Color Palette (Breef Style)

**Strictly Minimal - No Extra Colors**:

- **Page Background**: Light beige `#FBF8F5` (entire page)
- **Card Background**: Pure white `#FFFFFF` (all brief cards)
- **Accent Color**: Warm orange `#E87C4D` (ONLY for active/selected states, "+ New Brief" button when active)
- **Text Primary**: Dark gray/black `#0F172A` (project names, main headings)
- **Text Secondary**: Medium gray `#6B7280` (dates, metadata, descriptions)
- **Borders**: Light gray `#E5E7EB` (card borders, input borders)
- **Inactive Elements**: Light gray `#D1D5DB` (disabled buttons, unselected items)

**Status Indicators** (use text, not colored badges):
- **Draft**: Gray text label `#6B7280` (no colored badge)
- **Generated**: Gray text label `#6B7280` (no green badge)
- **Edited**: Gray text label `#6B7280` (no blue badge)

**Key Rule**: Orange is the ONLY accent color. Avoid green, blue, red, or any other colors.

---

## 📱 Responsive Behavior (Tailwind Breakpoints)

**Mobile (< 640px)**:
- Filters collapse to drawer/modal (hidden by default)
- Cards stack vertically (1 column)
- Header button full-width or icon-only
- Touch targets minimum 44x44px
- Base font size 16px (prevents iOS zoom)

**Tablet (640px - 1024px)**:
- 2-column card grid
- Filters visible but simplified
- Buttons maintain normal width
- Spacing optimized for medium screens

**Desktop (> 1024px)**:
- 3-column card grid
- All filters visible
- Optimal spacing and typography
- Hover states enabled

---

## ✨ User Experience Goals

- Users should immediately understand: "This is where my briefs are"
- Creating a new brief should be one clear click away
- Filtering should feel smooth and non-intrusive
- Cards should invite clicking to view details
- The page should feel calm and organized, not overwhelming

---

## 📋 Components to Design

1. Dashboard Header (title + new brief button)
2. Filter Bar (search + dropdowns)
3. Brief Card Component (repeatable)
4. Empty State Component
5. Loading State (skeleton cards)
6. Grid Container (responsive)

---

**Deliverable**: Complete, pixel-perfect design that feels minimal, clean, and calm - ready for implementation.

---

## ✅ Success Criteria & Verification Checklist

### Routes & Navigation
- [ ] Route `/dashboard` correctly configured in React Router
- [ ] "+ New Brief" button links to `/` (wizard)
- [ ] Brief cards link to `/dashboard/brief/:id` on click
- [ ] Action menu items link correctly (View, Edit, Export, Delete)
- [ ] All links use React Router `Link` component (not `<a href>`)
- [ ] Navigation works with browser back/forward buttons

### Responsive Design
- [ ] **Mobile (< 640px)**: Single column, filters collapse, full-width buttons
- [ ] **Tablet (640-1024px)**: 2-column grid, filters visible
- [ ] **Desktop (> 1024px)**: 3-column grid, full features
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Base font size 16px minimum (prevents iOS zoom)
- [ ] Cards stack properly on all screen sizes
- [ ] Filters drawer/modal works on mobile

### Functionality
- [ ] Empty state displays when no briefs exist
- [ ] Loading states show skeleton cards
- [ ] Filter bar collapses/expands correctly
- [ ] Search input works correctly
- [ ] Filter dropdowns function properly
- [ ] Clear filters button resets state

### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] ARIA labels on all interactive elements
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Screen reader compatible
- [ ] Skip to content link (optional but recommended)

### Visual Design
- [ ] Minimal, clean, calm aesthetic achieved
- [ ] Orange accent (#E87C4D) used for primary actions
- [ ] Light beige background (#FBF8F5) applied
- [ ] Generous white space throughout
- [ ] Hover effects work smoothly
- [ ] Typography hierarchy clear

