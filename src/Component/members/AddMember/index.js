import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddMember = () => {
  let history = useHistory();
  const [member, setMember] = useState({
    name: "",
    email: "",  
    role: "",
   
  });

  const { name,  email, role } = member;
  const onInputChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  
  const onSubmit =  (e) => {
    e.preventDefault();
    alert('submit successfully')
    
  };


  // const onSubmit = async e => {  
  //   e.preventDefault();
  //   await axios.post("http://localhost:3003/members", member);
  //   history.push("/");
  //   alert("submit Successfully");
  // };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Member</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Role"
              name="role"
              value={role}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <button className="btn btn-primary btn-block">Add Member</button>
        </form>
      </div>
    </div>
    );
};

export default AddMember;