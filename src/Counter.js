import React, {useState} from 'react'

const Counter = () => 
{
let [a, setA] = useState(0)

function Increase(value)
{
    setA(a+value)
}

function Decrease(value){
    setA(a-value)
}

function Reset(){
    setA(0)
}
return(

    // <div>
    // <h1>a:{a}</h1>
    // <button onClick={Increase}>Increase</button>
    // <button onClick={Decrease}>Decrease</button>
    // <button onClick={Reset}>Reset</button>
    // </div>


     <div>
    <h1>a:{a}</h1>
    <button onClick={() =>Increase(5)}>Increase</button>
    <button onClick={()=>Decrease(3)}>Decrease</button>
    <button onClick={Reset}>Reset</button>
    </div>
)

}

export default Counter;