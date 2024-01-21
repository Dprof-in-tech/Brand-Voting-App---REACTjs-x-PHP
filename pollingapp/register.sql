-- Create the pollingapp database if it doesn't exist
CREATE DATABASE IF NOT EXISTS pollingapp;

-- Switch to the pollingapp database
USE pollingapp;

-- Create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

create table votes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    voter VARCHAR(255) NOT NULL,
    brand VARCHAR(255)
)

ALTER TABLE your_database_name.users
ADD COLUMN login_check BOOLEAN DEFAULT false,
ADD COLUMN login_time varchar(255) NOT NULL;