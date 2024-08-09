import React from 'react';
import OrderItem from './OrderItem';

const orders = [1, 2, 3, 4, 5];
const OrdersList = () => {
  return (
    <div>
      {orders?.length > 0 &&
        orders.map((item, i) => (
          <OrderItem key={item._id || `${i + 1}`} item={item} />
        ))}
    </div>
  );
};

export default OrdersList;
