import Container from '../src/container';
import Project from '../src/project';

describe('testing functionality of container module', () => {
	let testProject1; 
	beforeEach(function() {
		testProject1 = Project('testProj'); 
		Container.clearAll();
	})
	
	it('should instantiate with an empty project array', () => {
		expect(Container.getProjects()).toEqual([]);
		expect(Container.getProjects().length).toBe(0);
	})

	it('addProject should add a single project to the projects array', () => {
		expect(Container.addProject(testProject1)).toEqual([testProject1]);
		expect(Container.getProjects().length).toBe(1);
	})

	it('addProject should throw error if project without title given', () => {
		expect(() => Container.addProject(Project())).toThrow();	
	})

	it('removeProject should remove a project from the project array', () => {
		Container.addProject(testProject1);
		expect(Container.removeProject(testProject1)).toEqual([]);
	})
	
	it('getProjectByTitle should return the projects title if it exists within', () => {
		Container.addProject(testProject1);
		testProject1.setTitle('testProj');
		expect(Container.getProjectByTitle('testProj')).toBe(testProject1);
	})
	
	it('getProjectByTitle should throw errror if project dne', () => {
		expect(() => Container.getProjectByTitle('testProj')).toThrow();
	})
	
})
