// import { removeAllChildNodes } from "./helpers";

const domController = (() => {
  // dom elements
  const addProjectBtn = document.getElementById("add-project");

  // dom manipulation
  function projectInput() {
    // open up a text bar for new project name with submit btn
    const input = document.createElement("input");
    document.getElementById("project-sidebar").appendChild(input);
    // if submitted
    // add project to container
    // update dom
  }

  addProjectBtn.addEventListener("click", projectInput, false);

  return {};
})();

export default domController;
