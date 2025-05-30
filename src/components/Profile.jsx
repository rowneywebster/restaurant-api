import { useState } from 'react';

const Profile = () => {
  // User profile state
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    avatar: null,
    favoriteRestaurants: []
  });

  // Available avatars and restaurants
  const avatars = ['🐶', '🐱', '🐭', '🐹', '🐰'];
  const restaurants = [
    { id: 1, name: 'Lucca Italian' },
    { id: 2, name: 'Open House Indian' },
    { id: 3, name: 'Habesha Ethiopian' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarSelect = (avatar) => {
    setProfile(prev => ({ ...prev, avatar }));
  };

  const handleRestaurantToggle = (restaurant) => {
    setProfile(prev => {
      const exists = prev.favoriteRestaurants.some(r => r.id === restaurant.id);
      return {
        ...prev,
        favoriteRestaurants: exists
          ? prev.favoriteRestaurants.filter(r => r.id !== restaurant.id)
          : [...prev.favoriteRestaurants, restaurant]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile saved:', profile);
    // Here you would typically send to your API
  };

  return (
    <div className="profile-page">
      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="profile-form">
        <h2>Create Your Profile</h2>
        
        <div className="avatar-selector">
          <p>Choose an avatar:</p>
          <div className="avatars">
            {avatars.map(avatar => (
              <span 
                key={avatar}
                className={`avatar-option ${profile.avatar === avatar ? 'selected' : ''}`}
                onClick={() => handleAvatarSelect(avatar)}
              >
                {avatar}
              </span>
            ))}
          </div>
        </div>

        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={profile.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={profile.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <div className="restaurant-selection">
          <p>Select favorite restaurants:</p>
          {restaurants.map(restaurant => (
            <label key={restaurant.id}>
              <input
                type="checkbox"
                checked={profile.favoriteRestaurants.some(r => r.id === restaurant.id)}
                onChange={() => handleRestaurantToggle(restaurant)}
              />
              {restaurant.name}
            </label>
          ))}
        </div>

        <button type="submit">Save Profile</button>
      </form>

      {/* Profile Preview Card */}
      {profile.name && (
        <div className="profile-card">
          <div className="card-header">
            <span className="avatar">{profile.avatar || '👤'}</span>
            <h3>{profile.name}</h3>
          </div>
          <p>Email: {profile.email}</p>
          
          {profile.favoriteRestaurants.length > 0 && (
            <div className="favorites">
              <h4>Favorites:</h4>
              <ul>
                {profile.favoriteRestaurants.map(r => (
                  <li key={r.id}>{r.name}</li>
                ))}
              </ul>
            </div>
          )}

          <button 
            className="delete-btn"
            onClick={() => setProfile({
              name: '',
              email: '',
              avatar: null,
              favoriteRestaurants: []
            })}
          >
            Delete Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;