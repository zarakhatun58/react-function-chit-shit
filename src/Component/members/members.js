import React from 'react';
import Member from './Member';

const members = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('members.json')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])
    return (
        <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
        <h1 className="display-4">Member Id: {id}</h1>
        <hr />
        {
                  members.map(member => <Member

                      key={member.id}
                      member={member}
                  ></Member>)
              }
        {/* <ul className="list-group w-50">
          <li className="list-group-item">name: {member.name}</li>         
          <li className="list-group-item">email: {member.email}</li>
          <li className="list-group-item">phone: {member. role}</li>
         
        </ul> */}
      </div>
    );
};

export default members;