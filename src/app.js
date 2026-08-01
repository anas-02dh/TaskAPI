require("dotenv").config();

const express = require("express");
const swaggerUi = require("swagger-ui-express");

const taskRoutes = require("./routes/task.routes");
const swaggerSpec = require("./swagger/swagger");

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});


