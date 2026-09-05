---
title: "NC-750 and Mirror: User-controlled software with AI"
organization: "NC-750"
role: "Founder, Sole Engineer"
timeframe: "2026 – ongoing"
order: 3
hook: "Designing user-controlled software where data, AI providers, and compute stay in the user's hands."
stack:
  - TypeScript
  - Vue.js
  - Tauri
  - LLM APIs
---

## Context

NC-750 is my personal software brand with a specific philosophy: most of the tools people use every day quietly assume that their data belongs somewhere else, that the AI provider is a fixed choice, and that "local" is a niche mode rather than the default. NC-750 proposes the opposite: bring your own key, keep your own data, and let the user pick where the compute runs, including entirely on their own machine.

Mirror is the first application built around that philosophy. It is an AI-assisted application that takes existing material such as a CV or personal notes, then conducts a structured LLM-driven interview to uncover information that static documents may miss. The result is a structured persona.json that the user owns and can reuse elsewhere.

Mirror supports both local models and hosted AI providers through the same provider abstraction. With a local model, the interaction can remain entirely on the user's machine. With a hosted provider, requests go directly from the application to that provider, without an NC-750 backend in the middle. This architecture reflects the broader goal behind NC-750: integrating AI as a useful software component without requiring the user to surrender control of their data or provider choice.

## What I own

As the sole engineer behind NC-750 and Mirror, I own:
- The product philosophy and its constraints around user data, provider choice, and local-first operation.
- Mirror's application architecture and implementation, including the structured interview flow, interview state and progression, provider abstraction, persona schema, and the pipeline from source material to the generated persona.json.
- Integration with local and hosted LLM providers behind a common interface.
- The application's web/PWA and desktop delivery through Vue, TypeScript, and Tauri.
- The privacy model: no user accounts, no NC-750 backend between the user and their chosen AI provider, and minimal telemetry.

## Challenge

**Designing for different LLM providers and models.** Mirror deliberately avoids tying the user to a specific AI provider, but different models can interpret instructions and conduct the interview differently. The challenge is therefore not only connecting to multiple providers, but designing the interview flow and prompts so that the application remains useful across models with different capabilities and behavior.

The provider abstraction separates Mirror's application logic from provider-specific APIs, while the interview itself uses structured stages and state rather than relying on a single open-ended conversation. This does not eliminate differences between models, but it reduces how much the rest of the application depends on a particular provider.

## Outcome

Mirror is a shipped application available as both a PWA and a Tauri desktop application. The complete workflow runs end-to-end, from importing source material through the LLM-driven interview to generating the final persona.json. The profile used to build this portfolio was itself produced using Mirror.

The project also established the initial architecture, design language, and product principles for NC-750. Future applications can build on the same emphasis on user-owned data, provider choice, and local execution.

## Links

[Try Mirror](https://mirror.nc-750.com)
[NC-750/Github](https://github.com/nc-750)
