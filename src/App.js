import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Products, Navbar } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}

export default App