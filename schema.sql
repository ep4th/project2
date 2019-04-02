DROP DATABASE IF EXISTS codebookdb;
CREATE DATABASE codebookdb;


-- CREATE TABLE users
-- (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(250) NOT NULL,
--     email VARCHAR(250) NOT NULL,
--     zip INTEGER(5) NOT NULL,
--     password VARCHAR(250) NOT NULL,
--     languages VARCHAR(250) NOT NULL, 
--     PRIMARY KEY (id)
-- );

-- INSERT INTO users (name, email, zip, password, languages)
-- VALUES ("Guillermo Garcia"," memo@gmail.com", "91325", "HASHED","Ruby, C#, JS");

-- CREATE TABLE events
-- (
--     id int NOT NULL AUTO_INCREMENT,
--     eventName VARCHAR(250) NOT NULL,
--     location VARCHAR(250) NOT NULL,
--     start_at TIME,
--     attendance  VARCHAR(250) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- INSERT INTO events (eventName, location, start_at, attendance)
-- VALUES ("Codes & Coffee"," 1969 S Vermont Ave, Los Angeles, CA 90007", "10:00", "3");