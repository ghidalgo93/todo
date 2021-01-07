# A Todo Web-Application
A simple todo web-application which allows you to create projects to store and keep track of tasks.

[Project Page](https://gerardohidalgo.com/todo/)

## Instructions
The application contains two main sections. 
#### Projects Sidebar
The first is the project sidebar, where projects will be displayed. By default you will start on the ‘home’ project, which cannot be deleted. All tasks will also be automatically added to the home project. Projects may be added at the bottom of the project sidebar. Projects can be deleted here as well.

#### Todos Display
The main area within the application is the todos display which, as you can imagine, displays all todos for a selected project. You can check off, view details, or delete todos once they are within the display. Details can be viewed by clicking the todo’s name. Todos can be added to a project by clicking on the add button below the display - which will open up a form to fill. By default the project to be added to will be the currently selected project, but can be changed within the form. 

### Personal notes
Modularity and use of closures were my main focus on this project, i.e. trying to fit everything within their own modules/objects. I was also trying to follow the principles of OOP by making sure each module was self contained and did not reference one another. 

Project Start: 1/4/2021. Started on paper, designed all my objects and modules which was a major improvement. 

Project End: 1/7/2021. Used the pub/sub pattern to keep modularity amongst objects and modules, using this pattern to distribute/transfer data. This was a great pattern to learn and am excited to use it more in the attempts to become a better event-driven-developer. 

Future Notes: local storage and firebase will be used eventually. Designing objects that can be easily serialized/deserialized wil be a major focus going forward to ensure ease of storage/transfer.
