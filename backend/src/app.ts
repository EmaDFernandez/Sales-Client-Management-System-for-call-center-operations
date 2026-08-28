// Import the Express library.
// Express is a framework that simplifies building web servers with Node.js.
import express from 'express';

// Create an instance of an Express application.
// This "app" object is what we use to define routes, middlewares, etc.
const app = express();

// Middleware: allows the server to understand JSON sent in request bodies.
// Without this, "req.body" would be undefined when a client sends JSON data.
app.use(express.json());

// A simple test route.
// When someone visits "GET /" (the root URL), this function runs.
app.get('/', (req, res) => {
    res.json({ message: 'Sales Management API is running!' });
});

// Export the app so it can be used in server.ts to actually start listening.
// This separation (app config vs. server start) makes testing easier later on.
export default app;