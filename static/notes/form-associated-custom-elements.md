---
title: Form-Associated Custom Elements
description: Thoughts on using FACE custom elements, and all that comes along...
tags: [Web Components]

publishedOn: '2024-01-08'
updatedOn: null
isDraft: false
---

I was using the static property [ `formAssociated` ](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example) on some [ Lit ](https://www.lit.dev)-based web components I'm writing for a data-subsetting form at work. I'm bummed that it doesn't click well with my brain. I get it, though&mdash;APIs are hard to design, and I can't even imagine the level of skill needed to build the web component spec. I just wish it had been an attribute on a form input, not a static property on the web component class.

This is how you define a form-associated web component that can set its value on the parent form, using Lit element:

```js
class SubsetterPart extends LitElement {
  static formAssociated = true; // (1)

  /*
    Look, you do your private class fields however you want
    when you're at home. In this house we use proper native
    private class fields.
  */
  #internals;

  #name = 'subsetter-part'

  constructor() {
    super();

    this.#internals = this.attachInternals(); // (2)
  }

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('name', this.#name) // (3)
  }

  @state();
  state = {};

  #handleChange(event) {
    const { value } = event.target

    this.#internals.setFormValue(value) // (4)

    /* set some state and stuff... */
  }

  /* The rest of your class stuff...including the form <input>s */
```

This associates your custom element with a parent form (1), lets you access some shared parent state (2), and adds a name onto the `host` element (shadow host? whatever&hellip;the web component, itself) so that the parent form's `submit` handler can read it from the `FormData` (3), then set's that value _through_ a method available on the shared state (4). A quick aside: learning enough about FACE web components to be able to type that sentence cost me three days (they felt so unproductive).

But why? In this `<subsetter-part>` custom element, why would I want the `host` to control whether it associates **itself** with a form? Well, that might be useful if you were making a web component that wanted to itself be thin wrapper around a form control&mdash;think maybe a custom temporal picker element that might be used to choose a temporal point `[start]` for subsetting data.

```js
  /* The rest of your class stuff...including the form <input>s. */

  #validity = {
   /* Some instance state about what's a valid start date, end date. */
  }

  render() {
    return html`
      <label>
        <slot name="label">choose a date</slot>
        <input
          .value=${this.state.date}
          @change=${this.#handleChange}
          name="date"
          type="date"
          min=${this.validity.fromDate}
          max=${this.validity.toDate}
        >
      </label>
    `
  }
```

If you're vision of web components **includes** that use case, I'm happy. We share that vision. But if your vision of web components **ends at** that, I'm bummed.

What if I want to build a form control that is itself made up of a few form controls? Like what if I wanted to make a custom element that allowed me to select a temporal range `[start, end]` for that same data subsetting task?

I'm going to code this and you're maybe going to have the objection that I could have built this with a series of the same "thin wrapper around a form control" components that I just wrote plus a container component, and you're right. It's not that I **can't** get this done with the current API, it's that it doesn't click with my brain. Anyway, a few form controls like this:

```js
  /* The rest of your class stuff...including the form <input>s. */

  #validity = {
   /* Some instance state about what's a valid start date, end date. */
  }

  render() {
    return html`
      <label>
        <slot name="start-label">choose a start date</slot>
        <input
          .value=${this.state.startDate}
          @change=${this.#handleChange}
          type="start-date"
          name="start-date"
          min=${this.validity.fromDate}
          max=${this.validity.toDate}
        >
      </label>

      <label>
        <slot name="end-label">choose an end date</slot>
        <input
          .value=${this.state.endDate}
          @change=${this.#handleChange}
          type="end-date"
          name="end-date"
          min=${this.validity.fromDate}
          max=${this.validity.toDate}
        >
      </label>
    `
  }
```

So, altogether like this:

```js
class SubsetterPart extends LitElement {
  static formAssociated = true; // (1)

  #internals;

  #name = 'subsetter-part'

  constructor() {
    super();

    this.#internals = this.attachInternals(); // (2)
  }

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('name', this.#name) // (3)
  }

  @state();
  state = {};

  #handleChange(event) {
    const { value } = event.target

    this.#internals.setFormValue(value) // (4)

    /* set some state and stuff... */
  }

  #validity = {
   /* Some instance state about what's a valid start date, end date. */
  }

  render() {
    return html`
      <label>
        <slot name="start-label">choose a start date</slot>
        <input
          .value=${this.state.startDate}
          @change=${this.#handleChange}
          type="start-date"
          name="start-date"
          min=${this.validity.fromDate}
          max=${this.validity.toDate}
        >
      </label>

      <label>
        <slot name="end-label">choose an end date</slot>
        <input
          .value=${this.state.endDate}
          @change=${this.#handleChange}
          type="end-date"
          name="end-date"
          min=${this.validity.fromDate}
          max=${this.validity.toDate}
        >
      </label>
    `
  }
```

Whereas ff `formAssociated` had been an attribute, this is how I'd imagine it being used:

```js
class SubsetterPart extends LitElement {
  @state();
  state = {};

  #validity = {
   /* Some instance state about what's a valid start date, end date. */
  }

  #handleChange = (event) => {
    /* Some of the most amazing change-handling you've seen, admit it. */
  }

  render() {
    return html`
      <label>
        <slot name="start-label">choose a start date</slot>
        <input
          .value=${this.state.startDate}
          @change=${this.#handleChange}
          type="start-date"
          name="start-date"
          min=${this.validity.fromDate}
          max=${this.validity.toDate}
          formassociated
        >
      </label>

      <label>
        <slot name="end-label">choose an end date</slot>
        <input
          .value=${this.state.endDate}
          @change=${this.#handleChange}
          type="end-date"
          name="end-date"
          min=${this.validity.fromDate}
          max=${this.validity.toDate}
          formassociated
        >
      </label>
    `
  }
```

In my magical greenfield world where such a thing is possible, the `formassociated` attribute would tell the parent form that this form control and some key associations should pierce through the Shadow DOM to a parent form. Maybe `formassociated="some-form-id"` could even be a thing, like `form` on a button, etc. Multiple levels of form -> Shadow DOM could have some common-sense use case like using the first available (but `form` attribute is a nice escape hatch). Because `formassociated` is on the input, any form-control-associated label can come along for the ride, too!

In the end, and like I was starting to say previously, I know this same thing could be build with the current API: I just need to chunk components differently. But that's what I dislike! Sometimes a couple of form controls is _just_ the right amount of atomicity. Sometimes I want to share that state and functionality in one class / custom element instead of two. And making everything a well-abstracted component takes time and boilerplate and more files. The hypothetical attribute `formassociated` lets me chunk my state / control my atomicity way better than the static property `formAssociated`.
