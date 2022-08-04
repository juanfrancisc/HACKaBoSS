-- Crear la base de datos del campeonato
CREATE DATABASE IF NOT EXISTS campeonatos;

-- Usar la base de datos que acabamos de crear
USE campeonatos;

-- Creamos las tablas
CREATE TABLE IF NOT EXISTS partido (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    campo VARCHAR(100) NOT NULL,
    resultado VARCHAR(8) NOT NULL,
    arbitro VARCHAR(120) NOT NULL,
    incidencia TEXT
);

CREATE TABLE IF NOT EXISTS equipo (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    patrocinador1 VARCHAR(50),
    patrocinador2 VARCHAR(50),
    colorCamiseta1 VARCHAR(20) NOT NULL,
    colorCamiseta2 VARCHAR(20) NOT NULL,
    categoria ENUM('primera', 'segunda', 'segunda b') NOT NULL
);

CREATE TABLE IF NOT EXISTS jugador (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    dni VARCHAR(11) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido1 VARCHAR(50) NOT NULL,
    apellido2 VARCHAR(50),
    telefono VARCHAR(12) NOT NULL,
    fecha_nac DATE NOT NULL,
    calle VARCHAR(120) NOT NULL,
    cp CHAR(5) NOT NULL,
    idEquipo INT UNSIGNED NOT NULL,
    FOREIGN KEY (idEquipo) REFERENCES equipo (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS equipo_juega_partido (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idPartido INT UNSIGNED NOT NULL,
    FOREIGN KEY (idPartido) REFERENCES partido (id)
    ON DELETE NO ACTION,
    idEquipoLocal INT UNSIGNED NOT NULL,
    FOREIGN KEY (idEquipoLocal) REFERENCES equipo (id)
    ON DELETE NO ACTION,
    idEquipoVisitante INT UNSIGNED NOT NULL,
    FOREIGN KEY (idEquipoVisitante) REFERENCES equipo (id)
    ON DELETE NO ACTION,
    fecha_partido DATETIME NOT NULL
);
ALTER TABLE partido DROP COLUMN arbitro;
ALTER TABLE partido ADD COLUMN goles TINYINT UNSIGNED;
