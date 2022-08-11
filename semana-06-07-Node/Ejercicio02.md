# Ejercicio 2
El primer día hemos creado el proyecto experiencias y hemos puesto el servidor a la escucha, además de crear los
scripts de conexión a la base de datos y creación de tablas, hoy vamos a realizar alguno de los endpoints
para el manejo de usuarios.


POST[/register] - Creará un nuevo usuario en la base de datos.


POST[/login] - Inicio de sesión del usuario, devuelve un TOKEN


GET[/user/:idUser] - Devuelve información del usuario.


PUT[/user/:idUser] - Permite al usuario logeado modificar su nombre y apellidos


Registra 4 o 5 usuarios nuevos en la aplicación y haz login con al menos 1 de ellos.


Pide la información de los usuarios con idUser 2 y 3.


Listar Todas las experiencias GET[/experiences]
Listar una experiencia GET[/experiences/:idExperience]

Crear un Endpoints que registre a un usuario como admin donde se pueda logar.

