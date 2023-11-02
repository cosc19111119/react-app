import Showtxt from "./Showtxt";
function UserStatus(props) {
  return (
    <div>
      {(props.login == true) ? (
        <p>You are logged in as {props.user}. </p>

      ) : (
        <p>You are not logged in.</p>
      )}

      {
        (props.login == true) ? <button onClick={() => { props.setLogin(false) }}>Logout </button> : null

      }

    </div>
  );
}

export default UserStatus;
