var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'reviews'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

const seedData = (num) => {
  for (let i = 1; i < num; i++) {
    connection.query(`INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (${i}, '${faker.name.findName()}', '${faker.image.avatar()}', '${faker.lorem.sentence()}', 1, '2017-08-02');`, (err, data) => {
      if (err) {
        console.log('SEEDING: ', err);
      } else {
        console.log('DB successfully seeded!');
      }
    });
  }
};
seedData(100);

module.exports = {

  getReviews: (callback) => {
    connection.query('SELECT * FROM review', (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

};