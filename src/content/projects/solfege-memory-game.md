---
title: Solfège Light & Sound Memory Game
summary: A browser memory game built on the eight solfège notes, with a "Chorus Practice" mode that listens through the microphone and checks your pitch. 3rd place at Hack-A-Damien 2025.
spec: ["JavaScript", "Web Audio API", "Pitch detection", "Hackathon"]
category: Explorations
status: Complete
period: Feb 2025
sortDate: 2025-02-23
role: Built with a teammate in a three-day hackathon
award: 3rd Place, Hack-A-Damien 2025
cover: solfege-game
links:
  - label: Code on GitHub
    url: https://github.com/rohanpatrick568/Hack-A-Damien-Project
art: music-game
---

## What it is

A Simon-style game with eight buttons, one for each solfège note from Do to Do. The game plays a growing sequence of lights and tones, and you repeat it. Hard mode plays faster and longer patterns, and the game keeps a high score.

The twist is **Chorus Practice**. Instead of clicking, you sing each note. The game listens through your microphone and estimates your pitch with autocorrelation to check whether you hit it.

## My part

My teammate and I split the work. I set up the solfège note frequencies and the eight-square layout, generated the random patterns, and handled the round timing so each new round waits for the sequence to finish. I also fixed the game-over flow and wrote the README.

## Result

3rd place at Hack-A-Damien 2025, announced on February 23, 2025.
