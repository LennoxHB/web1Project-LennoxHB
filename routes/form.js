const router = require("express").Router()
let form_controller = require('../controller/form.js')

router
    .get('/home', form_controller.index)
    .get('/about', form_controller.about)
    .get('/project', form_controller.project)

module.exports = router

console.log("Load router");