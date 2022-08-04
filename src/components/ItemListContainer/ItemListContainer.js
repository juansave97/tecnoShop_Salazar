import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../itemList/itemList'
import '../ItemListContainer/ItemListContainer.css'


const ItemListContainer = ({ greeting, setShow, show}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const productsFunction = categoryId ? getProductsByCategory : getProducts

        productsFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })   

    }, [categoryId])


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