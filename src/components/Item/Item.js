import '../Item/item.css'
const Item = ({ product }) => {
    return (
        <div className='card'>
            <img  className='imgPro' src={product.img} />
            <div className='container'>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>{'$'+product.price}</h3>
            </div>
        </div>  
    )
}

export default Item