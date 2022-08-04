const products = [
    {   id: '1',
        name: ' Audifonos Gamer Plus',
        price: 200,
        category: 'accesorios',
        img:'https://clonesyperifericos.com/wp-content/uploads/2019/12/6-17.jpg',
        stock: 10,
        description:'BLUE VOICE: La tecnología de micrófono BLUE VO!CE te ofrece una selección de filtros de voz en tiempo real para reducir el ruido, añadir compresión y eliminar el siseo. Además, garantiza que tu voz suene más rica, limpia y profesional. Consigue comunicaciones de voz en el juego consistentes y con calidad de estudio con BLUE VO!CE a través del software para juegos G HUB.4'
    },

    { id: '2', name: 'Mouse Pad', price: 50, category: 'mouse', img:'https://falabella.scene7.com/is/image/FalabellaCO/9856707_1?wid=800&hei=800&qlt=70', stock: 12, description:'Con tu GMS X5 podrás llenar la pantalla de tu ordenador de clicks. Su elaborada superficie le dará precisión y comodidad a tus movimientos tendencia en diseño con un moderno sistema de luz led integrado, este accesorio le aportará efecto en iluminación a la experiencia cotidiana con tus equipos.'},
    { id: '3', name: 'Procesador Intel CORE I7 11va Gen', price: 1200, category: 'board', img:'https://barranquilla-movicell.com/wp-content/uploads/2021/09/CORE-I7-11700-LGA-1200-11TH-GEN-3.jpg', stock: 5, description:'Compatible con Intel 500 Series y Select Intel 400 Series chipset basado en placas base Compatible con tecnología Intel Turbo Boost Max 3.0 Soporte de memoria Intel Optane Compatible con PCIe Gen 4.0 No incluye solución térmica'},
]

export const getProducts =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}