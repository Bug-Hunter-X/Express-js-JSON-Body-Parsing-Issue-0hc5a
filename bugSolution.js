const express = require('express');
const app = express();
// Place express.json() middleware BEFORE route handlers
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body); // req.body will now contain the JSON data
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));