import React, { useMemo,  useState } from 'react'
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
  const [state, setState] = useState('')
  let example = useMemo(() => {
    return []
  },[val])

  


  function handleSearch(el) {
    if (parseInt(el) <= 9) {
      example.push(el)
      setState(prev => prev.concat(el))
      console.log(example)
    } else if (el === '+') {
      example.push(el)
      setState(prev => prev.concat(el))
      console.log(example)
    } else if (el === '-') {
      example.push(el)
      setState(prev => prev.concat(el))
      console.log(example)
    } else if (el === '*') {
      example.push(el)
      setState(prev => prev.concat(el))
      console.log(example)
    } else if (el === ':') {
      example.push('/')
      setState(prev => prev.concat(el))
      console.log(example)
    } else if (el === '%') {
      example.push(el)
      setState(prev => prev.concat(el))
      console.log(example)
    } else if (el === 'C') {
      setVal('')
      setState('')
      example = []
    } else if (el === ',') {
      example.push('.')
      setState(prev => prev.concat(el))
      console.log(example)
    } else if (el === '=') {
      example.length >= 1
        ? (setVal(eval(example.join(''))))
        : (example = []) 
        setState('')
    }
  }

  //
  
  //

  return (
    <div className="wrapper">
      <Entry example={example} val={val} state={state} ></Entry>
      <Button
        handleSearch={handleSearch}
        array={elements}
        setElements={setElements}
      ></Button>
    </div>
  )
}

export default Calculator
