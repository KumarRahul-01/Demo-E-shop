// import React, { useEffect, useState } from 'react'

// const URL="https://fakestoreapi.com/products"

// const FetchData = (searchQuery) => {
//     const[items,setItems]=useState([]);
//     const [filterItem,setFilterItem]=useState([]);

//     const fetchurl=async()=>{
//       const responce=await fetch(URL);
//       const result= await responce.json();
//       setItems(result)
//       setFilterItem(result)

//     }
//     useEffect(()=>{
//       fetchurl();
//     },[]);

//     useEffect(() => {
//       const filtered = searchQuery
//         ? items.filter((item) => item.title.toLowerCase().includes(searchQuery))
//         : items;
//       setFilteredItems(filtered);
//     }, [searchQuery, items]);

//   return (
//     <>
//       <div className="container">
//         <div className="cards">
//           {filterItem.map((data)=>(
//             <div className="card" key={data.id}>
//               <img src={data.image} alt={data.title} />
//               <h4>{data.title}</h4>
//               <h2>Price:${data.price}</h2>
//               <h2>Rating: {data.rating.rate}*</h2>
//               <div className="btns">
//                 <button>Buy Now</button>
//                 <button>Add To Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default FetchData