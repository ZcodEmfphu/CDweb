import React, { useState } from 'react';
import { User } from '../../type';

interface UsersTableProps {
  users: User[];
  toggleBlock: (userId: string) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, toggleBlock }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7; // Số lượng người dùng trên mỗi trang

  // Tính toán index của người dùng bắt đầu và kết thúc trên trang hiện tại
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleToggleBlock = (userId: string) => {
    toggleBlock(userId);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
            {currentUsers.map((user) => (
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
      {/* Phân trang */}
      <div className="pagination flex justify-center">
        <ul className="flex list-none rounded-md">
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
            <li key={index} className="mx-1">
              <button
                className={`px-3 py-1 ${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500'
                } rounded-md hover:bg-blue-200 focus:outline-none`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersTable;
