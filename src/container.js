const Container = (() => {
	let _projects = [];

	const getProjects = () => _projects;
	const addProject = (projectToAdd) => {
		_projects.push(projectToAdd);
		return _projects;
	} 
	const removeProject = (projectToRemove) => {
		_projects = _projects.filter(project => project !== projectToRemove);
		return _projects;
	}
	
	const clearAll = () => _projects = [];

	return {
		getProjects, 
		addProject, 
		removeProject,
		clearAll
	}

})();



export default Container