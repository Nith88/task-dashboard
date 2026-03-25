# Task Dashboard

A React + Vite project: a multi-page task dashboard with API integration, React Router navigation, and Tailwind CSS.

## Project features

- Home page with live advice from the Advice Slip API
- Tasks list page that fetches tasks from JSONPlaceholder (`/todos?_limit=10`)
- Task detail page with dynamic route `/tasks/:id`
- Reusable components: `Navbar`, `TaskCard`
- Loading and error states for all API requests
- Responsive layout via Tailwind
- Standard branch workflow: `feature/task-dashboard` → `main`

## Run locally

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Build

- `npm run build`
- `npm run preview`

## Git workflow

```bash
git checkout -b feature/task-dashboard
# make changes
git add .
git commit -m "feat(task-dashboard): implement dashboard"
# merge into main
git checkout main
git merge feature/task-dashboard
```

## Notes

This project is ready for GitHub push and pull request with full build completion.

