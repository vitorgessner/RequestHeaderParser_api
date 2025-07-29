const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/src/index.html');
})

app.get('/api/whoami', (req, res) => {
    const software = req.headersDistinct['user-agent'][0]
    const language = req.headersDistinct['accept-language'][0]
    const ipaddress = req.ip
    return res.json({ipaddress, language, software});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})