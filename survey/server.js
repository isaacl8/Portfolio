const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let session = require('express-session')
var sessionConfig = {
    secret: 'themostsecresecretkeyever',
    resave: false,
    saveUninitialized: true,
    name: 'myCookie',
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 3600000
    }
}

app.use(session(sessionConfig));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
    res.sendfile(path.resolve("./client/dist/index.html"))
});

app.listen(8000, ()=> {console.log('Listening on 8000')})
