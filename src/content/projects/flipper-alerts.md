---
title: Flipper Alerts
summary: A prototype app for resellers that watches marketplaces for underpriced listings, scores each deal against comparable sales, and tracks profit from purchase to sale.
spec: ["TypeScript", "Expo / React Native", "Node.js + Prisma", "PostgreSQL"]
category: Explorations
status: Web prototype on sample data
period: Sep – Oct 2026
sortDate: 2026-10-20
role: Solo project, built with AI pair-programming
cover: flipper-discover
note: This is one of the side projects I use to explore what I'm curious about. I built it with AI pair-programming tools; I decided what it should do, directed the work, and tested it.
gallery:
  - photo: flipper-profit
    caption: Tracking a flip from purchase to sale. The numbers are sample data.
---

## The idea

People who flip phones, electronics and cars spend hours refreshing marketplaces. Flipper Alerts would let them save a search once, get an alert the moment an underpriced listing appears, and jump straight to the listing to message the seller themselves.

## What's built

- **Saved searches** by keyword, price range, location and category.
- **A deal score** that compares each listing against a growing database of comparable listings.
- **Profit tracking** from deal to purchase to sale, with realized return.
- A **TypeScript monorepo**: an Expo app for phone and web, a Node.js API with Prisma and PostgreSQL, and shared types, with an automated test suite.

## Honest status

It runs as a web prototype on sample data; every listing in the screenshots is labelled as sample data. No real marketplace listing has been fetched yet. eBay's official API is the only marketplace that is technically open to it, and that still needs keys. Facebook Marketplace, Craigslist and OfferUp don't offer the access it would need, and I chose not to automate logins or messages, to stay within their terms.
