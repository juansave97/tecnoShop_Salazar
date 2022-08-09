
import { useState } from 'react'
import ItemCount from '../itemCount/itemCount'
import '../ItemDetail/ItemDetail.css'
import { Link } from 'react-router-dom'

// const InputCount = ({onConfirm, stock, initial=1}) => {
//     const [count, setCount] = useState(initial)

//     const handleChange = (e) => {
//         if (e.target.value <= stock){
//             setCount(e.target.value)
//         }

//     }

//     return(
//         <div>
//             <input type='number' onChange={handleChange} value={count}/>
//             <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
//         </div>
//     )
// }

// const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    
//     // const [inputType, setInputType] = useState('input')
//     const [count, setCount] = useState(initial)

//     const increment = () => {
//         console.log('gggggg')
//         if(count < stock) {
//             setCount(count + 1)
//         }

//     }

//     const decrement = () => {
//         console.log('olllllllll')
//         console.log(count)
//         setCount(count - 1)

//     }

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={decrement}>-</button>
//             <button onClick={increment}>+</button>
//             <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//         </div>
//     )
// }

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(0)


    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
    }
    return (
        <div className='cardres'>
            <div>
                <img  className='imgPro1' src={product.img} />
            </div>
            <div className='container'>
                <h2>{product.name}</h2>
                <h6>{'⭐⭐⭐⭐⭐ 4.9'}</h6>
                <h6>{'Unidades Disponibles: ' + product.stock}</h6>
                <p>{product.description}</p>
                <h3>{'$'+product.price}</h3>
                <footer>
                    { quantity > 0 ? <Link  className='link' to='/cart'> <button className='botonCompra'>Ir al carrito</button></Link> : <ItemCount stock={product.stock} onAdd={handleOnAdd} />}
                </footer>
            </div>
        </div>  
    )
}

export default ItemDetail