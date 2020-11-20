import {removeAllChildNodes} from './helpers';

const domController = (() => {
	const _headline = document.getElementById('headline');
	const _newTodoField = document.getElementById('new-todo-field');
	// const _todoLbl = document.getElementById('todo-label');
	const _todoInp = document.getElementById('todo-item');
	const getTitleStr = () => _todoInp.value;
	const clearTitle = () => _todoInp.value = '';
	// const _projectLbl = document.getElementById('project-label');
	const _projectPullDwn = document.getElementById('project-pulldown'); 
	const getProjectStr = () => _projectPullDwn.value;
	const _projectDefault = document.getElementById('project-default');
	const _addBtn = document.getElementById('add-btn');
	const getAddBtn = () => _addBtn;
	const _todoContainer = document.getElementById('todo-container');


	const updateDom = (container) => {
		resetInputs();
		removeAllChildNodes(_todoContainer);
		renderContainer(container);
	}

	const resetInputs = () => {
		clearTitle();
		//reset select to main project
	}	

	const renderContainer = (container) => {
		let projects = container.getProjects();

		for (let p of projects) {
			let ul = document.createElement('ul');
			ul.id = p.getTitle();
			ul.innerHTML = p.getTitle();
			_todoContainer.appendChild(ul);
			for (let t of p.getList()){
				let li = document.createElement('li');
				li.innerHTML = t.getTitle();
				ul.appendChild(li);
			}
		}
	}

	return {
		getAddBtn,
		getTitleStr, 
		getProjectStr,
		updateDom
	}
})();

export default domController

