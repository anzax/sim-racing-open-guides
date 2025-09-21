# Sim Racing Open Guides

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Open, community-driven documentation for sim racing screen setups. The guides focus on building immersive triple-monitor rigs, dialing in correct field of view (FOV), and tuning in-game display settings across popular racing titles.

This site is built with [Astro Starlight](https://starlight.astro.build) so enthusiasts can contribute new knowledge quickly while enjoying a clean docs experience.

## Why this exists

- Collect proven best practices for triples, ultrawides, and VR transition planning.
- Share repeatable workflows for angle and distance measurements that deliver accurate FOV.
- Catalog per-game graphics and post-processing settings with community-tested baselines.
- Provide upgrade paths—from entry-level mounts to pro-grade cockpits—backed by real user feedback.

## Project structure

```
.
├── public/                  # Global static assets
├── src/
│   ├── assets/              # Images and media embedded in guides
│   ├── content/
│   │   └── docs/            # Markdown/MDX docs grouped by section
│   └── content.config.ts    # Content collections definition
├── astro.config.mjs         # Astro + Starlight configuration
├── package.json             # Scripts and dependencies
└── tsconfig.json            # TypeScript settings
```

Key entry points:

- `src/content/docs/index.mdx` drives the homepage hero and quick links.
- `src/content/docs/guides/` houses long-form how-to content.
- `src/content/docs/reference/` is reserved for specs, measurement tables, and glossary material.

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server defaults to `http://localhost:4321`. Use `pnpm build` to generate production assets in `dist/`, and `pnpm preview` to run the built site locally. Astro CLI commands remain available under `pnpm astro <command>`.

## Contributing

Contributions are always welcome—from correcting measurements to sharing full build write-ups. Start by reading [`CONTRIBUTING.md`](./CONTRIBUTING.md) for style, review, and PR guidance. If you have ideas for new sections or want to report issues, open a GitHub discussion or issue.

## Roadmap

- Expand coverage beyond screens to include rig ergonomics and motion platforms.
- Publish vendor-neutral buying guides with community-maintained price monitoring.
- Add interactive calculators for FOV, monitor angles, and seating distance.

## Community & Support

- GitHub Issues: track bugs, request features, or claim tasks.
- GitHub Discussions: share builds, ask questions, and swap telemetry charts.
- Astro Discord: connect with other Starlight maintainers for tooling help.

Thanks for helping fellow racers chase immersion!
