# Scrolling library

### current CDN link:
```js
<script src='https://cdn.jsdelivr.net/gh/NoxFly/scroll/scroll.min.js'></script>
```

### NPM

[NPM scroll](https://www.npmjs.com/package/@noxfly/scroll)

* **Works without Jquery**

* **Works with arrows**

* **does not work on phone**

Think to enable this option only if user is in computer.

Does not work with Safari yet (window.scrollTo).

other cool library: [SVG library](http://github.com/NoxFly/SVG)

other cool library: [Drag & Drop library](http://github.com/NoxFly/Drag-and-Drop)

## Usage

```js
var scroll = new Scroll(elements, transition, wd);
// elements must be a .class
// transition can be either 'smooth' or 'auto' (auto = no transition duration)
// wd is an array of 2 elements :
//  - window
//  - document
// you use this parameter only if you get an error with window and document if you're not passing this parameter
scroll.disableScroll(); // do this like that user cannot scroll normally between each page
// it's not necessary, but it can fix some errors
```

### Something good to know

if user want to reload page while he scrolled, then next scroll (after reloading) will scroll as he's at the top of the document.

To have a better renderer, you can insert following code:

```js
var scroll = new Scroll('.page', 'smooth');
scroll.disableScroll();

scroll.goTo(0); // this will scroll to the top of the document smoothly while he's reloading !
```

### html

You must wrap your `<div class="pages">` with a **`<div>`** or **`<section>`** `id="wrapper-page"`

```html
<section id="wrapper-pages">
    <div class="pages page-1"></div>
    <div class="pages page-2"></div>
    <div class="pages page-3"></div>
</section>
```