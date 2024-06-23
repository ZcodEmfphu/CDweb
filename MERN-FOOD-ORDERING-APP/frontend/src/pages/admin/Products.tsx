import React, { useState, useEffect } from "react";
import { MenuItem, Restaurant } from "../../type";
import {  useAuth0 } from "@auth0/auth0-react";
import ProductTable from "@/components/ui/productTable";


const Products: React.FC = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [restaurants, setRestaurant] = useState<Restaurant[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

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
         user:item.user,
         restaurantName: item.restaurantName,
         city: item.city,
         country: item.country,
         deliveryPrice: item.deliveryPrice,
         estimatedDeliveryTime:item.estimatedDeliveryTime,
         cuisines: item.cuisines,
         menuItems: item.menuItems,
         imageUrl: item.imageUrl,
         lastUpdated: item.lastUpdated,
      }));
      setRestaurant(restaurantsData);

      const collectMenuItems = () => {
        let collectedItems: MenuItem[] = [];
        restaurantsData.forEach((restaurant) => {
            collectedItems = [...collectedItems, ...restaurant.menuItems];
        });
        return collectedItems;
    };
    const allMenuItems = collectMenuItems();
    setMenuItems(allMenuItems);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);


  return (
    <main className="main-container">
      <ProductTable products={menuItems}/>
    </main>
  );
};

export default Products;