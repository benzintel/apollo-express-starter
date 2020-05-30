const _ = require('lodash');

const books = (findtitle) => {
    const data = [
        {
            title: 'Harry Potter and the Chamber of Secrets',
            author: 'J.K. Rowling',
        },
        {
            title: 'Jurassic Park',
            author: 'Michael Crichton',
        },
    ];

    if (findtitle) {
        return _.filter(data, { "title": findtitle });
    }

    return data
};

module.exports = { books }