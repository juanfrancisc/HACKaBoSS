# Ejercicio subconsulta

-- Selecciona el nombre y la edad del/los usuario/s más mayores.
-- select * from usuario;
select nombre,year(CURDATE())-year(fechaNac) AS edad from usuario order by edad desc limit 1;





