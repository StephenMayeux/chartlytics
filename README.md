# JavaScript Exercise

## Prerequisites

All you need is a recent version of Node.   

## Running the React Web App

Fork and `git clone` this repo to your local machine. `cd` in the project directory and run `npm install` for dependencies, and finally, `npm start` to spin up the development server. Then, point your browser to `localhost:8080`.

On the right side of the screen, you will find a list of resources, with adjacent resources with type of 'Person' into a single resource. The React application took the initial array of objects, which can be found in `./src/reducers/list.js`, and mapped them to a new array of objects.

You may use the form on the left to add new resources. As you add new items, the list will automatically regenerate. Quite fun!

**Note**: There is currently no form validation, so please 1) capitalize the type, 2) use integers for order, and 3) don't leave any fields blank.

## Running the Brute Force Solution

If you want a purely CLI experience, then no problem! Simply run `node bruteForce.js` and the output will appear in the terminal. You may modify the array of objects in `./resources.js` for different results!
