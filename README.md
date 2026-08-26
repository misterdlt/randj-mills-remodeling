# R&J Mills Remodeling website

Astro site for `randjmills.com`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever the `master` branch is pushed.

1. Push the repository to GitHub.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for “Deploy to GitHub Pages” to complete.

The production address is `https://randjmills.com`. The workflow builds at the domain root and includes the GitHub Pages `CNAME` file.

In GitHub, open **Settings → Pages**, enter `randjmills.com` under **Custom domain**, save it, and enable **Enforce HTTPS** once the certificate is ready.

## Add project photos

1. Copy `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif` files into `src/assets/gallery/`.
2. Give each image a descriptive filename, such as `st-matthews-blue-kitchen.webp`. The filename automatically becomes accessible image text.
3. Run `npm run build`. New photos appear first in the Projects gallery under **New Projects**.

For best performance, export images as WebP at roughly 1600–2000 pixels on the longest side. Keep original project photos backed up elsewhere.

Facebook does not provide a dependable public photo feed without an app, access token, and periodic maintenance. Keeping the gallery photos in this folder makes them fast, crawlable, and owned by the business. The site links to the Facebook page for visitors who want social updates.

## Commands

- `npm run dev` — local development server
- `npm run build` — production build in `dist/`
- `npm run preview` — preview the production build
