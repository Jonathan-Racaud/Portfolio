---
title: "NC-750 and Mirror — personal software that respects the person using it"
organization: "NC-750"
role: "Founder, Sole Engineer"
timeframe: "2025 – ongoing"
order: 3
hook: "A brand and a first app built on a stance: bring your own key, keep your own data, choose where your compute runs. Mirror turns your CV and an interview with an LLM into a persona.json — on your machine if you want it to."
stack:
  - "Python"
  - "LLM Integration (BYOK)"
  - "Local & Remote Inference"
  - "Privacy-Preserving Architecture"
  - "PolyForm 1.0 Noncommercial (planned)"
---

## Context

NC-750 is a personal software brand with a specific stance: most of the tools people use every day quietly assume that their data belongs somewhere else, that the model provider is a fixed choice, and that "local" is a niche mode rather than the default. NC-750 proposes the opposite — bring your own key, keep your own data, and let the user pick where the compute runs, including entirely on their own machine.

Mirror is the first app under the brand. It's the tool I used to build the profile behind this portfolio: you feed it your CV and any other career material, it runs an LLM-driven interview to surface what a static résumé misses, and it produces a structured `persona.json` you can reuse elsewhere. When you point it at a local model, nothing leaves your machine except your input to the model. When you point it at a hosted provider, the only outbound link is directly to that provider — no NC-750 backend in the middle.

## What I owned

- The brand's stance and product philosophy — where BYOK ends and user-controlled compute begins, and what "respects your data" actually has to mean in the code.
- Mirror's architecture — the interview loop, provider abstraction (local model or hosted provider), the persona schema, and the flow from raw inputs to the aggregated `persona.json`.
- The single-tenant model: no accounts, no telemetry, no server-side state to leak.
- Repository, licensing plan (source-available under PolyForm 1.0 Noncommercial), and the roadmap that positions Mirror inside a broader NC-750 ecosystem.

## Challenges

**Making BYOK feel like the default, not a checkbox.** Most apps that support "bring your own key" treat it as an escape hatch — the paid hosted flow is the golden path and BYOK is bolted on. Mirror had to be the other way around. That shaped the provider abstraction, the setup flow, and the fact that there is no NC-750 account to sign into.

**A persona schema that's actually useful downstream.** The output of a good interview is more than a transcript. I designed a `persona.json` structure that captures strengths, weaknesses, values, hidden assets, career story, and derived pieces (a CV summary, a LinkedIn about section, an interview pitch) — each traceable back to sources so a human can audit any claim.

**Deciding what NC-750 is, not just what it ships.** A brand with a stance has to say no more often than yes. I have working code for a broader ecosystem and plans for a NixOS-based distro aimed at non-power users; keeping Mirror focused instead of expanding it prematurely is the ongoing product decision.

## Outcome

- Mirror is running end-to-end. The `persona.json` behind this portfolio was produced by it.
- The brand's positioning, license direction (PolyForm 1.0 Noncommercial, source-available), and roadmap are set.
- Next up in the NC-750 ecosystem: additional privacy-respecting personal tools, and a NixOS distro aimed at people who want a coherent computing environment without becoming their own sysadmin.

## Links

Currently a closed monorepo, moving to source-available under PolyForm 1.0 Noncommercial. Public repository coming.
