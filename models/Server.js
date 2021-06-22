const express = require('express');
const cors = require('cors');
const ConectionDb = require('../database/config');
class Server {

    constructor() {
        this.app = express();
        this.userPaths  = '/api'

        this.middlewares();

        this.routes();

        this.ConectionDb();

    }

    middlewares() {
        //Directorio publico 
        this.app.use(express.static('public'));

        //Write and raad for JSON   
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    async ConectionDb () {
        await ConectionDb();
    }

    routes( ) {
        this.app.use(this.userPaths, require('../routes/teacherRoutes'));
    }

    listen () {
        this.app.listen(process.env.PORT,() => {
            console.log('Servidor encendido');
        })
    }

}


module.exports = Server;