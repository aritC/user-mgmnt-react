import { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import Users from "./components/Users/UsersList/UsersList";

import "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (
    <>
      <h1>User Management</h1>
      <div>
        <AddUser addUser={addUser} />
        <Users users={users} />
      </div>
    </>
  );
}

export default App;
