# Package Delivery Tracker

## Project Name
Package Delivery Tracker

## Group Members
- Member 1: Replace with name
- Member 2: Replace with name
- Member 3: Replace with name

## Project Description
Package Delivery Tracker is a web application concept for tracking package deliveries in one place. Users will be able to create package entries, view shipment status, update delivery progress, and review package history. The project is designed as a REST API using Node.js, TypeScript, and Express, with a simple frontend dashboard planned for later milestones.

## Why This Idea Is Original
Instead of being a general to-do list or a copy of a class sample, this project focuses on shipment tracking for students and small teams who frequently order online. The unique idea is to combine delivery status, carrier information, expected delivery dates, and package history in one lightweight dashboard.

## Data Being Managed
- Package ID
- Recipient name
- Carrier name
- Tracking number
- Delivery status
- Expected delivery date
- Delivery address
- Status history notes

## Planned REST API Routes
- `GET /api/packages` - list all packages
- `GET /api/packages/:id` - get one package by ID
- `POST /api/packages` - create a new package record
- `PUT /api/packages/:id` - update package details
- `PATCH /api/packages/:id/status` - update only the delivery status
- `DELETE /api/packages/:id` - remove a package record

## Basic Frontend Idea
The frontend will be a simple dashboard where users can:
- view all tracked packages in cards or a table
- filter packages by carrier or delivery status
- open one package to see tracking details and history
- add a new package using a form

## Roles and Task Breakdown
- Member 1: GitHub repository setup, branch management, README organization
- Member 2: Jira board setup, task creation, workflow tracking
- Member 3: TypeScript + Express starter setup and server structure

## Technical Setup Included In This Repository
- TypeScript project initialized
- Express installed
- `package.json` included
- `tsconfig.json` included
- `src/server.ts` starter file included

## Jira Plan
Create a Jira Kanban board with these columns:
- To Do
- In Progress
- Done

Suggested starter tasks:
- Create GitHub repository
- Add all group members as contributors
- Create Jira project and invite group members
- Set up TypeScript configuration
- Install Express and project dependencies
- Create starter `server.ts`
- Draft README with project plan
- Review project idea before in-class presentation

Each group member must have at least one assigned Jira task.

## Presentation Checklist
- Show the Git repository structure
- Show the Jira Kanban board
- Explain the project idea and what data the API will manage
- Explain the planned routes
- Show teamwork through assigned tasks and commits
