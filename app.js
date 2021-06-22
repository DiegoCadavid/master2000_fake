require('dotenv').config();
const Sv = require('./models/Server');

Server = new Sv();

Server.listen();