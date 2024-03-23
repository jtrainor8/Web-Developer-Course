import { useState } from 'react'
import './App.css'
import Clicker from './Clicker'
import Counter from './Counter'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Clicker message="HI!!!" buttonText="Click Me" />
      <Clicker message="Please stop clicking me :(" buttonText="do not click" /> */}

      <Counter />

      {/* <Toggler /> */}

      {/* <ToggleCounter /> */}

    </div>
  )
}

export default App;
