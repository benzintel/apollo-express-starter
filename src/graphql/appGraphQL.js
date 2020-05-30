// GraphQL
const config = require('../../config/server');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./type/type');
const resolvers = require('./resolver/resolver');
const RandomUserDataSource = require('./model/RandomUserDataSource');

module.exports = server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        randomUserAPI: new RandomUserDataSource()
    }),
    introspection: (config.NODE_ENV == 'dev') ? true : false,
    playground: (config.NODE_ENV == 'dev') ? true : false,
    tracing: true
});