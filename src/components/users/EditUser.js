import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  let { id } = useParams();

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

  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.patch(`http://localhost:3002/student/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await Axios.get(`http://localhost:3002/student/${id}`);
    setUser(result.data);
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
              class="form-control"
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
          <button type="submit" className="btn btn-danger">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
