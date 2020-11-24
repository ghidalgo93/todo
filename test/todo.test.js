import Todo from '../src/todo'; 

describe('testing functionality of todo factory function', () => {
	let todoTest;
	beforeEach(function(){
		todoTest = Todo('title');
	})

	it('should instantiate a default todo object (test getters)', () => {
		expect(todoTest.getTitle()).toBe('title');
		expect(todoTest.getDescription()).toBe('');
		expect(todoTest.getDueDate()).toBe(null);
		expect(todoTest.getPriority()).toBe(3);
	})

	it('if instantiated without title it should throw error', () => {
		expect(() => failTest = Todo()).toThrow();
	})
	
	it('if instantiated with an empty string it should throw error', () => {
		expect(() => failTest = Todo('')).toThrow();
	})
	
	it('should set title', () => {
		todoTest.setTitle('testTitle');
		expect(todoTest.getTitle()).toBe('testTitle');
	})

	it('should throw type error when non-string title is set', () => {
		expect(() => todoTest.setTitle(4)).toThrow();
		expect(() => todoTest.setTitle('test')).not.toThrow();
	})
	
	it('should set description', () => {
		todoTest.setDescription('test description');
		expect(todoTest.getDescription()).toBe('test description');
	})

	it('should throw type error when non-string description is set', () => {
		expect(() => todoTest.setDescription(4)).toThrow();
		expect(() => todoTest.setDescription('test')).not.toThrow();
	})

	it('should get default dueDate equal to null', () => {
		expect(todoTest.getDueDate()).toBe(null);
	})

	it('setDue date should throw error when non-date obj is used', () => {
		let today = new Date();
		expect(() => todoTest.setDueDate(today)).not.toThrow();
		expect(() => todoTest.setDueDate(5)).toThrow();
	})

	it('getPriority should get the default of 3', () => {
		expect(todoTest.getPriority()).toBe(3);
	})

	it('setPriority should throw error when non number is used', () => {
		expect(() => todoTest.setPriority('green')).toThrow();
		expect(() => todoTest.setPriority(1)).not.toThrow();
	})

	it('setComplete should set correct boolean value', () => {
		expect(todoTest.setComplete(true)).toBe(true);
		expect(todoTest.setComplete(false)).toBe(false);
	})
	
	it('setComplete should throw error if non-bool used', () => {
		expect(() => todoTest.setComplete(true)).not.toThrow();
		expect(() => todoTest.setComplete(5)).toThrow();
	})























})
