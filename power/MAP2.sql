drop database if exists coder_infoDB;
create database coder_infoDB;
use coder_infoDB;
CREATE TABLE `map` (
  `name` json DEFAULT NULL
  ROW 100
);
INSERT INTO `map` (`name`)
VALUES ('["id", "name", "email","zip","latitude","longitude","knownLangauges"]');
SELECT * FROM `.csv`
