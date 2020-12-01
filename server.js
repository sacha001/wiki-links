const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/findlinks', function (req, res) {
    let page1 = req.query.page1;
    let page2 = req.query.page2;
    console.log(`Fetching: ${page1}`);
    axios.get(`https://en.wikipedia.org/w/api.php?action=parse&page=${page1}&prop=links&formatversion=2&format=json`).then((response) => {
        res
        .status(200)
        .send(JSON.stringify(response));
    })
    .catch(function (error) {
        console.log(error);
        res
        .status(500)
        .send(error);
    });
});


let server = app.listen(process.env.PORT || 5000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
});

module.exports = app;