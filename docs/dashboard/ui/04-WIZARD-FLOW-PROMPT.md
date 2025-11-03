# 04. Wizard Flow - Visual Enhancement Prompt for Google AI Studio

**Page**: AI Brief Generator Wizard  
**Route**: `/` (root, multiple steps)  
**Status**: ✅ **Wizard Already Exists** - This prompt is for visual polish only  
**Purpose**: Enhance existing wizard to match minimal, clean, calm aesthetic

---

## ⚠️ Important Note

**The wizard is already built and functional.** This prompt is only for **visual enhancement** to match the Breef aesthetic. Do NOT redesign the structure or functionality - only improve styling.

---

## 🎨 Visual Enhancement Prompt

Enhance the **existing wizard's visual design** to match the minimal, clean, calm aesthetic. The wizard structure and functionality are complete - focus only on visual polish, spacing, colors, and consistency.

### Visual Style Reference (Breef Aesthetic - see 7.jpg, 8.jpg)
Match the **minimal, clean, calm** style with **strictly minimal color palette**:

**Color Palette**:
- **Page Background**: Light beige/off-white `#FBF8F5` (entire page)
- **Step Card Background**: Pure white `#FFFFFF` (all step cards)
- **Accent Color**: Warm orange `#E87C4D` (progress bar, active step indicator, primary buttons when active)
- **Text Primary**: Dark gray/black `#0F172A` (headings, main text)
- **Text Secondary**: Medium gray `#6B7280` (sub-text, help text)
- **Borders/Inactive**: Light gray `#E5E7EB` (input borders, unselected steps)

**Design Elements**:
- **Generous white space** around content
- **Centered layout** for focus
- **Clear progress indication** (orange progress bar at bottom)
- **Single accent color** - orange ONLY for active/progress states

---

## 📐 Page Structure

### Top Navigation - Step Indicators (Existing Component)
**Enhance the existing TopNav component** styling:
- **Keep existing structure** (already has step navigation)
- **Apply styling**: Active step → orange background (#E87C4D), white text
- **Completed steps**: Light gray background with checkmark icon
- **Upcoming steps**: White/gray background, muted text
- **Ensure**: Horizontal layout, responsive scrolling on mobile
- **Verify**: Sticky/fixed positioning works correctly

### Main Content Area - Step Cards (Existing Components)
**Enhance existing step components** (WelcomeStep, ContactStep, ScopeStep, etc.):

**Visual Improvements**:
- **Background**: Ensure light beige (#FBF8F5) page background
- **Card styling**: White cards with rounded corners (16px), subtle shadow
- **Spacing**: Generous padding (32px desktop, 24px mobile)
- **Typography**: Enhance heading/sub-heading hierarchy
- **Consistency**: Ensure all steps match the same card style

**Keep Existing**:
- All form fields and functionality
- Step content and validation
- Navigation logic
- Component structure

### Visual Enhancements Needed

**All Steps** (WelcomeStep, ContactStep, ScopeStep, CategoryStep, BudgetStep, ProjectManagementStep, ReviewStep, FinalStep):

1. **Input Field Styling**:
   - Ensure rounded corners, subtle borders
   - Focus states: Orange border (#E87C4D)
   - Error states: Red border (#EF4444) + clear error messages
   - Consistent padding and spacing

2. **Button Styling**:
   - Primary buttons: Orange (#E87C4D) with white text
   - Secondary buttons: White with orange border
   - Consistent sizing and spacing
   - Smooth hover transitions

3. **Color Consistency**:
   - Page background: Light beige (#FBF8F5)
   - Card backgrounds: White (#FFFFFF)
   - Text: Dark gray for headings, medium gray for body
   - Success states: Green (#10B981)

4. **Spacing & Layout**:
   - Generous white space around content
   - Consistent card padding
   - Proper form field spacing
   - Centered layout (max-width 4xl)

**FinalStep Enhancement** (Critical):
- Add "View in Dashboard" button that navigates to `/dashboard/brief/:id`
  - **Position**: Primary action (orange button, left of "Create New Brief")
  - **Function**: Saves brief to BriefContext/localStorage, then navigates
  - **Accessibility**: `aria-label="Save and view brief in dashboard"`
- Keep existing "Copy" and "Create New Brief" buttons
- **Button order**: [Copy] [View in Dashboard] [Create New Brief]

---

## 🎯 Enhancement Principles

1. **Preserve Functionality**: Do NOT change any existing logic or structure.
2. **Visual Consistency**: Apply consistent colors, spacing, and typography across all steps.
3. **Calm Aesthetic**: Enhance with minimal, clean styling (Breef aesthetic).
4. **Accessibility**: Ensure enhancements maintain or improve accessibility.
5. **Responsive**: Verify enhancements work on mobile/tablet/desktop.

---

## 🎨 Minimal Color Palette (Breef Style)

**Strictly Minimal - No Extra Colors**:

- **Page Background**: Light beige `#FBF8F5` (entire page)
- **Step Card**: Pure white `#FFFFFF` (all step cards)
- **Active Step Indicator**: Orange `#E87C4D` (progress bar, active step in nav)
- **Completed Step**: Light gray `#D1D5DB` with checkmark (no green)
- **Unselected Steps**: Light gray `#E5E7EB` (subtle, minimal)
- **Input Focus**: Orange border `#E87C4D` (when focused)
- **Input Border Default**: Light gray `#E5E7EB` (unfocused)
- **Error State**: Light gray border `#E5E7EB` + red text `#DC2626` (minimal, subtle)
- **Success State**: Light gray `#D1D5DB` (no green badge - use checkmark icon)

**Key Rule**: Orange is the ONLY accent color. Use gray tones for all other states. Avoid green, blue, or other colored badges.

---

## 📱 Responsive Behavior (Tailwind Breakpoints)

**Mobile (< 640px)**:
- Step indicators scroll horizontally (overflow-x-auto)
- Card full-width with reduced padding (24px)
- Buttons stack vertically or full-width
- Touch targets minimum 44x44px
- Base font size 16px (prevents iOS zoom)
- Form inputs full-width

**Tablet (640px - 1024px)**:
- Card centered, max-width 4xl
- Step indicators fully visible
- Buttons side-by-side
- Optimal padding (32px)

**Desktop (> 1024px)**:
- Card centered, max-width 4xl (896px)
- Step indicators fully visible
- Buttons side-by-side
- Generous padding (32px)
- Optimal spacing throughout

---

## ✨ User Experience Goals

- Users should feel guided, not overwhelmed
- Each step should feel achievable
- Progress should be clearly visible
- Errors should be helpful and clear
- Completion should feel rewarding

---

## 📋 Components to Enhance (Already Exist)

1. **TopNav** - Step indicator bar (enhance colors, active states)
2. **Step Components** - All 8 steps (enhance card styling, spacing)
3. **Input Fields** - Form inputs (enhance focus/error states)
4. **Button Component** - Primary/secondary buttons (enhance styling)
5. **StepIndicator** - Visual step progress (enhance colors)
6. **FinalStep** - Success screen (add dashboard navigation button)

**Do NOT redesign** - only enhance visual styling to match Breef aesthetic.

---

## 🔄 Existing Step Flow (Keep As-Is)

The wizard flow is complete and functional:
1. ✅ WelcomeStep - Already works
2. ✅ ContactStep - Already works (includes Tavily company analysis)
3. ✅ ScopeStep - Already works
4. ✅ CategoryStep - Already works
5. ✅ BudgetStep - Already works
6. ✅ ProjectManagementStep - Already works
7. ✅ ReviewStep - Already works
8. ✅ FinalStep - **Needs enhancement**: Add dashboard navigation button

**Enhancement Focus**: Visual styling only, plus FinalStep dashboard link.

---

## 💡 Enhancement Opportunities

**Visual Enhancements** (optional):
- Smooth transitions between steps (CSS transitions)
- Enhanced focus states on inputs
- Subtle animations on step changes
- Improved loading states (if needed)

**Functional Addition** (required):
- **FinalStep**: Add "View in Dashboard" button that saves brief and navigates to `/dashboard/brief/:id`
- **Navigation Links**: Add optional footer link to `/dashboard` (if not already present)

**Keep Existing**:
- ✅ Form data persistence (already works)
- ✅ Company Intelligence display (already works)
- ✅ Validation (already works)
- ✅ Keyboard navigation (already works)

---

**Deliverable**: Visual enhancements to existing wizard components to match minimal, clean, calm aesthetic. Preserve all existing functionality.

---

## ✅ Success Criteria & Enhancement Verification Checklist

### Routes & Navigation
- [ ] Route `/` correctly configured (wizard root)
- [ ] FinalStep "View in Dashboard" button navigates to `/dashboard/brief/:id`
- [ ] Brief saved to BriefContext/localStorage before navigation
- [ ] All links use React Router `Link` or `useNavigate` (not `<a href>`)
- [ ] Navigation works with browser back/forward buttons

### Responsive Design
- [ ] **Mobile (< 640px)**: Step indicators scroll, card full-width, buttons stack
- [ ] **Tablet (640-1024px)**: Card centered, indicators visible, buttons side-by-side
- [ ] **Desktop (> 1024px)**: Optimal spacing, max-width 4xl, full features
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Base font size 16px minimum (prevents iOS zoom)
- [ ] Form inputs adapt to screen size

### Visual Consistency
- [ ] All steps use consistent card styling (white background, rounded corners)
- [ ] Colors match Breef aesthetic (light beige background, orange accents)
- [ ] Typography hierarchy is clear and consistent
- [ ] Spacing is generous and consistent across steps
- [ ] Button styles match across all steps
- [ ] Input focus states use orange border (#E87C4D)
- [ ] Error states use red border (#EF4444)

### Functionality Preserved
- [ ] All existing wizard functionality still works
- [ ] Form validation still works
- [ ] Step navigation still works (Back/Next buttons)
- [ ] Company intelligence display still works
- [ ] Form data persists between steps

### FinalStep Enhancement (Critical)
- [ ] "View in Dashboard" button added (primary orange button)
- [ ] Button saves brief before navigating
- [ ] Navigation goes to `/dashboard/brief/:id` with correct ID
- [ ] Existing "Copy" and "Create New Brief" buttons still work
- [ ] Button order: [Copy] [View in Dashboard] [Create New Brief]

### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] ARIA labels on all interactive elements
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Screen reader compatible
- [ ] Step announcements for screen readers

