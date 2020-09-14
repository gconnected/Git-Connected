const { Pool } = require('pg');

const PG_URI =
  '	postgres://wautahqr:ffdm2R8EhV2V6pT0Fk5wrfa2Gsnsk2oG@lallah.db.elephantsql.com:5432/wautahqr';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    //console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
