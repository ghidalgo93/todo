import Project from '../src/project'; 
import Todo from '../src/todo';

describe('testing functionality of project factory function', () => {
	let projTest, todoTest1, todoTest2;
	beforeEach(function(){
		projTest = Project();
		todoTest1 = Todo();
		todoTest2 = Todo();
	})

	it('should instantiate a default project object', () => {
		expect(projTest.getTitle()).toBe('');
	})

	it('getList should return an empty list at instantiation', () => {
		expect(projTest.getList()).toEqual([]);
		expect(projTest.getList().length).toBe(0);
	})

	it('addTodo should add a single todo object to project list', () => {
		expect(projTest.addTodo(todoTest1)).toEqual([todoTest1]);
		expect(projTest.getList().length).toBe(1);
	})

	it('removeTodo should remove a single todo object from project list', () => {
		projTest.addTodo(todoTest1);
		projTest.addTodo(todoTest2);
		expect(projTest.removeTodo(todoTest2)).toEqual([todoTest1]);
		expect(projTest.getList().length).toBe(1);
		expect(projTest.removeTodo(todoTest1)).toEqual([]);
		expect(projTest.getList().length).toBe(0);
	})
})