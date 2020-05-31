const queryData = require('../model/queryData');
const sQuery = new queryData;

class mainService {
  pingPong(numberInput) {
    return numberInput * 20;
  }

  async queryData() {
    const response = await sQuery.query();

    return response;
  }
}

module.exports = mainService;