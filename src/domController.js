import $ from "jquery";
import { showTodos, updateProjects, validateString } from "./helpers";
import Todo from "./todo";
import Project from "./project";
import Container from "./container";

const domController = (() => {
  // init
  const homeProject = Project("Home");
  Container.addProject(homeProject);

  // dom elements
  const addProjectInput = document.getElementById("add-project");
  const projectDomContainer = document.getElementById("projects");
  updateProjects(Container);

  // dom manipulation
  function addProject(e, projectContainter) {
    if (e.key === "Enter") {
      const projectName = validateString(e);
      projectContainter.addProject(Project(projectName));
      updateProjects(projectContainter);
      e.target.value = "";
    }
  }

  function removeProject(e, projectContainter) {
    const projectName = projectContainter.getProjectByTitle(
      e.target.dataset.title
    );
    projectContainter.removeProject(projectName);
    updateProjects(projectContainter);
  }

  function showProjectTodos(e, projectContainter) {
    const projectName = projectContainter.getProjectByTitle(
      e.target.dataset.title
    );
    showTodos(projectName.getTodos());
  }

  // event listeners
  addProjectInput.addEventListener("keydown", (e) => addProject(e, Container));
  $(projectDomContainer).on("click", ".removeProject", (e) =>
    removeProject(e, Container)
  );
  $(projectDomContainer).on("click", ".projectTitle", (e) =>
    showProjectTodos(e, Container)
  );

  return {};
})();

export default domController;
