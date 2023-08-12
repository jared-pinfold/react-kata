import { useState } from 'react'

export function InflateTheUnicorns() {
  const [unicorns, setUnicorns] = useState({
    one: 0,
    two: 0,
    three: 0,
  })
  type Unicorn = keyof typeof unicorns
  function handleClick(unicorn:Unicorn) {
    setUnicorns({
      ...unicorns,
      [unicorn]: unicorns[unicorn] === 3 ? 0 : unicorns[unicorn] + 1,
    })
  }

  return ['one', 'two', 'three'].map(unicorn => {
    return <img
    key={unicorn}
    id={unicorn}
    className="unicorn"
    src={`client/images/unicorn-${unicorns[unicorn as Unicorn]}.png`}
    alt=""
    onClick={() => handleClick(unicorn as Unicorn)}
  />
          
  })
}
