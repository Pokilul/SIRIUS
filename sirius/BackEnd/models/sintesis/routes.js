/**
 * Routes for sintesis endpoints
 * @module models/sintesis
 */

const express = require('express');
const responses = require('../../network/response');
const controller = require('./index');

const router = express.Router();

// Routes
router.get('/', s_list);
router.get('/:Programa', s_select);
router.post('/', s_add);

async function s_list(req, res, next) {
    try {
        const list = await controller.s_list();
        responses.success(req, res, list, 200);
    } catch (error) {
        next(error);
    }
}


async function s_select(req, res, next) {
    try {
        const select = await controller.s_select(req.params.Programa);
        responses.success(req, res, select, 200);
    } catch (error) {
        next(error);
    }
}

async function s_add(req, res, next) {
    try {
        const add = await controller.s_add(req.body);
        responses.success(req, res, req.body, 201);
        console.log(req.body);
    } catch (error) {
        next(error);
    }
}




module.exports = router;