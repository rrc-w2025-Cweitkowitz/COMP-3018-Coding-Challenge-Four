import express from "express";
import { setCustomClaims } from "../controllers/adminController";
import authenticate from "../middleware/authenticate";
// import isAuthorized from "../middleware/authorize";

const adminRouter: express.Router = express.Router();
const test = console.log("THROUGH ROUTER")
// Only admins can set custom claims
adminRouter.post(
    "/setCustomClaims",
    authenticate,
    // isAuthorized({ hasRole: ["admin"] }),
    setCustomClaims
);
test
export default adminRouter;
