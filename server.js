const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/test', function (req, res) {
    res
    .status(200)
    .send('response');
});


let server = app.listen(process.env.PORT || 5000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
});

module.exports = app;