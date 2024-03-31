const db = require('../../db');
const userRepository = require('./user.repository');

exports.signUp = async (userId, userPw) => {
    try {
        await db.query(userRepository.signUp, [userId, userPw]);

    } catch (error) {
        throw error;
    }
}