const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes/router');

// Allows app to access the asset files
app.use(express.static(path.join(__dirname, 'assets')));

// Tells the app to use express layouts and links to folders
app.use(expressLayouts);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

// Directs the user to the front page
app.use("/", router);

// Listens for incoming requests from the set port.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));