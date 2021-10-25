# PTTRNR

A pattern library generator.

This repo is a documentation, testing, and development platform for your project's front-end assets. These assets are typically stored in a separate repo, and symlinked to this repo so they can be 'dogfooded'.

There are two distinct sets of assets used within this pattern library:

1. those used explicitly for rendering this pattern library, and its layout.
1. those used to render examples of each pattern in its intended way. These examples are sandboxed in `<iframe>`s.

## Dependencies

- Node.js (v16.10+)
- NPM (v7.24+)

## Installation

Make sure you have [the dependencies](#Dependencies) installed before proceeding. 

1. `npm i`

## Development

The dev server can be started uisng `npm start`.

While the dev server is running you get:

- Sass compilation and watching (including in the assets folder)
- BrowserSync
- Eleventy monitoring for file changes

## Adding patterns

1. Add a `.yml` file to `src/_data/patterns`, using the `pattern_model.yml` as a reference.
1. Assign the new pattern to a group, by setting the `group_id` to an existing `src/_data/pattern_group/*`. (If it's a new pattern group, see below.)
1. Add the details to your new pattern:
  1. Give it a hierarchical id: `[group]-[identifier]`, e.g. `button-primary`
  1. Give it a memorable name, preferably in a hierarchical manner too, e.g. `Button Primary`
  1. Describe what makes this pattern unique, or why you would use this pattern over others.
  1. In the `example` section, supply some `code` that is free of modifiers / variants, etc.
  1. Write any implementation notes or reminders when using this pattern
  1. Associate this pattern with its corresponding asset source code, e.g. JS, SCSS, Images, etc.

Your new pattern should be available at the following URL:

`/patterns/[GROUP_ID]/[ID]/`, e.g. `/patterns/buttons/button-primary/`

## Glossary

- **assets** – the front-end artefacts such as SCSS, JavaScript, images, icons, and fonts. These are typically found in a separate repo, that the pattern library consumes and uses.
- **pattern** – A distinct block of HTML and its corresponding assets. Each pattern typically uses a `class` attribute.
- **pattern group** – A collection of similar patterns, typically grouped by function. e.g. buttons, or lists, or…
- **example** – The pattern library renders a pattern's *example* in an `<iframe>`. Each example uses the project's assets.

## List of shell commands

- `npm i` – Install dependencies
- `npm start` – Run Sass, a BrowserSync server, and watch for file changes, useful for DEVELOPMENT
- `npm run build` – Static build to the `dist` folder
- `npm run postbuild` – Run Autoprefixer and CSS Nano on the output CSS