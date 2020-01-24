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

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (2, "James", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "So cool you'll punch your mom in the face!", 1, "2017-08-02");

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (3, "Jake", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "Not for the feint of heart. Buyer beware.", 1, "2017-08-03");

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (4, "Cam", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "I had a sqeaky night last night", 1, "2017-08-05");

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (5, "Lana", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "There's a good time and then there's this place.", 1, "2017-08-05");

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (6, "Kate", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "Carpi diem mother fuckers!", 1, "2017-08-06");

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (7, "Chris", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "Came for the bed stayed for the hangover.", 1, "2017-08-06");

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (8, "Alex", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "Great location. Right next to the buttsauce. Who doesn't like buttsauce?", 1, "2017-08-9");

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (9, "Serry", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "Dirty room = dirty mind", 1, "2017-08-10");

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (10, "Haylie", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "Next time I'll try not to vomit all over the place. Hey, here for a good time, not for a long time, right?! Amiright?!", 1, "2017-08-10");

INSERT INTO review (id, author, image, body, host_id, created_at) VALUES (11, "Sarah", "http://media.photobucket.com/user/chishono/media/Short%20North%20Chiropractic/shortnorthchiropractic3.jpg.html?filters[term]=short%20url&filters[primary]=images&sort=1&o=28", "Got thrown out for being a bitch.", 1, "2017-08-11");