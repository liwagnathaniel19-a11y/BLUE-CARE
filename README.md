# BlueCare Medical & Pharmacy

A responsive one-page website for a medical supplies/pharmaceutical store, built with plain HTML, CSS, and JavaScript. No framework, package manager, or build step required.

## Preview locally
1. Download or clone this repository.
2. Open `index.html` in your browser.

You can also use the VS Code Live Server extension, but it is optional.

## Customize before publishing
Search and replace the demo details throughout the project:
- **Store name and branding:** `index.html`, plus `assets/logo.svg` if you want a different logo.
- **Product names, descriptions, and prices:** product cards in `index.html` and the matching rows in the Price list table. Keep both sections in sync.
- **Locations and opening hours:** the Store locations section in `index.html`; replace the generic Google Maps URLs with links for each branch.
- **Email and phone:** `STORE_EMAIL` and `STORE_PHONE` at the top of `js/script.js`; update the visible contact details if you add them elsewhere.
- **Colors and styling:** CSS custom properties at the top of `css/style.css`.

## Publish with GitHub Pages
1. Create a GitHub repository and upload these files/folders.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Included features
- Mobile-responsive layout and collapsible navigation
- Product cards with category filters
- Price list table
- Store-location cards with map links
- Email and telephone contact links
- Custom SVG logo and favicon
- Accessible navigation labels and reduced-motion support

## Important
This project uses **illustrative demo product names and prices** and placeholder branch/contact details. Replace them with verified store information before making the website public. Do not present sample prices or availability as official. Pharmaceutical products must be sold and advertised in compliance with applicable local rules.
