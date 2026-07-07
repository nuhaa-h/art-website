# Museum of Life

A landing page design inspired by an art-museum/gallery layout, built with plain HTML/CSS/JS and featuring paintings by Claude Monet.

## Structure

- `index.html` — page markup
- `styles.css` — styling and animations
- `script.js` — scroll-reveal, parallax, and smooth-scroll behavior
- `assets/` — Monet painting images (public domain, via Wikimedia Commons)

## Artwork

| Section | Painting |
| --- | --- |
| Hero | The Water-Lily Pond (National Gallery, London) |
| Collection card | Impression, Sunrise |
| Collection card | Woman with a Parasol – Madame Monet and Her Son |
| Collection card | Poppy Field |
| Collection card | Haystacks (End of Summer) |
| Footer strip | Reflections of Clouds on the Water-Lily Pond |

All images are public domain reproductions sourced from Wikimedia Commons.

## Motion

- Hero painting has a slow "Ken Burns" zoom plus a scroll-linked parallax drift.
- Hero title/subtext/button fade up on load; header fades down.
- Nav links get an animated underline on hover.
- Collection cards and the "All Collections" heading fade up into view on scroll (`IntersectionObserver`), with a staggered delay per card.
- Cards lift and their image zooms slightly on hover; buttons lift with a shadow on hover.
- Footer image scales in and fades in as it enters the viewport.
- All motion respects `prefers-reduced-motion: reduce`.

## Notes

- "Museum of Life" hero title uses the **Alex Brush** script font (Google Fonts), matching the flowing script style from the design inspiration.
- The name "Nuha Hammad" in the top-right of the header uses **Times New Roman**.

## Viewing locally

Just open `index.html` in a browser, or serve the folder with any static file server.
