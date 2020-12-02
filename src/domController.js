import { updateProjects, validateString, removeAllChildNodes } from "./helpers";
import Todo from "./todo";
import Project from "./project";
import Container from "./container";

const domController = (() => {
  // init
  const homeProject = Project("Home");
  Container.addProject(homeProject);

  // dom elements
  const addProjectInput = document.getElementById("add-project");

  // dom manipulation
  function addProject(e, projectContainter) {
    if (e.key === "Enter") {
      const projectName = validateString(e);
      projectContainter.addProject(Project(projectName));
      updateProjects(projectContainter);
      e.target.value = "";
    }
  }

  addProjectInput.addEventListener("keydown", (e) => addProject(e, Container));

  return {};
})();

export default domController;
