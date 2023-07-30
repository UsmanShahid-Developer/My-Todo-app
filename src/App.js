import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState} from "react"
import List from "./List";
function App() {
  const [currentItem , setCurrentItem] = useState(null);
  const [itemList , updateItemList] = useState([]);
  const onChangeHandler = e => {
  // console.log('curent Value',e.target.value)
  setCurrentItem(e.target.value)
}
const addItemToList=()=>{
updateItemList([...itemList, {item : currentItem , key : Date.now() }])
setCurrentItem("")
// console.log(itemList)
}
  return (
    <div className="App">
      <header className="App-header">
       <div className='wrapper'>
        <div className='input-wrapper' >
          <input value={currentItem} onChange={onChangeHandler} placeholder="Enter Todo......" />
          <button onClick={addItemToList}   className="btn2" >Add</button>
        </div>
        <List itemList={itemList} updateItemList={updateItemList} />
       </div>
      </header>
    </div>
  );
}

export default App;
 