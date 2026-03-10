import { Request, Response } from "express";
import * as projectService from "../services/projectService";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const getAllProjects = async (
  req: Request,
  res: Response,
): Promise<void> => {
  let data = await projectService.getAllProjects();
  res.status(HTTP_STATUS.OK).json({
    message: "Projects retrieved",
    count: data.length,
    data: data,
  });
};

export const getProjectById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  let id = Number(req.params.id);
  let project = await projectService.getProjectById(id);

  if (!project) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      message: "Project not found",
    });
  } else {
    res.status(HTTP_STATUS.OK).json({
      message: "Project retrieved",
      data: project,
    });
  }
};

export const createProject = async (
  req: Request,
  res: Response,
): Promise<void> => {
  let name: string = req.body.name;
  let status: string = req.body.status || "planning";

  let project = await projectService.createProject(name, status);

  res.status(HTTP_STATUS.CREATED).json({
    message: "Project created",
    data: project,
  });
};

export const updateProject = async (
  req: Request,
  res: Response,
): Promise<void> => {
  let id = Number(req.params.id);
  let name: string = req.body.name;
  let status: string = req.body.status;

  let project = await projectService.updateProject(id, name, status);

  if (!project) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      message: "Project not found",
    });
  } else {
    res.status(HTTP_STATUS.OK).json({
      message: "Project updated",
      data: project,
    });
  }
};

export const deleteProject = async (
  req: Request,
  res: Response,
): Promise<void> => {
  let id = Number(req.params.id);
  let ok = await projectService.deleteProject(id);

  if (!ok) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      message: "Project not found",
    });
  } else {
    res.status(HTTP_STATUS.NO_CONTENT).send();
  }
};
