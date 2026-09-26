# Evan Gueniot-Collin — Portfolio

Portfolio personnel : créatif digital basé à Bordeaux (webdesign, communication
digitale, graphisme, motion). Contenu repris du portfolio Framer existant
(evangcportfolio.framer.website), reconstruit avec une stack React moderne et
animée.

## Stack

- **Vite + React** (JavaScript)
- **Tailwind CSS v4**
- **shadcn/ui** (style `nova`) — `components.json`, composants dans `src/components/ui/`
- **Aceternity UI** — `spotlight-new`, `text-generate-effect`,
  `hover-border-gradient`, `card-hover-effect`, `focus-cards`, `meteors`,
  `moving-border` (installés via `npx shadcn add @aceternity/<slug>`)
- **motion** (`motion/react`) pour les animations et le scroll-reveal
- **three**, **@react-three/fiber**, **@react-three/drei** pour le blob 3D du hero

## Structure

```
src/
  components/
    ui/            composants shadcn/Aceternity (vendored)
    Navbar.jsx
    Hero.jsx       + HeroScene.jsx (scène 3D, lazy-loaded)
    Expertise.jsx
    Projects.jsx   + ProjectCard.jsx
    About.jsx
    Footer.jsx
    Reveal.jsx     wrapper de scroll-reveal générique
  lib/
    content.js     tout le contenu texte (profil, expertise, projets)
    utils.js
  assets/
    logo.png
    projects/      visuels des 4 projets (téléchargés depuis le site d'origine)
```

## Commandes

```bash
npm install
npm run dev      # serveur de dev
npm run build    # build de prod -> dist/
npm run lint     # oxlint
```

## Ajouter d'autres composants Aceternity UI / React Bits

```bash
npx shadcn@latest add @aceternity/<slug>
npx shadcn@latest add "https://reactbits.dev/r/<Component>-JS-CSS"
```

Certains composants Aceternity (ex. `3d-card-effect`) sont réservés aux comptes
payants et renvoient une erreur 401/403 à l'installation.

## Contenu

Le texte et les visuels de projets viennent du portfolio Framer existant de
l'auteur (nom, bio, 4 domaines d'expertise, 4 études de cas : Hoze, Le
Karadoc, Nightpass, Casa Hinata). Le texte de démonstration non modifié du
template Framer (faux témoignages, FAQ générique) n'a pas été repris.
