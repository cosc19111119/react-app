import Yourage from "./Yourage";

function Age(props){
    return(
        <>
            <h1>Your Age Here:{props.num}</h1>
            < Yourage num1={props.num} />
        
        </>
    )
}
export default Age;