-- Usamos la base de datos de Aulas.
use aulas;
-- ------------------- --

-- Seleccionar de la tabla alumno solamente los campos nombre y apellido1
select nombre,apellido1 from alumno;

-- Seleccionar de la tabla profesor todos los campos.
select * from profesor;

-- Selecciona todos los datos solamente del alumno con apellido Menta
select * from alumno where apellido1 = 'Menta' or apellido2='Menta';

-- Indica la media de horas de las asignaturas
select AVG(nHoras) from asignatura;

-- Selecciona las asignaturas cuyo numero de horas dure entre 150 y 300 además que la imparta el profesor con id 1
select * from asignatura where nHoras between 150 and 300 and idProfesor=1;

-- Cuál es la asignatura con mayor número de horas?
select nombre from asignatura order by nHoras desc limit 1;

-- Selecciona todos los datos de los alumno_cursan_asignatura donde la asignatura sea la id 1 y la fecha de fin de curso sea el 2023-06-21
select * from alumno_cursa_asignatura where idAsignatura=1 and fechaFinCurso='2023-06-21';

-- Selecciona todos los datos de los alumnos que cursan asignatura donde la asignatura sea la id 1 y la fecha de fin de curso sea el 2023-06-21
select dni,nombre,apellido1, apellido2 from alumno, alumno_cursa_asignatura where alumno.dni = alumno_cursa_asignatura.dniAlumno and idAsignatura=1 and fechaFinCurso='2023-06-21';

-- Selecciona todos los datos de la asignatura con menor número de horas.
select nombre from asignatura order by nHoras asc limit 1;
