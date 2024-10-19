---
title: I cost my employer so much money
date: 2024-10-19T11:18:35+02:00
description: It's not like I waste money on purpose but this just keeps happening, ok?
tags:
  - neovim
  - oops
resources:
  - name: banner
    src: vimbtw.webp
attribution:
  - In case the super weird fingers and faces didn't give it away, banner image brought to you yet again by ChatGPT.
references:
---

Most people who cost their employer a lot of money are just expensive, or they've made a mistake that ended up scaling their cloud infrastructure to 100x what it needs to be. Can you even really blame them? A Senior Visio Consultant who has mistakenly been given the title of _Software Architect_ has decreed that your company's static website needs to be "in the cloud" with no further guidance, so of course things are going to go wrong at some point.

Another way to cost your employer a lot of money (if you're in Europe) is to lean back, do the bare minimum and enjoy EU worker protection laws. As a salaried employee I'm pretty happy my boss can't fire me on a whim, but it's also exceptionally difficult to end contracts with people for whom "underperforming" would be a massive improvement.

Alternatively, you could push hard for company-wide rules requiring all teams use Spring Boot in Kotlin. All you've ever done is 15 years of the same Java project, and the idea of Kotlin is so unsettling that you would rather shoehorn in a Java framework than learn Ktor. After getting this rule instituted, and not before several teams have been locked in to using your Spring-in-Kotlin masterpiece, you leave the company claiming nobody listens to you.

These are all excellent strategies, some of which I've actually seen happen. But they're not for me. I cost my employer money by sharing my screen.

## I promise I'm getting to the point

Some people think to themselves _"I want a cool car. I'm going to buy one of those nice BMW M2 series and look like a badass while I cut people off after performing illegal overtakes."_ 

And then there's people who go _"Wait, I can buy a __kit__ of parts and __build my own car__?! I want this! I need this! I don't care if other people can't drive it because I put the clutch pedal on the right!"_

I'm the guy who wants to build his own car and put the clutch pedal on the right. For some reason, my brain just thinks that's where it should be. Perhaps not in the case of an actual clutch pedal, but when it comes to software that's 100% me. I'm not even talking about ricing, which I think jumps the shark a bit, but being able to customise your tools to the point where everything just feels natural. Modifying your environment to the point where you barely notice it because it's super smooth is a benefit that is hard to overstate.

## Neovim btw

I've been a neovim user for around 18 months now (thanks [Prime](https://www.youtube.com/watch?v=w7i4amO_zaE)) and I basically live in the terminal. I love it, and when people ask I happily show them. When I wanted to show images in the terminal, [I built a program to do that](https://github.com/benallen-dev/asciimage).

![My diy image viewer](asciimage.jpeg)
{ .flex .justify-center }

Turns out I had partially recreated [imgcat](https://github.com/danielgatis/imgcat). Whoops. I have since stolen the idea of using the `▄` character instead of using `██`, but you get where I'm going. I tend to build my own solutions to things, usually mumbling an excuse like "I'm also doing this to learn, so it's ok". 

While it's true that doing things in this way will make you naturally pick things up as you gather a little bit of knowledge and experience in various topics, it's definitely not the most efficient way of doing things. The same is true of the text editor setup. Unless you're happy to install a distro and just learn the way it works, assembling a neovim config is like a samurai honing the edge of his sword until it's perfect. The same goes for things like terminals. Polish until perfection, or at least good enough to slice your enemies.

Before anyone gets worried my enemies are bugs and bad code, not people, ok? Just wanted to mention that. Also, your production deployment is not the place to use your home-spun implementation of Redis. Just use actual Redis for production, don't come at me because your app went down because your implementation of `MSET` has a memory leak.

## Finally, the point

The problem arises when I share my screen. I was doing a quick demo and a colleague from another team asked me "hey, what IDE are you using?"

![well ackchyually meme guy](ackchyually.jpg)
{ .flex .justify-center }

Do you have _any_ idea how hard it is not to become this guy?? 

It took every fibre of my being, but I told him "I use Neovim (btw)" and calmly continued demonstrating the code. Ostensibly, the code was why we were there, so I felt it was a good idea to keep going. Another colleague saw me using neovim during a different presentation and decided to check it out - and is now known as a the vim guy in his team.

My own teammates seemed to be resistant to Neovim at first, but yesterday I started work a little later. I come home, I fire up my company macBook and hop on Discord to see what's going on.

![community fire meme](fire.jpg)
{ .flex .justify-center }

You will never hear from me that trying Neovim is a bad idea, but I laughed my ass off when I realised the only person getting any work done was the guy who only just joined the team. Needless to say I spent the day helping my teammates with their configs and smugly pasting autocommands in chat.

Suddenly one of the guys starts laughing, so I ask him "what's so funny?". He replies "you have single-handedly cost so much money, not by spending it but just the sheer number of wasted developer time when people try vim".

**He's probably not wrong.**

## In Conclusion

Go try Neovim it's pretty awesome. Check it out at [neovim.io](https://neovim.io).
