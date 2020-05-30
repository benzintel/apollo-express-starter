const { RESTDataSource } = require("apollo-datasource-rest");

module.exports = class RandomUserDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.randomuser.me/";
    }

    async getPerson() {
        const { results } = await this.get("");
        // console.log(results)
        return results;
    }
}

/*
 * Example GET Rest API with apollo graphQL
 * https://github.com/benawad/apollo-datasource-rest-example
 *
*/