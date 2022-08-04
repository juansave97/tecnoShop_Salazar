import './App.css';
import './components/Navbar/Navbar';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemCount from './/components/itemCount/itemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd= (quantity) => {
    console.log('cantidad de items agregados', quantity)
  } 

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Todos nuestros productos" />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estamos filtrando" />}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
      </header>
      <body></body>
    </div>
  );
}

export default App;
