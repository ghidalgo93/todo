import Todo from './todo';
import Project from './project';
import Container from './container';
import domController from './domController';
import addTodo from './helpers';

//app init
const defaultProj = Project('default');
Container.addProject(defaultProj);

// event listeners
domController.getAddBtn().addEventListener('click', () => {
	addTodo(domController.getTitle(), domController.getProject(), Container.getProjects());
	domController.clearTitle();
});





