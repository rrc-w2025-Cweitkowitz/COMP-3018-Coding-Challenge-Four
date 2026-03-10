import * as express from "express";
import * as adminController from "../controllers/adminController";
import authenticate from "../middleware/authenticate"
import isAuthorized from "../middleware/authorize";

const router: express.Router = express.Router();

router.post(
  "/setCustomClaims",
  authenticate,
  isAuthorized({ hasRole: ["admin"] }),
  adminController.setCustomClaims
);

export { router };

