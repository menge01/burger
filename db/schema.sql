### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	eaten BOOLEAN DEFAULT false NOT NULL,
	PRIMARY KEY (id)
);