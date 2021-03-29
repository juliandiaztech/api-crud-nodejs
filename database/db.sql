CREATE DATABASE test3;

USE test3;

CREATE TABLE warehouse(
    id INT(11) NOT NULL,
    name VARCHAR(16) NOT NULL,
    headquarters_number VARCHAR(60) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    update_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

ALTER TABLE warehouse
    ADD PRIMARY KEY (id);

ALTER TABLE warehouse
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

-- DESCRIBE   warehouse;

-- TABLE Warehouse_description

CREATE TABLE warehouse_description (
    id INT(11) NOT NULL,
    warehouse_id INT(11),
    phone VARCHAR(150) NOT NULL,
    city VARCHAR(255) NOT NULL,
    address TEXT,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    update_at TIMESTAMP ON UPDATE  CURRENT_TIMESTAMP,
    CONSTRAINT fk_warehouse FOREIGN KEY (warehouse_id) REFERENCES warehouse(id)
);

ALTER TABLE warehouse_description
    ADD PRIMARY KEY (id);

ALTER TABLE warehouse_description
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

-- DESCRIBE warehouse_description;