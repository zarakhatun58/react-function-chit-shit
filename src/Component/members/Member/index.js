 import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Member = ({members}) => {
    const [member, setMember] = useState({
        name: "",     
        email: "",
        role: "",
        
      });
      const { id:any } = useParams();
      useEffect(() => {
        loadMember();
      }, []);
      const loadMember = async () => {
        const res = await axios.get(`http://localhost:3003/members/${id}`);
        setMember(res.data);
      };
   
    const { id, name, email, role } = member;
    
    return (
        <div className="container py-4">
          <Link className="btn btn-primary" to="/">
            back to Home
          </Link>
          <h1 className="display-4">Member Id: {id}</h1>
          <hr />       
          <ul className="list-group w-50">
            <li className="list-group-item">name: {name}</li>         
            <li className="list-group-item">email: {email}</li>
            <li className="list-group-item">phone: {role}</li>
            {/* <li className="list-group-item">website: {member.action}</li> */}
          </ul>
        </div>
    );
};

export default Member;