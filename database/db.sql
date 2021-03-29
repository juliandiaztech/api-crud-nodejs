CREATE DATABASE test;

USE test;

CREATE TABLE warehouseapp(
    id INT(11) NOT NULL,
    name VARCHAR(16) NOT NULL,
    headquarters_number VARCHAR(60) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    update_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE warehouseapp
    ADD PRIMARY KEY (id);

ALTER TABLE warehouseapp
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

-- DESCRIBE   warehouse;

-- TABLE Warehouseapp_description

CREATE TABLE warehouseapp_description (
    id INT(11) NOT NULL,
    warehouse_id INT(11),
    phone VARCHAR(150) NOT NULL,
    city VARCHAR(255) NOT NULL,
    address TEXT,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    update_at TIMESTAMP ON UPDATE  CURRENT_TIMESTAMP,
    CONSTRAINT fk_warehouse FOREIGN KEY (warehouse_id) REFERENCES warehouse(id)
);

ALTER TABLE warehouseapp_description
    ADD PRIMARY KEY (id);

ALTER TABLE warehouseapp_description
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

-- DESCRIBE warehouseapp_description;