 import { useEffect } from "react";

function UseEffect(){

    const [counter, setcounter] =useState(0);

    function incrementCounter (){
        setcounter((prevValue)=>prevValue + 1)
    }
 
    useEffect(()=> {
        console.log("hii from use effect hook")
    } )

    return(
        <div>
           <h1>Counter : {counter}</h1>
           <button onClick={incrementCounter }>+</button>
        </div>
    )
}

export default UseEffect;
  