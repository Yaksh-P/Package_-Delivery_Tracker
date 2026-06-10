## Planned API Routes

The Delivery Package Tracker's backend API is based on the primary functions of package management within the system. These routes can be used to create, view, update, and delete package records and view and add tracking updates to individual packages.

1. GET /packages
Description: Retrieve all package records from the database.
Used In: Data Listing Page
Explanation: This route is used to show a list of packages or a table of packages to the users, to enable them to check the information about the packages and their current delivery status.

2. GET /packages/:id
Description: Get details of a package, based on its ID.
Used In: Edit/Update Page
Explanation: This route is used to load details of a selected package to enable the user to view or modify the details of a package.

3. POST /packages
Description: Create a new package record.
Used: Data Entry Page
Explanation: If a user fills out the package form to create a new delivery package entry, this route is used.

4. PUT /packages/:id
Description: Update of an existing package record.
Used In: Edit/Update Page
Explanation: This route is used for updating package information like it's delivery status, receiver details, etc. or for updating the package weight.

5. DELETE /packages/:id
Description: Delete a package record.
Used In: Data Listing Page
Explanation: This route is to delete a package record if it is incorrect or no longer required.


6. GET /packages/:id/tracking
Description: This command is used to retrieve all the tracking information for a specific package.
Used In: Data Listing Page or package details section
Explanation: This track is for updating the status of a package and to show when it was delivered.

7. POST /packages/:id/tracking
Description: Add a new tracking update for a package.
Used In: Edit/Update Page
Explanation: This route is for recording a delivery update, like changing its location or changing its status.

## Express Backend Structure Plan

The back end will be created in TypeScript and Express. The application will be structured in different folders: routes, controllers and database configuration. The API endpoints will be specified in the routes folder, the request and response logic in the controller folder.

## System Connection Explanation

The frontend pages will send requests to the Express backend through these API routes. The backend will process the requests and communicate with the MySQL database to store, retrieve, update, or delete package information. This creates a clear connection between the user interface, backend logic, and database design.