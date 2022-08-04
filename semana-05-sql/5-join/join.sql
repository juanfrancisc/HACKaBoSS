# Ejercicio join

/*Usando la base de datos que creamos en los ejercicios de la semana pasada, selecciona todos los datos de los usuarios, 
incluida toda la información de su dirección.*/

select * from usuario u
inner join direccion d
	on (u.id = d.idUsuario);