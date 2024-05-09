var mysql = require('mysql');
require('dotenv').config();


var con = mysql.createConnection({
    host: process.env.MYSQL_HOST || "mysql",
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "greet"
});

con.connect(function (err) {
    if (err) {
        console.log('Connection Error:', err);
        return;
    }
    console.log("Connected to MySQL database");
    console.log("process.env.DB_HOST = ", process.env.DB_HOST);

    // Check if the database "greet" exists
    con.query("CREATE DATABASE IF NOT EXISTS greet", function (err) {
        if (err) {
            console.log('Error creating database:', err);
            return;
        }
        console.log("Database 'greet' created or already exists");

        // Use the database "greet"
        con.changeUser({ database: 'greet' }, function (err) {
            if (err) {
                console.log('Error selecting database:', err);
                return;
            }
            console.log("Using database 'greet'");
        });

        con.query(`CREATE TABLE IF NOT EXISTS greeting (
            id INT AUTO_INCREMENT PRIMARY KEY,
            text VARCHAR(255)
        )`, function (err) {
            if (err) {
                console.log('Error creating table:', err);
                return;
            }
            console.log("Table 'greeting' created or already exists");
        });

        con.query(`INSERT INTO greeting (text) VALUES
        ('Hello, world!'),
        ('Welcome to our website.'),
        ('Greetings from OpenShift OKD.'),
        ('Have a great day!'),
        ('This is some random data.');`,
        function (err) {
            if(err){
                console.log('Error insert to table:', err);
                return;
            }
            console.log("insert success");
        }
    )
    });
});

module.exports = con;

