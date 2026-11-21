# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/supremexcell/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/supremexcell/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for make.fun's **"Clip GTA 6 for the most YouTube views"** bounty ($500, top 20 share the prize).

The clip is a vertical GTA VI Short of IShowSpeed's finale stream: after 52 hours of non-stop play with no sleep, he beats the game in tears — then, minutes later, overwrites and deletes his own 98% save file. The hook is the absurd tragedy: 52 hours of work wiped out in one click, with Speed's facecam reaction as the star (word-by-word subtitles, close-up on his face at the peak), and it closes with a pitch: make clips like this with AI and earn money on make.fun.

Places go by the video's YouTube views at the deadline (Mon 23 Nov 2026 08:00 WIB), most first. `VIDEO.json` names the video; `main.ts` copies it to the output directory, where the house reads it and looks up the views.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.

<sub>Entered on [make.fun](https://make.fun/?ref=bj2pae9c&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
