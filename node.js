const axios = require('axios');

axios.get('https://skullking.great-site.net/db.php') 
    .then(response => {
        console.log('✅ Datos recibidos:', response.data);
    })
    .catch(error => {
        console.error('❌ Error:', error);
    });
