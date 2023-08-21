/**
 * Routes for portada endpoints
 * @module models/portada
 */

const express = require('express');
const responses = require('../../network/response');
const controller = require('./index');

const router = express.Router();

// Routes
router.get('/', p_list);
router.get('/:ID_Portada', p_select);
router.post('/', p_add);

async function p_list(req, res, next) {
    try {
        const list = await controller.p_list();
        responses.success(req, res, list, 200);
    } catch (error) {
        next(error);
    }
}


async function p_select(req, res, next) {
    try {
        const select = await controller.p_select(req.params.ID_Portada);
        responses.success(req, res, select, 200);
    } catch (error) {
        next(error);
    }
}

async function p_add(req, res, next) {
    try {
        const add = await controller.p_add(req.body);
        responses.success(req, res, 'Ok', 201);
    } catch (error) {
        next(error);
    }
}




module.exports = router;