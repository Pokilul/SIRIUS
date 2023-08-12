const express = require('express');
const security = require('./security');
const responses = require('../../network/response');
const controller = require('./index');

const router = express.Router();

router.get('/', u_list);
router.get('/:ID_Usuario', u_select);
router.post('/', security(), u_add);
router.put('/', security(), u_delete);

async function u_list(req, res, next) {
    try {
        const list = await controller.u_list();
        responses.success(req, res, list, 200);
    } catch (error) {
        next(error);
    }
}

async function u_select(req, res, next) {
    try {
        const select = await controller.u_select(req.params.ID_Usuario);
        responses.success(req, res, select, 200);
    } catch (error) {
        next(error);
    }
}

async function u_add(req, res, next) {
    try {
        const add = await controller.u_add(req.body);
        responses.success(req, res, add, 201);
    } catch (error) {
        next(error);
    }
}

async function u_delete(req, res, next) {
    try {
        const del = await controller.u_delete(req.params.ID_Usuario);
        responses.success(req, res, del, 200);
    } catch (error) {
        next(error);
    }
}

module.exports = router;