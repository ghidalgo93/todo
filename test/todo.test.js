import Todo from '../src/todo';
 
describe('testing functionality of todo factory function', () => {
	let todoTest;
	beforeEach(function(){
		todoTest = Todo();
	})
	it('should instantiate a default todo object (test getters)', () => {
		expect(todoTest.getTitle()).toBe('');
		expect(todoTest.getDescription()).toBe('');
		expect(todoTest.getDueDate()).toBe(null);
		expect(todoTest.getPriority()).toBe(3);
	})
	
	it('should set property (title)', () => {
		todoTest.setTitle('testTitle');
		expect(todoTest.getTitle()).toBe('testTitle');
	} )

	//test types at some point
})
