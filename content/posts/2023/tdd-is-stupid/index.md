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
    src: walter.jpg
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

## At least you're not just deploying everything... right?

It would be pretty annoying if that was all there was to it. But as an unwelcome slice of 3-day-old tomato to top off the shit sandwich that is TDD, we add _trunk-based development_.

Instead of using feature branches, just push everything to `main`! I'm sure it'll be fine, right? Nobody can do anything stupid, because you've already written all the tests to guarantee that if something breaks, it won't go to production!

Except in the real world, software development is a lot like magic. The people doing the magic have around a 50-50 chance of understanding what's going on behind the curtain, but the people asking for it definitely have no clue. As such they have no frame of reference for how hard or easy things are and are prone to have unrealistic expectations. So far, so human. But then you pair them with developers who frequently owe their livelihoods to those magic requesters and want to please them, and might take a few shortcuts to do so.

![You're not deploying straight to production, right?](yolo-deploy.jpeg)
{ .flex .justify-center }

Even worse, maybe someone wrote a test, but it isn't a _good_ test. Testing is hard! I get it! But the test doesn't cover an edge case that actually happens a lot and didn't break before because you got lucky. Now you've broken it, not detected it, and because everything gets deployed to production, your users are going to be first in line to get a taste of your failure. Ouch.

## The worst part is, it's your fault

The basic tenet of test-driven + trunk-based development is "If your tests pass it can be deployed without issue", which is great until your junior dev comes along and breaks everything at 16:55 on a Friday, because they changed the test, committed everything before the weekend (as they should), and went home.

And it's your fault, because you let a junior dev push to production on Friday afternoon.

## I'm not salty, you're salty!

Yeah I'm salty, because I have yet to see TDD actually work in the wild, but I've seen plenty of self-proclaimed "software architects" push for the idea. They obviously haven't ever written any code for production, or they'd know that real-world software development is not sped up by more procedures and processes, but by getting the hell out of the way and letting people work.

As such, if you come and talk to my team, and you're telling us that moving to TDD and only working trunk-based is a great idea, I immediately write you off as a moron and you're going to have to work incredibly hard to earn that trust back. I have better things to do with my time that deliver more value.

