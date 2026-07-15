---
title: "Bridging a legacy C++ core into a modern Swift iOS SDK for an automotive client"
organization: "Amaris Consulting"
role: "Experienced Consultant"
timeframe: "2020 – 2025"
order: 1
hook: "Made a legacy C++ core buildable and callable from Swift, designed the C interface that connected them."
stack:
  - "Swift"
  - "SwiftUI"
  - "C++"
  - "C"
  - "CMake"
  - "iOS"
  - "Location & Map Integration"
repoNote: "Client work — no public repository."
---

## Context

My client was a major automotive company building a cross-platform location based SDK for iOS, Android and Embedded (inside the car infotainment). Under the hood, the domain logic lives in a large C++ library that predates any of the mobile platforms consuming it. The mobile SDKs are relatively new wrappers around it.

I joined the iOS side of the SDK team to develop core modules of that SDK. When I joined the project, the integration between the C++ core and the Swift modules was non-existent.

## What I owned

- Core iOS SDK modules for location services and place search, written in Swift and consumed by client apps.
- Getting the legacy C++ core to build cleanly for iOS device and simulator, including debugging and fixing the CMake configuration and sharing those fixes back to the team that owns the C++ library.
- The initial C interface used to call the C++ core from Swift: Its shape, naming conventions, and the initial implementation.
- Architectural review input on the SDK modules and contributions to internal coding standards.

## Challenges

**Making the C++ core build for Apple.** The CMake configuration was written primarily for the embedded and Android platforms. The team owning the core library had no access to a macOS development environment and had no experience with it as well. I updated the CMake configuration to build on macOS targeting the iOS platform. This introduced build failures due to differences between the platforms. I traced the failures back to their source, proposed the fixes to the core library team so they could judge and own the modifications. I also provided written documentation on the modifications I did and the rationale behind the modifications.

**Designing a C interface, not just wrapping one.** When I worked on that project, Swift could consume C directly, but not yet C++, which was very much still an ongoing work from the Swift team and could change from release to release. It was decided to introduce an external C api to wrap the C++ library, so it could be used by the Swift modules without issues. I proposed the shape of the API, how to manage the different C++ objects life as well as how to design the Swift objects that would consume such API. This was also documented so it can be applied to other modules of the SDK which were in the same situation.

## Outcome

- Location and place-search modules shipped and are used by client apps.
- The C++ core builds reliably on iOS device and simulator; CMake fixes are upstream.
- The C interface conventions I set are the ones the team continues to work with when new pieces of the core are exposed to Swift.
