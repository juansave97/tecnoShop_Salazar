import './itemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({ show, stock, initial, onAdd }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('function callback useEffect')

        return () => console.log('el componente va a desmontarse')
    }, [show])

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    console.log('va a renderizar')
    return(
        <div className='countGen'>
            <div>
                <p className='product'>Producto 1</p>
                <button className='contador' onClick={decrement}>-</button> 
                <span>{count}</span>
                <button className='contador' onClick={increment}>+</button>
            </div>
            <div>
                <button className='contador' onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
} 

export default ItemCount 