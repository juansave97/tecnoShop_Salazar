import { useState, useEffect } from 'react'
import { getProducts } from "../../asyncMock"
import ItemList from '../itemList/itemList'
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({ greeting, setShow, show}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })   

    }, [])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div>
            <h1 className='saludo'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer