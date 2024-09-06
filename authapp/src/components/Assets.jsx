import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Assets = () => {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const accessToken = Cookies.get("access_token");
  const getUserDetails = async () => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
    );
    const data = await response.json();
    setUserDetails(data);
    console.log("Data is ", data);
  };
  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    } else {
      getUserDetails();
    }
  }, []);
  return (
    <div>
      <h2>This is a assets Page</h2>
      <h3>
        Welcome <span style={{ color: "orange" }}>{userDetails.name}</span>
      </h3>
    </div>
  );
};

export default Assets;
