---
title: Thoughts on Microservices
description: Thoughts on microservices the first time I had to structure code so that it worked well on a physical boundary and poorly on its logical boundaries.
tags: [Thoughts, Microservices]

publishedOn: '2023-11-06'
updatedOn: null
isDraft: false
---

Because of cold-start times and serverless ideology, we keep things small in microservices. We miss out on some stuff, I think. Microservices are the hard edge of the API interface, everywhere. Services (maybe just domain-oriented ones) allow you the tried-and-true wisdom of grouping together those things that share a reason to change. You can find common patterns, optimize things, share like code yet develop a good sense of what **shouldn't** be abstracted. Then, you expose what you want to the world with the hard edge of the API interface, where you get what you get--what the API design allows.

I was just writing all this when I found **[Towards Modern Development of Cloud Applications](https://dl.acm.org/doi/pdf/10.1145/3593856.3595909)**. The paper seems fantastic--though I'll admit that I hope to see it all done in WASM or something. I should also admit that I probably don't understand it all that well. I'd love to mess around with it until I do.
