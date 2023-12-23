---
title: Bend, or Break
description: Notes from Chapter 5 of The Pragmatic Programmer.
tags: [Books, The Pragmatic Programmer]

publishedOn: '2023-12-20'
updatedOn: null
isDraft: true
---

# Bend, or Break

Make every effort to write code that's as flexible as possible.

## Decoupling

- Coupling is the enemy of change, because it links together things that must change in parallel.
- Software is not bridges&mdash;we don't want components to be rigidly coupled together, or else change one component requires changing its coupled components.
- Coupling is transitive: A -> B, B -> C means A -> C.
- Decoupled code is easier to change (ETC).
- Symptoms of coupling
  - dependencies between unrelated modules / libraries
  - simple changes to one module propagates changes through unrelated modules (or breaks)
  - developers are afraid to change code because they don't know what will be affected
  - meeting where everyone has to attend because nobody is sure who will be affected by a change

### Train Wrecks

```java
public void applyDiscount(customer, order_id, discount) {
	  totals = customer
	      .orders
	      .find(order_id)
	      .getTotals();
	  totals.grandTotal = totals.grandTotal - discount;
	  totals.discount   = discount;
}
```

That code transverses five levels of abstraction, from customers to total amounts. We have to know that customer exposes orders that have a `.find()` method, etc., all the way down. That's a lot of implicit knowledge and things that cannot change in the future.

Tell, don't ask. Don't make decisions based on the internal state of an object and then update that object. This is a pattern, not a law of nature, so don't follow it slavishly.

```java
public void applyDiscount(customer, order_id, discount) {
	  totals = customer
	      .findOrder(order_id)
	      .applyDiscount(discount);
}
```

The Law of Demeter expressing the following sentiment in a more detailed way (LoD probably not very relevant today): don't chain method calls. This "one-dot rule" _doesn't_ apply if the things you're chaining are very unlikely to change (like language-level features). The following Ruby code doesn't violate the one-dot rule, because it's language-level.

```ruby
people
  .sort_by {|person| person.age }
  .first(10)
  .map {| person | person.name }
```

Pipelines are not method-call chains: pipelines transform data, passing it from one function to the next. We're not relying on hidden implementation details.

- [ ] How does "tell, don't ask" strike you?
- [ ] Do you think the "one-dot rule" is practical? Could it be helpful?

### The Evils of Globalization

- Global data is coupling, as you never know what will break if you change it. Reuse should not be your primary concern when writing code, but the thinking that makes code reusable should be in your mind as you create it. Avoid global data&mdash;it slows you down.
- Singletons are global data, though at least they have intelligence behind `Confg.getLogLevel()` that can help you not break calling code.
- Any mutable external resource is global data. You can't avoid using a database, so you can minimize the impact of global data by wrapping these resources behind code you control.
- If it's important enough to be global, wrap it in an API.

- [ ] What are appropriate uses of global data?

### Inheritance Adds Coupling

Subclassing just isn't shy: it doesn't deal with only it's own concern. Alterations in one place (the parent class) can change the subclass elsewhere.

- [ ] How does this strike you? Do you prefer to work in an OOP mental model / language?
- [ ] Can you imagine using OOP without subclassing?

## Juggling the Real World

Events represent the availability of information. They can come from external or internal sources. When we write applications that response to events, here are are few strategies:

- Finite State Machines
- The Observer Pattern
- Publish / Subscribe
- Reactive Programming and Streams

### Finite State Machines

- There exist a limited number of states for your application. You can be in one state at any given time.
- Events move you from one state to another.
- Actions can be triggered upon moving.

- [ ] What do you think about using a FSM in your next application? Have you ever used one before?

### The Observer Pattern

- source of events is the _observable_
- _observers_ are watching the observable
- fairly simple pattern: push a function reference into a list, and call those functions when the event occurs
- because the observers have to register with the observable, you introduce coupling
- callbacks are handled synchronously, so you have more opportunity for performance bottlenecks

### Publish / Subscribe (PubSub)

- generalizes the observer pattern, dealing with coupling and performance bottlenecks
- _publishers_ and _subscribers_ are connected via channels (the how is an implementation detail hidden from your application logic)
- subscribes register to 1 or more channels
- publishers write to channels
- good choice for decoupling the handling of asynchronous events
- observability is hard with such a distributed system
- is a good example of reducing coupling by abstracting up through a shared interface (the channel)

### Reactive Programming

## Transforming Programming

## Inheritance Tax

- two types of inheritance (from two origins):
  - Simula, where inheritance was a way of combining types
  - Smalltalk, where inheritance was a dynamic organization of behaviors
- both types have the issue of coupling code
- alternatives to inheritance:
  - interfaces and protocols, which allow us to
  - delegation
  - mixins and traits

## Configuration

Parameterize your application by using external configuration. Common configurable data:

- credentials for external services
- logging levels and destinations
- ports, IP addresses, machine names, cluster names
- environment-specific validation parameters
- externally-set parameters (like tax rates)
- site-specific formatting details
- license keys

You could structure this as a flat-file off-the-shelf plain-text document (that works). You can also store it in a database table if it is likely to be changed by the customer. You can also do both!

Consider putting your configuration data behind a thin API:

- multiple applications can share configuration data (with appropriate authN and authZ)
- configuration changes can be made globally
- configuration data can be made via a specialized UI
- configuration data become dynamic (no application restart necessary)

As with all things, don't overdo it. You _can_ have too much configuration.
