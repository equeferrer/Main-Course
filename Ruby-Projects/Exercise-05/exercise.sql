CREATE TABLE students(
  id integer,
  first_name VARCHAR,
  middle_name VARCHAR, 
  last_name VARCHAR,
  age integer,
  location VARCHAR);

Insert into students(id, first_name,middle_name, last_name, age, location)
Values (1, 'Juan', 'Blank', 'Cruz', 18, 'Manila');

Insert into students(id, first_name,middle_name, last_name, age, location)
Values (2, 'John', 'Blank', 'Young', 20, 'Manila');

Insert into students(id, first_name,middle_name, last_name, age, location)
Values (3, 'Victor', 'Blank', 'Rivera', 21, 'Manila');

Insert into students(id, first_name,middle_name, last_name, age, location)
Values (4, 'Adrian', 'Blank', 'Co', 19, 'Laguna');

Insert into students(id, first_name,middle_name, last_name, age, location)
Values (5, 'Pau', 'Blank', 'Riosa', 22, 'Marikina');

Insert into students(id, first_name,middle_name, last_name, age, location)
Values (6, 'Piolo', 'Blank', 'Pascual', 25, 'Manila');

UPDATE students
SET first_name ='Ana', middle_name='Cui', last_name='Cajocson', age=25, location='Bulacan'
WHERE id = 1;

DELETE FROM students
WHERE id=6;