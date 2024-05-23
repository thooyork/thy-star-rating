# ThyStarRating

This is a simple star-rating web-component built with lit.
It has a "value" attribute to set the initial value declarative.

![Screenshot](https://smart-sign.com/npm/thy-star-rating/screenshot.png)

## Features
 - small
 - lightweight
 - framework agnostic (like any other true web component)
 - integrates for example with vanilla, vue, react, angular, svelte, solid.js and many more

```
    <thy-star-rating></thy-star-rating>
    <thy-star-rating value="2"></thy-star-rating> // sets the initial Rating to 2 stars
```

It also fires a custom event "changed" when the rating is changed, that you can listen to like so:

```js
 const els = document.querySelectorAll('thy-star-rating');
  els.forEach((el, idx) => {
    el.addEventListener('changed', (e) => {
      console.log(`Component ${idx + 1}: Rating changed from ${e.detail.oldValue} 🡒 ${e.detail.value}`);
    });
  });
```

## Installation
```
npm install thy-star-rating
```

## Usage

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My fancy app</title>
    <script type="module">import 'thy-star-rating';</script>
  </head>
  <body>
    <thy-star-rating></thy-star-rating>
  </body>
</html>
```

## Styling
Overwrite colors with this css vars:
| default | hover | clicked |
| --- | --- | --- |
|```--star-default-color```|```--star-halo-color```|```--star-rated-color```|


## Demo (or it didn't happen)
[VISIT DEMO SITE](https://smart-sign.com/npm/thy-star-rating/)

## ✨ Have Fun ! 🕺