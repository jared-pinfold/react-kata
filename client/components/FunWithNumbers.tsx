import { useState } from "react"

export function FunWithNumbers () {

  const [number, setNumber] = useState(0)

  function doMath(action:string) {
    switch(action) {
      case 'x5': {
        setNumber(number * 5)
        break
      }
      case '-5': {
        setNumber(number - 5)
        break
      }
      case '+5': {
        setNumber(number + 5)
        break
      }
      case '/5': {
        setNumber(number / 5)
        break
      }
      case '=5': {
        setNumber(5)
        break
      }
    }
  }

  return <>
  <h2>Fun with Numbers</h2>

  <h2>The number is {number}</h2>

  <button onClick={() => doMath('x5')}>x 5</button>
  <button onClick={() => doMath('-5')}>- 5</button>
  <button onClick={() => doMath('+5')}>+ 5</button>
  <button onClick={() => doMath('/5')}>/ 5</button>
  <button onClick={() => doMath('=5')}>= 5</button>
  </>


}