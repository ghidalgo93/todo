const domController = (() => {
	let _todoInput = document.getElementById('todoItem');
	let _addBtn = document.getElementById('add-btn');


	const handleAdd = () => {
		let newInput = _todoInput.value;
		_todoInput.value = '' 
	}
	_addBtn.addEventListener('click', handleAdd, false);

})();

export default domController

