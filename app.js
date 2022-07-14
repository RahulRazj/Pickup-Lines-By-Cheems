
// 07-13-2022, Chennai, India
// Rahul Chaurasiya

const express = require('express');
const { getPickupLines } = require('./api');

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/getLine', async (req, res) => {
  const data = await getPickupLines();
  res.send(data.data[0]);
});

app.get('/', (req, res) => {
  res.render('home');
});

const port = process.env.PORT || 3000

app.listen(port, console.log(`Server running at port `+port));
