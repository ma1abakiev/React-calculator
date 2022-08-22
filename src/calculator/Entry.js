import React from 'react'

function Entry({val, setVal, example}) {

  
  
  return (
    <form>
      <div className='entry'>{`${example}${val}`}</div>
    </form>
  )
}

export default Entry
