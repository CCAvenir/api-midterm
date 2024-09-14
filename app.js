const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const dishes = [
  { type: 'Sisig', province: 'Pampanga', price: 220 },
  { type: 'Salpicao', province: 'Quezon', price: 180 },
  { type: 'Bagnet', province: 'Ilocos', price: 370 }
];

app.get('/dishes', (req, res) => {
  res.json(dishes);
});

app.get('/dishes/:type', (req, res) => {
  const type = req.params.type;
  const dish = dishes.find(d => d.type === type);
  if (dish) {
    res.json(dish);
  } else {
    res.status(404).send('Record not found');
  }
});

app.use((req, res) => {
  res.status(404).send('Record not found');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});