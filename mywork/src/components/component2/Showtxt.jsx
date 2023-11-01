import { useState } from "react";
import UserStatus from "./UserStatus";

function Showtxt() {

    const [user,setUser]=useState(null)
    const [login, setLogin] = useState(false);

  const logAli = () => {
    setUser('Ali');
    setLogin(true)
  }

  const logAslam = () => {
    setUser('Aslam');
    setLogin(true)

  }

  return (
    <div>
       
      
      <button onClick={logAli}>Login as Ali</button>
      <button onClick={logAslam}>Login as Aslam</button>
      <UserStatus user={user} />
    </div>
  );
}

export default Showtxt;
