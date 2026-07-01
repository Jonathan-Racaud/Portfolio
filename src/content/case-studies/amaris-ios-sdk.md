---
title: "Bridging a legacy C++ core into a modern Swift iOS SDK for an automotive client"
organization: "Amaris Consulting"
role: "Experienced Software Engineer Consultant"
timeframe: "2020 – 2026"
order: 1
hook: "Made a legacy C++ core buildable and callable from Swift, designed the C interface that connected them, and pushed the SDK's rendering path off deprecated OpenGL."
stack:
  - "Swift"
  - "SwiftUI"
  - "C++"
  - "C"
  - "CMake"
  - "iOS"
  - "Vulkan (MoltenVK)"
  - "Location & Map Integration"
repoNote: "Client work — no public repository."
---

## Context

The client is a major automotive company building an in-car navigation and location product. The iOS SDK exposes their core mapping and place-search capabilities to third-party app developers. Under the hood, the domain logic lives in a large C++ library that predates any of the mobile platforms consuming it — the mobile SDKs are relatively new wrappers around it.

I joined the iOS side of the SDK team. The integration between the C++ core and the Swift modules that wrap it was still at an early stage, and getting it building reliably on Apple platforms was an open problem.

## What I owned

- Core iOS SDK modules for location services and place search, written in Swift and consumed by client apps.
- Getting the legacy C++ core to build cleanly for iOS device and simulator, including debugging and fixing the CMake configuration and feeding those fixes back to the team that owns the C++ library.
- The C interface used to call the C++ core from Swift — shape, naming conventions, ownership rules, and the initial implementation.
- Architectural review input on the SDK modules and contributions to internal coding standards.

## Challenges

**Making the C++ core build for Apple.** The CMake configuration was written with other platforms in mind. Toolchain files, framework linkage, bitcode expectations, and simulator vs device architectures each had their own edge. I traced the failures back to their source, fixed the CMake, and worked with the core team so the fixes lived in their tree instead of a downstream patch.

**Designing a C interface, not just wrapping one.** Swift can consume C directly, so any Swift-facing surface of the C++ core has to pass through a C layer. The C API's shape decides how ergonomic the Swift wrappers are, how memory ownership is expressed across the boundary, and how much unsafe pointer work leaks into the SDK modules. I set the conventions — resource handles, error propagation, naming — and wrote the initial implementation. Getting this right early meant the SDK modules stayed readable instead of turning into escape-hatch code.

**Vulkan over OpenGL.** OpenGL is deprecated on Apple platforms, and the SDK's rendering path was still tied to it. The client's roadmap included Android, which meant Vulkan (via MoltenVK on iOS) offered one codepath across both platforms instead of two. I argued the case internally. The decision landed; the migration is scoped.

## Outcome

- Location and place-search modules shipped and are used by client apps.
- The C++ core builds reliably on iOS device and simulator; CMake fixes are upstream.
- The C interface conventions I set are the ones the team continues to work with when new pieces of the core are exposed to Swift.
- The Vulkan migration is a decision the SDK now moves toward rather than debates.

## Links

Client work — the SDK and the C++ core are not public.
