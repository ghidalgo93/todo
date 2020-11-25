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
		renderTodosTable(container);
	}

	const resetInputs = (container) => {
		clearTodoTitle();
		removeAllChildNodes(_projectPullDwn);
		renderProjectsPulldown(container);
	}	

	const renderProjectsPulldown = (container) => {
		let projects = container.getProjects();

		for (let project of projects){
			let option = document.createElement('option');
			option.value = project.getTitle(); 
			option.innerHTML = project.getTitle();
			_projectPullDwn.appendChild(option);
		}
	}


	const renderTodosTable = (container) => {
		let projects = container.getProjects();

		for (let project of projects){
			let table = document.createElement('table');
			let thead = document.createElement('thead');
			let tbody = document.createElement('tbody');
			let projectRow = document.createElement('tr');
			let projectTitle = document.createElement('th');
			projectTitle.innerHTML = project.getTitle();

			for (let todo of project.getTodos()){
				let todoRow = document.createElement('tr');
				let todoCheck = document.createElement('input');
				todoCheck.setAttribute('type', 'checkbox');
				let todoTitle = document.createElement('td');
				todoTitle.innerHTML = todo.getTitle();
				let removeTodo = document.createElement('button');
				removeTodo.innerHTML = 'x';
				todoRow.appendChild(todoCheck);
				todoRow.appendChild(todoTitle);
				todoRow.appendChild(removeTodo);
				tbody.appendChild(todoRow);
			}

			projectRow.appendChild(projectTitle);
			thead.appendChild(projectRow);
			table.appendChild(thead);
			table.appendChild(tbody);
			_todoContainer.appendChild(table);
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

