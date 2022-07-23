import {useState} from "react";
function App() {
  const[items,setItems]=useState(["Mango🥭","Apple 🍎","Grapes 🍇"]);
  const[itemNo,setItemNo]=useState(0);
  const[itemInput,setItemInput]=useState('');
  const currentfruit = items[itemNo];

  const handleNextClick =()=>{
    setItemNo(itemNo+1);
  }
  const handleInput =(event)=>{
    setItemInput(event.target.value);
  }
  const handlePrevClick =()=>{
    setItemNo(0);
  }
  const handleAddClick =()=>{
    if(!itemInput) return;
    setItems([...items,itemInput],handlePrevClick)
  }
  return (
    
    <><div className="app">
      <div className="app__container"></div>
      <div className="app__heading"> Fruit Shop
      </div>
      <div className="app__carousel">

        {currentfruit ?<span className="display--item"> 
        {currentfruit}
        </span>
        :
              <span className="display--add">
            <span>End of the list</span>
            <input type="text" onChange={handleInput} className="app__carousel--input"/>
              </span>
}
      </div>
      <div className="app__next">
        {currentfruit ?
        <button onClick={handleNextClick} className="btn btn--primary">Next</button>
        :<button onClick={handlePrevClick} className="btn btn--primary">Reset</button>
        }</div>
      <div className="app__add">
        <button onClick={handleAddClick} className="btn btn--secondary">Add</button>
      </div>
    </div><div className="footer">
        &copy;2022 HwR. Designed by MEJOVA
      </div></>
    
  );
}

export default App;
