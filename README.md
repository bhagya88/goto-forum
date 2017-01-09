# Goto-Forum

### Overview
This is a reddit like forum where users can post information about topics of their choice and  leave comments on the posts.

### Demo
[Click to view Demo](https://goto-forum.herokuapp.com/)

### Technologies used

* Node.js, Express, Body Parser, Morgan
* MongoDB, Mongoose
* React, Redux, React-Redux, Thunk, React Router
* React Developer Tools, Redux Developer Tools

### Challenges faced

* How to use redux?
* How to fetch data from server?
* How to provide data to components?
* How to compose reducers?
* How to write reducers as pure functions?

### Solutions found

* Reading the documentation and the video tutorials helped understand redux.
* Figuring out how to use thunk function helped fetch data from server.
* Injecting the data from store into compopents is done with the help of Provider.
* Analysing different pieces of state helped solve the problem.
* Using map, slice, concat function helped to compute new state without mutating current state.

### How it works

* When the user visits the site the news articles are webscraped, and checked if they already exist in the database. If they don't, then they added to the database.

* The use can navigate to next or previous articles and leave his notes.

* The user also has an option to delete the individual article or all articles.

##### Developed by Bhagya
