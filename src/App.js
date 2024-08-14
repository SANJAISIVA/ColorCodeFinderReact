import { Footer } from './Footer';
import { useState } from 'react';
import Header from './Header';
import Body from './Body'


function App() {

  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDark, setIsDark] = useState(true)

  return (
    <div className="App">
      <Header name='Color Code Finder'/>

      <Body 
        colorValue = {colorValue}
        setColorValue = {setColorValue}
        hexValue = {hexValue}
        setHexValue = {setHexValue}
        isDark = {isDark}
        setIsDark = {setIsDark}
      />

      <Footer />

    </div>
  );
}

export default App;
