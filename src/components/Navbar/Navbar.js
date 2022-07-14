import './Navbar.css';
import CardWidget from '../CardWidget/CardWidget'


const Navbar = () => { 
    return (
        <nav>
            <div className='Navbar'>
                <div className='title'>
                    <img src="images\logo.png" alt="logo" className='logo'/>
                </div>
                <div className='boton'>
                    <button className='space'>Productos</button>
                    <button className='space'>Nosotros</button>
                    <button className='space'>Trabaja con nosotros</button>
                </div>
                <CardWidget/>
                
            </div>
        </nav>
    )
}

export default Navbar