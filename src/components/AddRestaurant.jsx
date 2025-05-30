import { useState } from 'react';

const AddRestaurant = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    const newRestaurant = {
      id: Date.now().toString(),
      name,
      cuisines: ["New"],
      rating: 4.0
    };

    onAdd(newRestaurant);
    setName('');
  };

  return (
    <div className="add-restaurant">
      <h3>Add New Restaurant</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Restaurant name"
          required
        />
        <button type="submit">Add to Favorites</button>
      </form>
    </div>
  );
};

export default AddRestaurant;