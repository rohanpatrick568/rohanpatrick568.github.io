# What's still needed

The site is complete and works as it is. These items would make it stronger. They're listed in priority order. Nothing here was guessed or filled in: where I didn't have a source, the text was left out or a placeholder was used.

Run `npm run photos` at any time to see which photos are still missing.

## Before you make the site public

1. **Decide on placeholder labels.** If some photos are still missing at launch, set `showPlaceholderNotes: false` in `src/config/site.ts` so visitors see a neutral panel instead of instructions.
2. **Check every page once for accuracy.** Each claim comes from your resume, reports, repos or the UAlbany News article. Please read the items under "Please confirm" below especially.

## Photos, by impact

Added from your phone (Oct 29, 2026): portrait, haptic vest, vest electronics, band and NSBE. The vest photo shows the vest on its own, so if you get one of you wearing it, save it over `src/assets/photos/vest-wearing.jpg` and change its `alt` in `src/data/photos.json`.

Still missing. None of these were on your phone:

| Priority | Photo | Where | Crop | Save as |
| --- | --- | --- | --- | --- |
| 1 | Sound level meter hardware (Pi, iMM-6, interface) | Home, Mesonet sound meter | 4:3 | `src/assets/photos/mesonet-hardware.jpg` |
| 2 | Presenting at the SURP poster session, Aug 7, 2025 | Haptic vest | 3:2 | `src/assets/photos/vest-poster.jpg` |
| 3 | Terminal output of NN-in-C predicting a digit | Neural network in C | 16:9 | `src/assets/photos/nn-terminal.jpg` |
| 4 | MSP430 memory game board | MSP430 memory game | 4:3 | `src/assets/photos/msp430-game.jpg` |
| 5 | Solfège game screenshot or demo photo | Solfège memory game | 16:9 | `src/assets/photos/solfege-game.jpg` |
| 6 | Working on a side project, or a hobby | About | 1:1 | `src/assets/photos/hobby.jpg` |

The framing guidance for each photo is in `src/data/photos.json` and on the placeholders themselves. For the poster photo, if you use the UAlbany News picture, ask the News Center first.

**Coolant level monitor (new project page):** written from the text of your UAlbany Showcase poster. Please check the role line, the Spring 2026 date, and whether you want the industry partner named (the poster names it; the page doesn't, like your other client work). Your own part in the team isn't described yet because the poster doesn't say who did what. Add it under "What it is" if you'd like.

## Information that would add depth

These were left out because I had no source for them. Add any you'd like public:

- **Hobbies and interests outside engineering.** The About page currently covers music (band), community (RA, NSBE) and your side projects. Tell me what you do for fun and it can get its own line.
- **Your instrument** in the Marching & Spirit Band.
- **NN-in-C test accuracy.** The page describes the network (784-64-10) but gives no accuracy, because I couldn't find a recorded result. If you run it, add the number and a screenshot.
- **Senior design results.** Once the team compares the prototype against the reference meter, add the measured result to `mesonet-sound-meter.md`.
- **Blog posts.** The blog has a finished empty state and a template. `docs/EDITING.md` lists post ideas drawn from your existing work.
- **What kind of role you're looking for**, in your words, if you want to say more than the current "Now" update.
- **Any other awards or scholarships you want listed.** For example, a 2022 Kiwanis scholarship, if you received one.
- **IEEE UAlbany involvement**, if you have a role there.

## Please confirm

- **Haptic vest:** that you trained the custom staircase/exit/door model. The page says "The part I'm proudest of is training my own model," based on your SURP report.
- **Haptic vest accuracy:** about 70% staircase accuracy at midsummer, rising to about 85%, as in your report.
- **Mesonet:** that you joined the team in fall 2026 and that the full-octave conversion, filter-bank script, report figures and iMM-6 CAD model are your contributions. Teammates aren't named.
- **Resident Assistant:** "about 40 first-year residents" and that you interview RA candidates.
- **Acuta Digital:** the title "Technology Development Intern," Aug to Sep 2023, and the 300 videos and 600 data points.
- **Hack-A-Damien 2025:** 3rd place, built with one teammate (not named).
- **Minor:** Mathematics & Computer Science.
- **Side projects** (Overload, Job Agent, Flipper Alerts) carry the note you approved: "This is one of the side projects I use to explore what I'm curious about. I built it with AI pair-programming tools; I decided what it should do, directed the work, and tested it."
- **Both emails** (rpatrick@albany.edu and patrickrohan6@gmail.com) are shown on the Contact page, as you asked. Your university email may stop working after graduation, so you may want to drop it later in `src/config/site.ts`.

## Deliberately left off the site

Your GPA, phone number, addresses, family details, finances, private email content, the names of teammates, test participants and clients (your SURP mentor is named, as in the UAlbany News article), and some older repos.
