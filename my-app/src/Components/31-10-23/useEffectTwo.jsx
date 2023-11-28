function UseEffectTwo(){
    const [counter, setcounter] = useState(0);
    function incrementCounter(){
        setcounter((prevValue) => prevValue + 1)
    }
    useEffect(() =>{
        console.log("hii from type 2")
    } [])
    
    return(
        <div>
        <h1>counter : {counter}</h1>
        <button onClick={incrementCounter}>+</button>
        </div>
    )
}

export default UseEffectTwo;