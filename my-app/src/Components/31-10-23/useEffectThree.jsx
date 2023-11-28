import { useEffect, useState } from "react";

function UseEffectThree(){
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);

    function incrementCounter(){
        setCounter((prevValue) => prevValue + 1)
    }
    function incrementCounter2(){
        setCounter2((prevValue) => prevValue + 1)
    }

    useEffect(()=>{
        console.log("it'll execute the c ode on first time of render and whenever state changes. ")
    }, [counter])

    useEffect(()=>{
        console.log("effect for counter 2 ")
    }, [counter2])

 return(
    <div>
        <h1>counter : {counter}</h1>
        <button onClick={incrementCounter}>+</button>
        <h1>setCounter2 : {counter2}</h1>
        <button onClick={incrementCounter2}>+</button>
    </div>
 )
}