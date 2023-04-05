const { isEmpty } = require('lodash');
const pool = require('../common/db');
const queriesAuth = require('./queries');

const login = (req, res) => {
    const { email, password } = req.body;
    pool.query(
        queriesAuth.loginWithEmailAndPassword,
        [email, password],
        (error, results) => {
            if (error) throw error;
            const resultRes = {
                ...results.rows?.[0],
            };
            res.status(200).json(resultRes);
        }
    );
};

const register = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        const emailExist = await pool.query(queriesAuth.getUserByEmail, [
            email,
        ]);
        if (!isEmpty(emailExist?.rows)) {
            res.status(400).json({
                message: 'This account is existed',
            });
        } else {
            const addAccountRs = await pool
                .query(queriesAuth.registerNewAccount, [
                    fullName,
                    email,
                    password,
                ])
                .then(() => {
                    res.status(200).json({
                        message: 'Add new account success',
                    });
                });
            console.log(addAccountRs);
        }
    } catch (error) {
        throw error;
    }
};
module.exports = {
    login,
    register,
};
