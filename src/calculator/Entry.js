import React from 'react'

function Entry({val, state}) {

  
  return (
    <form>
      <div className='entry'>{state === '' ? val : state}</div>
    </form>
  )
}

export default Entry
