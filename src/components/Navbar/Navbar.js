import './Navbar.css';
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom';


const Navbar = () => { 
    return (
        <nav>
            <div className='Navbar'>
                <Link to='/' className='title'>
                    <img src="images/logo.png" alt="logo" className='logo'/>
                </Link>
                <div className='boton'>
                    <Link to='/category/accesorios' className='space'>Accesorios</Link>
                    <Link to='/category/mouse' className='space'>Mouse</Link>
                    <Link to='category/board' className='space'>Board</Link>
                </div>
                <CardWidget/>
                
            </div>
        </nav>
    )
}

export default Navbar