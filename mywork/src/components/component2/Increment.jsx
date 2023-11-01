import { useState } from "react"

import Age from'./Age'

function Increment(){

    
        const [age,setAge]=useState(0)
        const increment=()=>{
          if(age <10){
            setAge(age +1)
      
          }
         
          
        }
        const decrement=()=>{
          if(age>0){
            setAge(age -1)
      
          }

        }
        
    return(
        <>
       <h1>{age}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
        <Age num={age} />
        </>

    )
}
export default Increment;