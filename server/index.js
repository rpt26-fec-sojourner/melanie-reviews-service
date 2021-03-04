const express = require('express');
const app = express();
const port = 1969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'));


app.listen(port, () => {
  console.log(`listening at port ${port}`);
});