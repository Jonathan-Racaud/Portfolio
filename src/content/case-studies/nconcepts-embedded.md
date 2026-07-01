---
title: "Firmware, cross-platform mobile, and a desktop GUI for room-scale LiDAR"
organization: "NConcepts"
role: "Software Engineer"
timeframe: "2017 – 2019"
order: 2
hook: "Two years across three products — Arduino firmware for a smart LED panel, a Qt/QML mobile app to drive it, and a desktop GUI for a LiDAR-based room tracking system."
stack:
  - "C++"
  - "Qt / QML"
  - "Arduino"
  - "Embedded C"
  - "Desktop GUI"
  - "LiDAR"
---

## Context

NConcepts builds hardware-adjacent products where the firmware, the desktop tool, and the companion app all have to line up. Over two years I moved across three of them, spending real time in each: an embedded controller for a consumer LED panel, its mobile app, and a desktop viewer for a LiDAR-based room tracker used in professional environments.

## What I owned

- Firmware for the LED panel's Arduino-based controller — protocol handling, timing, and the interface that talked to the mobile app.
- A cross-platform mobile app in Qt/QML that drove the panel from iOS and Android from a single codebase.
- A desktop GUI for the LiDAR room-tracking product, rendering the sensor's output so operators could see what the system saw in real time.

## Challenges

**One codebase, two mobile platforms.** Qt/QML lets you ship the same UI on iOS and Android, but only if you resist the temptation to reach for platform-specific APIs at every friction point. Where the two platforms genuinely differed — permissions, background behavior, connectivity — I kept the divergence isolated and small so the shared surface stayed the default path.

**Firmware and app as one product.** The protocol between the Arduino and the phone is the seam where hardware behavior meets user-visible latency. Changes to one side had to be safe for the other. I moved back and forth across that seam often enough to understand both — which is where the interesting bugs live.

**Making sensor data legible.** The LiDAR desktop GUI's job was to turn a firehose of range samples into something an operator could interpret at a glance. The interesting engineering wasn't the raw rendering; it was choosing what to draw and what to suppress so the display told the truth without overwhelming.

## Outcome

Three shipped products across three domains — embedded, mobile, and desktop — inside two years. The value of the stretch wasn't any single one of them; it was the range. Bridging a C++ core into Swift in my next role felt familiar for a reason.

## Links

Company products — no public repository.
