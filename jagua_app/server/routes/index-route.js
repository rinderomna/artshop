'use strict'

import express from 'express';
const router = express.Router();

//criando rota
const route = router.get('/', (req, res, next) => {
    //status code 200 = ok
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

export default router;