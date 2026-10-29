---
title: Job Agent
summary: A personal macOS assistant that finds engineering roles, scores how well they fit, and prepares applications in a visible browser, with submission off by default and a human in the loop.
spec: ["Python", "Playwright", "Claude API", "SQLite"]
category: Explorations
status: Working tool, still evolving
period: Oct 2026
sortDate: 2026-10-18
role: Solo project, built with AI pair-programming
note: This is one of the side projects I use to explore what I'm curious about. I built it with AI pair-programming tools; I decided what it should do, directed the work, and tested it.
art: laptop-agent
---

## Why I made it

Job hunting means reading hundreds of postings and retyping the same facts into dozens of forms. I wanted to see how much of that an AI agent could take on safely, while I stay in control of anything that gets sent.

## What it does

- **Finds and scores roles.** It pulls postings from Greenhouse, Lever and Ashby job boards, runs hard eligibility checks, then gives each a 0–100 fit score.
- **Prepares applications.** Claude reads the live application form in a visible browser and fills it only from facts I have approved, then asks me about anything unknown or sensitive.
- **Keeps a knowledge store.** Every fact about me is stored with the exact quote it came from, and stays "proposed" until I approve it.
- **Gives me a dashboard.** A local web dashboard and a command line show everything it has found and done.

## Safety first

Submitting is off by default and can't be switched on until the acceptance tests pass and I type a confirmation phrase. The model that fills forms has no way to submit; plain, tested code does that only after every check passes. There's a kill switch, a daily limit, a duplicate guard, a pre-submit checklist and API spending caps. All personal data stays on my laptop and out of Git.

## Status

A working personal tool, kept private. It runs against roughly 20 test files and local fixture pages, so no test ever touches a real employer site.
