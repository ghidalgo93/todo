const Container = (() => {
  let _projects = [];

  const getProjects = () => _projects;
  const addProject = (projectToAdd) => {
    _projects.push(projectToAdd);
    return _projects;
  };
  const getProjectByTitle = (projectTitle) => {
    const foundProj = _projects.find((x) => x.getTitle() === projectTitle);
    if (foundProj === undefined) {
      throw Error("project does not exist");
    }
    return foundProj;
  };
  const removeProject = (projectToRemove) => {
    _projects = _projects.filter((project) => project !== projectToRemove);
    return _projects;
  };

  const clearAll = () => (_projects = []);

  return {
    getProjects,
    addProject,
    getProjectByTitle,
    removeProject,
    clearAll,
  };
})();

export default Container;
