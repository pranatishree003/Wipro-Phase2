import { useState } from "react";
// import Menu from "../menu/menu";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: "",
    passCode: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(20, data);
    // alert(data.userName);
    // alert(data.passCode);
    if (data.userName == "Wipro" && data.passCode == "Wipro") {
      //alert("Correct Credentials...");
      navigate("/menu");
    } else {
      alert("Invalid Credentials...");
    }
  };

  return (
    <div>
      {/* <Menu /> */}
      <form onSubmit={handleSubmit}>
        <label>User Name : </label>
        <input
          type="text"
          name="userName"
          onChange={handleChange}
          value={data.userName}
        />{" "}
        <br />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="passCode"
          onChange={handleChange}
          value={data.passCode}
        />{" "}
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
