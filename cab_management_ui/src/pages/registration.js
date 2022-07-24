import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function Register() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [village, setVillage] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/msms/customer/login", {
        id: id,
        name: name,
        village: village,
        pincode: pincode,
        phone: phone,
        username: username,
        password: password,
      });
      alert("User Registation Successfully");
      setId("");
      setName("");
      setVillage("");
      setPincode("");
      setPhone("");
      setUsername("");
      setPassword("");
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="font-sans text-center text-4xl mt-10 mb-2 font-bold">
          Register
        </h1>
        <p className="text-center capitalize mb-2 hover:uppercase">
          Fill in the Information Below
        </p>

        <TextField
          className="px-2"
          type="text"
          name="name"
          required
          placeholder="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <TextField
          className="px-2"
          type="text"
          name="village"
          required
          placeholder="village/city"
          onChange={(event) => {
            setVillage(event.target.value);
          }}
        />
        <br />
        <TextField
          className="px-2"
          type="text"
          name="pincode"
          required
          placeholder="pincode"
          onChange={(event) => {
            setPincode(event.target.value);
          }}
        />
        <br />
        <TextField
          className="px-2"
          type="tel"
          name="phone"
          required
          placeholder="phone"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <br />
        <TextField
          className="px-2"
          type="text"
          name="username"
          required
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <TextField
          className="px-2"
          type="text"
          name="password"
          required
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <Button variant="contained" type="submit">
          REGISTER
        </Button>
        <Link className="py-3 text-center" to="/login">
          Already have an account?{" "}
          <p className="text-blue-600">Click to Login</p>
        </Link>
      </form>
    </div>
  );
}
export default Register;
