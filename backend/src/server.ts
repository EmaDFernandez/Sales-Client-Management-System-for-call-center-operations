// Import the configured Express app from app.ts.
import app from './app';

// Import dotenv to load environment variables from a .env file.
// This lets us keep sensitive/config values (like the port) out of the code itself.
import dotenv from 'dotenv';

// Load the variables defined in the .env file into process.env.
dotenv.config();

// Use the PORT from environment variables, or default to 3000 if not set.
const PORT = process.env.PORT || 3000;

// Start the server and listen for incoming requests on the given port.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});