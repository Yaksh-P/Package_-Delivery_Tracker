Package Delivery Tracker API

Group Members

- Yaksh Patel
- Pritesh
- Arshit

Project Description
This project is a backend REST API for a Package Delivery Tracker system. It allows users to manage package records, view sender information, and track delivery progress through tracking updates.

The system is built using:

- Node.js
- TypeScript
- Express
- MySQL

Main Features

- View all users
- View all packages
- View one package by ID
- Add a new package
- Update package details
- Delete a package
- View all tracking updates
- View tracking updates for one package
- Add a tracking update for a package

Database Tables
The MySQL database contains three main tables:

- `users`
- `packages`
- `tracking_updates`

Relationships

- One user can have many packages
- One package can have many tracking updates

API Routes

Users

- `GET /users` - Get all users

Packages

- `GET /packages` - Get all packages
- `GET /packages/:id` - Get one package by ID
- `POST /packages` - Add a new package
- `PUT /packages/:id` - Update an existing package
- `DELETE /packages/:id` - Delete a package
- `GET /packages/:id/tracking` - Get tracking history for one package
- `POST /packages/:id/tracking` - Add a new tracking update for a package

Tracking Updates

- `GET /tracking-updates` - Get all tracking updates

How to Run the Project

1. Open the project folder:

```bash
cd "D:\Sem4\Final Project\package_delivery_tracker"
```

2. Install dependencies:

```bash
npm install
```

3. Create the MySQL database and tables in MySQL Workbench.

4. Make sure the database connection in `src/db/db.ts` matches your MySQL settings:

- host
- port
- user
- password
- database name

5. Start the server:

```bash
npm run dev
```

6. The API runs at:

```text
http://localhost:3001
```

Test Endpoints
You can test these routes in the browser or Postman:

- `http://localhost:3001/users`
- `http://localhost:3001/packages`
- `http://localhost:3001/packages/1`
- `http://localhost:3001/packages/1/tracking`
- `http://localhost:3001/tracking-updates`

Task Breakdown

- Yaksh Patel: Git setup, backend setup, database connection, route implementation
- Pritesh: Jira board, task management, project coordination
- Arshit: README, API planning, documentation support
