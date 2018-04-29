let express = require('express');
let router = express.Router();

const store = require('../framework/store');

/* GET users listing. */
router.get('/', function (req, res) {
    store.getFiles().then(files => {
        res.send({
            baseURL: 'xxxx',
            files: files
        });
    }).catch(error =>
        res.status(500)
            .send({
                error: error.message || JSON.stringify(error)
            })
    )
});

module.exports = router;
