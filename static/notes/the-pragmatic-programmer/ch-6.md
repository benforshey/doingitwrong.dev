---
title: Concurrency
description: Notes from Chapter 6 of The Pragmatic Programmer.
tags: [Books, The Pragmatic Programmer]

publishedOn: '2023-12-27'
updatedOn: null
isDraft: true
---

# Concurrency

- _concurrency_ is when the execution of two or more pieces of code act as if they run at the same time: it is a software mechanism
- _parallelism_ is when they **do** run at the same time: it is a hardware concern
- Concurrency requires that you run code in an environment that can switch execution between different parts of your code. This is often implemented using things like fibers, threads, and processes.
- Almost any decent-sized codebase will need to handle concurrency: it's just a real-world requirement.
- _temporal coupling_ happens when your code imposes a sequence of things that is not actually required to solve the problem at hand.
- Shared state is the biggest liability once two things can happen at the same time.

## Breaking Temporal Coupling

There are two aspects of time that are important to us: concurrency (thins happening at the same time), and ordering (the relative positions of things in time). We should think about concurrency in our project by analyzing our workflow through an activity diagram.

- drawn with rounded boxes for actions
- arrow leaving an action leads to another action (A -> B means B must wait on A) or to a thick line called a synchronization bar
- once all actions leading to a synchronization bar are complete, you can proceed along any arrows leaving it (to another action)
- actions with no arrows leading in can be completed at any time.
- this activity helps to identify activities that could be performed in parallel

### Section Challenges

- [ ] How many tasks do you perform in parallel when you get ready for work in the morning? Could you express this in a UML activity diagram? Can you find some way to get ready more quickly by increasing concurrency?

## Shared State is Incorrect State

Scenarioizing servers in an restaurant selling pie (in a pie case) to their tables. Both see the last piece of pie and promise it to their table. One is disappointed.

- The problem is not that two processes can write to the same memory; the problem is that neither process can guarantee that its view of that memory is consistent.
- This is because fetching then updating the pie count is not an atomic operation: the underlying value can change in the middle.
- Semaphores (a thing that only once process can own at a time) can solve this: only the server holding a plastic Leprechaun from the pie case can sell a pie.
  - trade-offs: this only works if all follow the convention
  - mitigation: move resource locking / semaphore handling into resource
- multiple-resource transactions (pie and ice cream) should generally be a separate resource (so that you don't have a server holding pie without ice cream)
- non-transactional updates: concurrency problems aren't restricted to writing to memory, but can pop up in files, databases, external services, etc.
- whenever two or more instances of your code can access some resource at the same time, you have a potential for a problem
- random failures are often concurrency issues
- many languages have library support for mutexes (mutual exclusion), monitors, or semaphores
- one could argue that functional languages (tendency to make all data immutable) make concurrency simpler, though they also run in the real world, subject to temporal restrictions, so you need to be aware of concurrency

## Actors and Processes

Actors and processes offer a means to implement concurrency without the burden of synchronizing access to shared memory. Use actors for concurrency without shared state

- an _actor_ is an independent virtual processor with its own local (and private) state
  - each actor has a mailbox, whose messages get processed as soon as the actor is idle
  - there's no single thing in control: nothing schedules what happens next, no orchestration of raw data to final output
  - the only state in the system is held in messages and the local, private state of the actor
  - all messages are one-way: there's no built-in concept of replying
    - replies can be built by including a mailbox address in the message; make replying part of the message processing
  - processes each message to completion, and only processes one message at a time
- a _process_ is typically a more general-purpose virtual processor, often implemented by the operating system to facilitate concurrency

The diner / server scenario with actors:

- the customer becomes hungry
- they respond by asking the server for pie
- the server asks the pie case for pie
- if available, pie case sends pie to customer and notifies waiter to add to bill
- if not available, pie case informs server

In all of the code for this, there's no explicit concurrency handling, as there is no shared state. Erlang language and runtime are a great example of an actor implementation. Erlang calls actors _processes_, but they're not regular operating system processes as described in this chapter's notes. Also has a supervision system that manages process lifetimes.

### Section Challenges

- [ ] Do you currently have code that uses mutual exclusion to protect shared data? Why not try a prototype of the same code written using actors?
- [ ] The actor code for the diner only supports ordering slices of pie. Extend it to let customers order pie a la mode, with separate agents managing the pie slices and the scoops of ice cream. Arrange things so that it handles the situation where one or the other runs out.

## Blackboards

Blackboards provide a form of laissez faire concurrency, where the blackboard is the storage repository for independent processes, agents, actors, etc. They may be a good fit when writing an application with many sometimes independent and sometimes inter-dependent steps. Use them to coordinate workflows. Imagine writing an application to process loan applications.

- responses (to credit inquiries, bank account balances, etc.) can arrive in any order.
- data aggregation may be done by many different people, distributed across different time zones
- some data gathering may be done automatically by other systems; data may arrive asynchronously
- certain data may be dependent on other data (e.g., cannot start a car's title search until the system has proof of ownership)
- the arrival of new data raises new questions and policies; e.g., bad result from a credit check means stricture requirements for down payment

Messaging systems (think NATS, SQS, Kafka) can be like blackboards, since they offer message persistence and the ability to retrieve messages through pattern matching. Using blackboards comes with trade-offs:

- harder to reason about business logic because everything is disconnected
- observability can suffer unless you implement a system
- agreeing on a communication format (or at least having a repository of different formats) requires work
- more troublesome to deploy as there are more moving parts

### Section Challenges

- [ ] Exercise 24

  Would a blackboard-style system be appropriate for the following applications? Why or why not?

  - Image processing: you'd like to have a number of parallel processes grab chunks of an image, process them, and put the completed chunk back.
  - Group calendaring: you've got people scattered across the globe, in different time zones, speaking different languages, trying to schedule a meeting.
  - Network monitoring tool: the system gathers performance statistics and collects trouble reports, which agenst use to look for trouble in the system.

- [ ] Do you use blackboard systems in the real world&mdash;the message board by the refrigerator, or the big whiteboard at work? What makes them effective? Are messages ever posted with a consistent format? Does it matter?
