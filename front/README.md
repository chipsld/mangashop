# Boilerplate Svelte

[![CI](https://github.com/Kinoba/boilerplate-svelte/actions/workflows/pipeline.yml/badge.svg?event=push)](https://github.com/Kinoba/boilerplate-svelte/actions/workflows/pipeline.yml)

## Tech stack

![Svelte](https://img.shields.io/badge/Svelte-%23f1413d.svg?style=flat&logo=svelte&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-%2335495e.svg?style=flat&logo=vite&logoColor=%234FC08D) ![Bun](https://img.shields.io/badge/Bun-F472B6.svg?style=flat&logo=Bun&logoColor=white)

## <a name="prerequisitess"></a> ⚡ Prerequisites

- Bun installed globally on your machine
  👉 [install bun](https://bun.sh/docs/installation)

## <a name="setup"></a> 💻 Cloning and Running the Application in local

- Clone project: `git clone git@github.com:Kinoba/boilerplate-svelte.git`
- Move to folder: `cd boilerplate-svelte`
- Install dependencies and run server: `./scripts/dev`

🎉 Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## <a name="build-prod"></a> 🖥️ Build for production

Builds the app for production to the dist folder.
It correctly bundles Svelte in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

```bash
bun run build
```

### <a name="vscode-settings"></a> ⚙️ VSCode Settings

Recommended extensions:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

If you want to format your code with Prettier according to ESlint rules, add a `.vscode` at the root of repository with a `settings.json` in it with the following:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "editor.formatOnSave": true,
  // To format js files
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // To format jsx files
  "[javascriptreact]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  // To format scss files
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // To ignore @tailwind warning
  "scss.lint.unknownAtRules": "ignore"
}
```

If Stylelint's errors don't make sense, consider adding the following rule either to your global `settings.json` or your local one.

```json
{
  "stylelint.useLocal": true
}
```

If you want to hide eslint error screen in development mode, create a `.env.development.local` and add this variable:

```
DISABLE_ESLINT_PLUGIN=true
```

## 🤖 CI/CD

ℹ️ CI / CD are running with Github Actions in `.github/workflows` folder

## 📚 Wiki

- [Form fields](/docs/forms.md)
- [Icons](/docs/icons.md)
- [Api service](/docs/api.md)
- [Sitemap generation](/docs/sitemap.md)
- [Infinite Scroll](/docs/infinite-scroll.md)
- [Toaster](/docs/toaster.md)
