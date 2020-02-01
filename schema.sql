-- run mysql -u student -p < schema.sql to migrate schema with student password also

DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

USE reviews;

CREATE TABLE review(
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(50),
  image VARCHAR(255),
  body VARCHAR(255),
  clean_rating INT,
  accuracy_rating INT,
  communication_rating INT,
  location_rating INT,
  checkin_rating INT,
  value_rating INT,
  clean_fav INT,
  response_fav INT,
  hospitality_fav INT,
  stylish_fav INT,
  amenities_fav INT,
  host_id INT,
  created_at DATETIME NOT NULL,
  PRIMARY KEY(id)
);
