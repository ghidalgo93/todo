import PubSub from "pubsub-js";
import domController from "./domController";
import project from "./project";
import todo from "./todo";
import "./styles.css";

const app = (() => {
  const home = project("Home");
  const projects = [home];
  // home.addTodo(todo("laundry", "hang up clothes", "10/2/2020", "high"));
  domController.renderPage(projects, home);

  const addProject = (topic, projectName) => {
    const newProject = project(projectName);
    projects.push(newProject);
    domController.renderPage(projects, newProject);
  };

  const removeProject = (topic, projectName) => {
    // remove projects todo from home project...
    const selectedProject = projects.find((proj) => proj.name === projectName);
    selectedProject.todos.forEach((t) => {
      const todoIndexHome = home.todos.findIndex((i) => i.name === t.name);
      home.todos.splice(todoIndexHome, 1);
    });
    // ...then remove the project itself
    const selectedProjectIndex = projects.findIndex(
      (proj) => proj.name === projectName
    );
    projects.splice(selectedProjectIndex, 1);
    domController.renderPage(projects, home);
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

  const removeTodo = (topic, { projectName, todoName }) => {
    // remove todo from selected project
    const selectedProject = projects.find((proj) => proj.name === projectName);
    const todoIndexProject = selectedProject.todos.findIndex(
      (i) => i.name === todoName
    );
    selectedProject.todos.splice(todoIndexProject, 1);
    if (projectName === "Home") {
      // take the todo out of the other project...for later
    }
    if (projectName !== "Home") {
      const todoIndexHome = home.todos.findIndex((i) => i.name === todoName);
      home.todos.splice(todoIndexHome, 1);
    }

    domController.renderPage(projects, selectedProject);
  };

  const setCompleteStatus = (topic, { projectName, todoName, checked }) => {
    const selectedProject = projects.find((proj) => proj.name === projectName);
    const selectedTodo = selectedProject.todos.find((t) => t.name === todoName);
    selectedTodo.checked = checked;
    domController.renderPage(projects, selectedProject);
  };

  PubSub.subscribe("ADD_PROJECT", addProject);
  PubSub.subscribe("REMOVE_PROJECT", removeProject);
  PubSub.subscribe("SELECT_PROJECT", selectProject);
  PubSub.subscribe("ADD_TODO", addTodo);
  PubSub.subscribe("REMOVE_TODO", removeTodo);
  PubSub.subscribe("CHECK", setCompleteStatus);
})();
