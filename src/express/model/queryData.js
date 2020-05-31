const connection = require('./../../connection/database');
const mysql = connection.mysql;

class queryData {

  async query() {
    const sqlString = knex.select('*').from('table_name').toString();
    try {
      const result = knex.raw(sqlString).then(result => {
        return result;
      });

      return result;
    } catch (err) {
      return err;
    }
  }

}

module.exports = queryData;