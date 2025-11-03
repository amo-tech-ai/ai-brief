# UI Design Prompts - Index

**Purpose**: Natural language design prompts for Google AI Studio  
**Style**: Minimal, clean, calm (inspired by Breef website aesthetic)

---

## 📋 Prompt Files

### [01. UI/UX Layout Plan](./01-UI-UX-LAYOUT-PLAN.md)
**Purpose**: Overall structure and component hierarchy  
**Contents**: Layout structure, responsive breakpoints, component relationships

### [02. Dashboard List Page Prompt](./02-DASHBOARD-LIST-PAGE-PROMPT.md) ⭐
**Page**: My Briefs Dashboard (`/dashboard`)  
**Use**: Copy this prompt to Google AI Studio to design the list page

### [03. Brief Detail Page Prompt](./03-BRIEF-DETAIL-PAGE-PROMPT.md) ⭐
**Page**: Brief Detail View (`/dashboard/brief/:id`)  
**Use**: Copy this prompt to Google AI Studio to design the detail page

### [04. Wizard Flow Prompt](./04-WIZARD-FLOW-PROMPT.md) ⚠️ **Visual Enhancement Only**
**Page**: AI Brief Generator Wizard (`/`)  
**Status**: ✅ Wizard already exists and works  
**Use**: Copy this prompt to Google AI Studio for **visual styling enhancements only**  
**Note**: Do NOT redesign - wizard is functional. Focus on colors, spacing, and visual polish.

---

## 🎨 Design Style Reference (Breef Aesthetic - see 7.jpg, 8.jpg)

All prompts reference the **Breef minimal color palette**:
- **Minimal, clean, calm** visual style
- **Strictly minimal color palette**:
  - **Page Background**: Light beige `#FBF8F5` (entire page)
  - **Card Background**: Pure white `#FFFFFF` (all cards)
  - **Accent Color**: Warm orange `#E87C4D` (ONLY for active/selected states)
  - **Text Primary**: Dark gray `#0F172A` (headings)
  - **Text Secondary**: Medium gray `#6B7280` (body, metadata)
  - **Borders/Inactive**: Light gray `#E5E7EB` (borders, unselected)
- **No additional colors** - avoid green, blue, red, or colored badges
- **Generous white space**
- **Clean sans-serif typography**
- **Subtle shadows and rounded corners**

---

## 📝 How to Use

1. **Choose the page** you want to design
2. **Open the prompt file** (02, 03, or 04)
3. **Copy the entire prompt** to Google AI Studio
4. **Let AI Studio generate** the visual design
5. **Review and iterate** as needed

---

## ✅ Design Checklist

After Google AI Studio generates each page, verify:

**Visual Design**:
- [ ] Minimal, clean, calm aesthetic achieved
- [ ] Orange accent color (#E87C4D) used for primary actions
- [ ] Light beige background (#FBF8F5) applied
- [ ] Generous white space throughout
- [ ] Clear typography hierarchy

**Responsive Design** (Tailwind defaults):
- [ ] Mobile (< 640px): Single column, stacked layout, collapsible filters
- [ ] Tablet (640px - 1024px): 2-column grid, condensed layout
- [ ] Desktop (> 1024px): 3-column grid, full layout
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Text readable without zooming (min 16px base)

**Navigation & Routes**:
- [ ] Route `/dashboard` correctly configured
- [ ] Route `/dashboard/brief/:id` correctly configured
- [ ] Route `/` (wizard) accessible from dashboard
- [ ] Back navigation works correctly
- [ ] All internal links use React Router `Link` component
- [ ] No hardcoded anchor tags (`<a href="/...">`)

**Accessibility**:
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] ARIA labels on interactive elements
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Screen reader compatible

**Functionality**:
- [ ] Components match structure from Layout Plan
- [ ] Loading states implemented
- [ ] Error states implemented
- [ ] Empty states implemented
- [ ] Form validation visual feedback

---

**Last Updated**: November 2025

