const connection = require("../config/connection");

const orm = {
    // RETURNS ALL DATA FROM TABLE IN MYSQL
    selectAll: (table) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM ??";
            connection.query(queryString, [table], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    },

    // INSERTS NEW ROW IN TABLE OF DATABASE
    insert: (table, columns, values) => {
        return new Promise((resolve, reject) => {
            const queryString = "INSERT INTO ?? (??) VALUES (?)";
            connection.query(queryString, [table, columns, values], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    },

    // UPDATE COLUMN VALUE BASED ON ID IN TABLE OF DATABASE
    update: (table, column, value, id) => {
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
            console.log(queryString);
            connection.query(queryString, [table, column, value, id], (err, result) => {
                if (err) {
                    reject(err);
                }
                console.log(result)
                resolve(result);
            });
        });
    },

    // DELETE ROW FROM TABLE IN MYSQL DATABASE BASED ON ID
    delete: (table, value) => {
        return new Promise((resolve, reject) => {
            const queryString = "DELETE FROM ?? WHERE id = ?";
            connection.query(queryString, [table, value], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });

        });
    }

}












module.exports = orm; 