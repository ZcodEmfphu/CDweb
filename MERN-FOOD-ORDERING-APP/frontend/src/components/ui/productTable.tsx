import React from 'react';
import { MenuItem } from '../../type';

interface ProductsTableProps {
  products: MenuItem[];
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
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
    </div>
  );
};

export default ProductsTable;
