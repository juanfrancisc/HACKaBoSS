# Ejercicio sql 4
/*Selecciona el nombre, apellido y número de teléfono de todos los usuarios, ordenados alfabéticamente según su apellido.
Después haz otra consulta que indique cuántos usuarios hay de cada país, basándote en la tabla de direcciones.*/

select nombre, apellido1, tel from usuario order by apellido1 ASC;

select count(*),d.pais from usuario u
inner join direccion d
	on (u.id = d.idUsuario)
group by pais ;


-- Tras la correccion se podria haver hecho mucho mas sencillo puesto que 
-- esta todo en la misma tabla

select count(*), pais from direccion group by pais;