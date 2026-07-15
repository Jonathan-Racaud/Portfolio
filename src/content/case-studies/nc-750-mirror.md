---
title: "NC-750 and Mirror: A personal software that respects the person using it"
organization: "NC-750"
role: "Founder, Sole Engineer"
timeframe: "2026 – ongoing"
order: 3
hook: "Designing user-controlled software where data, AI providers, and compute stay in the user's hands."
stack:
  - Typescript
  - Tauri
  - Flutter
---

## Context

NC-750 is my personal software brand with a specific philosophy: most of the tools people use every day quietly assume that their data belongs somewhere else, that the AI provider is a fixed choice, and that "local" is a niche mode rather than the default. NC-750 proposes the opposite: bring your own key, keep your own data, and let the user pick where the compute runs, including entirely on their own machine.

Mirror is the first app under the brand. It is the tool I used to build the profile behind this portfolio: I feed it my CV and any other career material, it runs an LLM-driven interview to surface what a static resume misses, and it produces a structured `persona.json` I can reuse elsewhere. When I point it at a local model, nothing leaves my machine except the input to the model. When I point it at a hosted provider, the only outbound link is directly to that provider. No NC-750 backend in the middle. I design software systems where AI is integrated as a useful component rather than just a conversational interface.

## What I own

- The brand's ethos and product philosophy: How should a product approach handling user data and what are the red lines not to cross.
- Mirror's architecture: the interview loop, provider abstraction (local model or hosted provider), the persona schema, and the flow from raw inputs to the aggregated `persona.json`.
- The single-tenant model: no accounts, minimal telemetry.

## Challenges

**Designing a BYOK model** Being an LLM based app, the choice of provider and model used by the user greatly influence the end result. The challenge is on how to minimize those differences so that the user gets pragmatical and usefull results.

**Growing NC-750:** Apart from that first app, I have the ambition of proposing a coherent ecosystem that is the demonstration of the idea behind the project. One that gives back control to the user.

## Outcome

- Mirror is running end-to-end. The `persona.json` behind this portfolio was produced by it.
- The brand's manifesto and visual identity.
- Next up in the NC-750 ecosystem: additional privacy-respecting personal tools, and a NixOS distro aimed at people who want a coherent computing environment without becoming their own sysadmin.

## Links

[NC-750/Github](https://github.com/nc-750)
