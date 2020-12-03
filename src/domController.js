import $ from "jquery";
import { createProjectElem, showTodos, validateString } from "./helpers";
import Todo from "./todo";
import Project from "./project";
import Container from "./container";

// init
const homeProject = Project("Home");
Container.addProject(homeProject);

const domController = (() => {
  let currentProjectTitle = "Home";

  // dom elements
  const addProjectInput = document.getElementById("add-project");
  const addTodoInput = document.getElementById("add-todo");
  const projectDomContainer = document.getElementById("projects");
  // TODO make these both static in the html index page
  const homeProjectDom = createProjectElem(homeProject, projectDomContainer);
  homeProjectDom.classList.add("selected-project");

  // dom manipulation
  // TODO add the domContainer as input for functional prog
  function addProject(e, projectContainter) {
    if (e.key === "Enter") {
      const projectName = validateString(e);
      const newProject = Project(projectName);
      projectContainter.addProject(newProject);
      createProjectElem(newProject, projectDomContainer);
      e.target.value = "";
    }
  }

  // TODO add the domContainer AND current project as input for functional prog
  function removeProject(e, projectContainter) {
    const projectName = projectContainter.getProjectByTitle(
      e.target.dataset.title
    );
    projectContainter.removeProject(projectName);
    const projectElem = document.querySelector(
      `[data-title=${e.target.dataset.title}]`
    );
    projectDomContainer.removeChild(projectElem);
    // TODO need to make currentProjectTitle home or something else
    currentProjectTitle = "Home";
  }

  function projectSelect(e, projectContainter) {
    const project = projectContainter.getProjectByTitle(e.target.dataset.title);
    // take selected-project off all nonselected
    // add selected-project to the selected on
    e.target.classList.add("selected-project");
    // show all the todos from that project
    showTodos(project.getTodos());
  }

  function addTodo(e, project) {
    if (e.key === "Enter") {
      const todoName = validateString(e);
      // add to home and specific project
      project.addTodo(Todo(todoName));
      if (project.getTitle() !== "Home") {
        homeProject.addTodo(Todo(todoName));
      }
      showTodos(project.getTodos());
      e.target.value = "";
    }
  }

  // event listeners
  addProjectInput.addEventListener("keydown", (e) => addProject(e, Container));
  addTodoInput.addEventListener("keydown", (e) =>
    // TODO check if project exists first
    addTodo(e, Container.getProjectByTitle(currentProjectTitle))
  );
  $(projectDomContainer).on("click", (e) => {
    currentProjectTitle = e.target.dataset.title;
  });
  $(projectDomContainer).on("click", ".removeProject", (e) =>
    removeProject(e, Container)
  );
  $(projectDomContainer).on("click", ".projectTitle", (e) =>
    projectSelect(e, Container)
  );

  return {};
})();

export default domController;
