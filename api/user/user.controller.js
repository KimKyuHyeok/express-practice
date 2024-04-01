const userService = require('./user.service');

exports.signUp = async (req, res, next) => {
    try {
        const { userId, userPw } = req.body;

        const result = await userService.signUp(userId, userPw);

        res.status(200).json({ success: true, message: 'signUp success' });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ success: false, message: 'signUp failed' });
    }
};

exports.login = async (req, res, next) => {
    try {
        const { userId, userPw } = req.body;
        console.log(req.body)

        const result = await userService.login(userId, userPw);

        if (result) {
            res.status(200).json({ success: true, message: '로그인 성공'});
        } else {
            res.status(200).json({ success: true, message: '비밀번호 불일치'});
        }

    } catch (error) {
        console.error('Login Error', error);
        res.status(500).json({ success: false, message: 'Login Error'});
    }
}
