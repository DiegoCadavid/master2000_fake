const { response, request } = require('express');
const Teacher = require('../models/teacher')

const getTeacher = async(req = request, res = response) => {
    const {user, password} = req.query;
    const teacher = new Teacher({user,password});

     await teacher.save();
    
    res.status(201).json({
        teacher
    });
    
}

module.exports = {
    PostTeacher: getTeacher
}