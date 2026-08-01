const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Task Management API",
      version: "1.0.0",
      description: "A simple REST API for managing tasks",
    },

    servers: [
      {
        url: "http://localhost:3000",
      },
    ],

    components: {
      schemas: {
        Task: {
          type: "object",
          required: ["id", "name", "done"],
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
              example: "Check in for work",
            },
            done: {
              type: "boolean",
              example: true,
            },
          },
        },
      },
    },
  },

  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;