import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { authFB } from "../firebase";
import { Nav } from "../Nav";
import { PlansScreen } from "./PlansScreen";
import "./ProfileScreen.css";

export const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>

            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <PlansScreen />

              <button
                className="profileScreen__signOut"
                onClick={() => authFB.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
