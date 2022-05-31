const publicRoutes = require("./publicRoutes");
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./apiRoutes')
module.exports = (app) => {
    app.use(publicRoutes);
    app.use(homeRoutes);
    app.use('/api', apiRoutes);
};
