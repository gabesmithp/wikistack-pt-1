const express = require('express');
const morgan = require('morgan');
const app = express();
const { db, Page, User } = require('./models');
const layout = require('./views/layout.js');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(layout(''));
});

db.authenticate().then(() => {
  console.log('connected to the database');
});

async function modelsSync() {
  await db.sync({force: true})
  // if we want to drop the tables {force: true}
}

modelsSync()

app.listen(3000, () => {
  console.log('App listening in port 3000');
});


