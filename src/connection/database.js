const config = require('../../config/server');

const mysql = () => {
	const knex = require('knex')({
		client: 'mysql',
		connection: config.MYSQL_DB,
		debug: (config.NODE_ENV == 'dev') ? true : false
	});

	return knex;
};

const mongoDB = () => {
	const mongoose = require('mongoose');
	const connectionString = `${config.MONGO_DB.user}:${config.MONGO_DB.password}@${config.MONGO_DB.host}:${config.MONGO_DB.port}/${config.MONGO_DB.database}`;
	mongoose.connect(`mongodb://${connectionString}`, { useNewUrlParser: true });

	if (config.NODE_ENV == 'dev') {
		console.log(mongoose.connection.readyState);
	}

	return mongoose;
}


module.exports = { mysql, mongoDB }

