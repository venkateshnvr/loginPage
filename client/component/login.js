import React, { useState } from "react";
import "./login.css";
import { ipConfig } from "./../ipConfig"

function Login(props) {
  let [login, setLogin] = useState({
    mobile: "",
    password: ""
  });

  let submit = () => {
    if (
      login.mobile === "" ||
      login.password === "" ||
      login.mobile.length > 10
    ) {
      alert("please fill correct details");
    } else {
      fetch(`${ipconfig}/feedback/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mobelNumber: login.mobile,
          password: Login.password
        })
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="direction">
      <input
        type="text"
        placeholder="mobile"
        className="input"
        value={login.mobile}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="input"
        value={login.mobile}
        onChange={(e) => setLogin(e.target.value)}
      />
      <button className="input" onClick={() => submit()}>
        submit
      </button>
    </div>
  );
}

export default Login;