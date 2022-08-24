import React, { useState } from 'react'

function Entry({val, example, state}) {

  
  return (
    <form>
      <div className='entry'>{state} {val}</div>
    </form>
  )
}

export default Entry
