import './App.css';
import './components/Navbar/Navbar';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemCount from './/components/itemCount/itemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd= (quantity) => {
    console.log('cantidad de items agregados', quantity)
  } 

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <ItemCount show={show} stock={35} initial={1} onAdd={handleOnAdd}/> */}
        <ItemListContainer show={show} setShow={setShow} greeting="Hi TecnoShopers"/>
        <ItemDetailContainer/>
      </header>
      <body></body>
    </div>
  );
}

export default App;
