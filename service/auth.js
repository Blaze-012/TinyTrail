const sessionIdToUserMap = new Map();

function setUser(id, user) {
    sessionIdToUserMap.set(id, user)
}

function getUser(id) {
    return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
};


// // State Less authentication using jwt
// const jwt = require("jsonwebtoken");
// const secret = "Adarsh@123$*";

// function setUser(user) {
//     return jwt.sign({
//         _id: user._id,
//         email: user.email,
//     }, secret);
// }

// function getUser(token) {
//     if (!token) return null;
//     return jwt.verify(token, secret);
// }

// module.exports = {
//     setUser,
//     getUser
// }