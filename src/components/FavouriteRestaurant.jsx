const FavoriteRestaurants = ({ restaurants, onDelete }) => (
    <div className="favorites">
      <h3>My Favorite Restaurants</h3>
      {restaurants.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <ul>
          {restaurants.map(restaurant => (
            <li key={restaurant.id}>
              <span>{restaurant.name}</span>
              <button onClick={() => onDelete(restaurant.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  export default FavoriteRestaurants;