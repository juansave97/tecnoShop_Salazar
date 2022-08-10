import './App.css';
import './components/Navbar/Navbar';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemCount from './/components/itemCount/itemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'



function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd= (quantity) => {
    console.log('cantidad de items agregados', quantity)
  } 

  return (
    <div className="App">
      <header className="App-header">
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Hi TecnoShopers " />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Artículos Filtrados" />}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer greeting="Cargando Detalles"/>}/>
              <Route path='/cart' element={<h1>CART</h1>}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;
