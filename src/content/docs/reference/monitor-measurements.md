---
title: Monitor Measurement Reference
description: Terminology, formulas, and target ranges for sim racing display setup docs.
---

This reference defines the core measurements, abbreviations, and formulas used across the guides. Link to this page whenever you introduce a new metric so readers can align on consistent terminology.

## Measurement glossary

- **ED (Eye Distance):** Linear distance from the driver's eye position to the center monitor. Record in millimeters.
- **IW (Inside Width):** Combined width between the inner bezels of side monitors. Use when calculating wrap angle.
- **RA (Rig Angle):** Total wrap in degrees between left and right panels.
- **BH (Bezel Height):** Vertical height of the bottom bezel above the cockpit reference plane (often the wheel rim).
- **HFOV/VFOV:** Horizontal and vertical field of view values applied in-game.

## Standard baseline ranges

| Rig type                    | Eye distance | Wrap angle | Notes                                      |
| --------------------------- | ------------ | ---------- | ------------------------------------------ |
| Entry triples (27" 1080p)   | 650–700 mm   | 150°–165°  | Typically VESA mounts on a single bar      |
| Compact triples (32" 1440p) | 700–760 mm   | 165°–178°  | Watch for wheel rim clearance              |
| Ultra-wide (49")            | 700–800 mm   | N/A        | Track VFOV and seat height instead of wrap |

_Replace the ranges above with community-sourced averages as data accumulates._

## FOV quick math

Horizontal FOV for triple monitors (per screen) can be approximated as:

```
HFOV = 2 * atan((Monitor Width / 2) / Eye Distance)
```

Add monitor bezel compensation to the width input when running full-span calculators. Provide the version of the tool used (e.g., iRacing FOV 2.0) to maintain reproducibility.

## Reference templates

- **Measurement log:** Duplicate the table below for each contributor and keep it near the top of your guide.

| Contributor   | Rig Snapshot     | Key Metrics        | Last Updated |
| ------------- | ---------------- | ------------------ | ------------ |
| _placeholder_ | _add photo link_ | ED 680 mm, RA 170° | _YYYY-MM-DD_ |

- **Display profile:** Document monitor model numbers, panel types, refresh rates, and color profiles so others can replicate calibration workflows.

## Further reading

- [VESA Mounting Interface Standards](https://www.vesa.org/) _(confirm citation)_
- [Diátaxis on reference docs](https://diataxis.fr/reference/) for structuring future updates
