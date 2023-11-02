import { useState } from "react"
import DrapliftingChild from "./DrapliftingChild"
import CheckLengthAry from "./CheckLengthAry"

function DrapliftingPrent() {
    const [item, setItem] = useState([])

    const updateItem = (items) => {
        const neeItem = [...item, items]

        setItem(neeItem)
    }


    return (
        <>
                        <CheckLengthAry item={item} />

            <DrapliftingChild item={item} updateItem={updateItem} />
        </>

    )

}
export default DrapliftingPrent