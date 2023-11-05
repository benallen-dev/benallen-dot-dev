---
title: I am a -10x engineer (on purpose)
date: 2023-10-28T10:04:02+02:00
description: When you only build requested features, you're skipping a crucial aspect of software engineering.
resources:
  - name: banner
    src: conspiracy.webp
attribution:
  - Add image or other credits here (optional)
references:
  - '<a target="_blank" href="https://taylor.town/-10x" alt="How to be a -10x Engineer">How to be a -10x Engineer</a>'
draft: true
---

## Wait, what?

It seems like all the _cool_ kids are striving to become ultra-productive 10x engineers. This is a great goal, but a part that I feel is missing from the discourse on the subject is that sometimes environmental factors don't really allow for the freedom that's needed to get entire teams functioning at that level. If this is the case, it's time to slow down, think for a minute, and then cost your employer months of developer time in the pursuit of longer-term improvements and a culture of quality engineering.

Those improvements are costly at first, but will lead to happier engineers and stakeholders, better communication, better software, and more satisfied customers/users.

This idea of being a -10x developer was inspired by [How to be a -10x Engineer](https://taylor.town/-10x) by [Taylor](https://taylor.town). I don't know their last name, so for the sake of the narrative I'm going to assume it's Taylor Swift because I enjoy things that are objectively stupid. If you're more the visual type, here's a video of ThePrimeagen commenting on the article:

{{< youtube pHJmmTivG1k >}}

Obviously I'm not suggesting that you go out and start wasting everybody's time, plenty of engineers manage this all on their own without even trying, and we don't actually need folks going out and doing it on purpose. What I _am_ advocating for is that if your organisation isn't a tech-first startup there's a good chance the engineering teams are stuck in sort of learned helplessness because their backlogs are always overflowing.

## How I do -10x engineering

### Enable others' curiosity
{.my-0}

Nobody is going to learn anything if a stakeholder is breathing down their necks asking when a feature will be complete or when a bug will be fixed.

If your colleague feels guilty because they're going down some rabbit hole fueled by their own curiosity, while their teammate is working on sprint goals, your job is to enable them to go down that rabbit hole.

### Don't upgrade for the sake of upgrading.
{.my-0}

If a project is in production, it's stable, and is "just the product" instead of in continued development, for the love of god don't spend all your time keeping it up to date. I'm pretty sure the JavaScript API is stable these days, you can leave that code as-is until it needs to change. Spend your time building something new instead of choosing dependency hell.

### Reject internal libraries that suck
{.my-0}

If your entire company uses an internally-developed library for the sake of keeping UIs uniform, but the library doesn't support your use-case, your options are usually presented as

- **A.** Implement the missing functionality yourself.
- **B.** Don't do the thing.
{.list-none}

However, sometimes when you dive in to initally implement the missing feature, you realise the codebase has poor performance. Maybe it was implemented by someone who hasn't built a library before, or was a quick-and-dirty project that got shipped to production because it looked good, and now it's the "everyone should use this" standard. If the only reason is "because everything should look the same", a design system is all you need to comply with the business requirements.

In this case pick option **C: None of the above**.

Implement whatever the library does in your own project. Afterwards, show it to the team maintaining the library and offer to help extend or refactor the library. But if you would have removed the dependency from your project ages ago if it weren't for the fact it's "the way we do it", you should have removed the dependency from your project already.

This doesn't only help your team, it empowers other teams to speak up if something isn't working as it should. It also offers the team maintaining the library an opportunity to collaborate instead of just receiving a hacked-together PR implementing what you need, or even worse a half-baked refactor you did without the full context of what they were trying to achieve.

### Insist on testing
{.my-0}

I think we can all agree 100% coverage is stupid. I think we can also agree that 0% coverage is also stupid. There's a sweet spot in the middle that prevents people from accidentally breaking things, but doesn't cost 25 minutes to run in CI or forces everyone to update a bunch of snapshots every time you add a class to an element. 

It doesn't even matter if code is unit or end-to-end tested, but a team writing vanilla JS with no unit tests is going to have bugs with 100% certainty. The worst part is that they likely don't even know most of their bugs and rely on user reports and their ticket backlog to track what issues they have. This is great for initial delivery, but the problem arises when things go wrong, _especially_ if other teams rely on their code. You end up `git bisect`-ing to find the commit and then triaging instead of having half a chance of catching the bug before you ship it.

More often than not teams that do this mention speed as the reason, unit tests take ages to write and cause maintenance, using types slows us down, you've heard it all before. Underneath I suspect they know they've created an expectation of slapping things together in a matter of days and now don't want to offend management by saying "and now we're going to do things that seems useless for a month". By making a point of expecting _some_ tests as a matter of principle they can now point to you as the reason they feel they have to write tests, and while you explain to the manager why testing is important they could actually be writing those tests.

## Why is this important?

If your company is not primarily a tech company, but like almost all companies today they rely on software to get things done, your job as a software engineer is not only to build that software. Your job is also to educate your stakeholders on why it's important to have good requirements. It's your job to know which tool to use to provide them with the value you're getting paid to provide. It's your job to provide solutions to the actual problem, not just to blindly build what stakeholders _think_ will solve whatever problem they're facing.

You're the software engineer, so it's _your_ job to figure out how to solve their problem. And you can't do that if you've only ever used React, or Java. You can't do that if you're so swamped with must-do's and deadlines that all that's left to do is churn out prototype features the whole time. And you sure as hell can't do that if you're spending all your time trying to figure out the spaghetti you wrote last week.
