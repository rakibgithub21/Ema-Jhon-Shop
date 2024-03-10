import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className="flex gap-10 my-20">
            <div id="products-container" className="w-4/5">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}

                        ></Product>)
                    }
                </div>
            </div>
            <div id="cart-container" className="w-1/5 bg-[#ff99004d] ">
                <p className="text-2xl text-center p-5">Order Summary</p>
                <div className="px-5">
                    <p>Selected Items: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;