# Ejercicio update

/*Actualiza la tabla de usuarios para añadir una columna para la edad. A continuacion, 
rellena esa columna para los 5 usuarios que existen.*/

alter table usuario add column fechaNac date;

update usuario set fechaNac = '1999-09-01' where id = 1;
update usuario set fechaNac = '1987-06-22' where id = 2;
update usuario set fechaNac = '2001-02-03' where id = 3;
update usuario set fechaNac = '2003-10-11' where id = 4;
update usuario set fechaNac = '2005-07-01' where id = 5;
 