import {useState} from "react";
function App() {
  const[items,setItems]=useState(["Mango🥭","Apple 🍎","Grapes 🍇"]);
  const[itemNo,setItemNo]=useState(0);
  const[itemInput,setItemInput]=useState('');
  const currentfruit = items[itemNo];

  const handleNextClick =()=>{
    setItemNo(itemNo+1);
  }


  return (
    
    <><div className="app">
      <div className="app__container"></div>
      <div className="app__heading"> Fruit Shop
      </div>
      <div className="app__carousel">

        <span className="display--item"> 
        {currentfruit}
        </span>
        {/*      <span className="display--add">
            <span>End of the list</span>
            <input type="text" className="app__carousel--input"/> */}

      </div>
      <div className="app__next">
        <button onClick={handleNextClick} className="btn btn--primary">Next</button>
      </div>
      <div className="app__add">
        <button className="btn btn--secondary">Add</button>
      </div>
    </div><div className="footer">
        &copy;2022 HwR. Designed by MEJOVA
      </div></>
    
  );
}

export default App;
