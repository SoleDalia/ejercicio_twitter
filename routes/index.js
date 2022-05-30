const publicRoutes = require("./publicRoutes");
const homeRoutes = require('./homeRoutes');
module.exports = (app) => {
    app.use(publicRoutes);
    app.use(homeRoutes);
};
