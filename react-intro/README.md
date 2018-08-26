# React minimal

As part of an introduction to React, this repo attempts to show React in a most basic form.

* Many components can be simple functions.
* Data to render in the component is passed in as props.
* Assemble other components by importing them and calling them.


## Setup

Clone this repo, and from the repo's folder

```sh
yarn
yarn start
```


## Next steps

* Add new mount points and render components into them.
* Add new components and use them inside existing components.
* Render complex data structures (objects in objects) as props.
* Check out the `yarn start` script and the `webpack.config.js` file.
* Conditionally show child components using a ternary operator.
* Create child components from an array of data using `.map()`.


## Wat?

* Why a simple Node server and not `webpack-dev-server`? Students seeing this repo for the first time are proficient with Node/Express. We've chosen to not throw out the concept of client/server even though we admittedly don't need a server here. We introduce `webpack-dev-server` later. Today we just want to focus on React concepts.
