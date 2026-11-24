# OpenCode Agent Instructions

## Project identity
You are working only on the YAVUZYİĞİT AI Emlak Prodüksiyon Stüdyosu repository.

## Non-negotiable boundaries
- Do not inspect, modify, connect to, or reuse other repositories unless the user explicitly asks.
- Do not call, modify, import, or connect to the user's existing 21 n8n workflows.
- Do not request, print, commit, or expose API keys, access tokens, passwords, Supabase service-role keys, or other secrets.
- Never place secrets in source code, documentation examples containing real values, client bundles, logs, or Git history.
- Do not deploy, provision paid infrastructure, create external accounts, or publish content without explicit user approval.
- Do not claim a feature is implemented or tested unless you actually ran the relevant test and observed its result.

## Product rules
- Preserve real parcel coordinates, geometry, measurements, and verified listing facts.
- Clearly label generated architecture, landscaping, and concept imagery as illustrative.
- Never invent zoning, title, permit, distance, access, or construction-readiness claims.
- Ask for missing factual inputs rather than fabricating them.
- Keep original listing photos temporary by default unless the user chooses otherwise.
- Build mobile-first; primary video output target is 1080x1920 (9:16).

## Engineering rules
- Read docs/ARCHITECTURE.md and docs/ROADMAP.md before implementation.
- Prefer modular adapters for AI/image/video providers.
- Keep heavy FFmpeg/Blender processing outside Vercel serverless functions.
- Add tests for validation, permissions, render-job state transitions, and output metadata.
- Use least-privilege access and Supabase RLS for user data.
- Add/update documentation when architecture or behavior changes.
- Do not add a dependency until its maintenance, license, and operational requirements are reviewed.
- Make small, reviewable changes and report changed files, tests run, and known limitations.
