/** Archi que inicirá y reiniciará las tablas de la base de datos */

// Requerir getDB
const getDB = require("./getDB");

// Trasn instalar la dependencia npm i dotenv, y tener el fichero .env rquerimo acceso a el
require('dotenv').config();

// Funcion que creará y borrará las tablas de la base de datos
async function main(){

    //Crear la variable que contine la conexion a la BBDD
    let connection;

    try {
        //Abrir una conexion con a base de datos
        connection = await getDB();

        //Podemos acceder a las variables de entorno detalladas en el .env
        //console.log(process.env.EJEMPLO)

        //Si todo va bien tenemos la conexion con la base de datos abierta
        //console.log('Conexion con base de datos realizada')


        // Eliminar las tablas de la base de datos si existe
        console.log('Eliminando tablas...');
        
        await connection.query(`DROP TABLE IF EXISTS product_photo`);
        await connection.query(`DROP TABLE IF EXISTS product`);
        await connection.query(`DROP TABLE IF EXISTS user`);


        // Crear las tablas de la base de datos
        console.log('Creando tablas...');

        await connection.query(`
            CREATE TABLE IF NOT EXISTS user (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                username VARCHAR(30) NOT NULL,
                email VARCHAR(100) NOT NULL,
                password VARCHAR(200) NOT NULL,
                avatar VARCHAR(255),
                createdAt DATETIME
                )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS product (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(50) NOT NULL,
                precio DECIMAL(8,2) NOT NULL,
                descripcion TEXT,
                sold BOOLEAN DEFAULT false,
                createdAt DATETIME,
                idUser INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES user(id)
                )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS product_photo (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                idProduct INT UNSIGNED NOT NULL,
                FOREIGN KEY (idProduct) REFERENCES product(id)
            )
        `);

        console.log('Tablas creadas!');

        //Insertar datos en la base de datos
        console.log('Insertando datos en la base de datos...');

        await connection.query(`
                INSERT INTO user (username, email, password, createdAt) 
                VALUES ('userPrueba01','emailPrueba@gmail.com','123456',?)`,
                [new Date()] 
                );

        await connection.query(`
                INSERT INTO product (name, precio, descripcion, createdAt, idUser)
                VALUES ('VideCamara', 20.10, 'Esto es una camara de video', '2022-08-09 17:0000',1),
                ('Game Boy', 100.10, null, '2022-08-12 17:0000', 1),
                ('Teclado Mecanico', 250, 'Teclado', '2021-10-29 17:0000', 1),
                ('Guantes ElBronx', 85.99, 'Guantes duros', '2012-06-09 17:0000', 1)
        `);

        await connection.query(`
                INSERT INTO product_photo (name, idProduct)
                VALUES ('foto.jpg', 1),
                ('foto.jpg', 1),
                ('foto.jpg', 2),
                ('foto.jpg', 4),
                ('foto.jpg', 3)
        `);

        console.log('Datos de prueba insertados correctamente');

    } catch (error) {
        console.log(error.message)

    } finally {
        //Si o si al final del try - catch se ejecuta el codigo que hay en finally

        //Siempre al final cerramos la conexion con la base de datos
        if (connection) connection.release();

        // Finalizamos la ejecucion de script
        process.exit();
    }


}



// Ejecutamos la función
main();