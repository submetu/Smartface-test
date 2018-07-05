# Smartface-test
A rock paper scissor game


## Documentation

To install the dependencies run\
`npm install`\
To start the project, run\
`npm start`\
To run the tests, run\
`npm test`/


## Structure of the project
The project consists of a simple index.html file that is served via the web pack development server.\
Webpack is used for code bundling and for converting es6 to es5.\
There are some basic styles in the `style.css` file. \
The project starts with the `index.js` file. \
We have three base classes.\
1. Game
2. Player
3. Computer

## Game class
The `Game` class is responsible for the game itself. It takes in the a `player` and a `computer` instance.\
It also takes in a `comparator` that is responsible for the rules of the game.\
As with any `Game` class, it has a `start` and an `end` method.\
## Player and Computer class
The Player and Computer classes have both a `roll` method. This method sets a random state. It's to mimick an actual roll of a dice.\
## UI
The UI is simple. It has a button to start the game. When the button is pressed, both the player and computer\
instance rolls and according to the result of the rolls (which is decided by the comparator), the result is shown on the screen.\
## Additional Notes
There is a `constants.js` file that holds all the string values used in the project. This is useful\
for not making a typo while developing.\
## Tests
The tests are run by the `Mocha` framework. Also, for spys I use `SinonJs`.