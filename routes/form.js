const router = require("express").Router()
//const path = require('path');
let form_controller = require('../controller/form.js')

//console.log(typeof path)
router
  //  .set('assets', path.join(__dirname, 'assets'))
    .get('/', form_controller.index)
    .get('/', form_controller.about)
    .get('/project', form_controller.project)

module.exports = router

console.log("Load router");