/*
Nombre: Juan Alegría
Código: 202011282
*/

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

async function main() {
    // Fetch data of products and orders
    const productData = await getData('https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json');
    const orderData = await getData('https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json');
    // Count products ordered
    const productCount = {};
    for (let order of orderData) {
        productCount[order.idproducto] = (productCount[order.idproducto] || 0) + parseInt(order.cantidad);
    }
    // Check which ID was the most requested
    let mostOrderedProduct = { producto: null, count: 0 };
    for (let product of productData) {
        if (productCount[product.idproducto] > mostOrderedProduct.count) {
            mostOrderedProduct.nombreProducto = product.nombreProducto;
            mostOrderedProduct.count = productCount[product.idproducto];
        }
    }

    console.log(`El producto más pedido es ${mostOrderedProduct.nombreProducto} y ha sido pedido ${mostOrderedProduct.count} veces.`);
}

main();
