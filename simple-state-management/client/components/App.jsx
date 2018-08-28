import React from 'react'

import Pixel from './Pixel'

const App = () => {
  // This is fairly new syntax. It just means: "Create a new array with ten thousand elements, and
  // put a `<Pixel />` component in each element". This also demonstrates that React can accept an
  // array of components instead of one div, so it's as if we did:
  //
  //   return [
  //     <Pixel />,
  //     <Pixel />,
  //     <Pixel />
  //   ]
  //
  // instead of:
  //
  //   return (
  //     <div>
  //       <Pixel />
  //       <Pixel />
  //       <Pixel />
  //     </div>
  //   )
  return Array.from({ length: 10000 }, () => <Pixel />)
}

export default App
