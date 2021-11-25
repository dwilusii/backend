const path = require('path');

module.exports= {
    public: {
        root: path.join(__dirname, 'public'),
        prefix: '/', 
    },
    css: {
        root: path.join(__dirname, 'public/css'),
        prefix: '/css', 
        decorateReply: false,
    },
    img: {
        root: path.join(__dirname, 'public/img'),
        prefix: '/img', 
        decorateReply: false,
    },
    js: {
        root: path.join(__dirname, 'public/js'),
        prefix: '/js', 
        decorateReply: false,
    },
    mapbox: {
        root: path.join(__dirname, 'public/mapbox'),
        prefix: '/mapbox', 
        decorateReply: false,
    },
};