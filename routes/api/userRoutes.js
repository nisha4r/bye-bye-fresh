const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const { error } = require('console');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        const validPassword = await bcrypt.compare(
            req.body.password, userData.password
        );
        res.status(200).json({ message: 'Login successful' });
    } catch { error } {
        res.status(500).json(error);
    }



});

module.exports = router;