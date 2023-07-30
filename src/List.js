import React from 'react'
import "./List.css";
function List(props) {
    const deleteItemFromList = key => {
      const newList =props.itemList.filter(itemObj=>{
        return itemObj.key !== key;
      });
      props.updateItemList(newList);
    }; 

  return (
    <div className='text-center' >
{props.itemList.map(itemObj =>{
  return (
  <div className='Item' >
     <p>{itemObj.item}</p>
      <button onClick={() => deleteItemFromList(itemObj.key)} className='btn1' >Del </button>
  </div>
  );
})}
    </div>

  )
}

export default List ;