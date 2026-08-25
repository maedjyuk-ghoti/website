# Pull request: fix: make asset paths base-aware for GitHub Pages (use Vite BASE_URL)

This PR makes static asset and module script paths base-aware so the built site will load correctly when served from a subpath (e.g., GitHub Pages). Vite's `base` is already set to `/website/` in vite.config.js; however, absolute leading-slash references bypass Vite's base rewriting and cause 404s.

Changes:
- index.html: use Vite's %BASE_URL% for favicon and module script src.
- src/components/Footer.jsx: construct the logo src using import.meta.env.BASE_URL so it resolves correctly at runtime.

How to test locally:
1. npm ci
2. npm run build
3. npm run preview
4. Open the preview URL and confirm assets load and there are no 404s.

Closes: N/A
