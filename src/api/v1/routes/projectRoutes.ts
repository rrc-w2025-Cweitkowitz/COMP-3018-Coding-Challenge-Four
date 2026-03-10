import * as express from "express";
import * as projectController from "../controllers/projectController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: express.Router = express.Router();

router.get(
  "/",
  authenticate,
  isAuthorized({ hasRole: ["admin", "lead", "developer"] }),
  projectController.getAllProjects,
);

router.get(
  "/:id",
  authenticate,
  isAuthorized({ hasRole: ["admin", "lead", "developer"] }),
  projectController.getProjectById,
);

router.post(
  "/",
  authenticate,
  isAuthorized({ hasRole: ["admin", "lead"] }),
  projectController.createProject,
);

router.put(
  "/:id",
  authenticate,
  isAuthorized({ hasRole: ["admin", "lead"] }),
  projectController.updateProject,
);

router.delete(
  "/:id",
  authenticate,
  isAuthorized({ hasRole: ["admin"] }),
  projectController.deleteProject,
);

export { router };
