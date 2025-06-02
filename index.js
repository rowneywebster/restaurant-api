
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');
const path = require('path');

server.use(middlewares);
server.use(jsonServer.bodyParser);


server.post('/restaurants/:id/reviews', (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const { review } = req.body;

  if (!review || typeof review !== 'string') {
    return res.status(400).json({ error: 'Review must be a non-empty string.' });
  }

  const dbFilePath = path.join(__dirname, 'db.json');
  const db = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));

  const restaurant = db.restaurants.find(r => r.id === restaurantId);
  if (!restaurant) {
    return res.status(404).json({ error: 'Restaurant not found.' });
  }

  restaurant.reviews = restaurant.reviews || [];
  restaurant.reviews.push(review);


  fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2));
  res.status(200).json(restaurant);
});

server.use(router);

server.listen(10000, () => {
  console.log('✅ JSON Server is running on port 10000');
});
