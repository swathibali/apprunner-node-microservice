const lambdaWrapper = (handler) => {
    console.log("lambdaWrapper")
    return async (req, res) => {
        try {
            // Convert Express request to Lambda event format
            const event = {
                body: req.body,
                params: req.params,
                query: req.query,
                headers: req.headers
            };

            const result = await handler(event);
            
            res.status(result.statusCode).json(JSON.parse(result.body));
        } catch (error) {
            console.error('Error in lambda wrapper:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
};

module.exports = lambdaWrapper;
