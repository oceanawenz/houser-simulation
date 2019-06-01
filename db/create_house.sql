-- CREATE TABLE houses (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(30),
--     address VARCHAR(100),
--     city VARCHAR(100),
--     state VARCHAR(2),
--     zip INTEGER

-- );


INSERT INTO houses (name, address, city, state, zip) 
VALUES ($1, $2, $3, $4, $5);

SELECT * FROM houses;