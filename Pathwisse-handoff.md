# Pathwisse learner app: design handoff

Canvas: https://claude.ai/artifact/A7MmQXAoTRefDYwS6bGXuC (web only, laptop and tablet. No mobile yet.)

Boards are laid out in rows, left to right, one row per PRD screen, with a notes card at the end of each row. The "Brilliant style" O boards far to the right are an older direction and are not part of this handoff.

## Product rules
- A visitor can open any roadmap and read FREE lessons without signing in. Sign in is asked for only when a locked lesson is opened or progress needs saving.
- Sign in: Google, or email magic link. No password and no OTP code. Same flow for sign up and log in.
- A signed in learner lands on Home (no sidebar). Roadmap menus (Overview, Projects, Tools and practice, Interview questions, Articles and papers, Glossary, Community) appear only inside a roadmap workspace, and differ per roadmap.
- Four roadmaps: AI engineer, Forward deployed engineer, AI agents developer, AI system design engineer. Each has its own projects and community.
- No skill catalogue in this version. Modules replace "skills" in the UI.

## Screens
| Row | Boards | Notes |
|---|---|---|
| S01 Welcome | F01 landing, F02 roadmap overview (signed out), F04 roadmap switcher | Roadmap and lesson counts come from the backend |
| S02 Sign in | F05 locked lesson prompt, A01 create account, A02 log in, A03 check inbox, A04 magic link email, A05 signing in, A06 link expired, A07 sign in failed | Link works once, expires in 15 minutes (assumed) |
| S11 Home | F03 | Continue learning, roadmap cards, progress per roadmap |
| S12 Roadmap workspace | F06 AI engineer, F07 Forward deployed engineer | Curriculum dropdown in the sidebar, lessons shown per module |
| S13 Lesson | F08 | Video, notes, right panel (tips, tool, used in), bottom bar |
| S14 Projects | F09 list, F10 detail | Grid and list views |
| S15 Community | F11 people and companies, F12 discussions | Discussions are private to the roadmap. Connect opens LinkedIn |
| S16 Profile and account | F13 avatar menu, F14 my profile, F15 share a post, F16 account, F17 another learner's profile | Posts go through review: pending, published, needs changes, not approved |

## Sample content to replace with real data
Roadmap descriptions and the mapping of modules to roadmaps, lesson notes, tips, tool names, projects, people, companies, posts and all numbers (members online, likes, shares left) are sample text.

## Not designed yet
Account check and workspace picker (S03), onboarding screens (S04 to S08), roadmap preview and create workspace (S09, S10), Billing, Sign out confirmation, empty and loading states for most lists, reporting and moderation of posts, mobile.

## Open questions for the team
1. Which two of the 16 PRD screens does the team's list of 14 leave out?
2. What does FREE mean: the first 2 lessons of each module (assumed)?
3. Magic link lifetime (15 minutes) and single use: confirm with backend.
4. Should signing in with GitHub be offered? Not in the PRD, so not designed.
5. How are Community posts reviewed, and by whom?
6. Is a school or university verified, or self reported (designed as self reported)?
