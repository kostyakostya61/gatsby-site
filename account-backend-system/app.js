const express = require('express');
const config = require('config');
const pg = require('pg');

const app = express();
const PORT = config.get('port') || 5000;
var conString =
  'postgres://mydjbees:kpDT6lELnMMnA1qSkrRDHnzz7Hb1sdMO@dumbo.db.elephantsql.com:5432/mydjbees'; //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    client.end();
  });
});

app.use('/auth', require('./routes/auth.routes'));

async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (e) {
    console.log(`Server error`, e.message);
    process.exit();
  }
}
start();
