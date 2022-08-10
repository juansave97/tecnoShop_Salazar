
import { useState, useContext} from 'react'
import ItemCount from '../itemCount/itemCount'
import '../ItemDetail/ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const quantityAdded = getProductQuantity(product.id)


    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        addItem({product})
    }
    return (
        <div className='cardres'>
            <div>
                <img  className='imgPro1' src={product.img}/>
            </div>
            <div className='container'>
                <h2>{product.name}</h2>
                <h6>{'⭐⭐⭐⭐⭐ 4.9'}</h6>
                <h6>{'Unidades Disponibles: ' + product.stock}</h6>
                <p>{product.description}</p>
                <h3>{'$'+product.price}</h3>
                <footer>
                    { quantity > 0 ? <Link  className='link' to='/cart'> <button className='botonCompra'>Ir al carrito</button></Link> : <ItemCount stock={product.stock} onAdd={handleOnAdd} initial={quantityAdded}/>}
                </footer>
            </div>
        </div>  
    )
}

export default ItemDetail