const express = require('express');
const router = express.Router();
const { getWithDirectoryId ,createUser ,deleteUser } = require('../controllers/user');

router.get('/users/:firstLetter', getWithDirectoryId);
router.post('/users', createUser);

router.delete('/users/:firstName',deleteUser);

module.exports = router;
