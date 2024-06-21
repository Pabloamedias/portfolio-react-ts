# Portfolio

A simple portfolio page made with React, TS, Vite and firebase realtime database.

## Content

- [Usage](#usage)
- [Versions](#versions)
- [ToDo](#todo)

## Usage

### For v1.0.0 version

- Clone or fork the project
- Open and change the src\utils\actualProjects.ts file
- In this files you can add the projects you want to show
- Just make sure to add all the required elements, you can see clearly on the interface.ts file

### For v1.2.0 version
From this version onwards the application ONLY works with a firebase connection, you gonna need that connection to work properly.

## Versions

### v1.0.0

- Portfolio has 2 pages, index and profile.
- On index you have your main page, where the projects are shown.
- On profile, you have a basic "about me" page, with the experience, education and skills.
- Theres a layout with styles, the navBar and the footer.
- Index work with 2 main components.
- For the moment, Index render projects that are place static in the src\utils\actualProjects.ts

### v1.2.0
- Portfolio has 2 static pages, index and profile and 1 dynamic page, projects.
- The dynamic page work with path params, but only will load a project if the path param is valid.
- On index you have the main page, where the projects are shown.
- On profile, you have a basic "about me" page, with the experience, education and skills.
- Theres a layout with styles, the navBar and the footer.
- Now the project works with a connection to firebase, with a realtime database.
- Added context api methods to work with the database connection.
## ToDo

- Index works with an external service to load the projects (an API for example) ✅
- Make some elements from profile to work with an external service
- Make modal a single component instead of be located in the Navbar
- Make Page component, with extra info of the projects ✅
- There will be N° pages for N° projects ✅
- Create an alert in case the petition to the database fails
- Configure the database so only the app has the permition to read data