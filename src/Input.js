import React from 'react'
import colorNames from 'colornames'

const Input = ( { colorValue, setColorValue, setHexValue, isDark, setIsDark } ) => {
  
  return (
      <form onSubmit={ (e) => e.preventDefault()}>
        <input 
              autoFocus
              type="text"
              placeholder='Add Color Name'
              required
              value={colorValue}
              onChange={(e) => { setColorValue(e.target.value); 
                                setHexValue( colorNames(e.target.value) );
              } }
        />
        
        <button type='button' onClick={ () => {setIsDark(!isDark)} }>Click to Toggle Font Color</button>
      </form>
  )
}

export default Input