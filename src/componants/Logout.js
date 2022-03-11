import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { app } from "../firebase";
const auth = getAuth(app);
function Logout(props) {
  const handleSignout = async () => {
    const signout = await signOut(auth);
  };
  return (
    <div>
      <button onClick={handleSignout} className="btn btn-primary">
        sign out
      </button>
    </div>
  );
}

export default Logout;
