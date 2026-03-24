# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Run the scraper
node index.js
```

There is no build step — this is a plain ES module Node.js project (`"type": "module"` in package.json).

## Architecture

This is a single-file Node.js script ([index.js](index.js)) that scrapes stage rankings from the La Vuelta cycling race website using [cheerio](https://cheerio.js.org/).

**How it works:**
- Uses `cheerio.fromURL()` to fetch and parse the HTML from `https://www.lavuelta.es/en/rankings/stage-4`
- Selects rows within `.rankingTables__wrapper` and extracts rider name, number, team name, and time from specific `td` column indices (1, 3, 4, 5)
- Outputs the collected ranking objects to stdout via `console.log`

**Note:** The URL is hardcoded to stage 4. To scrape a different stage, change the URL in the `fromURL()` call.
