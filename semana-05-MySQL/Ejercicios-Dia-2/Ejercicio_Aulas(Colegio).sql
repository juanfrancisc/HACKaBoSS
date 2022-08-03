-- Crear la base de datos
create database if not exists colegio;

-- Usar la base de datos
use colegio;

-- Creamos las tablas
create table if not exists alumno (
	id int unsigned primary key auto_increment,
    nombre varchar(50) not null,
    dni varchar(9) unique not null,
    apellido1 varchar(80) not null,
    apellido2 varchar(80)
);

create table if not exists profesor (
	id int unsigned primary key auto_increment, 
    dni varchar(9) unique not null,
    nombre varchar(50) not null,
    apellido1 varchar(80) not null,
    apellido2 varchar(80)
);

create table if not exists asignatura(
	id int unsigned primary key auto_increment, 
    nombre varchar(30) not null,
    num_horas int unsigned not null,
    idProfesor int unsigned not null,
    foreign key (idProfesor) references profesor (id) on delete no action
);

create table if not exists alumno_cursa_asignatura (
	id int unsigned primary key auto_increment, 
    fechaInicio date not null,
    fechaFin date not null,
    idAlumno int unsigned not null,
    foreign key (idAlumno) references alumno (id) on delete no action,
    idAsignatura int unsigned not null,
    foreign key (idAsignatura) references asignatura (id) on delete no action
);

-- Insertar 4 alumnos
insert into alumno (nombre, apellido1, apellido2, dni)
values('Juan','andaluz', 'andaluz', '23111222L'),
('Pepe', 'Cabrera' , 'Rojo', '74898898P'),
('Dolores', 'Fuertes', 'Barriga', '89456123Y'),
('Ana', 'Martin', 'Martin', '45789654T');

-- Insertar 2 profesores (uno imparte 2 asignaturas y el otro la restante)
-- (Creamos primero los profesores)
insert into profesor (nombre, apellido1, apellido2, dni)
values ('Mortadelo', 'Negro', 'Latia', '56789123O'),
('Pepe', 'Viyuela', 'Crocs', '78456123I');

-- Insertar 3 asignaturas
insert into asignatura (nombre, num_horas, idProfesor)
values ('Matematicas', 5, 1),
('Lengua Castellana', 4, 2),
('Ingles', 4, 2);

-- Los alumnos con id (1, 2, 3 y 4) están cursando las asignaturas 1 y 3, solamente el alumno con id 2 cursa la asignatura con id 2
insert into alumno_cursa_asignatura (fechaInicio, fechaFin, idAlumno, idAsignatura)
values ('2022-09-01', '2023-06-023', 1,1),
('2022-09-01', '2023-06-023', 2,1),
('2022-09-01', '2023-06-023', 3,1),
('2022-09-01', '2023-06-023', 4,1),
('2022-09-01', '2023-06-023', 1,3),
('2022-09-01', '2023-06-023', 2,3),
('2022-09-01', '2023-06-023', 3,3),
('2022-09-01', '2023-06-023', 4,3),
('2022-09-01', '2023-06-023', 2,2);