import './itemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const addup = () => {       
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const subtract = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    
    return(
        <div className='countGen'>
            <div>
                <button className='contador' onClick={addup}>-</button> 
                <span>{quantity}</span>
                <button className='contador' onClick={subtract}>+</button>
            </div>
            <div>
                <button className='contador' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
} 

export default ItemCount 