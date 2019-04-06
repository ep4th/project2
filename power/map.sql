drop database if exists coder_infoDB;
create database coder_infoDB;
use coder_infoDB;
CREATE TABLE `maps` (
  `_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `name` VARCHAR( 60 ) NOT NULL ,
  `zip` VARCHAR( 5 ) NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL ,
  `language` VARCHAR( 30 ) NOT NULL
);
LOAD DATA INFILE '.csv' 
INTO TABLE maps 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
SELECT * FROM .csv;

FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
