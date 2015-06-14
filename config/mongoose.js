require('mongoose').connect(process.env.DB_URL || 'mongodb://localhost:27017/cheesr');

require(require('path').join(__dirname, '..', 'server', 'models', 'filmModel'));
require(require('path').join(__dirname, '..', 'server', 'models', 'userModel'));