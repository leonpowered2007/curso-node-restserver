const { response } = require('express');

const usuarioGet = (req, res = response) => {

    const { pagina = '0', limite} = req.query; 

    res.json({
        msg: 'Get API - controlador',
        pagina,
        limite,
    });
}

const usuarioPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'Post API - controlador',
        body
    });
}

const usuarioPut = (req, res = response) => {

    const {id, nombre} = req.params;

    res.json({
        msg: 'Put API - controlador',
        id,
        nombre
    });
}

const usuarioPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controlador'
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}