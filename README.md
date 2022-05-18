# Med-Portal

## Purpose
As a medical assistant at a doctor's office. I want a web application to complete patient scheduling and medical notes. So that operational needs in the office run more efficiently. The user will be able to create a login for MedPortal as well as login using their created credentials. Once the user has logged in, they will be able to view all of their upcoming appointments. Using the navigation bar, the user has options to View Appointments, Add Appointments, Add a Patient, or Logout. The user must be logged in to see these items. If the user selects View Appointments, they will see all of the appointments. If the user selects Add Patient, they will be taken to another screen where they will input the patient name and submit. If they select the Add Appointment, they will be prompted to enter the  information for the patient and save. The new patient will populate on the View Appointments screen. On the appointment screen, inside the appointment cards, the user can add a new note to an appointment or cancel the appointment.

## Built With
* HTML
* CSS
* JavaScript
* Bulma
* bcrypt
* connect-session-sequelize
* dotenv
* express
* express-handlebars
* express-session
* Sequelize
* handlebars
* MySql
* node

## Installation
To install this application: 
1. Run the following commands in the terminal:
 * npm 
    * init 
    * install 
    * express 
    * sequelize 
    * mysql2 
    * bcrypt 
    * connect-session-sequelize 
    * express-handlebars 
    * express-session 
    * node
    * handlebars
2. Run npm install dotenv -save in the terminal.
    * Be sure to save your database, username, and password in the .env file and then make sure .env is added to the .gitignore

3. Open mysql shell using:
    * mysql -u root -p
        * When here, run source db/schema.sql
        * Then, quit.

4. In the root of the application run the following commands:
    * node seeds
    * npm start


## GitHub Repository
https://github.com/jen2ags/Med-Portal

## Heroku Deployed Application
https://ancient-ridge-51231.herokuapp.com/

## Screen Shot
Login Screen:
![Screenshot login screen]()

Appointments Page:
![Screenshot appointments page]()


## Contribution
Made by Cheryl Cruz, Colt Schultz, and Jennifer Jennings