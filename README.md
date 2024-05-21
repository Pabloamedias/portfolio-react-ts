# Portfolio

A simple portfolio page made with React, TS and Vite.

## Content

- [Ussage](#ussage)
- [Versions](#versions)
- [ToDo](#todo)

## Usage

- clone or fork the project
- open and change the src\utils\actualProjects.ts file
- In this files you can add the projects you want to show
- Just make sure to add all the mandatory elements

## Versions

### v1.0.0

- Portfolio has 2 pages, index and profile
- On index you have your main page, where the projects are shown
- On profile, you hace a basic "about me" page, with the experience, education and skills
- Theres a layout with styles, the navBar and the footer
- Index work with 2 main components
- For the moment, Index render projects that are place static in the src\utils\actualProjects.ts

## ToDo

- Index works with an external service to load the projects (an API for example)
- Make some elements from profile to work with an external service
- Make modal a single component instead of be located in the Navbar
- Make Page component, with extra info of the projects
- There will be N° pages for N° projects