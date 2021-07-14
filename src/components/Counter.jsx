import React, { useState } from 'react'

export default function Counter() {
  let [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <a href="#" onClick={decrement} className="button">
        -
      </a>
      <span className="counter-span">{count}</span>
      <a href="#" onClick={increment} className="button">
        +
      </a>
    </div>
  )
}
