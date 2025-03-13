const fs = require('fs');
const path = require('path');

const logRequest = (req, res, next) => {
    const logFilePath = path.join(__dirname, 'server.log');

    // Check if the log file exists, if not, create it
    if (!fs.existsSync(logFilePath)) {
        fs.writeFileSync(logFilePath, ''); // Create an empty log file
    }

    const log = `[${new Date().toISOString()}] ${req.method}: ${req.url}\n`;
    fs.appendFileSync(logFilePath, log);
    next();
};

module.exports = logRequest;

