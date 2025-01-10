# Express.js JSON Body Parsing Bug
This repository demonstrates a common bug in Express.js applications where the JSON request body is not parsed correctly, resulting in an empty object being received by the server.

## Bug Description
The issue occurs when the `express.json()` middleware is either missing or placed incorrectly within the middleware stack.  This middleware is essential for parsing JSON data from the request body and making it available as `req.body`.

## Setup
1. Clone this repository.
2. Navigate to the project directory: `cd express-json-bug`
3. Install dependencies: `npm install`
4. Run the server: `node bug.js`
5. Send a POST request to `http://localhost:3000/data` with a JSON payload (e.g., using Postman or curl).

## Solution
The solution involves ensuring that the `express.json()` middleware is correctly placed *before* any route handlers that expect JSON data in the request body.