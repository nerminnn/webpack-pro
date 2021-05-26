# Evaluate News Article  with Natural Language Processing

## Overview
This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article such as (agreement, subjectivity, Confidence, and etc )

## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## Installation
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```

### All loaders and plugins have been used in the project:
```
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
npm i -D workbox-webpack-plugin 
```
### Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

Make sure you install:
```
npm install express body-parser cors package
```

### Configure environment variables using dotenv package
    1. Install the dotenv package
   ```
   npm install dotenv
   ```
    2. Create a new `.env` file in the root of your project
    3. Fill the `.env` file with your API key like this:
   ```
   API_KEY=**************************
   ```
### Jest test was used for the following functions: 

* handleSubmit
* checkForURL

### To Run Project

cd into your project 
- `npm run build-dev` will atomatically open the browser 
- `npm run build-prod to generate a dist folder`
- `npm run start to run the Express server on port 8081`

