import React, { useState } from 'react';
import { MenuItem } from '../../type';

interface ProductsTableProps {
  products: MenuItem[];
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 7;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="text-gray-900">
      <div className="p-4 flex">
        <h1 className="text-3xl text-white">Products</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Price</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product._id} className="hover:bg-gray-100">
                <td className="p-3 px-5">
                  <input
                    type="text"
                    defaultValue={product.name}
                    className="bg-transparent"
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    defaultValue={product.price}
                    className="bg-transparent"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination flex justify-center">
        <ul className="flex list-none rounded-md">
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
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

export default ProductsTable;
