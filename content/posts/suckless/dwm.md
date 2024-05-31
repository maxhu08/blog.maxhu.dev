---
title: "dwm"
date: 2024-05-28T15:43:56-05:00
draft: false
---

This page is dedicated to writing about my experience with using suckless's dwm.

![1](/assets/suckless/dwm/1.png)

Video showcase: https://www.youtube.com/watch?v=irUSgMEb3g8

You can find my build of dwm here: https://github.com/maxhu08/dwm

## intro

I started using dwm when I was looking for a good window manager for Xorg.
Previously, I was using Hyprland which is from the Wayland side of things. I
found that Hyprland/Wayland was a little too buggy for me so I wanted a stable
window manager to fall back on.

Then I found dwm. The first time I tried dwm, I thought that it was very
underwhelming. Base dwm lacked basic features like moving a window. When I
tried to move a window it became floating. It also felt pretty slow and laggy
which was probably due to the fact that I was trying it in a virtual machine
instead of on bare metal.

After that I found out the way to get these basic features was through
patching. I thought that it was too complicated to edit the source code and
compile dwm, so I stayed away for a while.

After that I tried awesomewm. awesomewm is a fork of dwm and shares many
features except that it's configured through a runtime config written in lua
instead of needing to be compiled with c. I really liked awesomewm, it just
worked, moving windows made sense and it just worked compared to
Hyprland/Wayland which would usually have several problems. I also liked the
idea of the stack which dwm/awesomewm had which is pretty unique, where you use
`SUPER+j` & `SUPER+k` to navigate up and down the stack instead of using the
vim keys like `SUPER+hjkl`. This made everything simpler and it felt easier to
navigate and move windows.

Eventually I ran into a problem. awesomewm was too confusing to configure.
awesomewm's `rc.lua` file was ~600 lines and it did not feel simpler then
editing dwm's `config.h` file. Also I started looking at some dwm setups and I
began admiring the simplicity. All of this made me reattempt using dwm.

This time, I knew what dwm was look and I was ready. I started patching dwm and
adding all the features I liked. I liked the idea of having a minimal window
manager thats been custom tailored to my liking. Also the patching process was
pretty fun, and it was simple due to suckless philosophy of writing very minimal
programs. Patching dwm made me appreciate suckless programs because I found it
crazy how they managed to fit so much into so little code. Each patch just
added or removed a few lines and wasn't too bad. Later on though, the patch
command would usually fail because I had too many patches so I would have to
manually look at the .rej files and insert the changes myself.

<!-- ![2](/assets/suckless/dwm/2.png) -->

![t3](/assets/suckless/dwm/t3.png)

## keybinds

In this section, I'm going to talk about how I setup my keybinds.

I use `SUPER` as my mod key instead of `ALT` .

&nbsp;
&nbsp;
&nbsp;

Here are my different keybinds:

- I like using `SUPER` with the j and k keys to move focus up and down the stack.

- I use `SUPER+SHIFT` + j & k to move a window up and down the stack, this came from the `stacker` patch.

- I use `SUPER` + h & l to change the size of the master stack. I can use `SUPER+SHIFT` + h & l to resize a window vertically.

- I have the normal `SUPER+Return` to spawn a new terminal and `SUPER+c` to close a window.

- `SUPER+r` opens my app launcer, dmenu.

- `SUPER+e` opens my file manager, nemo.

- I use the usual the `SUPER` + num keys and `SUPER+SHIFT` + num keys to change
  workspaces, but in dwm they're called "tags" instead of workspaces. You can
  also left click on the status bar to change workspaces.

- In dwm, you can see the windows from two workspaces at the same time by
  pressing `SUPER+CTRL` + num keys to toggle which "tags" you want visible
  without actually moving the windows from tag to tag. You can also right click on the status bar tags to do this.

- You can also use `SUPER+Tab` to toggle between two tags kind of like using alt tab in windows.

- I set it so that `SUPER+ALT` + num keys changes the layout type like
  `SUPER+ALT+1` is tilling mode and `SUPER+ALT+2` is floating. I have layouts
  like centered master, dwindle, spiral, grid and more in case I want to use
  them, although I usually just the default tilling mode. This came from the `vanitygaps` patch.

- I use `SUPER+ALT+u` to increase the size of all my gaps (inner and outer) and
  I use `SUPER+ALT+SHIFT+u` to decrease the size of my gaps. This is from the
  `vanitygaps` patch.

- I can use `SUPER+}` and `SUPER+{` to increase and decrease the width of my
  borders. This is pretty good for getting a minimal setup in case I want to make
  a tutorial and not make it to distracting. This is from the `setborderpx` patch.

- I can use `SUPER+b` to toggle visibility of my status bar which is nice if I
  want to record a video and hide the bar because it can be pretty distracting
  sometimes. This is built in to dwm which is pretty nice, on Hyprland it was
  more work to do this.

- I use `SUPER+s` set to take a screenshot.

- I use `SUPER+ALT+SHIFT+l` to turn on my lock screen, slock.

## showcase

Here are some more screenshots of my dwm setup on my pc and laptop.

![3](/assets/suckless/dwm/3.png)

![4](/assets/suckless/dwm/4.png)

![5](/assets/suckless/dwm/5.png)

![6](/assets/suckless/dwm/6.png)

![t1](/assets/suckless/dwm/t1.png)

![t2](/assets/suckless/dwm/t2.png)
