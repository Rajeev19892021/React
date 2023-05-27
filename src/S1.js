import React,{useState} from 'react'

const S1 = () =>{
    
    let [count, setCount] = useState(0)
    let [a, setA] =useState(0)
    

    function Increase(){

        setA(a+2)
    }
    
    function Decrease(){

        setCount(count-1)
    }
    return(

   

    <div>
        <h1>a:{a}</h1>
        <button onClick={Increase}>Increase</button>
        <h1>count:{count}</h1>
        <button onClick={Decrease}>Decrease</button>

    </div>
     )
}
export default S1