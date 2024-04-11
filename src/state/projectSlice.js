// postsSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload.projects;
    },
    setProject: (state, action) => {
      const updatedProjects = state.projects.map((project) => {
        if (project._id === action.payload.project._id)
          return action.payload.project;
        return project;
      });
      state.projects = updatedProjects;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload.project);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload.projectId
      );
    },
  },
});

export const { setProjects, setProject, addProject, deleteProject } =
  projectsSlice.actions;
export default projectsSlice.reducer;
