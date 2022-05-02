const db = require('../database/models');
//OBTENGO LA URL
const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;

module.exports = {
    getAllOperations: (req, res) => {
        const operations = db.Operations.findAll()
        .then((operations) => { 
            res.send(operations) 
         })
        
    }
}