import './itemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
       
        if(quantity > initial) {
            setQuantity(quantity - 1)
        }
    }

    const increment = () => {

        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    
    return(
        <div className='countGen'>
            <div>
                <button className='contador' onClick={decrement}>-</button> 
                <span>{quantity}</span>
                <button className='contador' onClick={increment}>+</button>
            </div>
            <div>
                <button className='contador' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
} 

export default ItemCount 