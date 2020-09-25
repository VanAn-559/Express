
const courseRouter = require('./courses');
const meRouter = require('./me');
const customerRouter = require('./customer');
const listRouter = require('./list');
const homeRouter = require('./home');
const adminRouter = require('./admin');

function route(app) {
    app.use('/me', meRouter);
    app.use('/customer', customerRouter);
    app.use('/admin', adminRouter);
    app.use('/list', listRouter);
    app.use('/courses', courseRouter);

    app.use('/', homeRouter);

}

module.exports = route;