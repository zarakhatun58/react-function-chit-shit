import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TableAdmin = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
      loadMembers();
    }, []);
  
    const loadMembers = async () => {
      const result = await axios.get("http://localhost:3003/members");
      setMembers(result.data.reverse());
    };
  
    const deleteMember = async id => {
      await axios.delete(`http://localhost:3003/members/${id}`);
      loadMembers();
    };
 
    useEffect(() => {
      fetch("http://localhost:3000/members")
        .then((res) => res.json())
        .then((data) => setMembers(data));
    }, []);

    const handleDelete = (id) => {
      const proceed = window.confirm("Are you sure you want to delete");
      if (proceed) {
        const url = `http://localhost:3000/members/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              alert("Deleted Successfully");
              const remainingProducts = members.filter(
                (members) => members._id !== id
              );
              setMembers(remainingProducts);
            }
          });
      }
    };

    return (
        <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.role}</td>
                  <td>
                  <Link to={`/members/${member._id}`}>
                          <button className="btn btn-primary">Update</button>
                        </Link>

                        <button
                          onClick={() => handleDelete(member._id)}
                          className="btn btn-danger ms-2"
                        >
                          Delete
                        </button>
                        
                    <Link className="btn btn-primary mr-2" to={`/members/${member.id}`}>
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mr-2"
                      to={`/members/editMember/${member.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger"
                      onClick={() => deleteMember(member.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default TableAdmin;