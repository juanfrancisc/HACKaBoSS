use aulas;

select * from alumno;

select * from alumno_cursa_asignatura;

select * from asignatura;
describe asignatura;

select * from profesor;
describe profesor;

-- Inserta 2 nuevos profesores
insert into profesor (nombre, apellido1, apellido2)
values ('Carlos','Ruiz','Zafon'),
('Dolores','Fuertes','Barriga');

insert into profesor (id,nombre, apellido1, apellido2)
values (8,'prueba','prueba','prueba');

-- Modifica todos los profesores que no tengan un segundo apellido y añadele como apellido2 'No tiene segundo apellido'
update profesor set apellido2 ='No tiene segundo apellido' where apellido2 is null;

-- Añade 2 nuevas asignaturas
insert into asignatura (nombre,nHoras,idProfesor)
values('Lengua Española',400,4),
('Geografía',200,3);


insert into asignatura (nombre,nHoras,idProfesor)
values('Plastica',50,4); -- Para poder borrarla despues

-- Elimina la última asignatura y el último profesor insertados 
DELETE FROM profesor ORDER BY id DESC LIMIT 1; 

DELETE FROM asignatura ORDER BY id DESC LIMIT 1;

-- Selecciona todos los datos de las asignaturas junto a los profesores que las imparten
select * 
from asignatura a inner join profesor p
on a.idProfesor = p.id;

-- Selecciona el nombre, nHoras, nombre y apellido de las asignaturas y profesores que las imparten 
-- de las asignaturas cuyo nombre empiece por 'M'.
select a.nombre, a.nHoras, p.nombre, p.apellido1, p.apellido2
from asignatura a inner join profesor p
	on (a.idProfesor = p.id)
where a.nombre like 'M%';

-- Muestra el nombre, apellido, fechaIniCurso, fechaFinCurso y nombre de asignatura de todos los alumnos
-- que estén cursando una asignatura.
select al.nombre, al.apellido1, al.apellido2, aca.fechaIniCurso, aca.fechaFinCurso, a.nombre 
from alumno al inner join alumno_cursa_asignatura aca
	on (al.dni = aca.dniAlumno) inner join asignatura a
		on (aca.idAsignatura= a.id);

-- Muestra el nombre, apellido, fechaIniCurso, fechaFinCurso y nombre de asignatura de todos los alumnos
-- que estén cursando una asignatura donde el alumno tenga segundo apellido y la asignatura dure más de 200 horas.
select al.nombre, al.apellido1, al.apellido2, aca.fechaIniCurso, aca.fechaFinCurso, a.nombre 
from alumno al inner join alumno_cursa_asignatura aca
	on (al.dni = aca.dniAlumno) inner join asignatura a
		on (aca.idAsignatura= a.id) 
where al.apellido2 <> 'No tiene segundo apellido' or al.apellido2 is not null and a.nHoras >= 200;

