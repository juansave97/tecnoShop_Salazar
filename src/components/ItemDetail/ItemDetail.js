
import ItemCount from '../itemCount/itemCount'
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ product }) => {
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
                <button className='botonCompra'>Comprar</button>
            </div>
        </div>  
    )
}

export default ItemDetail