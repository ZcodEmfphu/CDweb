import React, { useState, useEffect } from "react";
import { Order } from "../../type";
import OrderTable from "@/components/ui/orderTable";

const Orders: React.FC = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [orders, setOrders] = useState<Order[]>([]);


  const fetchRestaurants = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/order/getAllOrder`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
      }
      const data = await response.json();

      const ordersData: Order[] = data.map((item: any) => ({
        _id: item._id,
         status:item.status,
      }));
      setOrders(ordersData);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);


  return (
    <main className="main-container">
      <OrderTable orders={orders}  />
    </main>
  );
};

export default Orders;