# Components MyComponent

**Compatible with Quasar UI v2 and Vue 3**.


# Component MyComponent
> Short description of the component




# Usage

## Quasar CLI project


Install the [App Extension](../app-extension).

**OR**:


Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-test-ext'
import 'quasar-ui-test-ext/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="quasar-ui-test-ext/dist/index.css"></style>

<script>
import { Component as MyComponent } from 'quasar-ui-test-ext'

export default {
  
  components: {
    MyComponent
  }
  
  
}
</script>
```

## Vue CLI project

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-test-ext'
import 'quasar-ui-test-ext/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="quasar-ui-test-ext/dist/index.css"></style>

<script>
import { Component as MyComponent } from 'quasar-ui-test-ext'

export default {
  
  components: {
    MyComponent
  }
  
  
}
</script>
```

## UMD variant

Exports `window.quasarTestExt`.

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/quasar-ui-test-ext/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/quasar-ui-test-ext/dist/index.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/quasar-ui-test-ext/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```

# Building package
```bash
$ yarn
$ yarn build
```

# Adding Assets
If you have a component that has assets, like language or icon-sets, you will need to provide these for UMD. In the `ui/build/script.javascript.js` file, you will find a couple of commented out commands that call `addAssets`. Uncomment what you need and add your assets to have them be built and put into the `ui/dist` folder.
