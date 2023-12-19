---
title: Pragmatic Paranoia
description: Notes from Chapter 4 of The Pragmatic Programmer.
tags: [Books, The Pragmatic Programmer]

publishedOn: '2023-12-13'
updatedOn: null
isDraft: false
---

# Pragmatic Paranoia

Nobody writes perfect code. Just as we've all been taught to be defensive drivers, so we should be defensive coders.

## Design By Contract

First developed by Bertrand Meyer for the language Eiffel. A correct program is one that does no more and no less than it claims to do. Documenting and verifying those claims is the heart of Design By Contract (DBC). Expectations and claims are described as follows:

- preconditions: what needs to be true for a routine to be called
  - without DBC, maybe like conditional parsing input to conditionally call a function
- postconditions: the state of data after the routine is done (requires that it will conclude, so no infinite loops)
  - without DBC, maybe like parsing output and returning data or error
- class invariants: class ensures this conditions is true from the perspective of the caller (not necessarily internal to the routine when running) once the routine is finished

  - without DBC, maybe like an assertion about output

  Summarized as: If all the routine's preconditions are met by the caller, the routine shall guarantee that all postconditions and invariants will be true when it completes. If the contract is broken, the "remedy" is invoked, which may be an exception or program termination. This shouldn't happen; it's a bug.

  Some languages have better support for these concepts than others. Clojure has pre-conditions and post-conditions. Elixir has guard clauses. Even in languages that don't support these concepts, you can honor the principles (Zod is one example). If orthogonal (decoupled) code is "shy" (so that it's concerns are its' own), DBC code is "lazy": be strict in what you will accept before you begin, and promise as little as possible in return. This may seem to contradict Postel's Law / the Robustness Principle

  > Be liberal in what you accept, and conservative in what you send.

But a series of "lazy" functions can sum to a liberal / robust acceptance.

DBC differs from Test-Driven Development and Defensive Programming in the following:

- DBC requires no mocking or setup.
- DBC defines the parameter for success or failure in all cases, whereas testing can only target one specific case at a time.
- TDD happens only during the build cycle; DBC and assertions are runtime, so they exist through all cycles.
- TDD does not generally focus on checking internal invariants.
- DBC is more efficient and DRY-er than defensive programming; if no one has to validate the data, then everyone does.

### Implementing DBC

Simply enumerating the input domain range, boundary conditions, and what the routine promises to deliver (and therefore what it _doesn't_ promise to deliver) is a huge leap forward in writing better software. Most languages don't support DBC in the code, so you can implement it the best you can.

- Assertions: runtime checks of logical conditions
  - if used in classes where extended from parent / superclass, assertions must be manually called or recreated; not auto-inherited
  - if you tie assertions to a log level, they may be turned off
  - there's no concept of "old" values&mdash;values as they existed at the entry to a method, so you have save / assign any data you want to check in the post condition
  - the runtime doesn't support checking contracts, so you're left with bolting it on (like throwing an error)
- Crashing Early
  - validate your input and crash early so that, for example, you're not passing a `NaN` value down the line to a `sqrt` function
- Semantic Invariants: a kind of "philosophical contract"
  - semantic invariants are endemic to the meaning of the thing; they are not changeable business logic
  - when you find one, state it clearly and concisely
  - e.g., if building a debit transaction system: "Err in favor of the consumer."
- Dynamic Contracts and Agents
  - e.g., "I can't provide _that_, but if you give me _this_, then I might provide something else."

### Section Challenges

- [ ] Points to ponder: If DBC is so powerful, why isn't it used more widely? Is it hard to come up with the contract? Does it make you think about issues you'd rather ignore for now? Does it force you to THINK!? Clearly, this is a dangerous tool!

- [ ] Exercise 14

  Design an interface to a kitchen blender. It will eventually be a web-based, IoT-enabled blender, but for now we just need the interface to control it. It has ten speed settings (0 means off). You can't operate it empty, and you can change the speed only one unit at a time (that is, from 0 to 1, and from 1 to 2, not from 0 to 2).

  Here are the methods. Add appropriate pre- and postconditions and an invariant.

```java
int getSpeed()
void setSpeed(int x)
boolean isFull()
void fill()
void empty()
```

- [ ] Exercise 15 (possible answer)

  How many numbers are in the series 0, 5, 10, 15, …, 100?

## Dead Programs Tell No Lies

It's easy to fall into the "that can't happen" mentality: "Does my switch statement _really_ need a default case?!" But we're coding defensively; we make sure the data is what we think it is, the code in production is the code we think it is, the correct dependency versions were loaded, etc.

The application code shouldn't be eclipsed by the error handling code. If the caller has to catch every form of exception and raise the appropriate error, the code is coupled: if the author of the called function adds another exception, the caller is subtly out-of-date.

The Erlang and Elixir languages embrace a "Crash Early" (crash, don't trash) philosophy.

> Defensive programming is a waste of time. Let it crash!&mdash;Joe Armstrong

In these environments, crashes are managed with supervisors, which are responsible for cleaning up after it, restarting it, etc. Supervisors are supervised, creating a design of supervisor trees. This technique creates high-availability, fault-tolerant systems. This might not always be appropriate: you may have allocated resources that need freeing, need to log messages, finish transactions, etc.

Still, if the "impossible" happens, your program is no longer viable, so terminate it as soon as possible. A dead program normally does a lot less damage than a broken one.

## Assertive Programming

We deceive ourselves when we say "This can never happen...". Use assertions to prevent the impossible. Whenever you find yourself thinking "but of course this could never happen", add code to check it. Assertions, however, do not replace error handling.

- Be careful of of side effects when making assertions&mdash;like calling `.next()` on an iterator.
- Leave assertions on in prod!

### Section Challenges

- [ ] Exercise 16

  A quick reality check. Which of these “impossible” things can happen?

  - A month with fewer than 28 days
  - Error code from a system call: can't access the current directory
  - In C++: a = 2; b = 3; but (a + b) does not equal 5
  - A triangle with an interior angle sum ≠ 180°
  - A minute that doesn't have 60 seconds
  - (a + 1) <= a

## How to Balance Resources

In short, be careful when allocating resources (like opening a file). Don't couple functions tightly together by sharing a file resource that one opens and the other closes. Instead, act locally. Some languages have fail-safes for closing filesystem resource references automatically, like Java's `try-with-resources` statements. General advice:

- Deallocate resources in the reverse order of there allocation so you don't orphan resources if one contains a reference to another.
- When allocating the same set of resources throughout your codebase, use the same ordering. This reduces the possibility of deadlock. I.e., process A claims resource 1 and wants resource 2, but process B claims resource 2 and wants resource 1, causing both to hang.
- The resource could be transactions, network connections, memory, files, threads, windows, etc.
- Consider balancing over time. Applied to log files, you might ask
  - Do you rotate the logs and clean them up?
  - How do you handle the finite space you have for logs?
  - What are you doing with your unofficial debug logs?
  - If using a DB, do you expire the records?
- Object oriented languages can wrap the resource usage in a class. When the class representing the resource is constructed, you allocate the resource; when destructed (and garbage collected, maybe) you deallocate. This can really help when the language you're using allows exceptions to interfere with resource deallocation.
- How to ensure that you deallocate resources if there's an exception? Generally two choices:
  - Use variable scope.
  - Use `finally` clause (of `try...catch...finally`).
- Sometimes you cannot balance resources through the resource allocation pattern. Try to establish a semantic invariant for memory allocation. Who is responsible for the data in an aggregate data structure? Three man options:
  - Top-level structure is responsible for freeing any substructures it contains. These structures recursively delete data they contain.
  - Top-level structure is deallocated and structures that it points to are orphaned.
  - Top-level structure refuses to deallocate itself if it contains any substructures.

### Section Challenges

- [ ] Although there are no guaranteed ways of ensuring that you always free resources, certain design techniques, when applied consistently, will help. In the text we discussed how establishing a semantic invariant for major data structures could direct memory deallocation decisions. Consider how Topic 23, ​Design by Contract​, could help refine this idea.

- [ ] Exercise 17

  Some C and C++ developers make a point of setting a pointer to NULL after they deallocate the memory it references. Why is this a good idea?

- [ ] Exercise 18

  Some Java developers make a point of setting an object variable to NULL after they have finished using the object. Why is this a good idea?

## Don't Outrun Your Headlights

Take small steps&mdash;always. The rate of feedback you can receive is your speed limit. Feedback is what independently confirms or disproves your action. Steps too large are those that require any "fortune telling". Fortune telling feels like:

- Estimate completion dates months in the future.
- Plan a design for future maintenance or extendability.
- Guess user's future needs.
- Guess future tech availability.

Designing for future maintenance only works up to a point&mdash;only as far ahead as you can see. If you're aiming further than that, instead, design code that's easy to change. Make it easy to delete.
