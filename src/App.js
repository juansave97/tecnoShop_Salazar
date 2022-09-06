import './App.css';
import './components/Navbar/Navbar';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import { NotificationProvider} from './notification/Notification'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'
import Checkout from './components/Checkout/checkout'





function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd= (quantity) => {
    console.log('cantidad de items agregados', quantity)
  } 

  return (
    <div className="App">
      <header className="App-header">
      <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="Bienvenid@ a tu tienda online de Tecnología" />}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting="Artículos Filtrados" />}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer greeting="Cargando Detalles"/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </NotificationProvider>
      </header>
    </div>
  );
}

export default App;
