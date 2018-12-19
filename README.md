# choozy

choozy is a simple 232 byte utility that simplifies the selection of multiple dom nodes.

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
    <footer class="js-footer"></main>
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

```js
import choozy from 'choozy'

const dom = choozy()
```

## Options

The first argument is the container that choozy will query. This is the body element by default.

The second argument is the prefix that will be used to select elements. By default, this is `js-`

```js
choozy((container = document.body), (prefix = 'js-'))
```

## Examples

### In a single page app

Perhaps you're writing a single page application and you have a base view class that all of the views in your application extend. You could use choozy to handle dom selection so all you need to do is add classes to the elements you need:

```js
import choozy from 'choozy'

class BaseView {
  constructor(container) {
    this.refs = choozy(container)
    this.init()
  }
}

class Home extends BaseView {
  constructor(container) {
    super(container)
  }

  init() {
    // access your elements via `this.refs`
  }
}
```

### Change the prefix for your entire app

In order to keep this utility as tiny as possible, the choozy function takes 2 arguments instead of an options object. So if you wanted to change the prefix to `foo-` for your whole app, you could do something like this:

```js
/* util.js */

import choozy from 'choozy'

const myChoozy = container => choozy(container, 'foo-')

export default myChoozy
```

## Inspiration

This package is inspired by [query-dom-components](https://github.com/dcamilleri/query-dom-components)

## License

[MIT License](https://opensource.org/licenses/MIT) © [Mike Wagz](https://wagz.io)
