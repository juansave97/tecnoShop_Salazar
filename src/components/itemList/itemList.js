import Item from "../Item/Item"
import '../itemList/itemList.css'

const ItemList = ({ products }) => {
    return (
        <ul className="prod">
            {products.map(product => (
                <Item product={product}/>
            ))}
        </ul>
    )
}

export default ItemList
