const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')

app.use(express.static(path.join(__dirname, 'assets')))
app.use(expressLayouts)
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => res.render('index'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))