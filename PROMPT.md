# Prompt for Claude Code (paste this as your first message)

You are building the front end of the Pathwisse learner app from an approved design. This is a faithful reproduction task, not a design task.

Read these in order before writing code:
1. `README.md`
2. `SPEC.md` (tokens, rules, every screen's text, design notes)
3. Every image in `screens/` (open each one and look at it)
4. Every file in `html/` (these are the exact markup and CSS of each approved screen)

## Hard rules

1. **Reproduce exactly.** Every screen must match its image in `screens/` at 1440px width: same layout, spacing, font sizes, weights, colours, radii, borders, shadows, icons, copy. When the build and the image differ, the build is wrong.
2. **Do not improvise.** Do not add screens, sections, components, buttons, links, animations, hover effects, icons, colours, copy, fields, validation messages or states that are not in the designs. Do not remove or reword anything. Do not "improve" the design.
3. **Do not assume.** If something is not shown or not stated in `SPEC.md`, do not decide it. Write it into `OPEN_QUESTIONS.md` and leave a visible, clearly marked placeholder only if the build would break without it. Ask me before filling any gap.
4. **No new tokens.** Use only the colours, font sizes and weights listed in `SPEC.md` section 2 and found in `html/`. Fonts are Inter and JetBrains Mono only.
5. **Placeholder data stays as shown.** Names, numbers, lessons, projects, posts and people in the designs are sample data. Put them in a single data module and render them exactly. Do not generate new sample data.
6. **Static front end only.** No backend, no real auth, no API calls. Sign in screens are navigable pages that follow the flow in `SPEC.md` section 3 and the notes cards. Buttons that have no destination in the designs do nothing.
7. **Out of scope:** mobile layout, onboarding (S04 to S08), account check (S03), billing, skill catalogue, password, OTP code, dark mode behaviour (the moon icon is drawn but its action is not designed).
8. **Tablet:** at roughly 768 to 1024px, keep the same content and components and let the layout reflow. Do not redesign anything.

## How to work

- Use the tech stack in the project if one exists. If not, ask me before choosing.
- Build shared components first (top bar, sidebar, buttons, cards, pills, avatars), copying CSS values from `html/`. Then build screens one at a time in the order of `SPEC.md` section 4.
- After each screen, render it at 1440px and compare it to its image in `screens/`. Fix every visible difference before moving on. List the screens you have verified.
- Keep the copy character-for-character the same as the text in `SPEC.md`.
- At the end, give me: the list of 24 screens with the route for each, a list of any difference you could not remove, and the contents of `OPEN_QUESTIONS.md`.

Start by confirming you have read all files, list anything unclear, then wait for my go-ahead before coding.

## Default scale (added after review)

The build looks too big at browser zoom 100%. The approved look is what the design shows at about 80% browser zoom. Fix it like this, and change nothing else:

1. Use `rem` for every size (font sizes, widths, heights, padding, margins, gaps, radii, borders may stay 1px). Convert from the px values in `html/` by dividing by 16, so the design stays pixel-exact relative to itself.
2. Set one global scale on the root: `html { font-size: 80%; }` (that is 12.8px, so 1rem = 12.8px). Put the number in a single CSS variable or one line so I can change it to 75% by editing one value.
3. Do NOT use `transform: scale()` and do NOT use the CSS `zoom` property. Browser zoom (Ctrl +/-) must still work normally on top of this.
4. The layout must match `screens/*.png` when viewed at 1440px viewport width with browser zoom at 125% (this equals the design at 80%). Check it that way, and also at 100% browser zoom on a 1440px wide window, where the whole layout should look smaller and wider, not bigger.
5. Do not change content, colours, proportions or structure. Only the scale changes.
