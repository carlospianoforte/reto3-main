const jwt = require('jsonwebtoken')

function isAuthenticated(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send('unauthorized')
    }

    jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
        if (err) {
            return res.status(403).send('Forbidden')
        }
        req.user = payload;
        next();
    })
}

module.exports = isAuthenticated;