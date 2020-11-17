import Project from '../src/project'; 
import Todo from '../src/todo';

describe('testing functionality of project factory function', () => {
	let projTest, todoTest;
	beforeEach(function(){
		projTest = Project();
		todoTest = Todo();
	})

	it('should instantiate a default project object', () => {
		expect(projTest.getTitle()).toBe('');
	})

	it('getList should return an empty list at instantiation', () => {
		expect(projTest.getList()).toEqual([]);
		expect(projTest.getList().length).toBe(0);
	})

	it('addToList should add a single todo object to project list', () => {
		expect(projTest.addToList(todoTest)).toEqual([todoTest]);
		expect(projTest.getList().length).toBe(1);
	})
})
