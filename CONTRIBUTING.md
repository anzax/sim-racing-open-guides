# Contributing to Sim Racing Open Guides

Thanks for helping build a better Sim Racing Open Guides knowledge base! This project thrives on shared measurements, tuning data, and personal build experience. The guidelines below keep contributions consistent and easy to review.

## Quick start

1. Fork the repository and create a branch off `main` (e.g., `feature/add-acc-settings`).
2. Install dependencies with `pnpm install` and run `pnpm dev` to preview your changes locally.
3. Commit with clear, conventional messages (e.g., `feat: add acc triple monitor presets`).
4. Open a pull request against `main` and fill out the PR template.

## Content standards

- **Stay vendor neutral:** Share brand-specific tips, but keep recommendations focused on measurable benefits (angles, FOV, resolution) rather than marketing copy.
- **Cite sources:** Link to manufacturer specs, release notes, or calculator tools when quoting data. External metrics must include the retrieval date.
- **Use placeholders when needed:** If you are missing data, mark it clearly with `_TBD_` or `TODO:` so others can fill the gap.
- **Keep units explicit:** Log measurements in metric first (millimeters, degrees). Add imperial equivalents only if they improve clarity.
- **Prefer Markdown tables:** They display well in Starlight and make comparisons easy to scan.

## Writing workflow

1. Duplicate an existing guide or reference page when starting new content. Update the front matter (`title`, `description`, `tags`) right away.
2. Break guides into numbered steps or concise sections. Highlight checklists, calculators, and troubleshooting notes.
3. Include at least one verification method (e.g., FOV screenshot, telemetry overlay) before calling a workflow "final".
4. Add `Last updated: YYYY-MM-DD` near the top if you maintain recurring guides.
5. Run `pnpm astro check` and fix any build warnings before submitting your PR.

## Media & assets

- Place images under `src/assets/` and reference them with relative paths.
- Optimize screenshots (≤ 200 KB) and annotate them where helpful.
- Ensure you have rights to share every asset. Creative Commons or original work only.

## Review expectations

- Maintainers aim to respond to new PRs within five business days.
- Reviews focus on accuracy, reproducibility, and readability. Expect clarifying questions where data is unclear.
- Be ready to share raw measurement spreadsheets or calculator exports when requested.

## Reporting issues & proposing ideas

- Use **GitHub Issues** for bugs, incorrect data, or site problems.
- Start a **Discussion** for new guide ideas, equipment comparisons, or open research tasks.
- Tag your issue with `area:guides`, `area:reference`, or `meta` so we can triage quickly.

## Code of conduct

We follow the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) principles. Treat fellow sim racers with respect, keep feedback constructive, and avoid gatekeeping.

---

Questions? Open a discussion or ping `@anzax` in your PR. We appreciate every lap you put into making these guides better.
