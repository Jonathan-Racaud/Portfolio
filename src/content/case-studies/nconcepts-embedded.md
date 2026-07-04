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
  - "Desktop GUI"
  - "LiDAR"
---

## Context

NConcepts builds hardware-adjacent products where the firmware, desktop and/or mobile apps all work together. For businesses or marketing events. Over two years I moved across three of them, spending real time in each: an embedded controller for a consumer LED panel and its mobile app; a desktop controller app for a LiDAR-based room tracker used in professional environments.

## What I owned

- Firmware for the LED panel's Arduino-based controller: protocol handling, timing, and the interface that talked to the mobile app.
- A cross-platform mobile app in Qt/QML that drove the panel from iOS and Android from a single codebase.

## Challenges
I'm going to focus on the LED panel project for this section.

**Handling low-level systems and mobile system:** The LED panel's firmware running on limited processing power devices (Arduino) meant to be conscious about what operations could be run on the device and what should be delegated to the companion app, but it also influenced the communication between the two devices. How do they discover each other, what protocol they use for communication, what data is sent and received by each, etc. To add to this already challenging environment, each LED panels could be variable in resolutions and orientations.

**Low level memory constraints:** On the LED panel front, each could display either a static image or text or an animated image or text. Due to the limited memory of the device and the widely different available resolutions, I had to optimize the storage of data and its processing. Hopefully the animation set was quite small and I could leverage simple image manipulation (translation/rotation/scaling) to achieve the desired animations instead of having to store a list of frames to display which would have saturated the device's memory.

**Working within the constraints of Android and iOS:** On the mobile app front, the difficulty was two fold: First, providing a UI which represented a preview of the final product on a small screen while having an intuitive UX. Second, working with the differences between Android and iOS and having the app adapt to the restrictions imposed by the platforms. This was particularly difficult due to iOS high constraint of network and device detections (the LED Panels provided their own wifi network).

## Outcome

Shipped working products across three domains: embedded, mobile, and desktop.
