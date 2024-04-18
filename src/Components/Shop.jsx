import React, { useContext, useEffect, useState } from "react";
import { context } from "./Context/CreateContext";
import { useNavigate } from "react-router-dom";
const URL = "https://fakestoreapi.com/products";

const Shop = (searchQuery) => {
  const [items, setItems] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const { addProduct } = useContext(context);
  const navigate = useNavigate();
  const fetchurl = async () => {
    const responce = await fetch(URL);
    const result = await responce.json();
    // setItems(result);
    return result;
  };
  useEffect(() => {
    fetchurl().then((result) => {
      setItems(result);
      setFilterItem(result);
    });
  }, []);

  // useEffect(() => {
  //   const filtered = searchQuery
  //     ? items.filter((item) => item.title.toLowerCase().includes(searchQuery))
  //     : items;
  //   setFilterItem(filtered);
  // }, [searchQuery, items]);

  const filterProduct = (category) => {
    if (category === "all") {
      setFilterItem(items);
    } else {
      const updatedProducts = items.filter(
        (item) => item.category === category
      );
      setFilterItem(updatedProducts);
    }
  };

  return (
    <>
      <h1>Shop</h1>

      <div className="filter-btns">
        <button onClick={() => filterProduct("all")}>All</button>
        <button onClick={() => filterProduct("men's clothing")}>Men</button>
        <button onClick={() => filterProduct("women's clothing")}>Women</button>
        <button onClick={() => filterProduct("jewelery")}>jewelery</button>
        <button onClick={() => filterProduct("electronics")}>
          Electronics
        </button>
      </div>
      <div className="container">
        <div className="cards">
          {filterItem.map((data) => (
            <div className="card" key={data.id}>
              <img src={data.image} alt={data.title} />
              <h4>{data.title}</h4>
              <h2>Price:${data.price}</h2>
              <h2>Rating: {data.rating.rate}*</h2>
              <div className="btns">
                <button>Buy Now</button>
                <button
                  onClick={() => {
                    addProduct(data), navigate("/cart");
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
