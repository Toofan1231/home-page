# Netlify deploy fix

This project now forces npm to use the public npm registry instead of the temporary/internal registry that caused the Netlify timeout.

Changed files:

- `.npmrc` — sets `registry=https://registry.npmjs.org/`
- `netlify.toml` — sets `NPM_CONFIG_REGISTRY=https://registry.npmjs.org/` and Node 20 for Netlify builds
- `package-lock.json` — all resolved package URLs now use `https://registry.npmjs.org/`

If Netlify still uses the wrong registry, open Netlify Site settings → Build & deploy → Environment variables and remove any variable named `NPM_CONFIG_REGISTRY` or `npm_config_registry` that points to an internal/private registry.
