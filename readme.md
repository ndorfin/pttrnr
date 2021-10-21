# PTTRNR

A pattern library generator.

This repo is a documentation, testing, and development platform for your project's front-end assets. These assets are typically stored in a separate repo, and symlinked to this repo so they can be 'dogfooded'.

## Dependencies

- Node.js (v16.10+)
- NPM (v7.24+)

## Installation

Make sure you have [the dependencies](#Dependencies) installed before proceeding. 

1. `npm i`

## Development

1. `npm run serve`

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

## List of shell commands

- `npm i`: Install
- `npm run build`: Run a production build
- `npm run build:debug`: Run a production build in DEBUG mode
- `npm run serve`: Run a dev server
- `npm run serve:debug`: Run a dev server in DEBUG mode