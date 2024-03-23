Instrucciones para ejecutar la App creada - Pablo Harillo

.El Frontend se encuentra en la carpeta llamada 'psh_project'
.El Backend se encuentra en la carpeta llamada 'back'

Backend:
1- Instalar npm modules y dependencias requeridas
2- Crear una DB local en MySql, con el nombre 'statsdb'
3- Cambiar user y password en stats/stats.js en la declaración de la const 'config' para la database.
4- Cambiar user y password para utilizar las mismas con las que fue creado el schema,
luego dichos valores deben ser actualizados en los archivos config/database.js y config.json para development password.
5- Correr el comando 'npx sequelize-cli db:migrate' para crear la tabla 'stats' con
las columnas ya definidas.
6- Correr el comando 'npx sequelize-cli db:seed:all' para migrar los primeros datos y de esta manera tener una base para comenzar.
7- Correr el comando 'node index.js' para iniciar el server en puerto 27017. Cada 5 minutos se ejecutará un cron job que genera aleatoriamente nuevas stats entre 1 y 10 nuevos players.

Frontend:
1- Se corre como es usual con npm run dev y se puede esperar 3 pestañas en el navegador:
 - La Home que recibe al usuario y deja (virtualmente) descargar el juego
 - La pestaña Report en la que se puede ver el reporte del top 10 de mejores players, con su puntaje y fecha. A partir de un button se puede exportar como un CSV.
 - La pestaña Statistics donde se puede consultar un gráfico para el top 3 y data específica para los mismos, de manera de reconocimiento.

