import { useState } from "react"

function DrapliftingChild(props) {
 const [input,setInput]=useState("");

 const handlInput=()=>{
    if (input !== "") {
        props.updateItem(input);
        setInput("");
      } else {
        alert("input the value")
      }
    // props.updateItem(input)
    // setInput("")
}

    return (




        <>


            <div>
                <input type="text" value={input}  onChange={(Event)=>{setInput(Event.target.value)}} placeholder="input"/>
                
                <button onClick={handlInput}>Add Item</button>
            </div>
            <ul>
                {
                    props.item.map((Element, index) => {
                        return <li className="liStyle" key={index}>{Element} </li>
                    })
                }

            </ul>

        </>

    )
}
export default DrapliftingChild