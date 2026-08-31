# In-Office

A personal calendar for planning and tracking in-office, remote, leave, and
holiday days. Plan a month ahead, then tap any day to change it as plans
shift. Weekends are marked automatically but can be overridden.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Data storage

Everything is stored in your browser's `localStorage` — nothing leaves your
device. Use **Download backup** to save a JSON snapshot, and **Load backup**
to restore it (e.g. after clearing browser data, or on a different device).

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** and set the source to
   **GitHub Actions**.
3. Every push to `main` will build and deploy automatically via
   `.github/workflows/deploy.yml`.

If your repo is named something other than `in-office`, update the `base`
path in `vite.config.js` and the paths in `index.html` /
`public/manifest.json` to match:
`https://<your-username>.github.io/<repo-name>/` → `base: '/<repo-name>/'`.

## Project structure

```
src/
  components/    UI pieces (Calendar, DayCell, StatusPicker, StatsSummary, BackupControls)
  hooks/         useMonthData.js — the single hook that ties storage + calendar state together
  utils/
    storage.js       localStorage read/write — swap this out if you move to a database later
    dateHelpers.js   month grid + date key generation
    exportImport.js  JSON backup export/import
    statusTypes.js   the 5 day-type definitions (edit here to add/change statuses)
```

## Changing the day types

Everything about the 5 statuses (In-office, Remote, Leave, Holiday, Weekend)
lives in `src/utils/statusTypes.js` and the matching color tokens in
`tailwind.config.js`. Add a new status by adding an entry to both files.
