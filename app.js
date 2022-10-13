const express = require('express');
const app = express();
const path = require('path'); 


app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
    const duongdanfile = path.join(__dirname, 'home.html');
    res.sendFile(duongdanfile);
})

app.listen(process.env.PORT, function() {
});
