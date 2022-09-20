import '../Item/item.css'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'
const Item = ({ product }) => {
    return (
        <div className='card'>
            <img  className='imgPro' src={product.img} />
            <div className='container'>
            <h2 className='nameProduct'>{product.name}</h2>
            <h3 className='prices'>{'💵$'+product.price}</h3>
            <Link to={`/detail/${product.id}`} className='seeDetail'>
                <button className='seeDetailBut'>▶ Ver Detalles</button>  
            </Link>
            </div>
        </div>  
    )
}

export default Item