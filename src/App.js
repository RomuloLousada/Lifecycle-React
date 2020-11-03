import React, { useEffect, useState } from 'react';
import Users from './components/users/Users';

export default function App() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(async () => {
    const res = await fetch("https://randomuser.me/api/?seed=rush&nat=br&results=10");
    const json = await res.json();

    setUsers(json.results);
  }, []);

  const toggleVisibility = (event) => {
    setShowUsers(event.target.checked)
  };
  
  return (
    <div className="margin">
      <div className="switch">
        <label>
          Show Users
          <input type="checkbox" onChange={toggleVisibility}/>
          <span className="lever"></span>
        </label>
      </div>
      <hr />
      {showUsers && <Users users={users}/>}
    </div>
  );
}