const moongose = require('mongoose');

const DbConnection = async() => {
    try {
      await moongose.connect(process.env.MONGODB, {
          useNewUrlParser:true,
          useUnifiedTopology:true,
          useCreateIndex: true,
          useFindAndModify:false
      });

      console.log('Base de datos online');
    
    } catch (error) {
        console.log('Error en la base de datos', error);
    }
    
}

module.exports = DbConnection