import Showtxt from "./Showtxt";
function UserStatus(props) {
    return (
      <div>
        {props.user ? (
          <p>You are logged in as {props.user}. </p>
          
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    );
  }
  
  export default UserStatus;
  