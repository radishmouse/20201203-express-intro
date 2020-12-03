const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/')
    .get(controller.allEmployees)

router.route('/id')
    .get(controller.listIds)

router.route('/id/:id')
    .get(controller.oneEmployee)

router.route('/name/:searchTerm')
    .get(controller.searchEmployees);

module.exports = router;
