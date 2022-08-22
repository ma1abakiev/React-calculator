import React, { useState } from 'react'
import Button from './Button'
import Entry from './Entry'

function Calculator(props) {
  const [elements, setElements] = useState([
    'C',
    'D',
    '%',
    ':',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    ',',
    '=',
  ])

  
  const [val, setVal] = useState('')
  let example = []


  function handleSearch(el) {
    if (parseInt(el) <= 9) {
      example.push(el)
      console.log(example)
    } else if (el === '+') {
      example.push(el)
      console.log(example)
    } else if (el === '-') {
      example.push(el)
      console.log(example)
    } else if (el === '*') {
      example.push(el)
      console.log(example)
    } else if (el === ':') {
      example.push('/')
      console.log(example)
    } else if (el === '%') {
      example.push(el)
      console.log(example)
    } else if (el === 'C') {
      setVal('')
      example = []
    } else if (el === ',') {
      if(example.includes('.')){
        return false
      }
      else {
        example.push('.')
      }
      
      console.log(example)
    } else if (el === '=') {
      example.length >= 1
        ? (example = setVal(eval(example.join(''))))
        : (example = [])

      console.log(example)
    }
  }

  return (
    <div className="wrapper">
      <Entry example={example} val={val} setVal={setVal}></Entry>
      <Button
        handleSearch={handleSearch}
        array={elements}
        setElements={setElements}
      ></Button>
    </div>
  )
}

export default Calculator
