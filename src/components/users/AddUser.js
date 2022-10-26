import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../users/AddUser.css";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    roll: "", 
    email: "",
    phone: "",
  });

  const inputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3002/student", user);
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Full Name"
              value={user.name}
              onChange={(e) => inputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Roll</label>
            <input
              type="number"
              name="roll"
              id="roll"
              className="form-control"
              value={user.roll}
              onChange={(e) => inputChange(e)}
              placeholder="Roll Number"
              required
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={user.email}
              placeholder="Enter email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={(e) => inputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Mobile"
              value={user.phone}
              pattern="[0-9]{10}"
              onChange={(e) => inputChange(e)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
