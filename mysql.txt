CREATE DATABASE personas;


CREATE TABLE `personas`.`personas` (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(55) NOT NULL,
  apellido VARCHAR(55) NOT NULL,
  email VARCHAR(55) NOT NULL,
  PRIMARY KEY (id)
);

USE personas;
INSERT INTO personas (nombre, apellido, email)
VALUES ('Exequiel', 'Segura', 'exequielsegura2@gmail.com');
INSERT INTO personas (nombre, apellido, email)
VALUES ('Juan', 'Carlos', 'juancarlos@email.com');

SELECT * FROM personas;