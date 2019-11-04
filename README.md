# Scrolling library

### current CDN link:
```js
<script src='https://cdn.jsdelivr.net/gh/NoxFly/scrolling/scroll.min.js'></script>
```

* **Works without Jquery**

* **Works with arrows**

* **does not work on phone**

Think to enable this option only if user is in computer.

Does not work with Safari yet (window.scrollTo).

other cool library: [SVG library](http://github.com/NoxFly/SVG)

other cool library: [Drag & Drop library](http://github.com/NoxFly/Drag-and-Drop)

## Usage

```js
var scroll = new Scroll(window, document, elements, transition);
// elements must be a .class
// transition can be either 'smooth' or 'auto' (auto = no transition duration)
// window and document are default DOM variables
scroll.disableScroll(); // do this like that user cannot scroll normally between each page
// it's not necessary, but it can fix some errors
```

### Something good to know

if user want to reload page while he scrolled, then next scroll (after reloading) will scroll as he's at the top of the document.

To have a better renderer, you can insert following code:

```js
var scroll = new Scroll(window, document, '.page', 'smooth');
scroll.disableScroll();

scroll.goTo(0); // this will scroll to the top of the document smoothly while he's reloading !
```

### html

You must wrap your `<div class="pages">` with a **<div>** or **<section>** `id="wrapper-page"`

```html
<section id="wrapper-pages">
    <div class="pages page-1"></div>
    <div class="pages page-2"></div>
    <div class="pages page-3"></div>
</section>
```