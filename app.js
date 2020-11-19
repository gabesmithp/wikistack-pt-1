const express = require("express");
const morgan = require("morgan");
const app = express();
const layout = require('./views/layout.js')

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send(layout(''));
})

app.listen(3000, () => {
  console.log('App listening in port 3000');
})
