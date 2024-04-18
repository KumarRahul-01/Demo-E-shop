import React, { useReducer } from 'react'
import {context} from './CreateContext'
import Reducer from './Reducer';

const initialState={
    cartData:[],
}
const ContextData = ({children}) => {
    const [state,dispatch]=useReducer(Reducer, initialState);
   const addProduct=(items)=>{
    dispatch({type:"ADD",payload:items})
    }
    const deleteItem=(id)=>{
      dispatch({type:"DEL",payload:id})
     }
     const increment=(id)=>{
      dispatch({type:"INC",payload:id})
     };
     const decrement=(id)=>{
      dispatch({type:"DEC",payload:id})
     }
  return (
    <div>
        <context.Provider value={{...state,addProduct,deleteItem,increment,decrement}}>
            {children}
        </context.Provider>
    </div>
  )
}

export default ContextData