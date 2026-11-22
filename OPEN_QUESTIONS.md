# Open questions

## Carried over from SPEC.md section 5 (not decided in code)
1. Which two of the 16 PRD screens the team's list of 14 leaves out.
2. Whether FREE means the first 2 lessons of each module (assumed yes, as shown).
3. Magic link lifetime and single use: confirm with backend (15 minutes assumed, as shown).
4. GitHub sign in is not offered (not in the designs).
5. Who reviews Community posts (not specified).
6. School or university is self reported, not verified (as shown).

## Source material gaps found while building
7. **No `screens/*.png` existed anywhere** — the handoff package referenced them but they were never exported. Built directly from the `.dc.html` design-canvas source instead (confirmed byte-for-byte: colours, type, copy match SPEC.md section 2 exactly). User confirmed this is acceptable before build started.
8. **The canvas links a design system ("Pathwisse ProofOS")** with different tokens (Geist font, navy `#102f60` brand, "Learn/Practice/Build/Review/Prove" stage colours) that is **not used anywhere in the 24 screens**. Ignored per user instruction; the build uses only the literal CSS hardcoded in each screen, which matches SPEC.md section 2.

## Navigation gaps (no destination was designed, so the element is inert — a plain `<button>`/`<span>`/`<div>` with no link)
9. Three of the four roadmap cards (Forward deployed engineer's sibling "Open" buttons stayed live where FDE's own workspace *is* designed; AI agents developer and AI system design engineer are not) have no destination screen, since only AI engineer and FDE workspaces were designed.
10. FDE's sidebar items (Client scenarios, Projects, Playbooks, Handoff templates, Community) and lesson cards are inert — only the AI engineer roadmap has Projects/Community/Lesson content designed. Linking them to the AI-engineer-labeled pages would show the wrong workspace in the breadcrumb/sidebar, so they were left without a destination instead.
11. Project cards PR.02–PR.05 have no detail page (only PR.01's detail screen, F10, was designed) — left inert.
12. Lesson "Next" lesson (01.02) and the bottom-bar "Next →" button have no second lesson screen designed (only 01.01, F08) — left inert.
13. "Mark complete", "Save profile/changes", "Submit for review", "Add project", "Choose file", "Follow", "Connect", "Billing", "Sign out" and similar actions have no backend and no further designed state — left inert, per the hard rule "static front end only."
14. Community Discussions' "Post" button and the Share-a-post modal are two different composer designs for what the design notes describe as related flows; which one is authoritative for a Discussions post was not specified, so the Discussions "Post" button stays inert and only the profile's "Share a post" flow (F15) is wired to the modal.
15. ~~Roadmap switcher (F04) is only designed for a signed-out visitor...~~ **Resolved in the interactive layer below:** signed-in switching between AI engineer and Forward deployed engineer is now wired (both workspaces are designed), navigating directly with no confirm step, since the design notes' "asks to confirm" dialog has no corresponding screen. AI agents developer and AI system design engineer stay inert in every switcher (no screens designed for them).
16. "Back to browsing" on the auth screens (A01–A07) was pointed at the Welcome page (`01-welcome.html`), since the design notes don't specify which page a visitor actually came from (no return-destination memory in a static build).

## Interactive layer (added after initial build)
The user asked for a working prototype, not just clickable static mockups. Added, still with no backend, no real auth, no API calls:
- **Real email capture**: the email field on Create account / Log in is now an actual `<input>`. Submitting it (or "Continue with Google") saves to `localStorage` and the Check-your-inbox screen echoes the typed address back. "Signing you in" waits ~900ms, marks a local `pw_auth` flag, then redirects to Home — a simulated sign-in, not a real one.
- **Avatar dropdown menu**: the F13 user-menu panel now opens from the avatar on every signed-in screen (click to open, click outside or Escape to close) instead of only existing as its own static screen. Sign out clears local state and returns to Welcome.
- **Roadmap switcher dropdown**: the F04 switcher panel now opens from the top-bar roadmap name instead of only existing as its own screen. Signed out, only "AI engineer" (current) and "Browse all roadmaps" do anything — the other three roadmaps stay inert (item 9). Signed in, AI engineer ↔ Forward deployed engineer now switch directly (see item 15's resolution above); the other two roadmaps stay inert there too.
- **Locked-lesson modal**: clicking a "Sign in" lesson row on the signed-out overview now opens the F05 prompt as an overlay on the same page, instead of navigating to a separate screen. "Keep browsing" or clicking outside it closes the overlay with no navigation.
- **Lesson mark-complete toggle**: clicking "Mark complete" on the lesson screen now visually toggles a done state (reusing the same green tick style already used for completed lessons in the sidebar) and remembers it in `localStorage`. Clicking again undoes it, per the design note "Completed (tick, can undo)".
- **List/Grid and profile tabs**: these now visually switch the active tab on click. The underlying content does not change between tabs (no alternate content or empty states were designed for them — items 13 and the "not in scope" list below still apply).
- Everything in items 9–14 above is still inert for the same reasons; this layer only added behaviour to things that already had a real, designed destination.

## Default scale (added after review)
Every size in `assets/shared.css`, the inline `style="..."` attributes across all 24 pages, and the two `style.cssText` lines in `assets/app.js` was converted from `px` to `rem` (divide by 16, exact since 16 = 2^4 — no rounding). Literal `1px` values (hairline borders, 1px shadow offsets) were intentionally left as `1px`, per the explicit allowance in PROMPT.md/SPEC.md section "Default scale" — converting those to a fractional rem risks blurry hairlines. The single scale control is in `assets/shared.css`:
```
:root{--pw-scale:75%}
html{font-size:var(--pw-scale)}
```
75% is the live default (not 80% — overridden after the initial instruction was written). No `transform:scale()` or CSS `zoom` was used, so browser zoom (Ctrl +/-) still works normally on top of this. SVG `width`/`height`/`viewBox`/path-coordinate attributes were left untouched since they're unitless SVG user-space units, not CSS px.

## Not in scope (confirmed out of scope by PROMPT.md / Pathwisse-handoff.md)
Mobile layout, onboarding (S04–S08), account check (S03), billing, sign-out confirmation, skill catalogue, password, OTP code, dark-mode action (moon icon drawn, inert), empty/loading states, reporting/moderation of posts.
