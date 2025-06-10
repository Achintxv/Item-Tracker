import React, { useState } from 'react';
import axios from 'axios';

function AddItem() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [maxDiscount, setMaxDiscount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/add-item', {
        name,
        price: Number(price),
        expiryDate,
        maxDiscount: Number(maxDiscount)
      });
      alert('✅ Item added successfully!');
      setName('');
      setPrice('');
      setExpiryDate('');
      setMaxDiscount('');
    } catch (error) {
      console.error('❌ Error adding item:', error);
      alert('Failed to add item');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <br />
        <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
        <br />
        <input type="number" placeholder="Max Discount (%)" value={maxDiscount} onChange={(e) => setMaxDiscount(e.target.value)} required />
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
