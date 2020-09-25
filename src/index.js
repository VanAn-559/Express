const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000

const route = require('./routes/index');
//connect to db
const db = require('./config/db')
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(morgan('combined'));
app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b

    }


}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));
//routes init
//route(app);
route(app);

app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
});