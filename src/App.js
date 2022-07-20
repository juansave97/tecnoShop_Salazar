import './App.css';
import './components/Navbar/Navbar';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemCount from './/components/itemCount/itemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('cantidad de items agregados', quantity)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemCount show={show} stock={35} initial={1} onAdd={handleOnAdd}/>
        <ItemListContainer greeting=" Welcome TecnoShopers"/>
      </header>
    </div>
  );
}

export default App;
