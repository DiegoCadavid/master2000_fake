const { Router } = require('express');
const Controller = require('../controllers/userControllers');
const { check } = require('express-validator');
const { validateFiels } = require('../middlewares/validate-fields');

const router = Router();

router.get('/', [
    check("user", "El usuario es obligatorio").notEmpty(),
    check("password","La contraseña es obligatoria").notEmpty(),
    validateFiels
], Controller.PostTeacher);


module.exports = router;