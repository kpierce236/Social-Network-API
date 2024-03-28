# Social Network API

## Description

The Social Network API is a RESTful web service designed for managing user data and interactions in a social networking application. Built using Express.js, Mongoose, and MongoDB, this API provides endpoints for creating, reading, updating, and deleting users, thoughts, reactions, and friend relationships. It offers a flexible and scalable solution for handling large amounts of unstructured data typically found in social media platforms.

## Table of Contents
* [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Features](#features)
* [API Endpoints](#api-endpoints)
* [Demo](#demo)
* [Credits](#credits)
* [License](#license)

## Installation

To install and run the Social Network API, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all required dependencies.
4. Ensure you have MongoDB installed and running on your local machine.
5. Create a `.env` file in the root directory and provide your MongoDB connection URI.
6. (Optional) Seed your MongoDB with data `npm run seed`
7. Run `npm start` to start the server.

## Usage

After installation, you can interact with the API using tools like Insomnia or Postman to perform various CRUD operations:

- Use GET requests to retrieve user data, thoughts, and reactions.
- Use POST requests to create new users, thoughts, reactions, and friend relationships.
- Use PUT requests to update existing user data or thoughts.
- Use DELETE requests to remove users, thoughts, reactions, or friend relationships.

## Features

Features of this application include the ability to create users/thoughts, find all users/thoughts, find a single user/single thought, update user/thought information, and delete a user/thought. The ability to add reactions to particular thoughts, and friends to users is also a notable feature -> when a thought, reaction, or friend is added to the database, it will update within the user object accordingly.

## API Endpoints

### Users
- `GET /api/users`: Retrieve all users or a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update an existing user.
- `DELETE /api/users/:userId`: Delete a user by ID.

### Friends
- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

### Thoughts
- `GET /api/thoughts`: Retrieve all thoughts or a single thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update an existing thought.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by ID.

### Reactions
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

## Demo

Check out the application functionality in action: 

*Click the gif to download the full video from Google Drive*

[![Demo of the Application](images/demo.gif)](https://drive.google.com/file/d/1ybK6gS3WK2b2Q72avJJwmmtkudY68zP5/view)


## Credits

### Documentation

- [MongoDB](https://www.mongodb.com/): 
- [Mongoose](https://mongoosejs.com/): 
- [Express.js](https://expressjs.com/):

### Dependencies

- [Express.js](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [.env](https://www.npmjs.com/package/dotenv)
- [Insomnia](https://insomnia.rest/)


## License

Please refer to the license in the repository.