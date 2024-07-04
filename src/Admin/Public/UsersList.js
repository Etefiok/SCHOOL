import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchUserDetails } from '../../redux/Actions'; // Adjust the path to your fetchUserDetails action

function UsersList() {
  const dispatch = useDispatch();
//   const users = useSelector(state => state.auth.user); // Assuming user data is stored in auth reducer

//   useEffect(() => {
//     // Fetch user details when the component mounts
//     dispatch(fetchUserDetails());
//   }, [dispatch]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p>Username: {user.Username}</p>
              <p>Firstname: {user.Firstname}</p>
              <p>Lastname: {user.Lastname}</p>
              <p>Email: {user.Email}</p>
              <p>Phonenumber: {user.Phonenumber}</p>
              <p>Confirmpassword: {user.Confirmpassword}</p>
              {/* Render other user details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

export default UsersList;