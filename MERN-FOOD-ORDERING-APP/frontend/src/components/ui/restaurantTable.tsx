import React, { useState } from 'react';
import { Restaurant } from '../../type';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'sonner';

interface RestaurantsTableProps {
  restaurants: Restaurant[];
  fetchRestaurants: () => void;
}

const RestaurantsTable: React.FC<RestaurantsTableProps> = ({ restaurants, fetchRestaurants }) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { getAccessTokenSilently } = useAuth0();
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 7;

  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

  const handleDelete = async (restaurantId: string) => {
    try {
      const accessToken = await getAccessTokenSilently();
      const response = await axios.delete(`${API_BASE_URL}/api/my/restaurant/?restaurantId=${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status === 200) {
        toast.success("Restaurant deleted!");
        fetchRestaurants();
      }
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="text-gray-900">
      <div className="p-4 flex">
        <h1 className="text-3xl text-white">Restaurants</h1>
      </div>
      <div className="px-3 py-4">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-4">Name</th>
              <th className="text-left p-3 px-4">City</th>
              <th className="text-left p-3 px-4">Country</th>
              <th className="text-left p-3 px-4">Delivery Price</th>
              <th className="text-left p-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRestaurants.map((restaurant) => (
              <tr key={restaurant._id} className="hover:bg-gray-100">
                <td className="p-3 px-4">
                  <input
                    type="text"
                    defaultValue={restaurant.restaurantName}
                    className="bg-transparent w-full"
                  />
                </td>
                <td className="p-3 px-4">
                  <input
                    type="text"
                    defaultValue={restaurant.city}
                    className="bg-transparent w-full"
                  />
                </td>
                <td className="p-3 px-4">
                  <input
                    type="text"
                    defaultValue={restaurant.country}
                    className="bg-transparent w-full"
                  />
                </td>
                <td className="p-3 px-4">
                  <input
                    type="number"
                    defaultValue={String(restaurant.deliveryPrice)}
                    className="bg-transparent w-full"
                  />
                </td>
                <td className="p-3 px-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleDelete(restaurant._id)}
                    className={`text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Phân trang */}
        <div className="pagination flex justify-center">
          <ul className="flex list-none rounded-md">
            {Array.from({ length: Math.ceil(restaurants.length / restaurantsPerPage) }, (_, index) => (
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
    </div>
  );
};

export default RestaurantsTable;
