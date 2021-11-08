const router = require("express").Router()
let controller = require('../controller/controller.js')

router
    .get('/', controller.index)
    .get('/about', controller.about)
    .get('/project', controller.project)

module.exports = router

console.log("Load router");