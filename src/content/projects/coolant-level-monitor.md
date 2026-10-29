---
title: Computer Vision Coolant Level Monitor
summary: A non-contact system that reads the coolant level in a semiconductor reservoir's sight tube with a camera and a Raspberry Pi, instead of a sensor inside the equipment.
spec: ["Raspberry Pi", "Camera module", "Computer vision", "Edge + contour detection"]
category: Hardware & embedded
status: Presented at UAlbany Showcase
period: Spring 2026
sortDate: 2026-04-30
role: One of three students on the team, with faculty advisor Jonathan Muckell
cover: coolant-poster
art: camera
---

## What it is

In semiconductor manufacturing, coolant levels are often still checked by eye, which is inconsistent and gives no continuous record. Our team built a system that watches the reservoir's transparent sight tube with an external camera and works out the fluid level from the images. Because nothing goes inside the reservoir, the existing equipment doesn't have to be modified. The project was developed with an industry partner, and we presented it as a poster at the UAlbany Showcase.

## How it works

- A camera module captures images of the coolant sight tube, held at a fixed position and viewing angle by a mounting enclosure.
- A Raspberry Pi runs the image processing. It first finds the gauge region with edge detection and contour analysis, and filters candidate regions by size and position.
- Inside that region, it finds the waterline from intensity changes and gradients, then converts the line's position into a percentage fill level.
- A data logging system stores each validated measurement with a timestamp.

## How it developed

The system went through many iterations, from detecting the level in a single image to processing a live camera feed. Early versions struggled with inconsistent lighting, glare and reflections. The final version (v18) uses both a primary and a fallback detection method to stay robust under glare and low contrast. We tested it with controlled objects, and the logged results showed more consistent performance than earlier versions.

## Next steps

Future work would focus on challenging lighting and glare, and could add automated data transmission, remote monitoring and predictive analysis.
