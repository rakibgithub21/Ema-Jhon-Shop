
const Product = ({ product, handleAddToCart }) => {
    console.log(product);
    const { img, name, price, ratings, seller } = product
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price:<span>$</span> {price} </p>
                <div className="">
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings} <span>Start</span></p>
                </div>
                <div className="bg-[#FFE0B3] rounded-xl">
                    <button onClick={()=>handleAddToCart(product)} className="w-full p-2 font-semibold">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;