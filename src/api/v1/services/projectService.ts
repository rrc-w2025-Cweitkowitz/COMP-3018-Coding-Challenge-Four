// import { Project } from "../models/interface";

// // Hardcoded sample projects
// const projects: Project[] = [
//   {
//     id: 1,
//     name: "Website Redesign",
//     status: "active",
//     createdAt: "2025-01-10T10:00:00.000Z",
//   },
//   {
//     id: 2,
//     name: "Mobile App v2",
//     status: "planning",
//     createdAt: "2025-01-08T10:00:00.000Z",
//   },
//   {
//     id: 3,
//     name: "API Migration",
//     status: "active",
//     createdAt: "2025-01-05T10:00:00.000Z",
//   },
//   {
//     id: 4,
//     name: "Security Audit",
//     status: "completed",
//     createdAt: "2025-01-03T10:00:00.000Z",
//   },
// ];

// export const getAllProjects = async (): Promise<Project[]> => {
//   return projects;
// };

// export const getProjectById = async (id: number): Promise<Project | undefined> => {
//   for (let i = 0; i < projects.length; i++) {
//     if (projects[i].id === id) {
//       return projects[i];
//     }
//   }
//   return undefined;
// };

// export const createProject = async (name: string, status: string): Promise<Project> => {
//   let nextId: number;

//   if (projects.length === 0) {
//     nextId = 1;
//   } else {
//     let lastProject = projects[projects.length - 1];
//     nextId = lastProject.id + 1;
//   }
//   let newProject: Project = {
//     id: nextId,
//     name: name,
//     status: status,
//     createdAt: new Date().toISOString(),
//   };
//   projects.push(newProject);
//   return newProject;
// };

// export const updateProject = async (
//   id: number,
//   name: string,
//   status: string,
// ): Promise<Project | undefined> => {
//   for (let i = 0; i < projects.length; i++) {
//     if (projects[i].id === id) {
//       projects[i].name = name;
//       projects[i].status = status;
//       return projects[i];
//     }
//   }
//   return undefined;
// };

// export const deleteProject = async (id: number): Promise<boolean> => {
//   let index = -1;
//   for (let i = 0; i < projects.length; i++) {
//     if (projects[i].id === id) {
//       index = i;
//       break;
//     }
//   }

//   if (index === -1) {
//     return false;
//   }

//   projects.splice(index, 1);
//   return true;
// };