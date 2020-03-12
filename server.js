const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(session);

const app = express();
app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'mysupersecret', 
    resave: false, 
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

//Iniciando banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

//Rotas
app.use("/codigofont", require("./src/routes"));

app.listen(3001);
