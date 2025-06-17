CREATE DATABASE IF NOT EXISTS myNotes;
USE myNotes;

CREATE TABLE note(
id INT,
noteHeading VARCHAR(50) NOT NULL,
noteDesc VARCHAR(100) NOT NULL
);

SELECT * FROM note;

ALTER TABLE note
MODIFY id INT auto_increment;