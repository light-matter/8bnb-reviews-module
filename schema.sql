-- run mysql -u student -p < schema.sql to migrate schema with student password also

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

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (1, "Ben", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "This place was a real hoot. Will return for sure!!!!", 1, "2017-08-02");
