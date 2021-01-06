import PubSub from "pubsub-js";
import domController from "./domController";
import project from "./project";
import todo from "./todo";
import "./styles.css";

const app = (() => {
  const home = project("Home");
  const projects = [home];
  home.addTodo(todo("laundry", "hang up clothes", "10/2/2020", "priority"));
  domController.renderPage(projects, home);

  const addProject = (topic, projectName) => {
    const newProject = project(projectName);
    projects.push(newProject);
    domController.renderPage(projects, newProject);
  };

  const removeProject = (topic, projectName) => {
    // slice the project with the given name out of the projects array
    // render page
  };

  const selectProject = (topic, projectName) => {
    const selectedProject = projects.find((proj) => proj.name === projectName);
    domController.renderPage(projects, selectedProject);
  };

  const addTodo = (topic, values) => {
    const newTodo = todo(values[0], values[1], values[2], values[3]);
    const selectedProject = projects.find((proj) => proj.name === values[4]);
    selectedProject.addTodo(newTodo);
    if (selectedProject !== home) home.addTodo(newTodo);
    domController.renderPage(projects, selectedProject);
  };

  PubSub.subscribe("ADD_PROJECT", addProject);
  PubSub.subscribe("REMOVE_PROJECT", removeProject);
  PubSub.subscribe("SELECT_PROJECT", selectProject);
  PubSub.subscribe("ADD_TODO", addTodo);
})();
