---
title: "Building a website without React in 2023 feels super weird"
date: 2023-08-05T17:28:52+02:00
tags: ["webdev", "hugo", "react"]
summary: "I've been doing the React thing for so long that I've forgotten how half of this HTML and CSS stuff works. As a result, I'm suffering full-blown impostor syndrome."
draft: false
---

### So, here's an idea. 

I'm building this new shiny website using Hugo. What Hugo does is take small chunks of HTML that define your templates, and then it takes a bunch of Markdown files and turns them into HTML using those templates.

So far so good, right? It's exactly what I wanted, a simple HTML website that is easy to edit, and loads super fast because it's not downloading 50kB of data and then running a program just to draw HTML to the screen.

#### Except I am second-guessing everything

I don't want to create a huge CSS file, so I'm importing smaller files in a main file after importing all the variables I want to use. I'm not calculating any CSS on the fly, so let's not use SASS.

Wait, are you supposed to load several small CSS files? Isn't that going to mean you only load those CSS files once index.css is loaded and parsed by the browser? Nah, index.css is 305 _bytes_, it'll be fine.

And then it hit me.

#### I'm not using React anymore

Being a React developer has beaten the sense out of me and conditioned me to think "It's ok, Webpack/Vite/_Your Favorite Bundler &trade;_ will take care of it". Not once during my normal work do I stop to think about why I'm doing something. That's just how you do things in a React world.

Setting a simple requirement of _"absolutely zero Javascript allowed"_ means my whole build takes 22ms. Granted, right now it's only spitting out three pages, but the entire thing is 21 kB. That's the _entire site_. This page you're reading right now is 2,6kB and to be honest, I'm surprised it's even that big.

#### So what's the takeaway?
- Not everything needs to be bundled! Several small files are fine.
- If someone looks at the network editor and sees I have `index.css` and `variables.css` and `typography.css`, they might _judge me_. Oh no!

The thing is, I looked at Kent C. Dodds' personal website for inspiration, and while he's got a lot more going on on this website, it's transferring 1.09MB of data and taking ~850ms to load on my Gigabit fibre connection. This is a man who is respected by the entire frontend community, and the worst part is that I saw his site load times and thought "Yeah, that's fine".

> It's not fine, this is terrible!
>
> \- Me, 2023

It's 2023, my computer is 6 years old and my internet connection is so fast, if I download at full speed my NAS' memory is filled faster than it can write to disk and actually crashes the NAS. Opening a personal blog website really shouldn't be taking any perceivable amount of time.

So consider this the start of my quest to reduce bloatware from frontend engineering. Building a SPA? Sure, use React. If you want the directory-based routing, go for Next.JS. I'll be over here in the corner trying to figure out if I can do it with less than 20 lines of Javascript.

But if all you're making is a personal blog website, why not flex super hard and show people you can build a website that can be loaded in its entirety in less time than it takes to blink?

#### Because I've forgotten how

This is the uncomfortable part. I've been doing the React thing for so long that I've forgotten how half of this stuff works. I'm going into full-blown impostor syndrome mode here, and there's no way I'm the only person who has a Senior Developer&trade; role who feels this way.

So, I'm building a personal website. Might as well share the process. Here's just off the top of my head the stuff I have going on.

- Do I want to leverage Hugo's built-in language support? I write best in English, but my Dutch-speaking colleagues might appreciate the option to read my blog in Dutch.
- If I make this bad, future employers are going to see how bad my website is, and then realise I'm terrible at my job, so this better be good.
- How am I going to figure out how to optimise images? I should use srcsets but I'm used to that being handled for me.
- People are going to read this on mobile... How do media queries work again?
- If I'm starting from scratch I want the best accessibility I can build. Except normally I use a design system that does that for me (albeit not as well as I'd hope)

