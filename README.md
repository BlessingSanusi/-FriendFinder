# FriendFinder

## A Full Stack Application

### Overview

> A compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.Express is used for handling routes.

> survey has 10 questions and each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

### How the app works

> `htmlRoutes.js` file contains two routes: A GET Route to `/survey`that displays the survey page, and a default catch-all route that leads to `home.html` which displays the home page.

> `apiRoutes.js` file contains two routes: A GET Route to `/api/friends` that will be used to display a JSON of all possible friends, and a POST routes `/api/friends` that handles incoming survey results. This route will also be used to handle the compatibility logic.

> Application data is saved in `app/data/friends.js` as an array of objects.

### Demo

[friendfinder](http://friendfinder-nodeapp.herokuapp.com/)

### Dependencies

- Express
- Nodemon
- Path
