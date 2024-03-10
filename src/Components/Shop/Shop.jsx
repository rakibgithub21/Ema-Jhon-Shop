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
    return (
        <div className="flex gap-10 my-20">
            <div id="products-container" className="w-4/5">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}

                        ></Product>)
                    }
                </div>
            </div>
            <div id="cart-container" className="w-1/5">
                <p>Products cart</p>
            </div>
        </div>
    );
};

export default Shop;