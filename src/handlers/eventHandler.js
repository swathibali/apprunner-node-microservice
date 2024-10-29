// This simulates your existing Lambda function
const eventHandler = async (event) => {
    console.log("eventHandler")
    try {
        // Convert API Gateway event to Lambda event format
        const lambdaEvent = {
            body: event.body,
            pathParameters: event.params,
            queryStringParameters: event.query,
            headers: event.headers
        };

        // Your existing Lambda business logic here
        const result = await processEvent(lambdaEvent);

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    } catch (error) {
        console.error('Error in event handler:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};

async function processEvent(event) {
    // Your existing event processing logic
    return { message: 'Event processed successfully' };
}

module.exports = eventHandler;