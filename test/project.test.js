import Project from '../src/project'; 
import Todo from '../src/todo';

describe('testing functionality of project factory function', () => {
	let projTest, todoTest1, todoTest2;
	beforeEach(function(){
		projTest = Project('testProj');
		todoTest1 = Todo('test1');
		todoTest2 = Todo('test2');
	})

	it('should instantiate a default project object', () => {
		expect(projTest.getTitle()).toBe('testProj');
	})

	it('should throw error if instantiated without title', () => {
		expect(() => failProj = Project()).toThrow()
	})

	it('should throw error if instantiated with empty title', () => {
		expect(() => failProj = Project('')).toThrow();
	})
	
	it('setTitle should set the title of the project object', () => {
		expect(projTest.setTitle('newTestTitle')).toBe('newTestTitle');
	})

	it('getTodos should return an empty list at instantiation', () => {
		expect(projTest.getTodos()).toEqual([]);
		expect(projTest.getTodos().length).toBe(0);
	})

	it('addTodo should add a single todo object to project list', () => {
		expect(projTest.addTodo(todoTest1)).toEqual([todoTest1]);
		expect(projTest.getTodos().length).toBe(1);
	})

	it('addTodo should throw error if todo object not instantiated ', () => {
		expect(() => projTest.addTodo(Todo())).toThrow();
	})

	it('removeTodo should remove a single todo object from project list', () => {
		projTest.addTodo(todoTest1);
		projTest.addTodo(todoTest2);
		expect(projTest.removeTodo(todoTest2)).toEqual([todoTest1]);
		expect(projTest.getTodos().length).toBe(1);
		expect(projTest.removeTodo(todoTest1)).toEqual([]);
		expect(projTest.getTodos().length).toBe(0);
	})
})
