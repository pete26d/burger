DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name varchar(255) NOT NULL,
  devoured BOOL DEFAULT false,
  PRIMARY KEY (id)
);
