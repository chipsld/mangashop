# Sitemap generation

Simple script to generate the sitemap.xml file in the public directory.

## How to

This script will crawl your `paths.js` file and extract your app routes from it. Then, it will build the sitemap.xml file automatically.

When you add another app path to the `./src/router/paths.js`, you have to update the sitemap.xml file.

- Add the new path
- Open your terminal
- Run the following command

```bash
bun run ./src/services/generateSitemap.js \
&& git add ./public/sitemap.xml \
&& git commit -m "chore(sitemap): update routes" \
&& git push
```
