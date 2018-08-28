# Broken Kaleidoscope

This challenge is designed to get you started with initialising and updating **state** in your React components.

## Installation

```bash
yarn
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000).


## Notes from Slack

1. Clone down https://github.com/dev-academy-challenges/boilerplate-react-webpack and get it up and running.
2. Create a new component using the `class ... extends ...` syntax. Make it draw a square div with a coloured background.
3. Update the component so that it draws its background colour from _state_. You'll need to add a constructor. Look up the `style` prop in the react docs to see how to set the colour and size of the component without a CSS class.
4. Add an `onClick` handler that uses `setState` to change the colour of the div. You could either pick from a list of predefined colours, or use a random hex colour (some examples of how to generate random colours are at https://www.paulirish.com/2009/random-hex-color-code-snippets/).
5. Start adding more of your square components. Reduce their height and width and try and cram as many as possible into the screen (experiment with flexbox and wrapping divs to get them to display the way you'd like (hint: `flex-wrap`). What happens to the performance of your 'app' with so many components? Still fast or beginning to slow down?
