# Component stylesheets loader

[Webpack](webpack.github.io) loader that provides simple convention on how to
organize component's stylesheets.

_If component has an associated stylesheets, **stylesheets file should has the
same name** (except extension of cource) and be **placed in the same directory**. When
component is required stylesheets file will be required as well._

## Installation

```
npm install --save-dev component-css-loader
```

## Usage

In config file:

``` javascript
// ...
  module: {
    loaders: [
      // ...
      { test: /\.jsx$/, loader: 'component-css?ext=styl!...' },
      // ...
    ]
  },
// ...
```

Inline:

``` javascript
var Button = require('component-css?ext=styl!./components/button/button.jsx');
```
With css modules:

``` javascript
// ...
  module: {
    loaders: [
      // ...
      { test: /\.jsx$/, loader: 'component-css?ext=styl&cssModules=1!...' },
      // ...
    ]
  },
// ...
```
Required stylesheet is saved to variable `styles`

Read more about [webpack loaders](http://webpack.github.io/docs/using-loaders.html).

## Avaliable queries

At the moment, only single query is avalible: `ext`. It allows to specify
extension name of stylesheets file.

## Example

Imagine you have "button" component (in this case, component file has
[`jsx`](http://facebook.github.io/react/docs/jsx-in-depth.html) extension, and
stylesheets file has [`styl`](http://learnboost.github.io/stylus/)) extension):

```
...
├── button
│   ├── button.jsx
│   ├── button.styl
│   ...
...
```

Later, from another component:

``` javascript
var Button = require('./components/button/button.jsx');
```

As the result you will have two required files: `button.jsx` and `button.styl`.

### How it works?

`component-css-loader` modifies original component source code and adds
`require('component_name.styl')` at the first line.

For better understanding, read [the source code](./component_css_loader.js).

