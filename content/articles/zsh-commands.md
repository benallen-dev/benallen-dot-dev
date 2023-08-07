---
title: "Zsh Commands"
date: 2023-08-02T09:10:29+02:00
draft: false
tags: ['zsh', 'shell', 'cli']
summary: "Memorise or alias these shell commands to look like a terminal Bad-Ass&trade;."
---

# Handy Zsh Commands

## List directories by size

```zsh
$ du -sh * | sort -h
```

To include hidden dirs, use

```zsh
$ du -hs -- */ .[^.]*/ | sort -rh
```
