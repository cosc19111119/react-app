import { useState } from "react"

function DrapliftingWithDeletTheItem(props) {
    const [inputs, setInputs] = useState("");
    const [category, setCategory] = useState('')
   const HandleValue=()=>{
    const object={
        name:inputs,
        category:category

    };
    props.createItem(object)
   }


  
    return (
        <>
               <input type="text" value={inputs} onChange={(e)=>{setInputs(e.target.value)}}/> 
               <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="-">select</option>
                <option value="tshirt">T shirt</option>
                 <option value="pent">pents</option>

               </select>
               <button onClick={HandleValue} >add item</button>


               <div>
                {
                    props.items.map((element, index)=>{
                        return(
                            <div className="items" key={index}>
                                <h1>{ element.name}</h1>
                                <h1>{ element.category}</h1>
                                <button onClick={()=>{
                                    props.deleteItem(index)
                                }}>delet</button>

                            </div>
                        )
                    })
                }
               </div>

        </>

    )
}
export default DrapliftingWithDeletTheItem;