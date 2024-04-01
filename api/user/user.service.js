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
        await db.promise().query(userRepository.signUp, [userId, hashedPassword]);

    } catch (error) {
        throw error;
    }
}

exports.login = async (userId, userPw) => {
    try {
        const userData = await db.promise().query(userRepository.getUserByUserId, [userId]);

        if (!userData || !userData.length) {
            console.log("??????");
            return false;
        }

        // DB에 저장된 비밀번호 부분
        const hashedPassword = userData[0][0].userPw;

        // 비밀번호 검증
        const passwordMatch = await comparePassword(userPw, hashedPassword);

        if (passwordMatch) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("에러 발생", error);
    }
}