const loginWithEmailAndPassword =
    'SELECT * FROM person p WHERE p.email = $1 AND password = $2';
const registerNewAccount = 'INSERT INTO person VALUES (DEFAULT, $1, $2, $3)';
const getUserByEmail = 'SELECT * FROM person p WHERE p.email = $1';
module.exports = {
    loginWithEmailAndPassword,
    registerNewAccount,
    getUserByEmail,
};
