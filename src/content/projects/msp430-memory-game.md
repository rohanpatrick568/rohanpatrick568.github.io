---
title: MSP430 Electronic Memory Game
summary: A Simon-style memory game on a TI MSP430 microcontroller, written in C, played with buttons and a thumbstick.
spec: ["TI MSP430", "Embedded C", "UART", "Buttons + thumbstick"]
category: Hardware & embedded
status: Complete
period: Fall 2024
sortDate: 2024-11-30
role: Solo build for Programming Hardware Systems
cover: msp430-game
art: mcu-board
---

## What it is

A memory game I built on a TI MSP430 for my Programming Hardware Systems course. The board shows a random sequence, and the player repeats it with buttons and a thumbstick.

## How it works

- Written in C for the MSP430.
- The game runs as a state machine with five phases, from showing the sequence to checking the player's input.
- Each round generates a new random sequence and validates every input as it comes in.
- It also uses the board's UART serial interface.
