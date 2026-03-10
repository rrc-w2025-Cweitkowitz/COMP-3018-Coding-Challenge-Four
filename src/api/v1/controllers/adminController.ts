import { Request, Response, NextFunction } from "express";
import { auth } from "../../../config/firebaseConfig";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const setCustomClaims = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  let uid: string = req.body.uid;
  let role: string = req.body.role;

  try {
    await auth.setCustomUserClaims(uid, { role: role });

    res.status(HTTP_STATUS.OK).json({
      message:
        "Custom claims set. User must get a new token for changes to take effect.",
    });
  } catch (error) {
    next(error);
  }
};
