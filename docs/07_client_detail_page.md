# Page: Client Detail

**Route**: `/dashboard/agency/clients/:id`  
**Purpose**: View a specific client's details and all their associated briefs.  
**Phase**: Step 5 of Iterative Development

---

## 📐 Page Layout Diagram

```
┌─────────────────────────────────────────────────────────┐
│  Sidebar (280px) │  Main Content Area                   │
│                  │                                      │
│  AMO AI          │  ← Back to Clients     [+ New Brief] │
│  ──────────      │                                      │
│  📊 Dashboard    │  ┌──────────────────────────────┐    │
│  👥 Clients ✓   │  │ [AC] Acme Inc.     [Options] │    │
│  📄 All Briefs   │  │ 12 Briefs | Last: 2d ago   │    │
│  ──────────      │  └──────────────────────────────┘    │
│  🚪 Sign Out     │                                      │
│                  │  [Search briefs...]                  │
│                  │                                      │
│                  │  Briefs (Card Grid)                  │
│                  │  ┌──────┐ ┌──────┐ ┌──────┐        │
│                  │  │Card 1│ │Card 2│ │Card 3│        │
│                  │  └──────┘ └──────┘ └──────┘        │
│                  │  ┌──────┐ ┌──────┐ ┌──────┐        │
│                  │  │Card 4│ │Card 5│ │Card 6│        │
│                  │  └──────┘ └──────┘ └──────┘        │
└─────────────────────────────────────────────────────────┘
```

**Legend**: `[AC]` = Avatar/Initials, `✓` = Active menu item

---

## 🎯 Design Prompt for Google AI Studio

Design the **Client Detail** page with the following structure:

### Header Section
- **Left**: "← Back to Clients" link (gray `#6B7280`, 16px)
  - **Link**: Navigates to `/dashboard/agency/clients`
- **Right**: "+ New Brief" button (orange `#E87C4D`, rounded 8px, white text)
  - This button should pre-fill the client for the new brief if possible.
- **Spacing**: 32px margin-bottom

### Client Info Card
- **Layout**: A single, prominent card at the top of the page.
- **Card Design**:
  - White background `#FFFFFF`
  - Rounded corners (12px)
  - Shadow: `0 1px 3px rgba(0,0,0,0.05)`
  - Padding: 24px
- **Card Content**:
  - **Left Side**:
    - **Avatar/Initials**: Circular, 64px, colored background, white text.
    - **Client Name**: Large, bold heading (h1, 32px, dark gray `#0F172A`).
    - **Metadata**: Gray text `#6B7280`, 14px (e.g., "12 Briefs • Last activity: 2 days ago").
  - **Right Side**:
    - **Options Menu**: Three-dots icon button for future actions (Edit Client, Delete Client).

### Search Bar
- **Full width** input field, identical to the main dashboard search.
- **Placeholder**: "Search briefs for this client..."
- **Spacing**: 24px margin-bottom, placed below the client info card.

### Briefs Grid
- **Identical** to the main `DashboardPage` grid (`/dashboard`).
- **Data**: Should only show briefs associated with the current client.
- **Layout**: 3 columns (desktop), 2 columns (tablet), 1 column (mobile).
- **Component**: Re-use the existing `BriefCard` component.

### Empty State (When Client Has No Briefs)
- **Centered layout** below the Client Info Card.
- **Icon**: Document icon (64px, gray `#9CA3AF`).
- **Heading**: "No briefs for this client yet" (24px, bold, dark gray).
- **Subtext**: "Create the first brief for this client to get started." (16px, gray `#6B7280`).
- **CTA Button**: "+ Create Brief" (orange primary `#E87C4D`, rounded 8px).

---

## ✅ Components Needed

- `BackLink` - Reusable "Back to..." link component.
- `ClientInfoCard` - The main header card for the page.
- `SearchBar` - Reusable search component.
- `BriefGrid` - Reusable grid from the main dashboard.
- `EmptyState` - Reusable empty state component, adapted for this context.

---

## 🎨 Visual Design

- **Page Background**: Light beige `#FBF8F5`
- **Cards**: White `#FFFFFF` with subtle shadow
- **Accent**: Orange `#E87C4D` (primary buttons)
- **Consistency**: The page should feel like a filtered view of the main dashboard, maintaining the same visual language.

---

## 🔄 User Flow

1. User clicks a client card on `/dashboard/agency` or `/dashboard/agency/clients`.
2. Page navigates to `/dashboard/agency/clients/:id`.
3. The page loads with the specific client's details and their briefs.
4. User can search within that client's briefs.
5. User can click a brief to go to `/dashboard/brief/:id`.
6. User can click "Back to Clients" to return to the list.

---

**Related**: [Iterative Development Guide](./16-ITERATIVE-DEVELOPMENT-GUIDE.md) - Step 5
