---
title: "suckless"
date: 2024-05-29T16:10:26-05:00
draft: false
---

This page is dedicated to writing about my experience with suckless software from https://suckless.org.

![suckless](/assets/suckless/suckless-logo.png#center)

### chapter 1

I have recently gotten into using suckless software, My first experience with
suckless was with dwm which is the window manager I settled on when looking for
a stable and configurable window manager for Xorg. I had some issues with
Wayland & Hyprland and I wanted to have a stable setup on Xorg in case. During
my search for a good window manager, I found dwm.

My first experience with dwm was pretty bad. I tried it in a VM and it felt
pretty slow. I tried to move and resize a window and it became floating. I
thought was problems with dwm. I found out that you had to patch it to get
basic features like this. That sounded like too much work at the time so I quit
and tried awesomewm instead. awesomewm is a fork of dwm so it's pretty similar
but it had features like moving windows and resizing built it out of the box.
Another thing about awesomewm is it uses the lua programming language instead
of c like dwm, which is supposed to be simpler, but I found it harder to
configure than dwm.

### chapter 2

I liked awesomewm for the most part, except for configuring it was harder than
configuring dwm so I switched to pure dwm. I cloned a base copy of dwm and
started patching it. I added important patches like the stacker patch to move
windows and more. Here's what it ended up looking like:

![dwm6](/assets/suckless/dwm/6.png#center)

I learnt a bit about dwm and admired it's simplicity and how it could fit so
much functionality into so little code. The idea of using SUPER+j & SUPER+k to
navigate through the stack instead of using vim keys was very nice and was
actually easier to use then using SUPER+hjkl. I also like the style of dwm bar
and how minimal it was compared to something like polybar or waybar.

After spending some time on making my personal dwm fork, I had finally made a
dwm setup I was satisfied with.

You can find my setup repo and a showcase of it here:

- [dwm-config](https://github.com/maxhu08/dwm)
- [showcase](https://www.youtube.com/watch?v=irUSgMEb3g8)

### chapter 3

After using dwm for a while I found out that I liked tinkering with my system.
Because of this, I started getting into other suckless software. After making
my dwm config, I started working on my dwmblocks setup, which allows me to put
stuff on my bar such as the time and more.

You can find my build of dwmblocks here: https://github.com/maxhu08/dwmblocks

After that, I started working on st. st was very lacking in features, I even
had to patch it to add scrollback. I also had to give it patches for ligatures,
undercurl, and glyph support, which terminal emulators like kitty had out of
the box. In the end, it still wasn't as good as kitty. It's undercurl looked
too sharp and when text was undercurled it also had a line underneath which
looked weird. It also wouldn't render ligatures if the characters were
different colors. Here's a picture of my build of st with neovim open:

![st1](/assets/suckless/st/1.png#center)

You can find my build of st here: https://github.com/maxhu08/st

In the end, I switched back to using the kitty terminal emulator even if it
wasn't as fast as st, but it had a smoother experience and the performance gap
wasn't too big.

### chapter 4

I then went on to use more suckless programs. I started using slock, a suckless
lockscreen program which I made activate by pressing a keybind which would lock
my screen until only unlock it once I had entered my password.

You can find my build of slock here: https://github.com/maxhu08/slock

After that I swapped out dwmblocks for slstatus because slstatus felt easier to
use. When I was trying to get my battery percentage to display on the bar on my
thinkpad, dwmblocks kept flashing and it would not work no matter what I did.
Maybe there was some solution, but it was too confusing and I decided that this
was not the suckless way. Because of this I tried slstatus which made it a lot
easier to display the batter percentage since it's built it in. Here's a
screenshot of my bar with slstatus:

![dwmt1](/assets/suckless/dwm/t1.png#center)

I also found out my thinkpad had two batteries so I displayed the percentage of
both batteries.

You can find my build of slstatus here: https://github.com/maxhu08/slstatus

### chapter 5

I also made my own dmenu setup. I centered dmenu, gave it a border, and made it
a grid that had 8 lines and 1 column. This way it looked kind of like a
suckless veresion of rofi. Here's a showcase of it:

![dmenu1](/assets/suckless/dmenu/1.png#center)

You can find my build of dmenu here: https://github.com/maxhu08/dmenu

### chapter 6

That was a overview of all my experience with suckless programs.
