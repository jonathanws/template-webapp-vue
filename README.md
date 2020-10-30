# Template Webapp - Vue

A bare-bones frontend UI built with Vue.js. Use this as a starting point when writing your webapp.

## Setup

Before doing any of the following steps, install your dependencides

```bash
npm install
```

## Building your webapp

Build your webapp with

```bash
npm run build
```

This will create a `dist/` directory with your built webapp files

## What's in the box?

### 🚗 Routing

When you need to add another page, start in `router.js`. This lets you assign a new page to a component.

For example if you wanted to add a **Settings** page you would:

-   create a `settings-page.vue` component in `src/pages`
-   create a string (something like `/settings`) in `src/constants/paths.js`
-   connect that string to that component in `src/router.js`

### 👩‍⚖️ State management

If you need to save a value that can be read from any other place in the webapp, save it to the state with [Vuex](https://vuex.vuejs.org/). Start by declaring a placeholder value in `src/vuex/state.js`, and create a [mutation](https://vuex.vuejs.org/guide/mutations.html) to set it.

### 🌈 Color Styling

Using [SCSS/SASS](https://sass-lang.com/), we can style our app however we'd like. Declare any colors you'd like to use in `src/styles/_colors.scss`, or if you'd like to organize them you can create a new file, much like `src/styles/_material-colors.scss`. Then reference your colors like this:

```scss
@import '../styles/_global-constants';

.logo {
	color: $accent-color;
}
```

### 😲 Reactive design

```scss
@import '../styles/_screen-sizes';

// Include this style anything the size of (or larger than) a tablet
@include for-size($tablet-landscape-up) {
	div {
		width: 75%;
	}
}
```

### ✍ Fonts

Google's [Cabin font](https://fonts.google.com/specimen/Cabin) is included in `src/styles/_fonts.scss`;

### 🌮 CRUD example for tacos

Wondering how to write a module to consume API calls? The taco module (`src/modules/taco-module.js`) has examples for:

| CRUD method | Taco function              |
| ----------- | -------------------------- |
| CREATE      | `makeTaco`                 |
| READ        | `getTaco` or `getAllTacos` |
| UPDATE      | `updateTaco`               |
| DELETE      | `eatTaco`                  |

## Developing

To start developing, serve your webapp locally

```bash
npm run serve
```

This should serve your webapp to a local port, most likely `8080`. You would then see your work at: http://localhost:8080
