---
title: Overload
summary: An offline Android strength coach that plans Push/Pull/Legs workouts, tracks progressive overload, and keeps you coming back with XP, ranks and streaks.
spec: ["Kotlin Multiplatform", "Jetpack Compose", "Room", "GitHub Actions CI"]
category: Explorations
status: Working prototype
period: Fall 2026
sortDate: 2026-10-25
role: Solo project, built with AI pair-programming
featured: 3
cover: overload-workout
screens: [overload-home, overload-workout, overload-strength]
art: dumbbell-phone
note: This is one of the side projects I use to explore what I'm curious about. I built it with AI pair-programming tools; I decided what it should do, directed the work, and tested it.
gallery:
  - photo: overload-complete
    caption: The end-of-workout summary, with XP earned.
---

## Why I made it

I wanted a training app that does the planning for me and makes progress visible, without needing an account or an internet connection.

## What it does

- **Generates workouts.** Push/Pull/Legs plans are built from a bundled exercise catalogue.
- **Tracks progressive overload.** It estimates one-rep max with the Brzycki formula and recommends when to add weight, add reps, or deload.
- **Scores readiness.** Seven-day rolling load and intensity averages produce a 0–100 readiness ring.
- **Checks balance.** It compares push and pull volume, upper and lower body, and how often each muscle is trained.
- **Forecasts strength.** A linear regression over your one-rep-max history projects 4 and 12 weeks ahead.
- **Keeps it fun.** XP, levels, 11 ranks, 18 achievements and workout streaks.
- **Stays private.** Everything is stored on the phone with Room and DataStore, and you can export your history to CSV.

## How it's built

The engines live in a shared Kotlin Multiplatform module with no Android dependencies; the Android app uses Jetpack Compose, Material 3, Hilt and Room with versioned migrations. GitHub Actions builds the app, runs unit and migration tests, and drives an emulator through a full user journey, saving a screenshot of every screen in light and dark mode. The screenshots on this page come from that pipeline.

## Status

A working prototype with release signing set up. It isn't on Google Play.
