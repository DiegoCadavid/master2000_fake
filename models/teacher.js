const { Schema, model} = require('mongoose');

const  TeacherShema = Schema({
    user : {
        type : String,
        required: [true, 'El usuario es obligatorio']
    },
    password : {
        type : String, 
        required : [true, 'La contraseña es obligatoria']
    }
});

module.exports = model('Teacher',TeacherShema);