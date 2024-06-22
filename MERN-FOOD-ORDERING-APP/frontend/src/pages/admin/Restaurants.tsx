import React, { useState, useEffect } from "react";
import { Restaurant } from "../../type";
import RestaurantsTable from "@/components/ui/restaurantTable";
import {  useAuth0 } from "@auth0/auth0-react";


const Restaurants: React.FC = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const { getAccessTokenSilently } = useAuth0();

  const fetchRestaurants = async () => {
    const accessToken = await getAccessTokenSilently();
    try {
      const response = await fetch(`${API_BASE_URL}/api/my/restaurant/getAllRestaurant`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
      }
      const data = await response.json();

      const restaurantsData: Restaurant[] = data.map((item: any) => ({
        _id: item._id,
         restaurantName: item.restaurantName,
         city: item.city,
         country: item.country,
         deliveryPrice: item.deliveryPrice,
         estimatedDeliveryTime:item.estimatedDeliveryTime,
         cuisines: item.cuisines,
         menuItem: item.menuItem,
         imageUrl: item.imageUrl,
         lastUpdated: item.lastUpdated,
      }));
      setRestaurants(restaurantsData);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);


  return (
    <main className="main-container">
      <RestaurantsTable restaurants={restaurants} />
    </main>
  );
};

export default Restaurants;