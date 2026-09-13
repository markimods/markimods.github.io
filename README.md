# PS4 13.02 WebKit Research

A minimal GitHub Pages host for PlayStation 4 13.02 WebKit/userland research.

## Current scope

- Static GitHub Pages site
- 13.02 profile
- Browser/runtime detection
- On-page debug console
- Safe WebKit feature checks
- Structure ready for future research modules

This repository intentionally does **not** include a kernel exploit, jailbreak payload, or claims of kernel execution on 13.02.

## Deploy

1. Create a repository named `<your-user>.github.io` for a user site, or use a project repository.
2. Upload this directory.
3. In **Settings → Pages**, select the appropriate publishing source.
4. Open the resulting `github.io` URL.

GitHub Pages publishes static HTML/CSS/JavaScript files directly from a repository.

## Research notes

Public Vue After Free documentation currently lists its userland scope through 13.04, while Netctrl/KEX support ends at 13.00. This scaffold therefore keeps 13.02 in userland/research mode until a kernel component is independently verified.

## License

Choose a license appropriate for the code you add.
