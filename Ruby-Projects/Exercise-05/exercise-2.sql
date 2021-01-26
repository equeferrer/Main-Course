-- Using database table in exercise.sql
-- display count of all students;
-- select all students with location: Manila
-- Display average age of all students
-- display all students by Age, descending order

SELECT COUNT (id) FROM students

SELECT * FROM students WHERE location="Manila"

SELECT AVG(age) FROM students

SELECT * FROM students GROUP BY age ORDER BY age DESC