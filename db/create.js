const connection = require('./config');

const Car = `
  CREATE TABLE IF NOT EXISTS car (
    id INT NOT NULL AUTO_INCREMENT,
    plate VARCHAR(20) NOT NULL,
    img_url VARCHAR(2083),
    PRIMARY KEY (id)
  );
`;
const Trip = `
  CREATE TABLE IF NOT EXISTS trip (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    start_trip DATETIME NOT NULL,
    end_trip DATETIME NOT NULL,
    destination VARCHAR(255) NOT NULL,
    car_start_mileage INT,
    car_end_mileage INT,
    PRIMARY KEY (id),
    FOREIGN KEY (car_id)
    REFERENCES car (id)
  );