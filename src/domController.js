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
	const getProjectStr = () => _projectPullDwn.value;
	const _projectDefault = document.getElementById('project-default');
	const _addBtn = document.getElementById('add-btn');
	const getAddBtn = () => _addBtn;
	const _todoContainer = document.getElementById('todo-container');
	const _addProjectBtn = document.getElementById('add-project');
	const getAddProjectBtn = () => _addProjectBtn;

	const updateDom = (container) => {
		resetInputs();
		removeAllChildNodes(_todoContainer);
		renderContainer(container);
	}

	const resetInputs = () => {
		clearTodoTitle();
		//add all projects to pulldown: is this the correct place to put it????
		//reset select to main project
	}	

	const renderContainer = (container) => {
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
		getAddBtn,
		getAddProjectBtn, 
		getTodoTitle, 
		getProjectStr,
		updateDom
	}
})();

export default domController

