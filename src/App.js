
import './App.css';
import React, {useState} from "react"

function App() {

  const [coordinates, setCoordinates] = useState([]);
   const [popped, setPopped] = useState([]);

  function handleCircle (e)
  {
    const {clientX,clientY} = e;
   

    setCoordinates([...coordinates, {x: clientX, y: clientY, 
      color:(  "#" + Math.floor(Math.random()*16777215).toString(16)),
    height: (Math.floor(100+200 * Math.random())),
  }])
  }

  function undo(e){
   let poppedCoordinates = [...coordinates];
    let thisPop = poppedCoordinates.pop();
    let poppedList = ([...popped, thisPop]);
    setPopped(poppedList);
   setCoordinates(poppedCoordinates);
   console.log(poppedCoordinates)


  }
  function redo(e){
    if (popped.length < 1)
    return;
    let redo = popped.pop();
    setCoordinates([...coordinates, redo]);
  }

  return (
    <>
    
    <button onClick={undo}>Undo </button>
    <button onClick={redo}>Redo</button>
    <div className="App" onClick = {handleCircle}>


  
      {
        coordinates.map((coordinate,idx)=>
        {
       
          return <div key = {idx} className = "coordinate" style = {{left : coordinate.x-50 + "px",
           top : coordinate.y-50 + "px",
           backgroundColor : coordinate.color,
           height: coordinate.height,
          width: coordinate.height,
          borderRadius: "50%"
          }}> </div>
        })
     
      }


    </div>
    </>
    );
}

export default App;
