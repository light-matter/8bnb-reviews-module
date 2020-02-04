var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
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
    connection.query(`INSERT INTO review (author, image, body, clean_rating, accuracy_rating, communication_rating, location_rating, checkin_rating, value_rating, clean_fav, response_fav, hospitality_fav, stylish_fav, amenities_fav, host_id, created_at) VALUES ('${faker.name.findName()}', '${faker.image.avatar()}', '${faker.lorem.sentence()}', '${faker.random.number(5)}', '${faker.random.number(5)}', '${faker.random.number(5)}', '${faker.random.number(5)}', '${faker.random.number(5)}', '${faker.random.number(5)}', '${faker.random.number(1)}', '${faker.random.number(1)}', '${faker.random.number(1)}', '${faker.random.number(1)}', '${faker.random.number(1)}', 1, '2017-08-02');`, (err, data) => {
      if (err) {
        console.log('SEEDING: ', err);
      } else {
        console.log('DB successfully seeded!');
      }
    });
  }
};
seedData(100);