const productos = [
    { nombre: " Bicicleta Cannondale Trail 5 Rodado 29 Monoplato", precio:150000, stock: 5, id: "1", img: "../img/cannondale.png", idCat: "2" },
    { nombre: " Bicicleta Venzo Raptor Rodado 29", precio: 87000, stock: 5, id: "2", img: "../img/venzo_raptor.png", idCat: "2" },
    { nombre: " Casco Mtb FOX", precio: 45000, stock: 10, id: "3", img: "../img/casco fox.png", idCat: "3" },
    { nombre: " Pedales Automaticos Shimano XT", precio: 27000, stock: 5, id: "4", img: "../img/automatico shimano.png", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}