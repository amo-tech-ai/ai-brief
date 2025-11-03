# 03. Brief Detail Page - Design Prompt for Google AI Studio

**Page**: Brief Detail View  
**Route**: `/dashboard/brief/:id`  
**Purpose**: View full brief content with actions

---

## 🎨 Design Prompt

Design a **beautiful, minimal, and calm detail page** that displays a complete AI-generated project brief. The page should feel like reading a well-designed document - clean, focused, and easy to scan. Match the calm, professional aesthetic.

### Visual Style Reference (Breef Aesthetic - see 7.jpg, 8.jpg)
Match the **minimal, clean, calm** style with **strictly minimal color palette**:

**Color Palette**:
- **Page Background**: Light beige/off-white `#FBF8F5` (entire page)
- **Content Card Background**: Pure white `#FFFFFF` (main content area, summary cards)
- **Accent Color**: Warm orange `#E87C4D` (ONLY for active/selected states, progress if shown)
- **Text Primary**: Dark gray/black `#0F172A` (project name, headings)
- **Text Secondary**: Medium gray `#6B7280` (body text, metadata)
- **Borders**: Light gray `#E5E7EB` (card borders, section dividers)

**Design Elements**:
- **Generous white space** between sections
- **Clean typography** optimized for reading
- **Collapsible sections** for progressive disclosure
- **No colored backgrounds** - only beige page + white cards
- **Single accent color** - orange ONLY

---

## 📐 Page Structure

### Top Navigation Bar
Create a clean navigation bar:
- **Left**: Back arrow + "Back to Dashboard" link (subtle, gray)
  - **Link**: Navigates to `/dashboard`
  - **Accessibility**: `aria-label="Back to dashboard"`
- **Right**: Action buttons - Edit, Export, Share, More menu (three dots)
  - **Edit**: Links to `/dashboard/brief/:id/edit` (future)
  - **Export**: Triggers PDF/MD download
  - **Share**: Opens share modal/dialog
  - **More menu**: Additional actions dropdown
- Keep buttons minimal, secondary style (not primary orange unless critical)
- Horizontal layout, subtle background

### Brief Header Section
Design a prominent header:
- **Project name**: Large, bold heading (H1 size, dark gray `#0F172A`)
- **Status label**: Text label in gray `#6B7280` (NO colored badge - keep minimal)
- **Metadata row**: Created date, Last updated (small, muted gray `#6B7280`)
- **Spacing**: Generous padding below
- Keep it clean and uncluttered

### Summary Card (Collapsible)
Create a collapsible information card:
- **Default**: Collapsed (shows "Summary" + expand icon)
- **Expanded**: Shows key-value pairs:
  - Goal: [text]
  - Audience: [text]
  - Category: [tags]
  - Budget: $X - $Y
  - Timeline: X-Y Months
- **Styling**: White background, rounded corners, subtle border
- **Icon**: Chevron down/up for expand/collapse

### Company Intelligence Card (If Available)
Design an informational card (only shows if data exists):
- **White background** `#FFFFFF` (same as other cards - NO colored background)
- **Content**: Industry, Competitors list, Social links (icons)
- **Layout**: Clean list format with icons
- **Styling**: Subtle border `#E5E7EB`, same white background as other cards
- **Key**: Keep it minimal - no blue/teal background, use same white card style

### Generated Brief Content Area
Design the main content reading area:
- **White background card** with generous padding
- **Markdown content**: Well-formatted headings, lists, paragraphs
- **Typography**: 
  - Headings: Bold, clear hierarchy (H2, H3)
  - Body: Comfortable line height, readable font size
  - Code blocks: Light gray background, monospace
- **Scrollable**: Content can scroll independently
- **Print-friendly**: Styles should work when printing

### Action Footer (Sticky Bottom)
Design a sticky action bar at bottom:
- **Buttons**: Regenerate, Export PDF, Export Markdown, Share
- **Layout**: Horizontal, evenly spaced
- **Styling**: Light background, subtle top border, fixed position
- **On mobile**: Stack vertically or use icon buttons

---

## 🎯 Key Design Principles

1. **Reading-First**: The brief content is the hero. Everything else supports it.
2. **Progressive Disclosure**: Collapsible sections reduce initial overwhelm.
3. **Clear Actions**: Important actions are visible but don't distract.
4. **Calm Scrolling**: Long content should feel smooth and easy to navigate.
5. **Minimal Clutter**: Remove distractions, focus on content.

---

## 🎨 Minimal Color Palette (Breef Style)

**Strictly Minimal - No Extra Colors**:

- **Page Background**: Light beige `#FBF8F5` (entire page)
- **Content Card**: Pure white `#FFFFFF` (main content area)
- **Summary Card**: Pure white `#FFFFFF` with subtle border `#E5E7EB`
- **Company Intelligence Card**: Pure white `#FFFFFF` (NO blue/teal - same as other cards)
- **Accent Color**: Warm orange `#E87C4D` (ONLY for active states, use sparingly)
- **Text Primary**: Dark gray `#0F172A` (headings, project name)
- **Text Secondary**: Medium gray `#6B7280` (body text, metadata)
- **Borders**: Light gray `#E5E7EB` (all borders, dividers)

**Key Rule**: Orange is the ONLY accent color. Avoid green, blue, red, teal, or any other colors. All cards use white background.

---

## 📱 Responsive Behavior (Tailwind Breakpoints)

**Mobile (< 640px)**:
- Actions stack vertically or use icon buttons
- Content full-width with padding
- Collapsible sections default to collapsed
- Sticky footer becomes bottom sheet or floating button
- Touch targets minimum 44x44px
- Base font size 16px (prevents iOS zoom)

**Tablet (640px - 1024px)**:
- Actions horizontal but condensed
- Content max-width (easy reading) with side margins
- More spacing between sections
- Collapsible sections can be expanded

**Desktop (> 1024px)**:
- Content max-width optimized for reading (max-w-4xl)
- Actions horizontal with full labels
- Optimal spacing and typography
- Collapsible sections can default to expanded

---

## ✨ User Experience Goals

- Users should feel like they're reading a professional document
- Scrolling should be smooth and comfortable
- Actions should be accessible but not intrusive
- Important information (project name, status) should be immediately visible
- Long content should not feel overwhelming

---

## 📋 Components to Design

1. Navigation Bar (back + actions)
2. Brief Header (title + metadata)
3. Summary Card (collapsible)
4. Company Intelligence Card (conditional)
5. Content Viewer (markdown rendered)
6. Action Footer (sticky)
7. Loading State (skeleton)
8. Error State (if brief not found)

---

## 📝 Content Example Structure

```
Project Name: "AI Web App Builder"
Status: Generated (green badge)
Created: Nov 2, 2025

[Summary Card - Collapsed]
  Goal: Build a no-code AI web application platform
  Audience: Small business owners
  ...

[Company Intelligence - Expanded]
  Industry: FinTech
  Competitors: PayPal, Square
  ...

[Generated Brief Content]
  ## Project Overview
  This project aims to...
  
  ## Key Objectives
  1. ...
  2. ...
  ...
```

---

**Deliverable**: Complete, pixel-perfect design that feels like a calm, professional document viewer - ready for implementation.

---

## ✅ Success Criteria & Verification Checklist

### Routes & Navigation
- [ ] Route `/dashboard/brief/:id` correctly configured in React Router
- [ ] Back navigation returns to `/dashboard`
- [ ] Edit button links to `/dashboard/brief/:id/edit` (future)
- [ ] All links use React Router `Link` component (not `<a href>`)
- [ ] Navigation works with browser back/forward buttons
- [ ] URL parameter `:id` correctly extracted and used

### Responsive Design
- [ ] **Mobile (< 640px)**: Actions stack, content full-width, sections collapsed
- [ ] **Tablet (640-1024px)**: Actions horizontal, content max-width
- [ ] **Desktop (> 1024px)**: Optimal reading width, full spacing
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Base font size 16px minimum (prevents iOS zoom)
- [ ] Sticky footer adapts to screen size (mobile: bottom sheet)

### Functionality
- [ ] Collapsible sections expand/collapse smoothly
- [ ] Content scrolls properly on long briefs
- [ ] Sticky footer works correctly (doesn't overlap content)
- [ ] Markdown renders correctly with proper styling
- [ ] Export buttons trigger correct actions (PDF/MD download)
- [ ] Loading state shows when fetching brief
- [ ] Error state shows if brief not found (404)
- [ ] Company Intelligence card only shows if data exists

### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] ARIA labels on all interactive elements
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Screen reader compatible
- [ ] Skip to content link (optional but recommended)

### Visual Design
- [ ] Minimal, clean, calm aesthetic achieved
- [ ] Reading-optimized typography (comfortable line height)
- [ ] Clear visual hierarchy (project name prominent)
- [ ] Collapsible sections have clear expand/collapse indicators
- [ ] Company Intelligence card visually distinct (light blue/teal)

