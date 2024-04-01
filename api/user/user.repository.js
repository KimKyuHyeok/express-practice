exports.signUp = `INSERT INTO user (userId, userPw) VALUES (?, ?)`;

exports.getUserByUserId = `SELECT * FROM user r WHERE userId = ?`;