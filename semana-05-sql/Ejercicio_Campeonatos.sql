use campeonatos;

show tables;

INSERT INTO equipo (nombre, patrocinador1, patrocinador2, colorCamiseta1, colorCamiseta2, categoria)
VALUES ('Celta de Vigo', 'Abanca', null, 'celeste', 'verde', 'primera'),
('Real Madrid', 'Fly Emirates', 'Gaseosas Rodriguez', 'blanco', 'negro', 'primera'),
('Barcelona', 'Spotify', null, 'rojo azul', 'gris', 'primera'),
('Lugo', 'Abanca', null, 'blanco rojo', 'azul', 'segunda'),
('Noia', 'Abanca', null, 'blanco dorado', 'negro', 'primera'),
('Racing Ferrol', 'Santander', null, 'verde', 'rojo', 'segunda'),
('Celta de Vigo B', 'Abanca', null, 'celeste', 'verde', 'segunda b'),
('Deportivo de la Coruña', 'Abanca', null, 'blanco azul', 'verde', 'segunda b');


INSERT INTO jugador (dni, nombre, apellido1, apellido2, telefono, fecha_nac, calle, cp, idEquipo)
VALUES ('19292932-A', 'Alfredo', 'Lopez', 'Barrejo', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 1),
('11233932-S', 'Sofia', 'Yatusabeh', null, '123123123', '1958-12-20', 'Avenida de su corazon Nº4', '15000', 1),
('19214332-X', 'Girasol', 'Pipa', null, '123123123', '1989-05-31', 'Avenida de su corazon Nº4', '15000', 2),
('19766932-G', 'Cepeda', 'Santiago', 'Barrejo', '123123123', '1990-10-19', 'Avenida de su corazon Nº4', '15000', 3),
('12222932-H', 'Ruben', 'Linan', 'Kelly', '123123123', '2000-09-12', 'Avenida de su corazon Nº4', '15000', 3),
('88882932-B', 'Yago', 'Hehe', 'Palomita', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 3),
('19298652-F', 'Felipe', 'Gonzalez', 'Sos', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 4),
('19292225-S', 'C', 'Tangana', null, '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 5),
('17656543-X', 'Tyson', 'Fury', null, '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 6),
('13455522-X', 'Adriana', 'Ludus', 'Lago', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 7),
('66555335-L', 'Maria', 'Baiona', 'Cangas', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 8),
('76533332-B', 'Jose', 'Nuevo', 'lllllll', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 4),
('54426633-S', 'Rocio', 'Valleja', null, '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 6),
('76667774-F', 'Gepeto', 'Alfredo', null, '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 7);

INSERT INTO partido (campo, resultado, incidencia, goles)
VALUES ('Bernabeu', '3-0', null, 3),
('Bernabeu', '2-3', null, 5),
('Camp Nou', '3-7', null, 10),
('Bernabeu', '3-1', null, 4),
('Santiago', '2-1', 'Hemos expulsado a 1 jugador', 3),
('Riazor', '0-0', '2 amarillas y 1 roja', 0),
('Riazor', '2-0', null, 2);


INSERT INTO equipo_juega_partido (idPartido, idEquipoLocal, idEquipoVisitante, fecha_partido)
VALUES (1, 2, 1, '2022-08-03 17:00:00'),
(2, 3, 4, '2022-08-06 19:00:00'),
(3, 2, 1, '2022-08-10 17:00:00'),
(4, 5, 6, '2022-10-28 14:00:00'),
(5, 3, 2, '2022-03-03 18:30:00'),
(6, 4, 1, '2022-12-10 22:30:00'),
(7, 6, 8, '2022-10-12 14:00:00');


/*
	#############################################################
	### Ejercicios EXTRA con la base de datos de Campeonatos. ###
	#############################################################
*/

-- Selecciona todas las columnas de la tabla equipo.
select * from equipo;

-- Muestra solamente el dni, nombre, apellido1 y fecha de nacimiento de los jugadores.
select dni, nombre, apellido1, fecha_nac from jugador;

-- Muestra los jugadores ordenados por su apellido de manera descendente.
select apellido1 from jugador order by apellido1 desc;

-- Muestra ahora el dni, nombre, apellido1, apellido2 y fecha_nac de los jugadores que tengan segundo apellido y ordenados por su fecha de nacimiento.
select dni, nombre, apellido1, apellido2, fecha_nac from jugador where apellido2 is not null order by fecha_nac asc;

-- Cuantos partidos ha habido en total en cada campo? (Recuerda que existe el count())
select campo,count(*) as numPartidos from partido group by campo;

-- Cuál ha sido el máximo de goles en un partido?
select id,max(goles) from partido;

-- Y el mínimo?
select id,min(goles) from partido;

-- Y la media total?
select avg(goles) from partido;

-- Muestra todos los datos de los equipos que jueguen en primera division.
select * from equipo where categoria ='primera';

-- Modifica todas las incidencias que consten como nulas y pon 'Ha sido un partido tranquilo'
update partido set incidencia ='Ha sido un partido tranquilo' where incidencia is null;

-- Selecciona todos los datos de los jugadores y los equipos en los que juegan, ordenalos por el nombre del equipo.
select * 
from jugador j inner join equipo e
	on (j.idEquipo = e.id)
order by e.nombre ASC;

-- Muestra el nombre del equipo local, fecha del partido y nombre del equipo visitante.
-- select * from equipo_juega_partido;

select ejp.idEquipoLocal,el.nombre, ejp.fecha_partido, ejp.idEquipoVisitante,ev.nombre 
from equipo_juega_partido ejp inner join equipo el
	on (ejp.idEquipoLocal=el.id) inner join equipo ev
    on (ejp.idEquipoVisitante=ev.id);




