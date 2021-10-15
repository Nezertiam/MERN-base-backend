# About the project

***This project is still under development!***
Please, do not use it now unless you know what you are doing.

I created this project to learn more about the MERN stack and to propose the base to *avoid beginning new MERN projects from scratch*. I built it to be used for projects requiring an API.
You can download it and reuse it for your future MERN projects.

I am still learning about the stack so, of course, there are things that can be improved.

## The stack

MongoDB, Express JS

It uses the following dependencies: mongoose, config, request, express-validator and jsonwebtoken.

## How to launch it

First you can navigate to *package.json* and *config/init.js* to make sure you are okay with the scripts the next command will run.

Then run `npm run init`. It will generate the files ignored by the .gitignore like default.json which contains sensible datas like the MongoDB URI you don't want it public on Github. It will also install all the dependencies so you don't need to do it.

## Configure it !

The next step consists to fill the mongoURI parameter in *config/default.json* to connect your MongoDB.

You can also change the secret for the JWT in this file, but this step is facultative.

## You're free to go !

You are now good to get into the code! Feel free to modify everything, it is yours now! Thanks for downloading this repo and I hope it helped you!