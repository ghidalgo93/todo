function Project(title = ''){
	let _title = title; 
	let _list = [];

	const getTitle = () => _title;
	const getList = () => _list;
	const addToList = (todoItem) => {
		_list.push(todoItem);
		return _list;
	}
	//removefromlist

	return {
		getTitle,
		getList, 
		addToList
	}
}

export default Project
