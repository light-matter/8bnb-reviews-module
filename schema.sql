-- run mysql -u root < schema.sql to migrate schema

DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

USE reviews;

CREATE TABLE review(
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(50),
  image VARCHAR(255),
  body VARCHAR(255),
  host_id INT,
  created_at DATETIME NOT NULL,
  PRIMARY KEY(id)
);
