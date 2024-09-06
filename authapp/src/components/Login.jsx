import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const handleClick = (e) => {
    const callbackUrl = `${window.location.origin}`;
    const googleClientId = `${process.env.REACT_APP_CLIENTID}`;
    const targetUrl = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=token&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl;
  };

  useEffect(() => {
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      Cookies.set("access_token", accessToken);
      setIsLoggedin(true);
    }
  }, []);
  if (isLoggedin) {
    navigate("/assets");
  }
  return (
    <div>
      <h3>Login Section</h3>
      <button onClick={handleClick}>Login with Google</button>
    </div>
  );
};

export default Login;
