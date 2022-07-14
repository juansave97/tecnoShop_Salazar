
import './Navbar.css';
import CardWidget from '../CardWidget/CardWidget'


const Navbar = () => { 
    return (
        <nav>
            <div className='Navbar'>
                <div className='title'>
                    TECNOSHOP
                </div>
                <div className='boton'>
                    <button>Productos</button>
                    <button>Nosotros</button>
                    <button>Trabaja con nosotros</button>
                </div>
                <CardWidget/>
                
            </div>
        </nav>
    )
}

export default Navbar