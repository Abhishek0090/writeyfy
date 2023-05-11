import swaggerJSDoc from "swagger-jsdoc";

//swagger config

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: " Documentation of APIs used in writeyfy",
      version: "1.0.0",
      description: "API documentation using Swagger and Node js",
    },
  },
  apis: ["./routes/*.ts"],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
