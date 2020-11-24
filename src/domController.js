import {removeAllChildNodes} from './helpers';

const domController = (() => {
	const _headline = document.getElementById('headline');
	const _newTodoField = document.getElementById('new-todo-field');
	// const _todoLbl = document.getElementById('todo-label');
	const _todoInp = document.getElementById('todo-item');
	const getTodoTitle = () => _todoInp.value;
	const clearTodoTitle = () => _todoInp.value = '';
	// const _projectLbl = document.getElementById('project-label');
	const _projectPullDwn = document.getElementById('project-pulldown'); 
	const getProjectTitle = () => _projectPullDwn.value;
	const _projectDefault = document.getElementById('project-default');
	const _addBtn = document.getElementById('add-btn');
	const getAddTodoBtn = () => _addBtn;
	const _todoContainer = document.getElementById('todo-container');
	const _addProjectBtn = document.getElementById('add-project');
	const getAddProjectBtn = () => _addProjectBtn;

	const updateDom = (container) => {
		resetInputs(container);
		removeAllChildNodes(_todoContainer);
		renderTodos(container);
	}

	const resetInputs = (container) => {
		clearTodoTitle();
		removeAllChildNodes(_projectPullDwn);
		addProjectsToPullDown(container);
	}	

	const addProjectsToPullDown = (container) => {
		let projects = container.getProjects();

		for (let project of projects){
			let option = document.createElement('option');
			option.value = project.getTitle(); 
			option.innerHTML = project.getTitle();
			_projectPullDwn.appendChild(option);
		}
	}

	const renderTodos = (container) => {
		let projects = container.getProjects();

		for (let project of projects) {
			let ul = document.createElement('ul');
			ul.innerHTML = project.getTitle();
			_todoContainer.appendChild(ul);
			for (let todo of project.getTodos()){
				let li = document.createElement('li');
				li.innerHTML = todo.getTitle();
				ul.appendChild(li);
			}
		}
	} 

	return {
		getAddTodoBtn,
		getAddProjectBtn, 
		getTodoTitle, 
		getProjectTitle,
		updateDom
	}
})();

export default domController

