import { useState } from 'react'
import './app.css'
import About from './componts/about/About'
import Contect from './componts/contect/Contect'
import Intro from './componts/intro/Intro'
import ProductList from './componts/productList/ProductList'
import Toggol from './componts/toggol/Toggol'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'app-dark' : ''}>
      <Toggol dark={darkMode} toggol={setDarkMode} />
      <Intro />
      <About />
      <ProductList />
      <Contect />
    </div>
  )
}

export default App
