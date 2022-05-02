const db = require('../database/models');
//OBTENGO LA URL
const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;

module.exports = {
    getAllUsers: (req, res) => {
        const users = db.Users.findAll()
        .then((users) => { 
            res.send(users) 
         })
        
    }
}