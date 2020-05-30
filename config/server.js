require('dotenv').config({ path: `${__dirname}/.env` });

module.exports = {
    "NODE_ENV": process.env.NODE_ENV || 'dev',
    "PORT": process.env.PORT || 3000,
    "MYSQL_DB": {
        "host": process.env.MYSQL_HOST || '127.0.0.1',
        "user": process.env.MYSQL_USER || 'root',
        "password": process.env.MYSQL_PASS || 'root',
        "database": process.env.MYSQL_DB || 'DB_NAME',
        "port": process.env.MYSQL_PORT || '3306',
    },
    "MONGO_DB": {
        "host": process.env.MONGO_HOST || '127.0.0.1',
        "user": process.env.MONGO_USER || 'root',
        "password": process.env.MONGO_PASS || 'root',
        "database": process.env.MONGO_DB || 'DB_NAME',
        "port": process.env.MONGO_PORT || '27017',
    }
}