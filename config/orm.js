var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
      arr.push("?");
  }
  return arr.toString();
}

var orm = {
  selectALL: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(tableInput, cols, vals, cb) {
		
		var queryString = "INSERT INTO " + tableInput;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
	
			cb(result);
		});
	},


	updateOne: function(table, objColVals, condition, cb) {
		
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
		
			cb(result);
		});
	}
};

module.exports = orm;