const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',      //O la IP del servidor
    user: 'root',     //Usuario de la BBDD
    password: '', //Contraseña
    database: 'skullking'
});

connection.connect(err => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('✅ Conexión exitosa a la base de datos');

    // Prueba una consulta
    connection.query('SELECT 1 + 1 AS resultado', (err, results) => {
        if (err) throw err;
        console.log('Resultado de prueba:', results);
        connection.end();
    });
});
