# Renaissance Center of Excellence — Landing Page

A single-page site for Renaissance's Center of Excellence, covering the **ORS**, **PMF**, and **DCARP** divisions. Includes a hero section, division overviews, a leadership showcase, and a feedback/experience-sharing form.

## Files

```
.
├── index.html                     # The full page (HTML + CSS + JS, no build step)
└── image.png       # Renaissance leaf mark used as the vertical side banner
```

> **Important:** `index.html` references `image.png` with a relative path. Keep the `assets` folder in the same directory as `index.html` wherever you host or open this project, or the side banner image won't load.

## Running it

No build tools or dependencies required.

- **Quickest:** double-click `index.html` to open it in a browser.
- **Recommended (avoids any relative-path/browser quirks):** serve it locally, e.g.:
  ```bash
  cd path/to/project
  python3 -m http.server 8000
  ```
  Then visit `http://localhost:8000`.
- **Deploying:** upload the whole folder (both `index.html` and `assets/`) to any static host — Netlify, Vercel, GitHub Pages, an S3 bucket, or your internal web server.

## What's on the page

| Section | Purpose |
|---|---|
| Header | Renaissance logo, Center of Excellence label, nav links, "Leadership" button |
| Side banner | Fixed vertical strip using the Renaissance leaf mark (desktop only, hidden below 900px width) |
| Hero | Intro headline/copy + a custom SVG illustration (rig, pipeline, assurance rings) in brand colors |
| Divisions (`#divisions`) | Cards for ORS, PMF, and DCARP with placeholder mandate copy |
| Meet Our Leaders (`#leaders`) | Placeholder leader cards (initials, name, title, division tag) |
| Share Your Voice (`#voices`) | Toggleable "Share an Experience" / "Give Feedback" form |
| Footer | Copyright + link back to renaissanceafrica.com |

