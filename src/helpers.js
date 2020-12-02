// Removes all child nodes from a given DOM element
// input: DOM element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const isRequired = (param) => {
  throw Error(`${param} is required`);
};

function validateString(e) {
  const text = e.target.value;
  if (typeof text !== "string" || text === "") {
    throw new Error("Must be a string");
  }
  return text;
}

function createProjectElem(projectObj, domProjectContainer) {
  const projectElem = document.createElement("li");
  projectElem.innerHTML = projectObj.getTitle();
  domProjectContainer.appendChild(projectElem);
}

function updateProjects(projectContainter) {
  const domProjects = document.getElementById("projects");
  removeAllChildNodes(domProjects);
  projectContainter.getProjects().forEach((project) => {
    createProjectElem(project, domProjects);
  });
}

export { updateProjects, removeAllChildNodes, isRequired, validateString };
