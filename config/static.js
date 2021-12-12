const path = require('path');

module.exports= {
    public: {
        root: path.join(__dirname, '../public'),
        prefix: '/', 
    },
    publicCss: {
        root: path.join(__dirname, '../public/css'),
        prefix: '/css', 
        decorateReply: false,
    },
    publicImg: {
        root: path.join(__dirname, '../public/img'),
        prefix: '/img', 
        decorateReply: false,
    },
    publicJs: {
        root: path.join(__dirname, '../public/js'),
        prefix: '/js', 
        decorateReply: false,
    },
    publicMapbox: {
        root: path.join(__dirname, '../public/mapbox'),
        prefix: '/mapbox', 
        decorateReply: false,
    },
};