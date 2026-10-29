---
title: Sound Level Meter for the NYS Mesonet
summary: A low-cost, always-on noise monitor built on a Raspberry Pi for New York's statewide weather network. My part is the full-octave filter bank that turns raw audio into decibels per band.
spec: ["Raspberry Pi 4B", "Dayton Audio iMM-6", "Full-octave Butterworth filter bank", "Python + SciPy"]
category: Hardware & embedded
status: In progress (fall 2026)
period: Fall 2026
sortDate: 2026-10-01
role: One member of a UAlbany ECE senior design team
featured: 2
cover: mesonet-hardware
art: sound-meter
gallery:
  - photo: mesonet-filters
    caption: The ten full-octave bands from my filter-bank script, 31.5 Hz to 16 kHz. Each band is flat at 0 dB and crosses its neighbor at -3 dB.
  - photo: mesonet-group-delay
    caption: Group delay per band, one of the design-report figures the script generates.
  - photo: mesonet-cad
    caption: My CAD model of the Dayton Audio iMM-6 measurement microphone.
---

## The problem

Noise pollution is a real problem in cities and rural areas alike, but it's hard to quantify, and there is little free, continuous data about it. The New York State Mesonet already measures weather and air quality at stations across the state. A cheap sound level meter that fits into those stations would let researchers and the public see noise levels too.

## The system

A Raspberry Pi 4B listens through a Dayton Audio iMM-6 measurement microphone and a USB audio interface. It never stores audio. It computes the sound level in each frequency band and passes the numbers over UART to the Adafruit Feather M4 inside the existing Mesonet air-quality box, which logs them alongside its other data.

## My part

This is a multi-year senior design project. I joined the team in fall 2026, and my work so far has been the signal processing:

- **Full-octave conversion.** The earlier design reported third-octave bands, but the reference meter we test against reports full octaves. I converted the analysis to ten full-octave bands, 31.5 Hz to 16 kHz, so the two can be compared band for band.
- **A filter-bank tool.** I wrote a standalone Python script that builds each band from the `acoustics` library's octave definitions as a fourth-order Butterworth bandpass filter in second-order sections, filters with `sosfiltfilt`, and converts RMS pressure to dB SPL.
- **Validation without the hardware.** I didn't have the meter at home, so the script generates a test tone at each band's center and checks that the energy lands in the right band. It can also record from a laptop microphone. I kept those software checks clearly separate from calibrated hardware measurements.
- **Design report figures.** The script produces the frequency-response, magnitude and phase, and group-delay figures in our Engineering Design Report.
- **A microphone CAD model** of the iMM-6 for planning the mount.

Next I'm building a buzzer self-test circuit so the meter can check itself with a known tone, and working out microphone placement.

## Status

In progress. The team is comparing the prototype against a reference sound level meter this semester. The figures below are filter-design results, not field measurements.
