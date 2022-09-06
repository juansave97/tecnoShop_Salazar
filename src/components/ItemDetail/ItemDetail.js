
import { useState, useContext} from 'react'
import ItemCount from '../itemCount/itemCount'
import '../ItemDetail/ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ id, name, img, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const totalAddition = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
    }
    return (
        <div className='cardres'>
            <div>
                <img  className='imgPro1' src={img}/>
            </div>
            <div className='container'>
                <h2>{name}</h2>
                <h6>{'⭐⭐⭐⭐⭐ 4.9'}</h6>
                <h6>{'Unidades Disponibles: ' + stock}</h6>
                <p>{description}</p>
                <h3>{'$'+price}</h3>
                <footer>
                    { quantity > 0 ? <Link  className='link' to='/cart'> <button className='botonCompra'>Ir al carrito🛒</button></Link> : <ItemCount stock={stock} onAdd={handleOnAdd} initial={totalAddition}/>}
                </footer>
            </div>
        </div>  
    )
}

export default ItemDetail