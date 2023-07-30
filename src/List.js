import React from 'react'
import "./List.css";
function List(props) {
    const deleteItemFromList = key => {
        props.itemList.filter((item)=>{})
    }; 

  return (
    <div className='text-center' >
{props.itemList.map(itemObj =>{
  return (
  <div className='item' >
     <p>{itemObj.item}</p>
      <button className='btn1' >Del </button>
  </div>
  );
})}
    </div>

  )
}

export default List ;