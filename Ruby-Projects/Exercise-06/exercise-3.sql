-- continuation from exercise and exercise-2 from Exercise-05

CREATE TABLE classrooms(
  id integer,
  student_id integer,
  section VARCHAR);

Insert into classrooms Values (1, 1, 'A');
Insert into classrooms Values (2, 2, 'A');
Insert into classrooms Values (3, 3, 'B');
Insert into classrooms Values (4, 4, 'C');
Insert into classrooms Values (5, 5, 'B');
Insert into classrooms Values (6, 6, 'A');
Insert into classrooms Values (7, 7, 'C');
Insert into classrooms Values (8, 8, 'B');
Insert into classrooms Values (9, 9, 'B');
Insert into classrooms Values (10, 10, 'C');

select * from classrooms INNER JOIN students on classrooms.id = students.id
select * from classrooms LEFT JOIN students on classrooms.id = students.id
select * from classrooms RIGHT JOIN students on classrooms.id = students.id
select * from classrooms FULL JOIN students on classrooms.id = students.id