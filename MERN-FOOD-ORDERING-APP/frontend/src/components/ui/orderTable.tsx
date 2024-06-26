import React, { useState } from 'react';
import { Order } from '../../type';

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const OrdersPerPage = 7;

  const indexOfLastOrder = currentPage * OrdersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - OrdersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="text-gray-900">
      <div className="p-4 flex">
        <h1 className="text-3xl text-white">Orders</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">ID</th>
              <th className="text-left p-3 px-5">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-100">
                <td className="p-3 px-5" style={{ width: '20%' }}>
                  <input type="text" defaultValue={order._id} className="bg-transparent w-full" />
                </td>
                <td className="p-3 px-5" style={{ width: '15%' }}>
                  <input type="text" defaultValue={order.status} className="bg-transparent w-full" />
                </td>
                <td className="p-3 px-5" style={{ width: '10%' }}>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="pagination flex justify-center">
        <ul className="flex list-none rounded-md">
          {Array.from({ length: Math.ceil(orders.length / OrdersPerPage) }, (_, index) => (
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

export default OrdersTable;
