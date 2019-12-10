# choozy

choozy is a tiny 331 byte DOM utility that simplifies the selection of multiple elements

## Installation

```
npm i choozy
```

## Usage

Given the following HTML

```html
<html>
  <body>
    <header class="js-header">
      <h1 class="js-logo">Logo</h1>
      <nav class="js-nav">
        <button class="js-button">Menu</button>
        <ul class="js-list">
          <li class="js-items"></li>
          <li class="js-items"></li>
          <li class="js-items"></li>
        </ul>
      </nav>
    </header>
    <main class="js-main"></main>
    <footer class="js-footer"></footer>
  </body>
</html>
```

### Before choozy

```js
const dom = {
  header: document.querySelector('.js-header'),
  logo: document.querySelector('.js-logo'),
  nav: document.querySelector('.js-nav'),
  button: document.querySelector('.js-button'),
  list: document.querySelector('.js-list'),
  items: [...document.querySelectorAll('.js-items')],
  main: document.querySelector('.js-main'),
  footer: document.querySelector('.js-footer'),
}
```

### After choozy

If multiple elements contain the same suffix, they are collected into an array.

```js
import choozy from 'choozy'

const dom = choozy()
```

## Options

The first argument is the container that choozy will query. This is the body element by default.

The second argument is the prefix that will be used to select elements. By default, this is `js-`

```js
choozy(container = document.body, prefix = 'js-')
```

## Inspiration

This package is inspired by [query-dom-components](https://github.com/dcamilleri/query-dom-components)

## License

[MIT License](https://opensource.org/licenses/MIT) © [Mike Wagz](https://wagz.io)
