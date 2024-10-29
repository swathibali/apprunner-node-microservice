const express = require('express');
const router = express.Router();
const lambdaWrapper = require('../middleware/lambdaWrapper');
const eventHandler = require('../handlers/eventHandler');

// API routes
router.post('/events', lambdaWrapper(eventHandler));

// You can also add the health check here if you want it under /api/health
router.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

module.exports = router;