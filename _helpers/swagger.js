const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Node Login Application",
        version: "1.0.0",
        description: "API endpoints for Sample user application",
        contact: {
            name: "Soumya Biswas",
            email: "soumyabiet@gmail.com.com",
          }
    },
};

const options = {
    swaggerDefinition,
    apis: ["./users/*.js"], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;