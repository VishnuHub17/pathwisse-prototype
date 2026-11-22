# Pathwisse learner app: build spec

This file describes the 24 approved screens. The source of truth is the pixel design in `screens/*.png` and the markup in `html/*.html`. If this text and an image ever disagree, the image and HTML win.

## 1. Scope
- Web only. Laptop width 1440px is the design width. Tablet (about 768 to 1024px) must reflow the same layout without changing content, colours or components. No mobile layout.
- 24 screens, listed in section 4. Nothing else is in scope: no onboarding (S04 to S08), no account check (S03), no billing, no skill catalogue, no password, no OTP code.
- Sample text, names, numbers and lists in the designs are placeholder data. Render them exactly as shown for now and keep them in one data file so the backend can replace them later. Do not invent new data.

## 2. Design tokens (measured from the screens)
Fonts: **Inter** (400, 500, 600, 700) for all UI text. **JetBrains Mono** (400, 500, 600) for small uppercase labels, curriculum lists, lesson counts and the hero description line. Letter spacing -0.005em on body text.

Colour values that appear in the designs, most used first. Use these exact values; do not add others.

**Backgrounds**

- `#FFFFFF` (205 uses)
- `#EEEBFF` (55 uses)
- `#F5F5F8` (44 uses)
- `#222226` (29 uses)
- `#5B4BF0` (22 uses)
- `#E4F6EC` (18 uses)
- `#F3F3F5` (15 uses)
- `#1E9B5C` (14 uses)
- `#E4E4E9` (11 uses)
- `#FFF0E0` (11 uses)
- `#E3EEFF` (11 uses)
- `#FFE9F1` (9 uses)
- `#F1EFFF` (9 uses)
- `#E0700F` (8 uses)
- `#DFF5E8` (8 uses)
- `#E0F4F8` (8 uses)
- `#EEEEF2` (8 uses)
- `#D93A78` (7 uses)
- `#14161E` (6 uses)
- `#2F6BEA` (5 uses)
- `#4A3CD6` (4 uses)
- `#F7F7F9` (4 uses)
- `#F6F5FF` (4 uses)
- `#0E8FAD` (4 uses)

**Text colours**

- `#8A8A94` (387 uses)
- `#111111` (280 uses)
- `#33333C` (140 uses)
- `#7A7A85` (112 uses)
- `#44444F` (109 uses)
- `#FFFFFF` (70 uses)
- `#55555F` (63 uses)
- `#6B6B75` (56 uses)
- `#4E41D4` (38 uses)
- `#3F31C4` (26 uses)
- `#1E7A3C` (19 uses)
- `#000000` (19 uses)
- `#555555` (14 uses)
- `#222222` (14 uses)
- `#5B4BF0` (13 uses)
- `#2A2A33` (13 uses)
- `#5B5B66` (7 uses)
- `#CFD2FF` (4 uses)
- `#9A9AA4` (4 uses)
- `#7EE0A8` (3 uses)

**Type sizes used (size / weight, most used first)**

- 12px/400
- 16px/700
- 11px/600
- 11px/400
- 14px/400
- 11px/500
- 15px/500
- 14px/600
- 15px/700
- 12px/600
- 13px/500
- 13px/600
- 12px/500
- 13px/400
- 10.5px/600
- 12.5px/500
- 13.5px/400
- 15px/400
- 14.5px/400
- 18px/700
- 14px/700
- 16px/600
- 17px/700
- 28px/700
- 14px/500
- 10px/500

**Named accents** (violet is primary): violet `#5B4BF0`, orange `#E0700F`, green `#1E9B5C`, pink `#D93A78`, blue `#2F6BEA`. Dark pill buttons use `#222226` with a 3px solid `#000` bottom shadow. Cards use 1px `#E6E6EC` borders and 12 to 20px radii. Top bar is 64px high with a 1px `#EAEAEE` bottom border.

The exact CSS for every component is in the `<style>` block of each file in `html/`. The same class names repeat across files (`.btn`, `.tb`, `.nv`, `.ib`, `.mo`). Extract them into shared components, keeping values identical.

## 3. Product rules (from the approved flow)
- A visitor can browse roadmaps and read FREE lessons without signing in. Sign in is asked only for a locked lesson or to save progress.
- Sign in is passwordless: Google, or an email magic link. Same flow for sign up and log in. Link works once and expires in 15 minutes.
- After sign in the learner lands on Home (no sidebar). Roadmap menus appear only inside a roadmap workspace and differ per roadmap.
- Four roadmaps: AI engineer, Forward deployed engineer, AI agents developer, AI system design engineer.
- The word "modules" is used, never "skills".
- Community posts have review statuses: pending, published, needs changes, not approved.

## 4. Screens

| # | Section | Screen | Image | HTML |
|---|---|---|---|---|
| 01 | S01 | S01 · Welcome | screens/01-F01-Landing.png | html/01-F01-Landing.html |
| 02 | S01 | S01 · Roadmap overview (not signed in) | screens/02-F02-Overview.png | html/02-F02-Overview.html |
| 03 | S01 | S01 · Switch roadmap | screens/03-F04-Switcher.png | html/03-F04-Switcher.html |
| 04 | S02 | S02 · Sign in to open a lesson | screens/04-F05-SignIn-Prompt.png | html/04-F05-SignIn-Prompt.html |
| 05 | S02 | S02 · Create account | screens/05-A01-SignUp.png | html/05-A01-SignUp.html |
| 06 | S02 | S02 · Log in | screens/06-A02-LogIn.png | html/06-A02-LogIn.html |
| 07 | S02 | S02 · Check your inbox | screens/07-A03-Check-Inbox.png | html/07-A03-Check-Inbox.html |
| 08 | S02 | S02 · The magic link email | screens/08-A04-Your-Email.png | html/08-A04-Your-Email.html |
| 09 | S02 | S02 · Signing in | screens/09-A05-Signing-In.png | html/09-A05-Signing-In.html |
| 10 | S02 | S02 · Link expired | screens/10-A06-Link-Expired.png | html/10-A06-Link-Expired.html |
| 11 | S02 | S02 · Could not sign in | screens/11-A07-Sign-In-Failed.png | html/11-A07-Sign-In-Failed.html |
| 12 | S11 | S11 · Home (signed in) | screens/12-F03-Home.png | html/12-F03-Home.html |
| 13 | S12 | S12 · Roadmap workspace, signed in (AI engineer) | screens/13-F06-Roadmap-AI-Engineer.png | html/13-F06-Roadmap-AI-Engineer.html |
| 14 | S12 | S12 · Another roadmap, different menus (Forward deployed engineer) | screens/14-F07-Roadmap-FDE.png | html/14-F07-Roadmap-FDE.html |
| 15 | S13 | S13 · Lesson workspace | screens/15-F08-Lesson.png | html/15-F08-Lesson.html |
| 16 | S14 | S14 · Projects | screens/16-F09-Projects.png | html/16-F09-Projects.html |
| 17 | S14 | S14 · Project detail | screens/17-F10-Project-Detail.png | html/17-F10-Project-Detail.html |
| 18 | S15 | S15 · Community, people and companies | screens/18-F11-Community-People.png | html/18-F11-Community-People.html |
| 19 | S15 | S15 · Community, discussions | screens/19-F12-Community-Discussions.png | html/19-F12-Community-Discussions.html |
| 20 | S16 | S16 · Top right menu | screens/20-F13-User-Menu.png | html/20-F13-User-Menu.html |
| 21 | S16 | S16 · My profile | screens/21-F14-My-Profile.png | html/21-F14-My-Profile.html |
| 22 | S16 | S16 · Share a post | screens/22-F15-Share-Post.png | html/22-F15-Share-Post.html |
| 23 | S16 | S16 · Account | screens/23-F16-Account.png | html/23-F16-Account.html |
| 24 | S16 | S16 · Another learner's profile (from Community) | screens/24-F17-Public-Profile.png | html/24-F17-Public-Profile.html |

Per screen below: size, then every piece of visible text in reading order (copy it exactly). Layout, spacing and colour come from the image and HTML. Notes from the design canvas follow each section.


### Section S01

**Design notes: N01-Welcome-Notes**

```
PRD S01
Welcome

Explain what Pathwisse is and let a visitor start, log in or browse, without needing an account.

WHAT THE USER DOES
Reads the headline and the short explanation.
Clicks "Open the roadmaps" or a roadmap card to look around. No sign-in needed.
Or clicks "Sign in" / "Get started" to create or open an account.
EXPECTED BEHAVIOUR
Works for a new visitor with no session and shows no private data.
The page they came from is remembered, so they return there after signing in.
A visitor can reach a roadmap within two clicks.
Roadmap and lesson counts come from the backend, not typed into the page.
STATES TO COVER
Loading (skeleton cards)
Mobile menu open and closed
Network error with retry
Invalid or expired link
WHERE IT LEADS
S02 Sign in
S06 / S07 browse (read only)
```

**Design notes: N02-Overview-Notes**

```
PRD S06 / S07 / S12 (read only)
Roadmap overview, not signed in

Let a visitor open a roadmap and look at everything it contains before deciding to sign in.

WHAT THE USER DOES
Lands here from a roadmap card, the switcher or a shared link.
Reads the roadmap summary and the curriculum structure.
Opens any lesson marked FREE and reads or tries it.
Clicks a lesson marked "Sign in" and gets the sign-in prompt.
Clicks "Start" to begin the first lesson, or "Sign in" to save progress.
EXPECTED BEHAVIOUR
The progress strip says nothing is saved until the person signs in.
Free lessons open directly. Locked lessons never open by URL.
Counts of free lessons and total lessons come from the backend.
No roadmap is saved or activated for a visitor.
STATES TO COVER
Loading skeleton
Roadmap not found
Lesson removed
Offline or reconnect
WHERE IT LEADS
S02 prompt on a locked lesson
S13 free lesson
Switch roadmap
```

**Design notes: N04-Switcher-Notes**

```
PRD S11 / S16 path switching
Switch roadmap

Let the learner move between the four roadmaps from anywhere in the app.

WHAT THE USER DOES
Clicks the roadmap name in the top bar.
Sees all four roadmaps with skills and lesson counts. The current one is ticked.
Picks another roadmap, or "Browse all roadmaps".
The page reloads that roadmap, with the same sidebar.
EXPECTED BEHAVIOUR
Not signed in: switching is just browsing.
Signed in: one roadmap is the active path. Choosing a different one shows what changes and asks to confirm.
Old progress is kept, never deleted.
The sidebar and menus stay the same for every roadmap, only the content changes.
STATES TO COVER
Menu open
Roadmap unavailable
Confirm switch (signed in)
Switch failed with retry
WHERE IT LEADS
S12 roadmap
S09 plan confirm (new active path)
```

#### 01 S01 · Welcome

Files: `01-F01-Landing`. Canvas size 1440 x 1750px.

Visible text:

```
Pathwisse
Learning
Roadmaps
Community
For colleges and companies
Sign in
Get started
New: AI engineer roadmap is open
Everything an AI engineer knows. Mapped.

Sequenced courses from first principles to production, with hands-on tools in every lesson. Start free, no account needed.

Open the roadmaps
Sign in
Roadmaps

Pick one to open it. Switch any time from the top bar.

AI engineer
4 modules · 48 lessons
Build and ship products that use models, retrieval and evaluation.
8 free lessons
Open
Forward deployed engineer
4 modules · 48 lessons
Take AI into customer environments: scope, integrate and hand off.
8 free lessons
Open
AI agents developer
4 modules · 48 lessons
Design agents that call tools and APIs, and test them properly.
8 free lessons
Open
AI system design engineer
4 modules · 48 lessons
Design the services and operations that keep AI systems reliable.
8 free lessons
Open
How it works

 

1
Open any roadmap
No account needed. Read the lessons marked FREE and try the tools.
2
Sign in when you want more
Save progress, open every lesson and join the community.
3
Learn, practise, build
Each topic ends with a practice, a teach-back and a project at the end of a stage.
© 2026 Pathwisse
Privacy · Terms · Contact
```

#### 02 S01 · Roadmap overview (not signed in)

Files: `02-F02-Overview`. Canvas size 1440 x 1500px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
Sign in
WORKSPACE
Overview
Projects
Community
Tools and practice
CURRICULUM
01
Python programming
0/12
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
8 lessons open
 marks lessons that need an account
YOUR PROGRESS
Nothing finished yet.
Sign in to save your progress. 0 of 48 lessons.
Sign in
Start: Variables, values and types →
AI engineer, from first principles.

Build and ship products that use models, retrieval and evaluation. 4 modules, 48 lessons, each with a hands-on tool, a practice and a teach-back.

CURRICULUM STRUCTURE
Python programming
12 LESSONS
01 →
APIs and integration
12 LESSONS
02 →
Applied AI
12 LESSONS
03 →
Deploy and operate
12 LESSONS
04 →
01
Python programming
12 lessons · 2 free
01.01
→
Variables, values and types
FREE
30 min
01.02
→
Conditions and Boolean logic
FREE
30 min
01.03
→
Loops and iteration
Sign in
30 min
01.04
→
Functions and collections
Sign in
30 min
01.05
→
Strings and structured files
Sign in
30 min
01.06
→
Modules, imports and packages
Sign in
30 min
02
APIs and integration
12 lessons · 2 free
02.01
→
HTTP requests, responses and methods
FREE
30 min
02.02
→
URLs, headers and status codes
FREE
30 min
02.03
→
REST resources and JSON contracts
Sign in
30 min
```

#### 03 S01 · Switch roadmap

Files: `03-F04-Switcher`. Canvas size 1440 x 1000px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
Sign in
WORKSPACE
Overview
Projects
Community
Tools and practice
CURRICULUM
01
Python programming
0/12
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
8 lessons open
 marks lessons that need an account
YOUR PROGRESS
Nothing finished yet.
Sign in to save your progress. 0 of 48 lessons.
Sign in
Start: Variables, values and types →
AI engineer, from first principles.

Build and ship products that use models, retrieval and evaluation. 4 modules, 48 lessons, each with a hands-on tool, a practice and a teach-back.

CURRICULUM STRUCTURE
Python programming
12 LESSONS
01 →
APIs and integration
12 LESSONS
02 →
Applied AI
12 LESSONS
03 →
Deploy and operate
12 LESSONS
04 →
ROADMAPS
AI engineer
4 modules · 48 lessons
✓
Forward deployed engineer
4 modules · 48 lessons
AI agents developer
4 modules · 48 lessons
AI system design engineer
4 modules · 48 lessons
Browse all roadmaps
```


### Section S02

**Design notes: NA-S02-Notes**

```
PRD S02
Sign up and log in

One screen for new and returning people. Google or a magic link, no password and no code to copy.

WHAT THE USER DOES
Arrives from "Sign in", "Get started" or a locked lesson.
Taps Continue with Google, or types an email and taps Send me the magic link.
Sees Check your inbox and taps Open Gmail or Open your mail app.
Clicks the link in the email, which opens Pathwisse and signs them in.
Lands on the account check (S03), then where they were headed.
EXPECTED BEHAVIOUR
Sign up and log in are the same flow with different words.
The link works once and expires in 15 minutes. Requesting another link cancels the older one.
Errors say what to do and never reveal whether an email has an account.
Terms and Privacy are linked. The page they came from is kept as the return destination.
Already signed in: skip straight to S03.
STATES TO COVER
Check your inbox
Link expired or already used
Google or network failure
Paused account (clear message)
Signing in
Invalid email typed
WHERE IT LEADS
S03 account check
Back to browsing
```

**Design notes: N03-Prompt-Notes**

```
PRD S02 entry
Sign in to open a lesson

Ask for an account only at the moment the visitor needs one, and bring them straight back afterwards.

WHAT THE USER DOES
Clicks a locked lesson or tries to save progress.
Sees this prompt over the page they were on.
Chooses "Sign in" if they have an account, or "Create account".
Or chooses "Keep browsing" and stays on the page.
EXPECTED BEHAVIOUR
The lesson they wanted is saved as the return destination.
Sign in and create account both go to the same sign-in screen, with different wording.
Closing the prompt loses nothing and changes nothing.
STATES TO COVER
Prompt open
Prompt dismissed
Already signed in (never shown)
WHERE IT LEADS
S02 sign in
Back to the lesson after S03
```

#### 04 S02 · Sign in to open a lesson

Files: `04-F05-SignIn-Prompt`. Canvas size 1440 x 1500px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
Sign in
WORKSPACE
Overview
Projects
Community
Tools and practice
CURRICULUM
01
Python programming
0/12
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
8 lessons open
 marks lessons that need an account
YOUR PROGRESS
Nothing finished yet.
Sign in to save your progress. 0 of 48 lessons.
Sign in
Start: Variables, values and types →
AI engineer, from first principles.

Build and ship products that use models, retrieval and evaluation. 4 modules, 48 lessons, each with a hands-on tool, a practice and a teach-back.

CURRICULUM STRUCTURE
Python programming
12 LESSONS
01 →
APIs and integration
12 LESSONS
02 →
Applied AI
12 LESSONS
03 →
Deploy and operate
12 LESSONS
04 →
01
Python programming
12 lessons · 2 free
01.01
→
Variables, values and types
FREE
30 min
01.02
→
Conditions and Boolean logic
FREE
30 min
01.03
→
Loops and iteration
Sign in
30 min
01.04
→
Functions and collections
Sign in
30 min
01.05
→
Strings and structured files
Sign in
30 min
01.06
→
Modules, imports and packages
Sign in
30 min
02
APIs and integration
12 lessons · 2 free
02.01
→
HTTP requests, responses and methods
FREE
30 min
02.02
→
URLs, headers and status codes
FREE
30 min
02.03
→
REST resources and JSON contracts
Sign in
30 min
Sign in to open this lesson

You can read the FREE lessons without an account. Sign in to open every lesson, use the tools and save your progress. It takes a minute and needs no password.

Sign in
Create account
Keep browsing
```

#### 05 S02 · Create account

Files: `05-A01-SignUp`. Canvas size 1440 x 900px.

Visible text:

```
Pathwisse
Back to browsing
Create your account

Start free. We email you a magic link, so there is no password and no code to copy.

Continue with Google
OR USE EMAIL
Email
you@college.edu
Send me the magic link
By continuing you agree to the
Terms
and
Privacy Policy
.
Already have an account?
Log in
```

#### 06 S02 · Log in

Files: `06-A02-LogIn`. Canvas size 1440 x 900px.

Visible text:

```
Pathwisse
Back to browsing
Welcome back

Log in to pick up where you left off. We will email you a magic link.

Continue with Google
OR USE EMAIL
Email
you@college.edu
Send me the magic link
By continuing you agree to the
Terms
and
Privacy Policy
.
New to Pathwisse?
Create an account
```

#### 07 S02 · Check your inbox

Files: `07-A03-Check-Inbox`. Canvas size 1440 x 900px.

Visible text:

```
Pathwisse
Back to browsing
Check your inbox

We sent a magic link to you@college.edu. Open the newest link in this same browser. It works once and expires in 15 minutes.

Open Gmail
↗
Open your mail app
OR
Continue with Google
Didn't get it? Check spam, or request another link
Use a different email
```

#### 08 S02 · The magic link email

Files: `08-A04-Your-Email`. Canvas size 1440 x 900px.

Visible text:

```
Mail
Compose
Inbox
Starred
Sent
Primary    Promotions    Social
Pathwisse
Your sign-in link to Pathwisse · Click the button to sign in. This link works once.
NEW
Placements Cell
Interview prep session on Friday · Join us at 4 PM in Hall B for a mock interview round.
GitHub
A new login to your account · We noticed a new sign-in from Chrome on Windows.
Coursera
Your weekly learning digest · Pick up where you left off with 3 new lessons.
LinkedIn
5 jobs that match your profile · AI engineer roles near you are hiring now.
Sign in to Pathwisse

Click the button to sign in as you@college.edu. This link works once and expires in 15 minutes. If you did not ask for it, ignore this email.

Sign in to Pathwisse
```

#### 09 S02 · Signing in

Files: `09-A05-Signing-In`. Canvas size 1440 x 900px.

Visible text:

```
Pathwisse
Back to browsing
Signing you in

Link confirmed. Taking you to Pathwisse.
```

#### 10 S02 · Link expired

Files: `10-A06-Link-Expired`. Canvas size 1440 x 900px.

Visible text:

```
Pathwisse
Back to browsing
This link has expired

Magic links work once and last 15 minutes. It may already have been used, or a newer link was sent. Request a fresh one to continue.

Send me a new linkUse a different email
Or continue with Google
```

#### 11 S02 · Could not sign in

Files: `11-A07-Sign-In-Failed`. Canvas size 1440 x 900px.

Visible text:

```
Pathwisse
Back to browsing
We couldn't sign you in

Something went wrong on our side or with Google. Nothing was changed on your account.

Try againUse email instead
If this keeps happening, your account may be paused. Contact your college admin or support.
```


### Section S11

**Design notes: N05-Home-Notes**

```
PRD S11
Home, signed in

A calm landing page after sign in. It shows what to continue and the learner's roadmaps. No roadmap menus yet.

WHAT THE USER DOES
Arrives here after sign in and the account check.
Sees "Continue learning" with the lesson they were on and taps Resume.
Or opens one of their roadmaps from the cards.
The roadmap workspace (S12) opens with its own sidebar of overview, projects, community and tools.
EXPECTED BEHAVIOUR
No sidebar here. Projects, Community and Tools and practice belong to a roadmap, so they appear only after one is chosen.
Resume always points to a valid lesson, from saved progress.
Cards show progress per roadmap, free lessons and skills.
Nothing from another workspace shows here.
Switching to Home from a roadmap is through the logo or the Home link.
STATES TO COVER
New user, nothing started
Returning learner
No roadmap chosen yet
Loading or error with retry
WHERE IT LEADS
S12 roadmap workspace
S13 lesson (Resume)
S16 settings
```

#### 12 S11 · Home (signed in)

Files: `12-F03-Home`. Canvas size 1440 x 1000px.

Visible text:

```
Pathwisse
A
Ada
Personal workspace
WORKSPACE
Overview
Projects
Community
Tools and practice
CURRICULUM
01
Python programming
3/12
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
8 lessons open
 marks lessons that need an account
Welcome back, Ada
Personal workspace
CONTINUE LEARNING
AI ENGINEER
Functions and collections
Python programming · 18 min left
▶ Resume
YOUR ROADMAPS
AI engineer
▤ 3/48 lessons
Start with: Variables, values and types
8 free lessons
4 modules
Continue
Forward deployed engineer
▤ 0/48 lessons
Start with: Variables, values and types
8 free lessons
4 modules
Open
AI agents developer
▤ 0/48 lessons
Start with: Variables, values and types
8 free lessons
4 modules
Open
AI system design engineer
▤ 0/48 lessons
Start with: Client-server model and ports
8 free lessons
4 modules
Open
Sample roles built from the real skill catalogue.
```


### Section S12

**Design notes: NC-S12-Notes**

```
PRD S11 / S12 (signed in)
Roadmap workspace, signed in

Opening a roadmap from Home gives the same overview as browsing, now with the learner's progress and every lesson open.

WHAT THE USER DOES
On Home (S11), taps Continue or Open on a roadmap card.
Lands here: progress strip, roadmap summary, curriculum structure and lessons.
Uses the sidebar. Its menus (Projects, Community, Tools and practice) belong to this roadmap.
Switches roadmap from the top bar and the whole workspace changes.
Resumes the next lesson from the progress strip.
EXPECTED BEHAVIOUR
Same layout as the signed-out overview, so nothing feels new after signing in.
No lock tags or Sign in prompts. Every lesson in the roadmap is open.
Sidebar sections, projects, community and tools change with the roadmap.
Progress and the bottom counter come from saved completion for this workspace.
Switching roadmap keeps old progress and never deletes it.
STATES TO COVER
New learner, nothing finished
Some lessons done
Roadmap complete
Failed to load, retry
WHERE IT LEADS
S13 lesson workspace
S14 projects
S15 community
Switch roadmap
```

#### 13 S12 · Roadmap workspace, signed in (AI engineer)

Files: `13-F06-Roadmap-AI-Engineer`. Canvas size 1440 x 1500px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
A
Ada
Free plan
AI ENGINEER WORKSPACE
Overview
PRACTICE
Projects
Tools and practice
Interview questions
LIBRARY
Articles and papers
Glossary
COMMUNITY
Community
CURRICULUM
01
Python programming
3/12
✓
Variables, values and types
✓
Conditions and Boolean logic
✓
Loops and iteration
Functions and collections
Strings and structured files
Modules, imports and packages
Exceptions, validation and error handling
Classes, type hints and CLI apps
Program architecture and maintainability
Dependencies, configuration and logging
Performance and resource trade-offs
Customer-style tool delivery
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
3 / 48 UNDERSTOOD
YOUR PROGRESS
3 of 48 lessons done
Keep your streak going with one short lesson today.
Resume: Functions and collections →
AI engineer, from first principles.

Build and ship products that use models, retrieval and evaluation. 4 modules, 48 lessons, each with a hands-on tool, a practice and a teach-back.

CURRICULUM STRUCTURE
Python programming
12 LESSONS
01 →
APIs and integration
12 LESSONS
02 →
Applied AI
12 LESSONS
03 →
Deploy and operate
12 LESSONS
04 →
01
Python programming
12 lessons
01.01
→
Variables, values and types
30 min
01.02
→
Conditions and Boolean logic
30 min
01.03
→
Loops and iteration
30 min
02
APIs and integration
12 lessons
02.01
→
HTTP requests, responses and methods
30 min
02.02
→
URLs, headers and status codes
30 min
02.03
→
REST resources and JSON contracts
30 min
```

#### 14 S12 · Another roadmap, different menus (Forward deployed engineer)

Files: `14-F07-Roadmap-FDE`. Canvas size 1440 x 1500px.

Visible text:

```
Pathwisse
Forward deployed engineer
Roadmap
A
Ada
Free plan
FORWARD DEPLOYED ENGINEER WORKSPACE
Overview
PRACTICE
Client scenarios
Projects
LIBRARY
Playbooks
Handoff templates
COMMUNITY
Community
CURRICULUM
01
Python programming
0/12
Variables, values and types
Conditions and Boolean logic
Loops and iteration
Functions and collections
Strings and structured files
Modules, imports and packages
Exceptions, validation and error handling
Classes, type hints and CLI apps
Program architecture and maintainability
Dependencies, configuration and logging
Performance and resource trade-offs
Customer-style tool delivery
02
APIs and integration
0/12
03
Discovery and scoping
0/12
04
Communication and handoff
0/12
0 / 48 UNDERSTOOD
YOUR PROGRESS
Nothing finished yet.
Complete one quick lesson to start your streak. 0 of 48 lessons.
Start: Variables, values and types →
Forward deployed engineer, from first principles.

Take AI into customer environments: scope, integrate and hand off. 4 modules, 48 lessons, each with a hands-on tool, a practice and a teach-back.

CURRICULUM STRUCTURE
Python programming
12 LESSONS
01 →
APIs and integration
12 LESSONS
02 →
Discovery and scoping
12 LESSONS
03 →
Communication and handoff
12 LESSONS
04 →
01
Python programming
12 lessons
01.01
→
Variables, values and types
30 min
01.02
→
Conditions and Boolean logic
30 min
01.03
→
Loops and iteration
30 min
02
APIs and integration
12 lessons
02.01
→
HTTP requests, responses and methods
30 min
02.02
→
URLs, headers and status codes
30 min
02.03
→
REST resources and JSON contracts
30 min
```


### Section S13

**Design notes: ND-S13-Notes**

```
PRD S13
Lesson workspace

Where learning happens: a video, written notes and a small side panel, with the roadmap menus still on the left.

WHAT THE USER DOES
Clicks a lesson card on the roadmap workspace (S12).
Watches the video, or skips to the notes below it.
Reads the notes and tries the tool in the side panel.
Marks the lesson complete and moves on with Next.
EXPECTED BEHAVIOUR
The left side keeps the roadmap menus and shows the module's lessons with progress.
The video comes first, with the notes under it on the same page.
A narrow right panel holds quick tips, the tool and where the lesson is used. It is a plain panel for now, not an AI chat.
A bottom bar has previous, module progress, mark complete and Next.
Completing a lesson updates the sidebar tick and the progress counter.
Visitors can open only FREE lessons. A locked lesson shows the sign in prompt.
STATES TO COVER
Not started
Playing
Completed (tick, can undo)
Locked for visitors
Video failed, retry
Last lesson in a module
WHERE IT LEADS
Next lesson
S12 roadmap
Tool or practice
```

#### 15 S13 · Lesson workspace

Files: `15-F08-Lesson`. Canvas size 1440 x 1620px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
A
Ada
Free plan
AI ENGINEER WORKSPACE
Overview
Projects
Tools and practice
Interview questions
Community
CURRICULUM
01
Python programming
0/12
Variables, values and types
Conditions and Boolean logic
Loops and iteration
Functions and collections
Strings and structured files
Modules, imports and packages
Exceptions, validation and error handling
Classes, type hints and CLI apps
Program architecture and maintainability
Dependencies, configuration and logging
Performance and resource trade-offs
Customer-style tool delivery
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
0 / 48 UNDERSTOOD
OVERVIEW / PYTHON PROGRAMMING / 01.01
LESSON 01 OF 12 · 30 MIN
Variables, values and types
PYTHON PROGRAMMING · LESSON 01.01
Variables, values and types
0:00 / 14:20
1x
CC
⛶
NOTES
A variable is a name for a value

When you write price = 40, Python stores the value 40 and attaches the name price to it. Later, using the name gives you the value back. Nothing is declared in advance, and the name can point at something else whenever you like.

# a name, a value
price = 40
name = "Ada"
is_free = True
print(name, price, is_free)
Every value has a type

The type decides what you can do with a value. Numbers can be added, text can be joined, and mixing them without care raises an error. Check a type any time with type(value).

Four types cover most beginner work: int for whole numbers, float for decimals, str for text and bool for True or False.

Try it yourself

Open the practice tool, create three variables of different types and print each type. Then change one and see what breaks.

Mark complete
NEXT · 01.02
Conditions and Boolean logic
QUICK TIPS
💡
Names are case sensitive. Price and price are different.
⚠
One equals sign assigns. Two compare.
✓
Use clear names like total_price.
TOOL FOR THIS LESSON
▶
Python playground
Run code in the browser
USED IN
◆
Build a small price calculator
◆
Project: clean a CSV file
‹   Python programming   1 / 12   ›
Video
⌘
✓
Next →
```


### Section S14

**Design notes: NE-S14-Notes**

```
PRD S14
Projects

Hands-on builds that belong to the chosen roadmap, so a learner can practise what the lessons taught.

WHAT THE USER DOES
Opens Projects from the roadmap sidebar.
Scans the cards: title, tools used and what they will build.
Opens a project to read the brief and watch the walkthrough.
Uses the list on the right to revisit the lessons it needs.
Moves to the next project.
EXPECTED BEHAVIOUR
Projects change with the roadmap. AI engineer and Forward deployed engineer show different sets.
Grid and List views show the same projects.
Each card names the tools and the outcome, with an illustration.
The detail page has the brief, a video, written steps and the lessons it uses.
Signed out visitors see the list and the first part, then a sign in prompt.
STATES TO COVER
Empty (no projects yet)
Loading
Project locked
Completed
WHERE IT LEADS
Project detail
Lesson from the side list
Next project
```

#### 16 S14 · Projects

Files: `16-F09-Projects`. Canvas size 1440 x 1500px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
A
Ada
Free plan
AI ENGINEER WORKSPACE
Overview
PRACTICE
Projects
Tools and practice
Interview questions
LIBRARY
Articles and papers
Glossary
COMMUNITY
Community
CURRICULUM
01
Python programming
3/12
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
3 / 48 UNDERSTOOD
Projects
Hands-on builds for the AI engineer roadmap. Each one uses lessons you have already met.
5 PROJECTS
List
Grid
PR.01
★  →
Document Q&A bot
Python
OpenAI
Chroma
WHAT YOU BUILD

Build a bot that answers questions from your own PDFs.

PR.02
★  →
Support chatbot with retrieval
FastAPI
Postgres
WHAT YOU BUILD

Add retrieval to a chatbot so it stops guessing.

PR.03
★  →
Evaluate a model
Python
pytest
WHAT YOU BUILD

Score a model on a small test set you design.

PR.04
★  →
Deploy a model API
Docker
FastAPI
Render
WHAT YOU BUILD

Wrap a model in an API and ship it.

PR.05
★  →
Trace a failing agent
Python
LangSmith
WHAT YOU BUILD

Find out why an agent loops and fix it.
```

#### 17 S14 · Project detail

Files: `17-F10-Project-Detail`. Canvas size 1440 x 1500px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
A
Ada
Free plan
AI ENGINEER WORKSPACE
Overview
PRACTICE
Projects
Tools and practice
Interview questions
LIBRARY
Articles and papers
Glossary
COMMUNITY
Community
CURRICULUM
01
Python programming
3/12
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
3 / 48 UNDERSTOOD
OVERVIEW / PROJECTS / PR.01
PR.01 · PROJECT · 4 HOURS
Project: Document Q&A bot
PROJECT BRIEF
Document Q&A bot
Video walkthrough · 12 min · Open to everyone signed in
PROJECT · 1,040 WORDS
What you will build

A small bot that reads a PDF and answers questions about it. It should quote the passage it used and say so when the document does not contain the answer.

IN THIS PROJECT
Splitting a document into pieces
Turning pieces into searchable vectors
Fetching the best pieces for a question
Asking the model to answer only from them
Checking answers against a few test questions
Before you start

You should be comfortable with variables, functions and calling an API. Each lesson used here is listed on the right, so you can revisit it first.

PREVIOUS
Start of projects
NEXT · PR.02
Support chatbot with retrieval
LESSONS YOU WILL USE
Variables, values and types
Names and types
Functions and collections
Reusable code
HTTP requests, responses and methods
Calling APIs
Embeddings and retrieval
Search by meaning
```


### Section S15

**Design notes: NF-S15-Notes**

```
PRD S15
Community

Two things in one place: people and companies to connect with, and a private discussion space for learners on the same roadmap.

WHAT THE USER DOES
Opens Community from the roadmap sidebar.
On People and companies, filters by mentors, alumni, peers or hiring, and taps Connect to open LinkedIn.
On Discussions, reads posts from others on the same roadmap.
Writes a question, tip, project or hiring post and replies to others.
Follows companies to hear about new roles.
EXPECTED BEHAVIOUR
Each roadmap has its own community. AI engineer posts never appear in Forward deployed engineer.
People and companies is a directory. Connect leaves Pathwisse for LinkedIn.
Discussions stay inside Pathwisse, visible only to members of that roadmap.
Posts can be tagged: roles and hiring, interview prep, projects, questions.
Only signed in learners can post. Visitors can read a preview.
Reporting and moderation controls are needed before launch.
STATES TO COVER
Empty community
No replies yet
Posting failed, retry
Reported or removed post
Not signed in
WHERE IT LEADS
Member profile on LinkedIn
Company page
Post thread
```

#### 18 S15 · Community, people and companies

Files: `18-F11-Community-People`. Canvas size 1440 x 1900px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
A
Ada
Free plan
AI ENGINEER WORKSPACE
Overview
PRACTICE
Projects
Tools and practice
Interview questions
LIBRARY
Articles and papers
Glossary
COMMUNITY
Community
CURRICULUM
01
Python programming
3/12
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
3 / 48 UNDERSTOOD
Community
The AI engineer community. Meet people on the same path, find mentors and see who is hiring.
People and companies
Discussions
People to connect with
Mentors, alumni and peers on the AI engineer roadmap. Connect opens their LinkedIn.
All
Mentors
Alumni
Peers
Hiring
MI
Meera Iyer
Forward deployed engineer · Northwind Labs

Moved from support engineering into FDE. Happy to review project write-ups.

MENTOR
in  Connect
AR
Arjun Rao
AI engineer · Cobalt AI

Batch of 2024. Built retrieval systems for fintech. Shares interview notes.

ALUMNI
in  Connect
SQ
Sana Qureshi
Hiring manager · Fieldstone

Hiring two AI engineers and one FDE. Reads every project link.

HIRING
in  Connect
DM
Dev Malhotra
Student · NIT Calicut

Working through the Python module. Looking for a study partner.

PEER
in  Connect
NV
Nisha Verma
AI agents developer · Orbit

Builds tool-calling agents. Posts weekly debugging tips.

MENTOR
in  Connect
KN
Karthik Nair
Solutions engineer · Brightpath

Customer-facing technical role. Can explain what FDE interviews test.

ALUMNI
in  Connect
PM
Priya Menon
Student · IIIT Hyderabad

Building the document Q&A project. Open to pair debugging.

PEER
in  Connect
RD
Rohan Das
Recruiter · Helix Systems

Sources early career AI talent from Pathwisse portfolios.

HIRING
in  Connect
AR
Anjali Reddy
AI system design engineer · Lattice

Reviews architecture diagrams and capacity thinking.

MENTOR
in  Connect
Companies hiring AI engineers
Teams that hire from this roadmap. Follow to see new roles.
N
Northwind Labs
Bengaluru

3 open roles open to students from this roadmap.

HIRING
Follow
C
Cobalt AI
Hyderabad

2 open roles open to students from this roadmap.

HIRING
Follow
F
Fieldstone
Pune

FDE, AI engineer open to students from this roadmap.

HIRING
Follow
O
Orbit
Remote

Agents developer open to students from this roadmap.

HIRING
Follow
B
Brightpath
Chennai

Solutions, FDE open to students from this roadmap.

HIRING
Follow
L
Lattice
Gurugram

System design open to students from this roadmap.

HIRING
Follow
```

#### 19 S15 · Community, discussions

Files: `19-F12-Community-Discussions`. Canvas size 1440 x 1900px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
A
Ada
Free plan
AI ENGINEER WORKSPACE
Overview
PRACTICE
Projects
Tools and practice
Interview questions
LIBRARY
Articles and papers
Glossary
COMMUNITY
Community
CURRICULUM
01
Python programming
3/12
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
3 / 48 UNDERSTOOD
Community
The AI engineer community. Meet people on the same path, find mentors and see who is hiring.
People and companies
Discussions
AL
Share a question, tip or win with AI engineers...
Question
Tip
Project
Hiring
Post
MI
Meera IyerFDE · Northwind Labs · 2h

Northwind is opening two forward deployed engineer roles for freshers. They care about clear write-ups more than long projects. Happy to answer questions here.

ROLES AND HIRINGFDE
♡ 24
💬 6 replies
Share
DM
Dev MalhotraStudent · NIT Calicut · 3h

What did your first FDE interview round look like? Trying to prepare for a customer scenario round.

INTERVIEW PREP
♡ 9
💬 2 replies
Share
KN
Karthik Nair 1h
They ask you to walk through a messy customer setup. Practise explaining your steps out loud.
DM
Dev Malhotra 42m
Thanks, this helps. Did they ask about APIs too?
NV
Nisha VermaAgents developer · Orbit · 5h

Tip for the Trace a failing agent project: log every tool call with its input. My loop bug was one vague instruction.

PROJECTSAGENTS
♡ 31
💬 8 replies
Share
PM
Priya MenonStudent · IIIT Hyderabad · Yesterday

Finished the Document Q&A bot. Sharing my repo and a short write-up. Feedback welcome.

PROJECTS
♡ 17
💬 5 replies
Share
AI ENGINEER COMMUNITY
1,284
members · 47 online now
Joined ✓
TOPICS
All
Roles and hiring
Interview prep
Projects
Questions
COMMUNITY RULES
Be kind and specific.
No spam or referral selling.
Only roadmap members see these posts.
```


### Section S16

**Design notes: NG-S16-Notes**

```
PRD S16
Profile and account

A public profile, like a small portfolio, and an account page where the learner edits what shows on it.

WHAT THE USER DOES
Clicks their avatar at the top right and chooses My profile, Account, Billing or Sign out.
On My profile, sees their photo, name, joined date, badges, links, what they are building and their posts.
Shares a post: pastes a link, adds a title and submits it for review.
On Account, edits photo, username, display name, GitHub, LinkedIn and school, then saves.
Sets a learning goal, primary track, lessons per week and timezone.
EXPECTED BEHAVIOUR
Account and My profile hold the same details. Edit on Account, see the result on My profile.
Anyone can open a profile from Community by clicking a name or avatar.
Visitors see only published posts and built projects, never drafts or review feedback.
Posts go through review. Statuses: pending review, published, needs changes, not approved.
A daily limit on shared posts is shown as "shares left today".
GitHub, LinkedIn and school are optional and not verified.
STATES TO COVER
Empty profile (no projects, no posts)
Pending, needs changes, not approved tabs
Post submitted
Photo upload failed
Unsaved changes
WHERE IT LEADS
S15 Community
Billing
Sign out
```

#### 20 S16 · Top right menu

Files: `20-F13-User-Menu`. Canvas size 1440 x 1500px.

Visible text:

```
Pathwisse
AI engineer
Roadmap
A
Ada
Free plan
AI ENGINEER WORKSPACE
Overview
PRACTICE
Projects
Tools and practice
Interview questions
LIBRARY
Articles and papers
Glossary
COMMUNITY
Community
CURRICULUM
01
Python programming
3/12
✓
Variables, values and types
✓
Conditions and Boolean logic
✓
Loops and iteration
Functions and collections
Strings and structured files
Modules, imports and packages
Exceptions, validation and error handling
Classes, type hints and CLI apps
Program architecture and maintainability
Dependencies, configuration and logging
Performance and resource trade-offs
Customer-style tool delivery
02
APIs and integration
0/12
03
Applied AI
0/12
04
Deploy and operate
0/12
3 / 48 UNDERSTOOD
YOUR PROGRESS
3 of 48 lessons done
Keep your streak going with one short lesson today.
Resume: Functions and collections →
AI engineer, from first principles.

Build and ship products that use models, retrieval and evaluation. 4 modules, 48 lessons, each with a hands-on tool, a practice and a teach-back.

CURRICULUM STRUCTURE
Python programming
12 LESSONS
01 →
APIs and integration
12 LESSONS
02 →
Applied AI
12 LESSONS
03 →
Deploy and operate
12 LESSONS
04 →
01
Python programming
12 lessons
01.01
→
Variables, values and types
30 min
01.02
→
Conditions and Boolean logic
30 min
01.03
→
Loops and iteration
30 min
02
APIs and integration
12 lessons
02.01
→
HTTP requests, responses and methods
30 min
02.02
→
URLs, headers and status codes
30 min
02.03
→
REST resources and JSON contracts
30 min
Ada Lovelace
ada@college.edu
My profile
Account
Billing
Sign out
```

#### 21 S16 · My profile

Files: `21-F14-My-Profile`. Canvas size 1440 x 1500px.

Visible text:

```
Pathwisse
Home
Roadmaps
Community
For colleges and companies
AL
Ada Lovelace
Free plan
AL
Ada Lovelace
@ada.lovelace · Joined Nov 2026
WORKING PROFESSIONAL
STUDENT
AI ENGINEER

Learning to build and ship AI products. Currently on the AI engineer roadmap.

in  linkedin.com/in/ada-lovelace
⌥  github.com/ada-lovelace
🎓  NIT Calicut
3
LESSONS
1
PROJECTS
2
POSTS
Edit profile
Share
BUILDING NOW
PR
Document Q&A bot
IN PROGRESS · Python · OpenAI · Chroma

Reads a PDF and answers questions with the passage it used.

BUILT
</>
Show what you're building

A weekend experiment, a useful tool or your latest launch. Give your work a home on your profile.

Add your first project →
CONTRIBUTIONS
Your posts
Track your submissions and reviewer feedback here. Only published posts are visible to visitors.
Share a post
Pending review
Published
Needs changes
Not approved
↗
How I split a PDF for retrieval
PUBLISHED · 2 days ago · 14 likes

A short write-up of the chunk sizes I tried and what worked best.

↗
My first week on the AI engineer roadmap
PUBLISHED · 6 days ago · 9 likes

What surprised me and what I would do differently.

10 SHARES LEFT TODAY
```

#### 22 S16 · Share a post

Files: `22-F15-Share-Post`. Canvas size 1440 x 1500px.

Visible text:

```
Pathwisse
Home
Roadmaps
Community
For colleges and companies
AL
Ada Lovelace
Free plan
AL
Ada Lovelace
@ada.lovelace · Joined Nov 2026
WORKING PROFESSIONAL
STUDENT
AI ENGINEER

Learning to build and ship AI products. Currently on the AI engineer roadmap.

in  linkedin.com/in/ada-lovelace
⌥  github.com/ada-lovelace
🎓  NIT Calicut
3
LESSONS
1
PROJECTS
2
POSTS
Edit profile
Share
BUILDING NOW
PR
Document Q&A bot
IN PROGRESS · Python · OpenAI · Chroma

Reads a PDF and answers questions with the passage it used.

BUILT
</>
Show what you're building

A weekend experiment, a useful tool or your latest launch. Give your work a home on your profile.

Add your first project →
CONTRIBUTIONS
Your posts
Track your submissions and reviewer feedback here. Only published posts are visible to visitors.
Share a post
Pending review
Published
Needs changes
Not approved
↗
How I split a PDF for retrieval
PUBLISHED · 2 days ago · 14 likes

A short write-up of the chunk sizes I tried and what worked best.

↗
My first week on the AI engineer roadmap
PUBLISHED · 6 days ago · 9 likes

What surprised me and what I would do differently.

10 SHARES LEFT TODAY
Share a post
✕
Add a clear title and a link. You can track its status here.
Link
Paste a link here
Title
Give this link a clear title
0/100
Topic
Projects
POST PREVIEW
🔗
Your next good find
The link, title and thumbnail
appear here
10 SHARES LEFT TODAY
Submit for review ↗
```

#### 23 S16 · Account

Files: `23-F16-Account`. Canvas size 1440 x 1900px.

Visible text:

```
Pathwisse
Home
Roadmaps
Community
For colleges and companies
AL
Ada Lovelace
Free plan
AL
Ada Lovelace
FREE PLAN
SETTINGS
Account
PAYMENTS
Billing
Account
ada@college.edu
Profile details
Your name, photo and details appear on your public profile.
WORKING PROFESSIONAL
STUDENT
Profile photo
AL
Choose file
JPEG, PNG or WebP, up to 10 MB. Photos are cropped to a square.
Username
ada.lovelace
Display name
Ada Lovelace
GitHub username (optional)
ada-lovelace
LinkedIn URL (optional)
https://www.linkedin.com/in/ada-lovelace
School or university (optional)
NIT Calicut
Added to your public profile. Company and education details are not verified.
PROJECTS
Projects
Feature up to 12 projects. Add a preview from each link, or use a simple title card.
+ Add project
Reset
Save profile
LEARNING PREFERENCES
Learning goal
What do you want to be able to explain or build?
Primary track
AI engineer
Lessons per week
3
Timezone
Asia/Kolkata
Save changes
```

#### 24 S16 · Another learner's profile (from Community)

Files: `24-F17-Public-Profile`. Canvas size 1440 x 1300px.

Visible text:

```
Pathwisse
Home
Roadmaps
Community
For colleges and companies
AL
Ada Lovelace
Free plan
MI
Meera Iyer
@meera.iyer · Joined Sep 2026
WORKING PROFESSIONAL
MENTOR
FDE

Forward deployed engineer at Northwind Labs. Mentor for the FDE track.

in  linkedin.com/in/meera-iyer
⌥  github.com/meera-iyer
🎓  Northwind Labs
3
LESSONS
1
PROJECTS
2
POSTS
in  Connect
Message
BUILT
PR
Support chatbot with retrieval
Python · FastAPI · Postgres

Cut made-up answers by pulling the top three passages for each question.

PR
Deploy a model API
Docker · FastAPI · Render

Caching repeated prompts brought latency down.

POSTS
↗
What FDE interviews really test
PUBLISHED · 1 week ago · 48 likes

Three scenarios I saw and how I structured my answers.

↗
Writing a customer handoff note
PUBLISHED · 3 weeks ago · 31 likes

A template I reuse on every deployment.
```

## 5. Open questions (do not decide these in code)
1. Which two of the 16 PRD screens the team list of 14 leaves out.
2. Whether FREE means the first 2 lessons of each module (assumed).
3. Magic link lifetime and single use: confirm with backend (15 minutes assumed).
4. GitHub sign in is not offered.
5. Who reviews Community posts.
6. School or university is self reported, not verified.

## 6. Default scale
The designs were drawn at browser zoom 100%, but the approved look is about 80% zoom. Build all sizes in rem and set `html { font-size: 80% }` (single value, can be 75%). Do not use transform scale or the CSS zoom property. See PROMPT.md, section "Default scale".
