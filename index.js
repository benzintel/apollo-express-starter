// Express Lib
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// Config ENV
const config = require('./config/server');
const PORT = config.PORT;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'secret',
	name: 'secret-name',
	resave: true,
	saveUninitialized: true
}));

// GraphQL Apollo
const server = require('./src/graphql/appGraphQL.js');
server.applyMiddleware({ app });

// Express
// app.use('/public', express.static(path.join(__dirname, '/public')));
/** 
 * @param app 
 * @param path_route
 * @description example path {domain}/main/{route}
 */
require('./src/express/route/mainRoute.js')(app, '/main');



app.listen({ port: PORT }, () =>
	// console.log(`🚀 Server ready at http://localhost:${config.PORT}${server.graphqlPath}`)
	console.log(`🚀 Server ready at PORT: ${PORT}`)
);