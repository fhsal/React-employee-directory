# hw19-React Employee Directory

## Summary

This assignment involved using React to build an application which populates an Employee Directory from the API "random user", presenting that in a tabular format and enabling the user to search and sort the Employee Directory based upon at least one attribute - in this case, Employee Name.

The application is fully functional online and is deployed on GitHubpages at link: https://fhsal.github.io/ee-dir/ .   I had also previously deployed the app on Heroku, but that link occassionally takes a long time to load and can time out at link: https://ee-dir.herokuapp.com/. Here is a screen shot of the working application:

![img](https://github.com/fhsal/hw19-employee-directory/blob/main/Employee%20Directory%20app%20screen%20shot.jpg)

The application utilizes four components, they are:

(1) Directory.js - this is the root for the application and contains the main functions to call the API via the API component, Search to filter the Employee Directory utilizing a Filter function and Sort to display the Employee Directory in acending or decending order based upon Employee Name.   It utilizes the API component to invoke an axios call to the random user API, the Search component to engage the listener on the page and the Employee component to which it passes the employee array for formatting.   It also renders the table header and body.  The table header also includes an event listener to trigger sorting of the Employee Directory which invokes the sortEmployees function. 

(2) Search.js - this component handles the event listener for the seach input box where a user can enter an employee name.  It triggers a state-change which re-renders the Directory display using the on-change functionality. 

(3) Employee.js - this component accepts the employee object as prop from Directory.js and formats the employee object by concatenating first and last name and using Moment.js to format the employee's date of birth.   The response is returned to Directory.js which is used to map data into the body of the table. 

(4) API.js - this component is within the Utils folder and is called from Directory.js.  It returns 250 employees in an object. 

---

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users generated from the [Random User API](https://randomuser.me/), when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.
