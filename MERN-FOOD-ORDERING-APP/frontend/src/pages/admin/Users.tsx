import React, { useState, useEffect } from "react";
import { User } from "../../type";
import UsersTable from "@/components/ui/userTable";
import {  useAuth0 } from "@auth0/auth0-react";


const Users: React.FC = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [users, setUsers] = useState<User[]>([]);

  const { getAccessTokenSilently } = useAuth0();

  const fetchUsers = async () => {
    const accessToken = await getAccessTokenSilently();
    try {
      const response = await fetch(`${API_BASE_URL}/api/my/user/getAllUser`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();

      const usersData: User[] = data.map((item: any) => ({
        _id: item._id,
        email: item.email,
        name: item.name,
        role: item.role,
        city: item.city,
        blocked: item.blocked 
      }));
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleBlock = async (userId: string) => {
    const accessToken = await getAccessTokenSilently();
    try {
      const response = await fetch(`${API_BASE_URL}/api/my/user/${userId}/toggleBlock`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Toggle block failed');
      }

      const updatedUsers = users.map(user => {
        if (user._id === userId) {
          return { ...user, blocked: !user.blocked };
        }
        return user;
      });

      setUsers(updatedUsers);
    } catch (error) {
      console.error('Toggle block error:', error);
    }
  };

  return (
    <main className="main-container">
      <UsersTable users={users} toggleBlock={toggleBlock} />
    </main>
  );
};

export default Users;