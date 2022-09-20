import '../ItemListContainer/ItemListContainer.css'
import ItemList from '../itemList/itemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../service/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'
import { fetcher } from '../../utils/fetcher'


const ItemListContainer = ({  greeting }) => {
    const { categoryId } = useParams()
    const { isLoading, data, error } = useAsync(fetcher(getProducts, categoryId), [categoryId])

    if(isLoading) {
        return <h1>Cargando productos...</h1>
        
    } 
    
    if(error) {
        return <h1>Hubo un error</h1>
    }

    if(data.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }

    return (
        <div>
            <h1 className='saludo'>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={data}/>
        </div>
    )
}

export default ItemListContainer