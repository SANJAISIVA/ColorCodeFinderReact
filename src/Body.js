import React from 'react'
import Square from './Square'
import Input from './Input'

const Body = ( { colorValue, setColorValue, hexValue, setHexValue, isDark, setIsDark } ) => {
  return (
    <section className='body'>
        <Square

        colorValue = {colorValue}
        hexValue = {hexValue}
        isDark = {isDark}

        />

        <Input
        colorValue = {colorValue}
        setColorValue = {setColorValue}
        setHexValue = {setHexValue}
        isDark = {isDark}
        setIsDark = {setIsDark}

        />
    </section>
  )
}

export default Body