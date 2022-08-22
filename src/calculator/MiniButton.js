import React from "react";

function MiniButton({element, search, setSearch, handleSearch}) {
  
  
  return (
    <div>
      <button className="btn" onClick={ () => handleSearch(element)}>{element}</button>
    </div>
    
  )
}

export default MiniButton