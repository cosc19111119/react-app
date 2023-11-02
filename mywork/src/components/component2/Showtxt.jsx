import { useState } from "react";
import UserStatus from "./UserStatus";

function Showtxt() {

    const [user,setUser]=useState("")
    const [login, setLogin] = useState(false);

  const handlsetLog = (user) => {
    setUser(user);
    setLogin(true)
  }

 

  return (
    <div>
       
      
      <button onClick={()=>{handlsetLog("Ali")}}>Login as Ali</button>
      <button onClick={()=>{handlsetLog("Aslam")}}>Login as Aslam</button>
      <UserStatus user={user} login={login} setLogin={setLogin} />
    </div>
  );
}

export default Showtxt;
