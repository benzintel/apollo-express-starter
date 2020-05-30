const models = require('./../model/model');
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: (parent, args, context, info) => {
            // console.log(parent, args, context, info)
            if (args && args.titlebook) {
                const findTitle = args.titlebook;
                return models.books(findTitle);
            }

            return models.books()
        },
        randomPerson: (_, __, { dataSources }) => {
            return dataSources.randomUserAPI.getPerson();
        }
    },
};


module.exports = resolvers


// filtering-pagination-and-sorting
// https://www.howtographql.com/graphql-js/8-filtering-pagination-and-sorting/