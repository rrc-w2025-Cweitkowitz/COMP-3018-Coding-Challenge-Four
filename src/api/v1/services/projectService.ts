import { Project } from "../models/interface";

// Hardcoded sample projects
const projects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    status: "active",
    createdAt: "2025-01-10T10:00:00.000Z",
  },
  {
    id: 2,
    name: "Mobile App v2",
    status: "planning",
    createdAt: "2025-01-08T10:00:00.000Z",
  },
  {
    id: 3,
    name: "API Migration",
    status: "active",
    createdAt: "2025-01-05T10:00:00.000Z",
  },
  {
    id: 4,
    name: "Security Audit",
    status: "completed",
    createdAt: "2025-01-03T10:00:00.000Z",
  },
];

// Get all projects
export const getAllProjects = (): Project[] => {
  return projects;
};

// Get project by ID
export const getProjectById = (id: number): Project | null => {
  const project = projects.find((project) => project.id === id);
  return project ?? null;
};

let nextId = 5;

// CREATE 
export const createProject = (
  name: string,
  status: string
): Project => {
  const newProject: Project = {
    id: nextId++,
    name,
    status,
    createdAt: new Date().toISOString(),
  };

  projects.push(newProject);
  return newProject;
};

// UPDATE
export const updateProject = (
  id: number,
  updatedProject: Partial<Project>
): Project | null => {
  const index = projects.findIndex((project) => project.id === id);

  if (index === -1) {
    return null;
  }

  projects[index] = {
    ...projects[index],
    ...updatedProject,
  };

  return projects[index];
};

// DELETE
export const deleteProject = (id: number): boolean => {
  const index = projects.findIndex((project) => project.id === id);

  if (index === -1) {
    return false;
  }

  projects.splice(index, 1);
  return true;
};