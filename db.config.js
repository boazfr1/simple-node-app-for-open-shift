var mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "z10mz10m"
});

con.connect(function (err) {
    if (err) {
        console.log('Connection Error:', err);
        return;
    }
    console.log("Connected to MySQL database");

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

