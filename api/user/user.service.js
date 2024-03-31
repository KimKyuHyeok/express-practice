const db = require('../../db');
const userRepository = require('./user.repository');
const bcrypt = require('bcrypt');


const createHashedPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

const comparePassword = async (inputPassword, hashedPassword) => {
    try {
        const match = await bcrypt.compare(inputPassword, hashedPassword);
        return match;
    } catch (error) {
        throw error;
    }
}

exports.signUp = async (userId, userPw) => {
    try {
        const hashedPassword = await createHashedPassword(userPw);
        await db.query(userRepository.signUp, [userId, hashedPassword]);

    } catch (error) {
        throw error;
    }
}

exports.login = async (userId, userPw) => {
    try {
        const userData = await db.query(userRepository.getUserById, [userId]);

        if (!userData || !userData.length) {
            return false;
        }

        // DB에 저장된 비밀번호 부분
        const hashedPassword = userData[0].password;

        // 비밀번호 검증
        const passwordMatch = await comparePassword(inputPassword, hashedPassword);

        if (passwordMatch) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
}