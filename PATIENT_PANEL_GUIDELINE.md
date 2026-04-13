# Patient Panel Redesign Guideline

## 1) Route Structure

Primary patient routes are managed in App.jsx under /patient:

- /patient/dashboard
- /patient/admission
- /patient/token
- /patient/history
- /patient/prescriptions
- /patient/reports
- /patient/billing
- /patient/notifications
- /patient/messages
- /patient/support
- /patient/profile
- /patient/settings

Unknown routes redirect to /patient/dashboard.

## 2) File Structure

```txt
src/
  components/
    admission/
    billing/
    common/
      BackButton.jsx
      SearchInput.jsx
      SectionTitle.jsx
    dashboard/
    history/
    messages/
    prescription/
    profile/
      AccountSettingsPanel.jsx
    reports/
  data/
    patientData.js
  layouts/
  pages/
  utils/
    fileActions.js
  App.jsx
  index.css
```

## 3) Page Purpose

- Dashboard: compact patient overview with token, reminder, quick actions, care snapshots, and mini notifications.
- History: searchable visits with compact card actions and mobile-scrollable filter chips.
- Reports: searchable report list and one-line View/Download/Print action groups.
- Messages: conversation list + chat panel desktop, list-to-chat flow on mobile.
- Profile: editable personal details, compact preference controls, account security actions.
- Settings: notification preferences + dedicated account settings panel.

## 4) Component Purpose

- SectionTitle: page title, back button, and optional contextual search bar.
- BackButton: consistent page-level navigation back control.
- SearchInput: small frosted search component with animated focus.
- AccountSettingsPanel: password and account privacy controls.
- fileActions helpers: shared download and demo feedback actions.

## 5) Redesign Notes

- Desktop and mobile use compact cards to avoid oversized empty blocks.
- Notification and follow-up modules are compact list-based previews.
- Reports use compact segmented action rows to keep controls aligned.
- Messages are styled like modern support chat with role/status context.

## 6) Compact UI Rules

- Keep major cards visually dense but readable.
- Prefer multi-column compact summaries on desktop.
- Collapse to single-column stacked cards on mobile.
- Use subtle blur and soft shadows; avoid heavy/glossy over-design.

## 7) Mobile Behavior Rules

- Bottom nav remains fixed in thumb zone.
- History filter row scrolls horizontally with fade mask hint.
- Message page uses conversation list first, then chat screen after selection.
- Action groups wrap intelligently without creating oversized blocks.

## 8) Search Bar Rules

Search bars are enabled in these pages:

- Dashboard: সেবা, রিপোর্ট, নোটিফিকেশন খুঁজুন
- Visit History: ভিজিট, ডাক্তার, বিভাগ খুঁজুন
- Reports: রিপোর্ট খুঁজুন
- Messages: ম্যাসেজ বা নাম খুঁজুন
- Profile: সেটিংস বা তথ্য খুঁজুন

Search style:

- Compact glass input
- Soft border
- Blur background
- Focus animation

## 9) Back Button Rules

- SectionTitle renders a back button for inner pages by default.
- Dashboard intentionally hides back button as home/root view.
- Back button works for desktop and mobile via browser history.

## 10) Dummy Data Structure

- patientData.js contains profile, visits, reports, notifications, billing, and chat mocks.
- Per-visit prescription sheets are keyed by visit ID.
- UI actions use fileActions.js for quick demo download/feedback behavior.

## 11) Future Edit Guide

- To add new route: create page -> add route in App.jsx -> add nav item if required.
- To add a new searchable page: pass searchPlaceholder, searchValue, onSearchChange to SectionTitle.
- To connect real API: replace patientData.js with service/hooks layer and keep component props stable.
- To add real notifications/toasts: replace showQuickMessage helper with a toast provider.
