# Evaluate News Article With NLP
## Overview

The news article with NLP project is developed using a client-server architecture which makes a call to the Aylien API after submitting the form. When the call is successful, the API response will be demonstrated in the browser. The result is the sentiment analysis of the text of the URL that is pasted into the textbox. 
In this project I took advantage of Webpack, Sass, APIs, Service Workers, and Jest Tests to do the described job. 

# Getting Started
## Building The Project
Here's a quick how-to guide of commands for building and running Jest tests and the project used by the developer:

1. npm i - to install the requirements and dependencies
2. npm run build-dev - to build a development version of the project and start the webpack dev server
3. npm run build-prod - to build a production version that will be located in the dist folder to be used by the server
4. npm run test - to run jest tests
5. npm start - to start the node server

## Running The Project
After navigating to the folder that includes the project, follow these steps:
1. npm install
2. npm start
3. Access the url http://localhost:8081
4. In the textbox, enter the url of the page with the text to be analysed.
