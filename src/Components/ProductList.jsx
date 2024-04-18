import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ProductList = () => {
  const[item,setItem]=useState([]);
  const baseURL="https://fakestoreapi.com/products";
  const fetchData=async()=>{
    const {data}=await axios.get(baseURL);
    setItem(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <h2>ProductList</h2>
    {
      item.map((data)=>{
        return(
          <div key={data.id}>
            <img src={data.image} alt={data.title} />
                <h4>{(data.title)}</h4>
                <h2>Price:${data.price}</h2>
                <h2>Rating: {data.rating.rate}*</h2>

          </div>
        )
      })
    }
    </>

  )
}

export default ProductList