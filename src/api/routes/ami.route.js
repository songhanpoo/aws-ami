const express = require('express');
const amiController = require('../controllers/ami.controller');
const validate = require('../middlewares/validate');
const amiValidation = require('../validations/ami.validation');
const router = express.Router();

router.post('/ami',validate(amiValidation.createAmi),amiController.createAMI);

module.exports = router;
