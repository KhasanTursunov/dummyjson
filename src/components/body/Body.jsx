import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../loading/Loading'
import { FaRegStar } from "react-icons/fa";

const Body = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        setLoading(true)
        axios
          .get("https://dummyjson.com/products")
          .then((res) => setProducts(res.data.products))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
    }, [])
    console.log(products);
  return (
    <div className="mt-10">
      {loading && <Loading count={15} />}
      <div className="container mx-auto grid grid-cols-5 gap-5">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white cursor-pointer shadow-lg hover:shadow-xl rounded-lg p-6 transition-shadow duration-300"
          >
            <img
              src={product.thumbnail}
              className="h-[200px]"
              alt={product.title}
            />
            <h2 className="text-xl font-bold mb-4">{product.title}</h2>
            <h3>Catagory: {product.category}</h3>
            <div className='flex items-center gap-4'>
              <h3>Ranked: {product.rating}</h3>
              <FaRegStar color="yellow" />
            </div>

            <div className="mt-10">
              <h3 className="bg-[#FFFF00] p-1 rounded-md text-center">
                $ {product.price} / month
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body