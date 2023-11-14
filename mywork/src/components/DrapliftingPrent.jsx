import { useState } from "react"
import DrapliftingChild from "./DrapliftingChild"
import CheckLengthAry from "./CheckLengthAry"
import DrapliftingWithDeletTheItem from "./DrapliftingWithDeletTheItem"
function DrapliftingPrent() {
    const [item, setItem] = useState([])
    const [items, setItems] = useState([])


    const updateItem = (items) => {
        const neeItem = [...item, items]

        setItem(neeItem)
    }


    const deleteItem = (index) => {
        const newAr = [...items];

        newAr.splice(index, 1);

        setItems(newAr);
    };
    const createItem = (newObj) => {
        const newAr = [...items, newObj];
        setItems(newAr);
    };


    return (
        <>
            <CheckLengthAry item={item} />

            <DrapliftingChild item={item} updateItem={updateItem} />
            <div>            <DrapliftingWithDeletTheItem items={items} createItem={createItem} deleteItem={deleteItem} />
            </div>
        </>

    )

}
export default DrapliftingPrent