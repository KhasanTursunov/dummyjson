import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { FaRegStar } from "react-icons/fa";
import { request } from "../../api";
import Modal from "./modal.jsx";

const Body = () => {
  const limit = 5;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState(null);
  const [oneItem, setOneItem] = useState(null);

  
  useEffect(() => {
    request.get("products/category-list").then((res) => {
      console.log(res.data);
      setCategories(["all", ...res.data]);
    });
  }, []);

  
  useEffect(() => {
    setLoading(true);
    request
      .get("/products/category/smartphones", {
        params: {
          limit,
          skip: count * limit,
        },
      })
      .then((res) => {
        setProducts([...products, ...res.data.products]);
        setTotal(res.data.total);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count]);
  return ( 
    <div className="mt-10">

      
      <div className="flex container mx-auto py-5 overflow-auto gap-5">
        {categories?.map((item) => (
          <div
            className="whitespace-nowrap py-1 px-4 bg-[#818283] text-white rounded-md cursor-pointer select-none hover:bg-[#57595b] duration-300"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>


      <div className="container mx-auto grid grid-cols-5 gap-5">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white cursor-pointer shadow-lg hover:shadow-xl rounded-lg p-6 transition-shadow duration-300 "
          >
            <img
              src={product.thumbnail}
              className="h-[200px]"
              alt={product.title}
              onClick={() => setOneItem(product)}
            />
            <h2 className="text-xl font-bold mb-4">{product.title}</h2>
            <h3>Catagory: {product.category}</h3>
            <div className="flex items-center gap-4">
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
      {loading && <Loading count={limit} />}

      {total > limit * (count + 1) && (
        <button
          className="block mx-auto mt-4 bg-[#186FD4] p-2 rounded-md text-white"
          onClick={() => setCount(count + 1)}
        >
          See more
        </button>
      )}

      {oneItem && <Modal oneItem={oneItem} setOneItem={setOneItem} />}
    </div>
  );
};

export default Body;
