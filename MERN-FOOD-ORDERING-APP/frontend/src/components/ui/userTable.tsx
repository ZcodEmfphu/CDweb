import React from 'react';
import { User } from '../../type';

interface UsersTableProps {
  users: User[];
  toggleBlock: (userId: string) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, toggleBlock }) => {

  const handleToggleBlock = (userId: string) => {
    toggleBlock(userId);
  };

  return (
    <div className="text-gray-900">
      <div className="p-4 flex">
        <h1 className="text-3xl text-white">Users</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Role</th>
              <th className="text-left p-3 px-5">City</th>
              <th className="text-left p-3 px-5">Blocked</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className={user.blocked ? "bg-red-200" : "hover:bg-gray-100"}>
                <td className="p-3 px-5">
                  <input type="text" defaultValue={user.name} className="bg-transparent" />
                </td>
                <td className="p-3 px-5">
                  <input type="text" defaultValue={user.email} className="bg-transparent" />
                </td>
                <td className="p-3 px-5">
                  <select defaultValue={user.role} className="bg-transparent">
                    <option value="user" disabled>user</option>
                    <option value="admin" disabled>admin</option>
                  </select>
                </td>
                <td className="p-3 px-5">{user.city}</td>
                <td className="p-3 px-5">
                  <input
                    type="checkbox"
                    checked={user.blocked}
                    onChange={() => handleToggleBlock(user._id)}
                  />
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    className={`text-sm ${user.blocked ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'} text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline`}
                    onClick={() => handleToggleBlock(user._id)}
                  >
                    {user.blocked ? 'Unblock' : 'Block'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;