var settings = {
  database   : {
    protocol : "mysql", // or "mysql"
    query    : { pool: true },
    host     : "192.168.6.70",
    database : "test",
    user     : "shine",
    password : "shine1234",
    debug : true
  },
  connection : {
  	debug : true
  }
};

module.exports = settings;