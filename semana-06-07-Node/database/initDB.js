/** Archi que inicirá y reiniciará las tablas de la base de datos */

// Requerir getDB
const getDB = require("./getDB");

// Tras instalar la dependencia npm i dotenv, y tener el fichero .env requerimos acceso a el
require('dotenv').config();

// Funcion que creará y borrará las tablas de la base de datos
async function main(){

    //Crear la variable que contine la conexion a la BBDD
    let conexion;

    try {
        //Abrir una conexion con a base de datos
        conexion = await getDB();

        //Si todo va bien tenemos la conexion con la base de datos abierta
        console.log('Conexion con base de datos realizada')

        // Eliminar las tablas de la base de datos si existe
        console.log('Eliminando tablas si existen...');
        
        await conexion.query(`DROP TABLE IF EXISTS experiencia`);
        await conexion.query(`DROP TABLE IF EXISTS empresa`);
        await conexion.query(`DROP TABLE IF EXISTS usuario`);


        // Crear las tablas de la base de datos
        console.log('Creando tablas...');

        //En los campos tipo ENUM, el primer valor que se declara es el que se posiciona como por defecto
        await conexion.query(`
            CREATE TABLE IF NOT EXISTS usuario (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                nombre VARCHAR(50) NOT NULL,
                apellido1 VARCHAR(50) NOT NULL,
                apellido2 VARCHAR(50),
                fecha_nac DATE,
                email VARCHAR(80) NOT NULL UNIQUE,
                password VARCHAR(200) NOT NULL,
                tipo ENUM('normal', 'admin') NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
        `);

        /** Podemos crear una tabla que contenga avatar de usuario tal que:
         * await connection.query(`
            CREATE TABLE IF NOT EXISTS usuario (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                nombre VARCHAR(50) NOT NULL,
                apellido1 VARCHAR(50) NOT NULL,
                apellido2 VARCHAR(50),
                fecha_nac DATE,
                email VARCHAR(200) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                avatar VARCHAR(255),
                tipo ENUM('normal', 'admin') DEFAULT 'normal,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
        `);
         */

        await conexion.query(
            `CREATE TABLE IF NOT EXISTS empresa (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                nombre VARCHAR(100) NOT NULL)`
        );

        await conexion.query(
            `CREATE TABLE IF NOT EXISTS experiencia (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                titulo VARCHAR(100) NOT NULL,
                precio DECIMAL (8,2) NOT NULL,
                descripcion TEXT,
                localizacion VARCHAR(100) NOT NULL,
                idEmpresaOrganiza INT UNSIGNED,
                FOREIGN KEY (idEmpresaOrganiza) REFERENCES empresa (id)
                ON DELETE CASCADE)`
        );

        console.log('Tablas creadas!');

        //Insertar datos en la base de datos
        console.log('Insertando datos en la base de datos...');

        console.log('Insertando usuario de ejemplo...');
        await conexion.query(
            `INSERT INTO usuario (nombre, apellido1, apellido2, fecha_nac, email, password, tipo)
            VALUES ('Pepe','Rodriguez','Loquesea', '1970-01-01', 'pepe@gmail.com', '123456', 'admin')`
        );

        console.log('Insertando empresas de ejemplo...');
        await conexion.query(
            `INSERT INTO empresa (nombre) VALUES ('AWA'),('MORALES SL')`
        );    

        console.log('Insertando experiencias de ejemplo...');
        await conexion.query(
            `INSERT INTO experiencia (titulo, precio, descripcion, localizacion, idEmpresaOrganiza)
            VALUES ('Parapente', '150.00', 'Vuelo sin motor desde las montañas de Torrenueva hacia Calahonda', 'Torrenueva', 2),
            ('Bautismo de buceo', '75.00', 'Bautismo de inmersion', 'Enbarcadero Calahonda', 2),
            ('Ruta de kayak', '50.00', 'Ruta de kayak con guia por los acantilados de Salobreña', 'Caleta de Salobreña', 1),
            ('Alquiler de tabla Paddle Surf', '25.00', 'Alquiler de equipo completo para la pratica de paddle surf' , 'Punta del Santo, Motril',1)`
        );

        console.log('Datos de ejemplo insertados!');

    } catch (error) {
        console.log(error.message)

    } finally {

        //Siempre al final cerramos la conexion con la base de datos
        if (conexion) conexion.release();

        // Finalizamos la ejecucion de script
        process.exit();
    }


}

// Ejecutamos la función
main();