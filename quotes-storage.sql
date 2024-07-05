CREATE DATABASE apiDataDB;

USE apiDataDB;

CREATE TABLE apiData (
    id INT AUTO_INCREMENT PRIMARY KEY,
    attribute_name VARCHAR(255) NOT NULL,
    attribute_value TEXT NOT NULL
);
