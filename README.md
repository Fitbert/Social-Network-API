# Social Network API
  

## Challenge Week 18

Social Network API challenge

## Table of Contents

- [Description](#description)

- [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

- [Screenshots](#screenshots)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Credits](#credits)

- [Features](#features)

- [Usage-Information](#usage-information)

- [Test-Instructions](#testing)

- [License](#license)



## Description

This application was created as the start of a full stack social network application using a MongoDB database, Express.js routing, and the Mongoose ODM. It sets up the initial CRUD API routes for said application which allow users to be created, searched for, updated, and deleted. Users can also share their thoughts, react to friends' thoughts, create a friend list, and subsequently delete thoughts, reactions, friends, and themselves as a user. Although this application is still at the ground floor of its full potential, the MongoDB database and API middleware routing is an integral first step in leaning about the potential of MongoDB and the Mongoose ODM.

## Live Screen Recording


## Screenshots



## Technologies Used

This application is powered by Node.js (v16.19.1), Express.js (v.14.18.2), JavaScript, MongoDB, and Mongoose (ODM). It utilizes the node package manager (npm) dependencies express (v4.18.2), and mongoose (v7.2.2). Used MongoDB Compass a an interactive shell to see the database, also Insomnia was use to interact with the database. 

## Usage
You will need to install the npm package using the following command line, then use the following command npm install, and  npm start(or node index.js).

This weeks challenge was create the back end for a social network site with MongoDB enabled DB. This you will be able to use Insomnia to do CRUD operations. 

## Installation

1. Clone the repo:
   git clone [https://github.com/rmessett15/Social-Network-API.git](https://github.com/Fitbert/Social-Network-API.git)

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install dependencies directly from the command line).

   Commands to install each dependency:

   - Command for express will be npm i express@4.18.2
   - Command for mongoose will be npm i mongoose
   - Command for nodemon will be npm i nodemon
   - Command for jest will be npm i jest

6. Be sure to have MongoDB installed on your machine. Follow the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) to install MongoDB locally.

7. Once all dependencies are installed, you will then be able to run the command npm start from the root directory to spin up the server. With nodemon installed, you will also be able to utilize the command npm run dev to keep the server spun up between code edits.

8. From there, you can utilize applications such as Insomnia to test the functionality of the API routes within the program and make edits to the code base.




## Features

Features of this application include the ability to create users/thoughts, find all users/thoughts, find a single user/single thought, update user/thought information, and delete a user/thought. The ability to add reactions to particular thoughts, and friends to users is also a notable feature -> when a thought, reaction, or friend is added to the database, it will update within the user object accordingly.


## Credits

I worked with my tutor Jun was a awesome help with this project with the debugging aspects of this. 


## Testing
 
 None at the moment. 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)