const { format } = require('logform');

module.exports = {
    name: 'logform',
    ext: 'logform.js',
    load: function(src, templatePath, templateName, callback) {
        callback(null, format.printf(require(templatePath)));
    },
    render: function(template, data, callback) {
        callback(null, template.transform(data));
    }
};
