Package Delivery Tracker
Group Members
Yaksh Patel
Pritesh
Arshit
Project Description
A REST API that allows users to add, track, update, and delete package deliveries.
Each package has a tracking number, sender/receiver info, and a delivery status (Pending -> In Transit -> Delivered).

Frontend Idea
A simple HTML page to submit new packages and view all existing packages with their current delivery status using fetch() calls to the API.

API Routes

Method Route Description
GET /packages Get all packages
GET /packages/:id Get one package
POST /packages Add a new package
PUT /packages/:id Update delivery status
DELETE /packages/:id Remove a package
Roles & Task Breakdown
Yaksh: Git setup, server.ts
Pritesh: Jira board, task management
Arshit: README.md, API route design
