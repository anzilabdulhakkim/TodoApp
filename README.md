# Todo Application

This is a Todo application built using React for the frontend and json-server for the backend.

## Features

- **Add Todo**: Users can add a new Todo with a title, status, assigned to, and completion date & time.
- **Edit Todo**: Users can edit the details of a Todo including its title, assigned to, and completion date & time.
- **Change Status**: Users can change the status of a Todo from pending to completed, and vice versa.
- **Delete Todo**: Users can delete a Todo if it's no longer needed.
- **Filtering**: Users can filter Todos based on their status (pending/completed) and assigned to.
- **Sorting**: Users can sort Todos based on the completion date & time, with options for ascending or descending order.
- **Pagination**: Implemented pagination to enhance user experience by displaying a limited number of Todos per page.

## Dependencies

- **react**
- **react-dom**
- **axios**
- **json-server**

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-folder>`
3. Install dependencies: `npm install`
4. Start the json-server: `json-server --watch db.json`
5. Start the React application: `npm start`
6. Open the application in your browser.

## API Endpoints

- `GET /todos`: Get all Todos
- `POST /todos`: Add a new Todo
- `GET /todos/:id`: Get a Todo by ID
- `PATCH /todos/:id`: Update a Todo
- `DELETE /todos/:id`: Delete a Todo

## Usage

1. Launch the application.
2. Add new Todos by filling in the required details.
3. Edit existing Todos by clicking on the edit button.
4. Change the status of a Todo by clicking on the checkbox or status button.
5. Delete a Todo by clicking on the delete button.
6. Use filtering options to filter Todos based on status and assigned to.
7. Use sorting options to sort Todos based on completion date & time.
8. Navigate through pages using pagination.
