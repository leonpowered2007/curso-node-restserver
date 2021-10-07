const { Router } = require('express');
const { usuarioPost, usuarioPatch, usuarioDelete, usuarioGet, usuarioPut } = require('../controllers/usuarios');
const router = Router();

router.get('/', usuarioGet);

router.put('/:id/:nombre', usuarioPut);

router.post('/', usuarioPost);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPatch);

module.exports = router;