---
title: API Design Patterns
description: Notes on my read-through of API Design Patterns.
tags: [Books, API Design Patterns]

publishedOn: '2023-11-06'
updatedOn: null
isDraft: true
---

## RPC-oriented APIs vs resource-oriented APIs

In resource-oriented APIs (generally thought of as RESTful) the HTTP verbs are responsible for how you act on one resource, which means that the API is more discoverable and easier to remember. RPC-oriented APIs can, with standardization, be discoverable and memorable. Standardization looks like:

| Method | Resource | Resulting RPC    |
| ------ | -------- | ---------------- |
| Create | Document | CreateDocument() |
| Get    |          | GetDocument()    |
| List   |          | ListDocument()   |
| Delete |          | DeleteDocument() |
| Update |          | UpdateDocument() |

RPC excels when the API is stateless (can be called independently of other requests), like getWeatherForecast(postalCode=90210). If you require stores / state, like getting the weather forecast for the user's favorite cities, resource-oriented APIs tend to excel.

## What makes an API good?

APIs exist because users want programmatic functionality.

1. operational: do the thing users want.
1. meets non-operational requirements: latency, accuracy, etc.
1. expressive: clear and simple way to do the things users want to do.
1. simple: more than just shifting around complexity (think JSON-WSP or GraphQL), expose functionality users want in the most straightforward way possible. Stated another way, "make the common case awesome and the advanced case possible." Maybe "pave the cow paths but also use signposts"? Simplicity seems to be the art of adding advanced functionality that users want without making the common functionality onerous to use.
1. predictable: since APIs are usually developed over time with multiple teams, input names don't have consistency. Seek consistency to prevent violating consumer assumptions. Use consistent, repeatable patterns.

## API Design Patterns

Interfaces can be flexible or inflexible; their visibility can be private or public. Generally, APIs are public and inflexible, which is a hard combination to get right. Design patterns help.

## Naming

Naming is particularly important in API Design because much of the interface is exposed to the public. There's a real pressure to "get it right" the first time. What makes a name "good"?

1. expressive: most import among all attributes; clearly convey the thing you're naming. This is harder than it seems, as often you'll need a wider awareness (does _topic_ refer to async messaging channel name or machine learning topic modeling, if my API does both) and the ability to approach a domain of knowledge with fresh eyes.
1. simple: `UserSpecifiedPreferences` is expressive, but not simple enough (what does `Specified` add?). `Preferences` is too simple&mdash;who's preferences? `UserPreferences` is both simple enough and expressive enough.
1. predictable: in general, use the same name to represent that thing across your API. If it's a different concept, use a different name. Let your users build on the knowledge they gain, rather than forcing them to learn a new name for the same concept.

## Language, Grammar, and Syntax

Generally, code in American English as a shared common language.

- grammar: name your API functions in the imperative mood (command an action) rather than indicative mood (answers a question). Take `isValid()`: should is return a boolean or a list of errors? `getValidationErrors()` leaves no such questions.
- prepositions: should be thought of as a code smell (though sometimes required&mdash;something isn't quite as right as it could be. If you're calling `ListDocumentsWithOwners()`, the preposition is a sign that you should probably be using a field mask or view.
- pluralization: resource-oriented APIs almost always use the plural form of a noun to describe a collection. A collection or multiple persons would be `api/people`, with a specific person being accessible at `api/people/1234`. The choice of American English as the lingua franca of programming sometimes comes back to bite us with its unusual pluralization rules.
- case: whether you choose `camelCase`, `snake_case`, or `kebab-case`, be consistent. JavaScript / TypeScript convention is to use camel case in general, capitalized camel case for type names.
- reserved keywords: if you find conflict in between what you want to use as a name and what the system considers reserved, try getting more specific. `to` and `from` are reserved in Python, so if you were naming fields in an API that dealt with sending messages, consider something like `sender` and `recipient`.

## Context

- units: more descriptive names should be used, vis-a-vis the NASA Mars Climate Orbiter and `impulse` versus `impulsePoundForceSeconds` and `impulseNewtonSeconds`. Sometimes this can be solved by putting the dimensions in as an object implementing an interface that has the descriptive names: `{ impulse: { poundForceSeconds: number, newtonSeconds: number } }`

## Resource Relationships

- reference / foreign key relationships: User and Message, where a message has a reference to a specific author (User).
- many-to-many relationships: ChatRoom and User, where a chat room holds many members (Users) and Users may be members of many chat rooms.
- self-referential relationships: Employee and Manager, where both are of type Employee, but one employee has one (or more) manager. Called self-referential not because it points to the same unique resource, but to the same resource type.
- hierarchical relationships: the pointer reflects _containment_ or _ownership_, like a directory. From previous example, access to ChatRoom should mean that you have access to Messages. These relationships can be quite complex.

When building an API, we figure out the resources that matter to us, then we figure out how the resources relate to one another. Don't over-connect relationships&mdash;they become quite difficult to maintain those changing relationships and can slow down your API. Resource relationships have a cost. Think of a large social graph where millions of users could follow millions of users. What happens when a popular user deletes her account? Be judicious and use relationships wisely.

Reference, or inline? The sage advice is this: weigh the extra API call for reference versus the duplicated data for inline. Optimize for your common case without compromising the feasibility of the advanced case.

The biggest effect of a hierarchical relationship is the cascade of actions and inheritance of behaviors and properties. E.g., deleting the chat room deletes the chats. If this behavior is desirable&mdash;core to your API&mdash;then you have a good reason to use a hierarchy. Signs that a hierarchy is a good fit:

- If resource `A` owns resource `B`, then deleting `A` should delete `B`.
- If resource `A` owns resource `B`, then accessing `A` doesn't make sense without also gaining access to `B`.

Signs that a hierarchy isn't a good fit: `A` to be owned by more than `B` (or have a one-to-many relationship), it's not a good relationship.

Antipatterns:

- making everything its own resource&mdash;not everything needs its own id and modeling
  - Is it a one-to-one relationship? Why make it a separate resource?
  - Is the "resource" unlikely to be large in count? Not much is gained, so leave it a data type (a field in the table).
- if you don’t need to interact with one of your proposed resources independent of a resource it’s associated with, then you might be fine with it being just a data Type
- if the concept you’re thinking of is something you might want to interact with directly, if it’s able to be in-lined then that might be a good choice
- deeply nested hierarchies are an antipattern; make it shallower
- in-lining everything: nonrelational databases normalized de-normalizing (in-lining) data, but you lose data surety / integrity when doing so

### Summary

- Resource layout refers to the arrangement and relationships between resources in an API.
- While it might be tempting to connect every resource in an API, fight the urge and only store relationships if they provide important functionality to the API.
- Sometimes it makes sense to store a separate resource for a concept. Other times it’s better to in-line that data and leave the concept as a data type. The decision depends on whether you need to atomically interact with that concept.
- Avoid overly deep hierarchical relationships as they can be difficult to comprehend and manage.

## Data Types and Defaults

When designing APIs, we have to design for every programming language, which we can do by relying on a serialization protocol to send data across the wire to be de-serialized into an in-memory representation. It's not enough to rely on the data types internal to the de-serializing language; we should provide types native to the serialization protocol (mostly JSON).

- booleans:
  - easy to outgrow "yes" or "no" answers (`allowChatbots`, `allowAnonymousUsers`)
  - in general, positive booleans are easier to understand (`allowChatbots` vs `disallowChatobots`)
  - one negative is that there's no way within a single boolean (using only `true` or `false`) to know if it's a user-set value or a default value
- numbers:
  - unlike in a database, in an API you generally don't want numbers as numeric identifiers
  - use instead for values that benefit from the numeric or arithmetic done upon the value
  - boundaries are a chief concern (for the receiving language)
  - default empty values should probably not be zero (that has meaning)
  - the authors state that the best compatibility is achieved by representing numbers as strings (especially floating-point numbers), allowing libraries to parse into accurate numbers (unlike native floating point math, numbers in JS)
- strings:
  - probably the most versatile data type for an API
  - a chief concern is the length of the string, as that matters in many languages
  - What determines length, since UTF-8 characters sometimes take up multiple bytes (1—4, according to a quick Stack Overflow result)?
  - if you're using string to represent numerical values, you should probably reject "out of range" inputs with an error
  - it may be a perfectly reasonable thing to allow `"default"` as a default value, especially if your target language will not allow `null`
  - you have to consider Unicode strings that are not typically used in Western contexts
  - UTF-8 should be your default unless you have an explicit reason to not use it as your encoding format
  - just as you can represent 4 as 4, 3+1, etc., so can you represent identical characters; this is important when checking equality; XML settled on [Normalization Form C](https://unicode.org/reports/tr15/#Norm_Forms), and probably so should your API
- enums:
  - sometimes a mistake to introduce to your API when values are mapped to numbers that don't carry their own semantic meaning
  - think about if MIME types were an enum: it's much clearer to send a value of `"application/pdf"`
- ## lists:
