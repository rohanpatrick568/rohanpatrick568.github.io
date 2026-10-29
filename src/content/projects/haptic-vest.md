---
title: Vision-Based Haptic Vest
summary: A wearable that turns a single chest camera into vibration cues, so a visually impaired person can feel where obstacles, stairs, exits and doors are.
spec: ["Raspberry Pi 5", "Hailo-8 NPU", "YOLO + Depth Anything V2", "DRV2605L haptics"]
category: Research
status: Prototype, presented August 2025
period: Summer 2025
sortDate: 2025-08-07
role: Undergraduate researcher (SURP), mentored by Aishwari Talhan
featured: 1
cover: vest-wearing
art: haptic-vest
gallery:
  - photo: vest-detail
  - photo: vest-poster
links:
  - label: UAlbany News article
    url: https://www.albany.edu/news-center/news/2025-undergrad-research-project-develops-haptics-assist-visually-impaired
  - label: Vision pipeline on GitHub
    url: https://github.com/rohanpatrick568/degirum_wearable_device
---

## The problem

Visually impaired people still face real inequality getting around. A white cane or a guide dog helps, but canes don't tell you where to go, and guide dogs are expensive and not always available. I wanted to see how far one camera and a small computer could go toward replacing them.

## What I built

During UAlbany's ten-week Summer Undergraduate Research Program I designed and built a vest with a single camera on the front and vibration motors placed in patterns on the back. Two machine-learning models run on a Raspberry Pi 5: one finds objects and one estimates how far away they are. The closer something gets, the stronger the vibration. Staircases, exit signs and doors each get their own vibration pattern.

## How it works

1. **Capture.** A 12 MP Raspberry Pi camera on the chest streams 640×480 frames.
2. **Stabilize.** Walking shakes the camera, so each frame is steadied with ORB keypoints and a RANSAC-fitted affine transform.
3. **Detect.** Two YOLO models run on the Hailo-8 through the DeGirum PySDK: a COCO model for people, vehicles and furniture, and a model I trained on Roboflow data for staircases, exit signs and doors.
4. **Measure distance.** Depth Anything V2 estimates depth from the same frame, with no LiDAR. Depth inside each box is smoothed over several frames.
5. **Track.** Objects are matched across frames by bounding-box overlap, so the vest only reacts to something new or to a real change in distance.
6. **Feel.** DRV2605L haptic drivers run pancake vibration motors, with intensity tied to distance.

## What was hard

| Problem | What I did |
| --- | --- |
| Detection was slow at first | Enabled PCIe Gen 3 for the Hailo-8 |
| Detection boxes didn't line up with the depth map | Rescaled boxes to the depth model's 224×224 input |
| Detections flickered while walking | Added ORB-based stabilization |
| Single-frame depth was jumpy | Smoothed depth with a short per-object history |
| The camera ribbon and AI HAT fought for space | Removed the Hailo card during camera setup |

## Results

- Everyday obstacles were sorted reliably into near, close and far.
- Close-range detections (under about two meters) were very consistent; depth got noisy beyond about fifteen meters.
- My custom staircase model was at about 70% accuracy at midsummer and about 85% in my end-of-summer testing.
- I demonstrated the vest at the SURP poster session at the Albany NanoTech Complex on August 7, 2025, and UAlbany News featured the project.

The part I'm proudest of is training my own model.

## What I'd do next

Sample the median depth across each object instead of near its center, which would steady the readings for large objects, and grow the training data so the vest handles more kinds of places.
