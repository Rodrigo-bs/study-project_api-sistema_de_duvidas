const dotenv = require('dotenv');
const crypto = require('./core/crypto.js');

const app = require('./app');

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log('Rodando...');
});