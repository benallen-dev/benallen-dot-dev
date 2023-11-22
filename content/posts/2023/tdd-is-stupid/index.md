---
title: TDD is Stupid
date: 2023-11-22T14:38:01+01:00
description: TDD is stupid, and I'm tired of pretending like it isn't.
tags:
  - TDD
  - rant
  - shit sandwich
resources:
  - name: banner
    src: filename relative to index.md for banner image (optional)
attribution:
  - Add image or other credits here (optional)
references:
  - Add references to other content here (optional)
draft: true
---

Straight up, saying TDD is stupid is not a hot take. Like, at _all_.

Going for the jugular of people advocating for the idea, however, is less socially acceptable. But I've had enough of pretending that TDD is "just another development workflow". It has such strong drawbacks that you'd have to be either an idealist or a trainee not to see why TDD is a terrible idea that looks great but sucks the big one.

## What the hell is TDD?

For those of you who work at companies with consultant-proof leadership: TDD stands for _Test Driven Development_. It stems from the fabulously misguided idea that stakeholders will be able to accurately and completely define their requirements up front, and that the engineering team will produce a flawless set of tests that cover those requirements.

This works great for tiny examples.

> We need a form users can visit, type in their name, and click submit. 
> 
> Then the page replies *Hello, { name }*.

Great. Easy peasy.

```typescript
// This is whatever random ass e2e testing framework you want it to be
test('echoes user input', (page) => {
    await page.visit('/hello');
    
    await page.getByRole('input').type('Ben');
    await page.getByRole('button').click();

    expect(page).toContain('Hello, Ben');
});
```

Except it works great _right_ up until the point where some stakeholder changes their mind.

Stakeholders are human beings who need to iterate on their ideas just as much as we need to iterate on code. They also tend to enjoy reacting to market forces and user feedback. Perhaps zoomers hate the use of the comma in _"Hello, { name }"_. Who knows?

## Why this is worth a rant

It would be pretty annoying if that was all there was to it. But as a surprise and unwelcome slice of tomato to top off the shit sandwich that is TDD, we add _Trunk based development_.

Instead of using feature branches, just push everything to `main`! I'm sure it'll be fine, right? Nobody can do anything stupid, because you've already written all the tests to guarantee that if something breaks, it won't go to production!



## I'm not salty, you're salty

Yeah I'm salty, because I have yet to see TDD actually work in the wild, but I've seen plenty of self-proclaimed "software architects" push for the idea. They obviously haven't ever written any code for production, or they'd know that real-world software development is not sped up by more procedures and processes, but by getting the hell out of the way and letting people work.

As such, if you come and talk to my team, and you're telling us that moving to TDD and only working trunk-based is a great idea, I immediately write you off as a moron and you're going to have to work incredibly hard to earn that trust back. I have better things to do with my time that deliver more value.


“if your tests pass it can be deployed no problem”

which is great until a junior dev comes along and breaks everything

and it’s your dumb ass fault because you let juniors push straight to production

I’m not salty you’re salty
