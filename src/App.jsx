
import './App.css'
import Navbar from './components/navbar'
import Payment from './components/payment'
import Products from './components/products'
import Cart from './components/cart'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      <Cart/>
    </Router>
    </>
  )
}

export default App
