import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const option: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
      {
        name: "Products",
        description: "API operations related to products",
      },
    ],
    info: {
      title: "REST API Node.js / Express / Typescript",
      version: "1.0.0",
      description: "API DOCS for products",
    },
  },
  apis: ["./src/router.ts"],
};

export const swaggerSpec = swaggerJSDoc(option);

export const swaggerUIOptions: SwaggerUiOptions = {
  customCss: `
  .topbar-wrapper .link {
    content: url('/api.svg');
    height: 40px;
    width: auto;
    align-items: center;
    margin: 0 auto;
  }

  .topbar-wrapper .link span {
    display: none;


  }

  .swagger-ui .topbar {
    background-color: #011931ff;
    border-bottom: 1px solid #eee;
  }
  `,
  customSiteTitle: "Documentación REST API Express / Typescript",
  customfavIcon: "/api.svg",
};
