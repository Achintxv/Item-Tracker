import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemListPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div>
      <h2>Item List</h2>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item._id}>
              <strong>{item.name}</strong><br/>
              Price: ₹{item.price}<br/>
              Expiry Date: {new Date(item.expiryDate).toLocaleDateString()}<br/>
              Max Discount: {item.maxDiscount}%
              <hr/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemListPage;