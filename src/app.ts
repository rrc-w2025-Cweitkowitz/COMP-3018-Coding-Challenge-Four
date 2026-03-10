import express from "express";
import { accessLogger, errorLogger, consoleLogger } from "./api/v1/middleware/logger";
import errorHandler from "./api/v1/middleware/errorHandler";

import adminRouter from "./api/v1/routes/adminRoutes";
/** import the routes **/


const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    app.use(consoleLogger);
}

app.use(express.json());


/** Update the api endppoints with appropriate routes **/
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});
// API Routes
app.use("api/v1/admins", adminRouter)


app.use(errorHandler);

export default app;