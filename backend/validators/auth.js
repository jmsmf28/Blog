const {check} = require('express-validator');

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email adress'),
    check('password', 'The password must be 6+ chars long and contain at least a number')
        .isLength({ min: 6})
        .matches(/\d/)
];

exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email adress'),
    check('password', 'The password must be 6+ chars long')
        .isLength({ min: 6})
];