# Sanity SvelteKit demo

## Sanity

1.  `cd studio`
2.  `npm i`
3.  `sanity init`
4.  Choose `reconfigure the studio`
5.  Select `create new project`, and leave the project output path blank
6.  Choose the movie project (schema + sample data)
7.  Add a sampling of sci-fi movies to your dataset
8.  Run `sanity start`

## SvelteKit

1.  `cd web`
2.  `npm i`
3.  `npm run dev -- --open`

## Notes

- CORS Origins issue. Add `http://localhost:3000` in your Sanity dashboard > API settings (allow credentials)
- Requires node 12.5+ (node 14 recommended)

## Issues

- Svelte PortableText error:
  `<BlockContent> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`

## SvelteKit docs

https://kit.svelte.dev/docs
