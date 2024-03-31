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

    } catch (error) {
        
    }
}
