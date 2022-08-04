# Ejercicio sql 1
/*Crea una tabla que permita guardar usuarios en la que guardes una id, su DNI, su tlf., su email, su nombre y apellidos. 
Crea también campos para su dirección: país, CP, varias líneas de dirección...*/

create database ejercicio1;
use ejercicio1;

create table usuario(
	id int unsigned primary key not null auto_increment,
    dni varchar(11) not null unique,
    nombre varchar(50) not null,
    apellido1 varchar(50) not null,
    apellido2 varchar(50),
    tel varchar(11) not null,
    tel2 varchar(11),
    email varchar(150) not null,
    email2 varchar(150),
    direccion varchar(150) not null,
    poblacion varchar(100) not null,
    cp varchar(5) not null,
    provincia varchar(50) not null,    
    pais varchar(50) not null
    
);