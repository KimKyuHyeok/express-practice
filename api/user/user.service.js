const db = require('../../db');
const userRepository = require('./user.repository');
const bcrypt = require('bcrypt');


const createHashedPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

exports.signUp = async (userId, userPw) => {
    try {
        const hashedPassword = await createHashedPassword(userPw);
        await db.query(userRepository.signUp, [userId, hashedPassword]);

    } catch (error) {
        throw error;
    }
}