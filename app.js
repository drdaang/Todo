// const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); // import body-parser middleware

const app = express();
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // use body-parser to parse url-encoded bodies

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

const cartRoutes = require('./routes/Cart.js');
app.use(cartRoutes);


app.listen(3000);
