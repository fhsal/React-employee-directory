# hw19-React Employee Directory

## Summary

This assignment involved updating a provided budget application to be a progressive web app (PWA).

The MVC needed to be modified in several areas to include service-worker, manifest and caching so that the app functions in either a connected or disconnected mode and can store transactions locally when disconnected, which are then synched-up with an 'online' database once a user reconnects to the app deployed on Heroku.

The application is fully functional online and offline and is deployed on Heroku at this link: https://ee-dir.herokuapp.com/. Here is a screen shot of the working application:

![img](https://github.com/fhsal/hw19-employee-directory/blob/main/Employee%20Directory%20app%20screen%20shot.jpg)

Several components had to be modified to enable the app to run on Heroku and function as an online/offline PWA, they are:

(1) index.html needed to be updated to include a serviceWorker listener which is registered when the window load event occurs. Scripts to link the offline database via db3.js and manifest were also incorporated.

(2) manifest.webmanifest was created and includes two icons that were provided, although the icons don't appear to be used within the app.

(3) service-worker.js was created and includes static files to cache and eventListener(s) to install, activate, fetch and respond with cached data.

(4) db3.js was created to store transactions in a 'budget' database to be kept in indexDB when the app is operating offline; it is triggered by an event listener which checks if the navigator is online/offline. Once back online it reads all transactions from 'budget' in indexDB, posts the transactions and clears the local database.

(5) server.js was modified to use either a local or environment PORT so that the app could run on Heroku; an environment connection for Mongo was also added so that the database connection could similarly be used from Heroku.

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
