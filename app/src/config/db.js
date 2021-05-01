const mysql = require("mysql");
const db = mysql.createConnection({
    host: "study-for-background.ciigweiuuo6u.ap-northeast-2.rds.amazonaws.com",
    user: "thinkhong99",
    password: "honghafs190399!",
    database: "study_for_background",
});

db.connect();
module.exports = db;