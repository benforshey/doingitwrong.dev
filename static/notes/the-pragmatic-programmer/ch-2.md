---
title: A Pragmatic Approach
description: Notes from Chapter 2 of The Pragmatic Programmer.
tags: [Books, The Pragmatic Programmer]

publishedOn: '2023-11-13'
updatedOn: null
isDraft: false
---

# The Universality of a Pragmatic Approach

## The Essence of Good Design

Simply put, good design is Easier To Change (ETC) than bad design. Principles of programming well boil down to ETC. It's a value, not a rule. Values are things that help you make decisions, subtly nudging you in the right direction.

- [ ] There's a tension between values and rules in this section. Do you apply either to software development? Do you notice significant differences between values and rules?

Applying a value well enough to guide you will initially require asking how what you're doing would be influenced by this value until you can internalize that process. It also presupposes that you can know from your current perspective what change would result in ETC. If you can't figure that out yet, fall back on the ultimate ETC path: try to make what you write replaceable (which will certainly help keep the code decoupled and cohesive). You'll develop instincts as you go.

When you have a quandary of what's ETC, you can test yourself by tagging the source code and jotting down your thoughts in your engineering daybook. When the code has to change, reference the tag in your notes and see how it all played out.

### Section Challenges

- [ ] Think about a design principle you use regularly. Is it intended to make things easy-to-change?
- [ ] Also think about languages and programming paradigms (OO, FP, Reactive, and so on). Do any have either big positives or big negatives when it comes to helping you write ETC code? Do any have both? When coding, what can you do to eliminate the negatives and accentuate the positives?
- [ ] Many editors have support (either built-in or via extensions) to run commands when you save a file. Get your editor to popup an ETC? message every time you save and use it as a cue to think about the code you just wrote. Is it easy to change?

## DRY&mdash;The Evils of Duplication

One application of ETC is DRY&mdash;Don't Repeat Yourself. DRY states that every piece of knowledge must have single, unambiguous, authoritative representation within a system. The authors feel this to be one of the most important tools in the Pragmatic Programmer's tool box.

DRY isn't just about code&mdash;it's about duplication of **knowledge** and **intent**. The acid test for DRY comes when you have to make a change: do you find yourself making that change in multiple places and in multiple different formats? If so, your code isn't DRY. I think I got burned early on by an over-zealous DRY fanatic&mdash;because while I recognize the evils of duplication, I also see bad code written because someone jumps on an abstraction too soon. I like DRY, but Avoid Hasty Abstractions (AHA), because they are quite often the wrong abstraction.

- [ ] I really appreciate the author's point that not all code duplication is knowledge duplication. Ask yourself, do they have different reasons to change?

DRY violations can happen in:

- code
- documentation
- data
- representation
- developers

You may choose to violate DRY for certain reasons: often times, performance trumps ETC in localized areas. Just contain it (the authors call this localizing the impact), and don't pre-optimize for performance.

> Whenever a module exposes a data structure, you're coupling all the code that uses that structure to the implementation of that module. Where possible, always use accessor functions to read and write the attributes of objects. I will make it easier to add functionality in the future.

- [ ] What do you think of the "use accessor functions" advice? What advantages does it offer? What scope should this advice take (...module exposes...)? What might happen if you apply it to all data structures used within the scope of a module as well as those exposed by the module?

### Representational Duplication

This is inevitable, but the code that consumes an API and the API itself (or SDK, or external data structure, or RPC call..) will have some duplication&mdash;any time you have your code interact with an external entity. Here are some mitigation strategies:

- internal APIs: look for tools that let you specify the API in some kind of neutral format
- external APIs: look for a spec (something like OpenAPI) that can be integrated into your code
- data sources: look for a way to introspect the data's schema

### Interdeveloper Duplication

Basically, siloed teams can create the same tool. Frequent inter-team developer communication can help mitigate this. Whatever you do, make it easy to reuse. If it isn't easy, people won't do it.

- [ ] What can we do in our teams to reduce inter-developer duplication?

## Orthogonality

Borrowed from geometry, two lines are orthogonal if they meet at right angles; they are independent. In computing, we usually just mean independent or decoupled. In a non-orthogonal system, there are no quick, local fixes&mdash;things are tied together. You get two major benefits from writing orthogonal systems:

- gain productivity
  - localized changes means that development time is reduced
  - components can be reused
  - when completely orthogonal, component "A" does `m` things and component "B" does `n`. Combining them gives you `m` times `n`. With overlap, that is less efficient.
- reduce risk

  - diseased code is isolated
  - system is less fragile
  - probably better tested
  - you're not tightly tied to a particular vendor, product, or platform

  We often capture the idea of designing orthogonality through the words: modular, component-based, layered. There's an easy way to test for orthogonal design: if I dramatically change the requirements behind a particular function, how many modules are affected? In an orthogonal system, the answer should be "one".

- [ ] What do you think about the acid test of changed requirements to prove orthogonality?

You should also consider decoupling from "the real world". Are you using a telephone number as a customer identifier? What happens when the phone company reassigns area codes? Same with postal codes, SSNs, numbers, government IDs, email addresses, etc.

> Don't rely on the properties of things you can't control.

### Toolkits and Libraries

Evaluate external dependencies carefully. Do they impose changes on your code that shouldn't be there?

### Code

You really have to work hard not to couple your code when writing it. To help:

- keep your code decoupled
  - shy code doesn't unnecessarily reveal anything about itself and doesn't rely on other modules
- avoid global data
  - shared data is shared state
- avoid similar functions
  - duplicate code is a symptom of a structural problem; maybe use a design pattern

### Testing

An orthogonal system is easier to test, and writing unit tests is a good test of orthogonality: what does it take to get a unit test to run&mdash;do you import a lot of the rest of your system's code? Bug fixing is also a good assessment of orthogonality. How localized is the fix? Did you change just one module, or many?

### Documentation

The axes of concern are content and presentation for documentation. Markdown does orthogonality well. :-)

### Section Challenges

- [ ] Consider the difference between tools which have a graphical user interface and small but combinable command-line utilities used at shell prompts. Which set is more orthogonal, and why? Which is easier to use for exactly the purpose for which it was intended? Which set is easier to combine with other tools to meet new challenges? Which set is easier to learn?
- [ ] C++ supports multiple inheritance, and Java allows a class to implement multiple interfaces. Ruby has mixins. What impact does using these facilities have on orthogonality? Is there a difference in impact between using multiple inheritance and multiple interfaces? Is there a difference between using delegation and using inheritance?

## Reversibility

> Nothing is more dangerous than an idea if it's the only one you have.&mdash;Emil-Auguste Chartier (Alain), Propos sur la religion, 1938

Requirements will change. There are no final decisions in programming. You need to keep your code flexible, yes, but you also need to think about maintaining flexibility in your architecture, deployment, and vendor integration. Make it ETC.

### Section Challenges

- [ ] Time for a little quantum mechanics with Schrödinger's cat. Suppose you have a cat in a closed box, along with a radioactive particle. The particle has exactly a 50% chance of fissioning into two. If it does, the cat will be killed. If it doesn't, the cat will be okay. So, is the cat dead or alive? According to Schrödinger, the correct answer is both (at least while the box remains closed). Every time a subnuclear reaction takes place that has two possible outcomes, the universe is cloned. In one, the event occurred, in the other it didn't. The cat's alive in one universe, dead in another. Only when you open the box do you know which universe you are in. No wonder coding for the future is difficult. But think of code evolution along the same lines as a box full of Schrödinger's cats: every decision results in a different version of the future. How many possible futures can your code support? Which ones are more likely? How hard will it be to support them when the time comes? Dare you open the box?

## Tracer Bullets

Use tracer bullets to help you find the target. Tracer bullets allow you to illuminate a small path through all architectural layers of your project. Use this approach to speak to your biggest doubts / risks about what the full project will be. You use this when you're not 100% sure where you're going, so you will probably need to adjust your point of aim. But a small body of code has less inertia, so you can adjust quickly.

- tracer code is not disposable: write it for keeps
- tracer development is incremental, like the full project it will become
- the traditional alternative is code in modules (in isolation), then combine into subassemblies, then further combine until you have a complete application
- tracer code approach has advantages:

  - users get to see something working early
  - developers build a structure to work in
  - you have an integration platform
  - you have something to demonstrate
  - you have a better feel for progress

- [ ] Have you used tracer code or prototyping in any of your projects? How did it go?

  Tracer code is distinct from prototyping: prototypes explore a specific aspect of the final system&mdash;one layer of the architectural diagram. Prototypes should be thrown away and recoded properly from the lessons learned. Tracer code is lean but complete; prototyping is like reconnaissance for tracer code.

## Prototypes and Post-it Notes

Prototypes don't have to be code-based. They are great for answering just a few questions. You can prototype anything unproven, experimental, or doubtful. Prototypes give you a learning experience, which is their value&mdash;not the code produced, but the lessons learned.

### How to Use Prototypes

You can ignore:

- correctness: use dummy data if you want
- completeness: it has narrow concerns
- robustness: it's okay if it crashes and burns every now again again because you haven't added error checking
- style: prototype code shouldn't really have documentation, although you can document the lessons learned

### How Not to Use Prototypes

If you're in an environment where the incompleteness of the prototype is going to be a hangup for your audience (they don't see the value of the lessons learned), you may be better off using tracer code.

### Section Challenges

- [ ] Marketing would like to sit down and brainstorm a few web page designs with you. They are thinking of clickable image maps to take you to other pages, and so on. But they can't decide on a model for the image—maybe it's a car, or a phone, or a house. You have a list of target pages and content; they'd like to see a few prototypes. Oh, by the way, you have 15 minutes. What tools might you use?

## Domain languages

Try to write code using the vocabulary of the application domain. In other words, program close to the program domain.

Internal domain languages are written in their host language, ultimately being compiled and run as source code. External domain languages are converted into something the host language can use&mdash;there's a parser. Internal domain languages are ultimately bound by the syntax and restrictions of the host language, while external domain languages face no such restriction.

### Section Challenges

- [ ] Could some of the requirements of your current project be expressed in a domain-specific language? Would it be possible to write a compiler or translator that could generate most of the code required?
- [ ] If you decide to adopt mini-languages as a way of programming closer to the problem domain, you're accepting that some effort will be required to implement them. Can you see ways in which the framework you develop for one project can be reused in others?

## Estimating

Estimate to avoid surprises. Ask yourself, "Does the person asking for the estimate need high accuracy or a ballpark figure?" The unit of measurement (second, minute, hour, day, month, year, etc.) you use in your estimate is a signifier of its accuracy.

### Where Do Estimates Come From?

- understand what is being asked: have a grasp on the scope of the domain of knowledge
- build a model of the system: a rough-and-ready mental model will help you examine the original question. E.g., "You asked for an estimate to do 'X'. However, it looks like 'Y', a variant of 'X', could be done in about half the time, and you only lose one feature."
- break the model into components: identify each parameter; identify how the components interact
- give each parameter a value: expect errors; find the parameters with the most impact and focus on getting them right
- calculate the answers
- keep track of your estimating prowess: keep a record to see how close you got&mdash;it's how you can get better

### Estimating Project Schedules

People give multiple estimates in the real world (unless someone pressures them into giving a single answer). _Program Evaluation Review Technique_ (PERT) offers the _optimistic_, _most likely_, and _pessimistic_ estimate. The authors are not big fans of this technique.

Often the best way to determine a timetable for a project is by gaining experience on the project (estimates work best when we know what we're doing). This doesn't have to be a paradox if you practice incremental development: iterate the schedule with the code.

When asked for an estimate, say "I'll get back to you." You get better results when you slow the process down and spend some time going through the steps of creating an estimate.

### Section Challenges

- [ ] Start keeping a log of your estimates. For each, track how accurate you turned out to be. If your error was greater than 50%, try to find out where your estimate went wrong.
