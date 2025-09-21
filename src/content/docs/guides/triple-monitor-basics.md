---
title: Triple Monitor Setup Blueprint
description: Dial in geometry, field of view, and calibration for triple-screen sim rigs.
---

> Use this outline as a living document. Replace the placeholders below with track-tested measurements, screenshots, and workflows from your own rig.

## 1. Prep & measurements

- **Rig snapshot:** Capture seat, wheelbase, monitor make/model, and mounting hardware. _(Add photos or CAD drawings here.)_
- **Critical distances:** Measure eye-to-center distance, monitor inner edges, and desk height. Log the values in the table below so others can replicate your baseline.

| Measurement               | Target               | Actual | Notes                                          |
| ------------------------- | -------------------- | ------ | ---------------------------------------------- |
| Eye to screen center      | 650 mm               | TBD    | e.g., "Adjust seat sliders until within ±5 mm" |
| Screen angle (left/right) | 60°                  | TBD    | Use digital angle finder                       |
| Bottom bezel height       | Level with wheel rim | TBD    | Ensure clearance for dash displays             |

- **Calibration checklist:**
  1. Level the rig and monitors.
  2. Confirm bezels are perpendicular to the floor.
  3. Record graphics driver scaling, bezel compensation, and refresh rate.

## 2. Hardware alignment

- **Mounting tips:** Document bracket adjustments, VESA adapter quirks, and torque specs. Include links to compatible mounts or printable spacers.
- **Angle tuning:** Describe how you reached your final wrap-around angle (e.g., 178° total). Add diagrams or embed a short video showing your measurement method.
- **Cable management:** Provide routing suggestions that avoid binding the wheelbase or pedal deck when adjusting seat rails.

:::note[Placeholder]
Drop photos or annotated schematics here once you lock your geometry.
:::

## 3. In-game configuration

1. Set the rendered resolution to match your NVIDIA Surround/AMD Eyefinity setup.
2. Apply the correct bezel-compensated resolution (log it per title in the table below).
3. Enter your eye-to-screen distance and monitor width into an FOV calculator, then transfer the output into the sim.

| Title                      | Resolution | Horizontal FOV | Notes                                  |
| -------------------------- | ---------- | -------------- | -------------------------------------- |
| iRacing                    | 7680×1440  | 59°            | Pending confirmation in v2025 Season 3 |
| Assetto Corsa Competizione | 6048×1080  | 51°            | Recheck after patch v1.11              |
| Automobilista 2            | TBD        | TBD            | Add screenshot of camera settings      |

Finish with HUD scale tweaks, mirror settings, and any FSR/DLSS considerations. Encourage contributors to mention driver versions and post-processing suites (Reshade, OpenXR Toolkit, etc.).

## 4. Validation & troubleshooting

- Run a quick checklist: horizon alignment, triple screen blending in dynamic weather, night glare handling.
- Share benchmarking results (minimum/average fps) for popular GPUs at this resolution.
- Maintain a table of common pain points and fixes:

| Issue                    | Symptom                  | Mitigation                                 |
| ------------------------ | ------------------------ | ------------------------------------------ |
| Center screen tearing    | Appears only in iRacing  | Force Fast Sync in driver control panel    |
| FOV mismatch after patch | Camera resets to default | Keep a backup of `cameras.cfg` and reapply |

## 5. Next upgrades

Outline potential follow-ups like moving to 32:9 ultrawide, adding a fourth telemetry display, or experimenting with a motion platform. Invite community members to link their build logs or YouTube walk-throughs.

## Share your results

Once you have dialed in your setup, open a pull request with before/after photos, revised measurements, and updated tables. Tag areas that still need input (e.g., `TODO: confirm AMS2 FOV`) so other racers can jump in.

## Further reading

- [FOV Explained by Coach Dave Academy](https://coachDaveAcademy.com/) _(suggest official reference once confirmed)_
- [Diátaxis on writing how-to guides](https://diataxis.fr/how-to-guides/) for polishing contributor edits
