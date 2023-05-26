const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const { error } = require('console');

router.post('/login', async (req, res) => {
    try {

    }catch {error} {
        res.status(500).json(error);
    }
    
    

});

module.exports = router;