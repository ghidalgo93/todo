function Project(title = ''){
	let _title = title; 
	let _list = [];

	const getTitle = () => _title;
	const getList = () => _list;
	const addTodo = (todoItem) => {
		_list.push(todoItem);
		return _list;
	}
	const removeTodo = (todoItem) => {
		_list = _list.filter(item => item !== todoItem); 
		return _list;
	}

	return {
		getTitle,
		getList, 
		addTodo,
		removeTodo
	}
}

export default Project
