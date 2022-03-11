import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
function Login(props) {
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    const signref = await signInWithPopup(auth, provider);
    console.log(signref);
  };
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <p
          style={{
            fontFamily: "-moz-initial",
            fontSize: "20px",
            color: "black",
          }}
        >
          Please Sign in with your google account{" "}
        </p>
        <img
          style={{ height: "350px", width: "250px", marginLeft: "40%" }}
          src="chat.jpg"
        />
      </div>
      <button onClick={handleSignIn} className="btn btn-success mt-3">
        Sign in with google
      </button>
    </div>
  );
}

export default Login;
export { auth };
