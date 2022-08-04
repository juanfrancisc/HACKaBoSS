# Ejercicio sql 2
/* Modifica (mediante el comando ALTER TABLE) la tabla del ejercicio 1 moviendo los datos referidos a la dirección a una tabla nueva, 
relacionando las dos mediante foreign keys. Crea un diagrama ER que muestre la base de datos resultante.*/

-- describe usuario;

alter table usuario drop column direccion; 
alter table usuario drop column poblacion;
alter table usuario drop column cp;
alter table usuario drop column provincia;
alter table usuario drop column pais;

create table direccion (
	id int unsigned primary key not null auto_increment,
    direccion varchar(150) not null,
    poblacion varchar(100) not null,
    cp varchar(5) not null,
    provincia varchar(50),    
    pais varchar(50) not null,
    idUsuario int unsigned,
    foreign key (idUsuario) references usuario(id)
    on delete no action
);




