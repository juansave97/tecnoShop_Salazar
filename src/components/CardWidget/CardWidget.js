import './CardWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'  

const CardWidget = () => {
    const { getQuantity, totalQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <Link to='/cart'  className='cartt'>
            <img src="images\cart-svgrepo-com.svg" alt="cart"/> 
            {totalQuantity}
        </Link>
    )
}

export default CardWidget