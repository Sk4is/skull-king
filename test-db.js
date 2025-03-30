const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',      //O la IP del servidor
//     user: 'root',     //Usuario de la BBDD
//     password: '', //Contraseña
//     database: 'skullking'
// });
const connection = mysql.createConnection({
    host: 'sql211.infinityfree.com', // Reemplaza con tu hostname
    user: 'if0_38631548', // Tu usuario de InfinityFree
    password: 'x6vWdBlaag', // Tu contraseña
    database: 'if0_38631548_skullking' // Nombre de la base de datos
});

connection.connect(err => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('✅ Conexión exitosa a la base de datos');

    // Prueba una consulta
    // connection.query('SELECT 1 + 1 AS resultado', (err, results) => {
    //     console.log('hoal')
    //     if (err) throw err;
    //     console.log('Resultado de prueba:', results);
    //     connection.end();
    // });
});
