# Vihaan Bussa Portfolio

An accessible single-page React site that showcases Vihaan Bussa's projects, research, leadership, and academic achievements. The experience highlights high-impact initiatives through interactive galleries, detailed modal views, and a polished contact flow powered by EmailJS.

## Features

- Sticky navigation with active section highlighting and keyboard-friendly skip links
- Story-driven content for projects, research, internships, and leadership with modal detail views and image carousels
- Contact form integrated with EmailJS for direct messages, including loading and success/error states
- Accessible design system: WCAG AA color contrast, focus management, aria labels, and screen-reader helpers
- Responsive layout that adapts from mobile to large-screen displays, leveraging CSS Grid and Flexbox
- Centralized data structures that make it easy to update achievements, stats, and gallery assets

## Tech Stack

- React 19 with functional components and hooks (`useState`, `useEffect`, `useMemo`)
- CSS modules for theming, accessibility, and responsive layout (`src/App.css`)
- EmailJS browser SDK for zero-backend contact form submissions
- Create React App tooling for local development, testing, and production builds

## Getting Started

Prerequisites:

- Node.js 18+ and npm 9+

Install dependencies and start the development server:

```bash
npm install
npm start
```

The app runs at `http://localhost:3000` by default and supports hot reload.

### Available Scripts

- `npm start` – Run the app in development mode.
- `npm test` – Launch the interactive test runner (Jest + Testing Library).
- `npm run build` – Create an optimized production bundle in `build/`.
- `npm run eject` – Opt out of CRA's build tooling to customize the configuration (irreversible).

## Project Structure

```
vihaan-website/
├── public/                 # Static assets and images used in modals and galleries
└── src/
    ├── App.js              # Page sections, content definitions, modal logic, carousel controls
    ├── App.css             # Theme tokens, responsive layout rules, accessibility helpers
    ├── index.js            # React entry point
    └── reportWebVitals.js  # Optional web vitals reporting hook
```

## Customizing Content

- **Projects, Research, Leadership, Internships**: Update the arrays defined near the top of `src/App.js` to edit titles, descriptions, links, budgets, and gallery images.
- **Achievements and Skills**: Edit the respective arrays in `App.js` to reflect new honors or technologies.
- **Images**: Place new assets in `public/` and reference them using the `assetUrl("/path/to/image.png")` helper to ensure the correct base path in development and production.
- **Styling**: Adjust color tokens, typography, and layout rules in `src/App.css`. The design system is centralized in the `:root` declaration for quick theme updates.

## EmailJS Configuration

The contact form uses EmailJS with service, template, and public key values defined in `handleFormSubmit` (`src/App.js`). To use your own EmailJS account:

1. Create a service, template, and public key in the EmailJS dashboard.
2. Replace the hard-coded IDs in `emailjs.send(...)` with your values or refactor them into environment variables.
3. Update the EmailJS template to expect `from_name`, `from_email`, and `message`.

## Accessibility & Performance

- WCAG AA-compliant color contrast and focus states for interactive elements
- Skip links, aria live regions, and descriptive labels for screen readers
- Smooth scrolling with active section tracking to aid orientation
- Optimized image handling and lightweight dependencies for fast load times

## Deployment

The project is configured for GitHub Pages via the `homepage` field in `package.json`. A typical deployment workflow:

1. Build the project with `npm run build`.
2. Serve locally for verification: `npx serve build`.
3. Publish the `build/` directory to GitHub Pages or your preferred static hosting service.

If you prefer automated GitHub Pages deployments, add scripts that invoke the `gh-pages` CLI (already listed in `devDependencies`).

---

Maintained by Vihaan Bussa. Feel free to adapt the content and theming to support new achievements, press, or outreach initiatives.
