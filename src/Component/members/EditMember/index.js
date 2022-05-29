import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditMember = () => {
    let history = useHistory();
    const { id } = useParams();
    const [member, setMember] = useState({
      name: "", 
      email: "",
      role: "",
     
    });
  
    const { name,  email, role} = member;
    const onInputChange = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadMember();
    }, []);

    // const onSubmit =  (e) => {
    //   e.preventDefault();
    //   alert('submit successfully')
      
    // };
  
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:3003/members/${id}`, member);
      history.push("/");
    };
  
    const loadMember = async () => {
      const result = await axios.get(`http://localhost:3003/members/${id}`);
      setMember(result.data);
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
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
                placeholder="Enter Your Phone Number"
                name="role"
                value={role}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    );
};

export default EditMember;