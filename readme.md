# Locator

> [Try it out](http://----/)
> Lightweight app used to mark locations for future exploration.

## Table of Contents

1. [Background](#background)
1. [Directory Layout](#directory-layout)
1. [Tech Stack](#tech-stack)
1. [Development](#development)
	 1. [Installing Dependencies](#installing-dependencies)
    1. [Environmental Variables](#environmental-variables)
    1. [Runnig the App](#running-the-app)
    1. [Deploying with Docker](#deploying-with-docker)
1. [Future Work](#future-work)

## Background

This application allows users to search for locations using the [Autocomplete](https://developers.google.com/maps/documentation/javascript/places-autocomplete) feature of the Google Places API. [React Google Maps](https://github.com/tomchentw/react-google-maps) creates an interactive Google map view as a React component.

Webpack is used for transpilation, minification, module bundling, and hot reloading of React components. The Webpack files and associated Express server are based on the configuration used by [Wes Bos](https://github.com/wesbos/Learn-Redux). 

[MaterializeCSS](http://materializecss.com/) takes care of the grid system ensuring that the application is responsive. ESLint is configured with the Airbnb style guide, ensuring that all code conforms to a single standard.


## Directory Layout

Use the diagram below as an example and starting point 

```
.
├── /env/                     # Environment variables
├── /node_modules/            # 3rd-party libraries and utilities
├── /server/                  # Express dev. and prod. servers 
├── /src/                     # Client source code
    ├── /components/          # React component files           
    ├── index.html            # HTML file containing mount point for React
    ├── index.jsx             # React entry point
	├── /vendor/              # CSS files 
├── .eslintrc                 # ESLint settings
├── .gitignore                # Ignored files from version control
├── Dockerfile                # Instructions to build docker image
├── package.json              # Dependency list and scripts to run application
├── webpack.config.prod.js    # Webpack configurations for development 
└── webpack.config.prod.js    # Webpack configurations for production
```

## Tech Stack

- React, React Google Maps, Webpack, Docker
- Webpack HMRE, Babel, Eslint, Airbnb Style Guide
- MaterializeCSS

## Development

This application can be run in production or development mode. Development will enable hot reloading of React components, will not minify JS files, and run React in development mode. Production disables hot reloading, minifies JS files, optimizes bundling, and runs React in production mode.

### Installing Dependencies

In order to run the application make sure to install all dependencies.
From within the root directory:

```sh
$ npm install
``` 

#### Environmental Variables

For this application the env vars must be created:

- Create a `clientDev.js` and `clientProd.js` file based on the `.client.sample` file: used to access environmental variables from within the client JSX components and JS files.

- Create a `development.env` and `production.env` file based on the `.env.sample` file: used to access environmental variables from the client server.

#### Running the App

From within the root directory:

Development:

```sh
$ npm start
```

Production:

```sh
$ npm run prod
```

#### Deploying with Docker

To build a Docker image run from within the root directory:

```
$ docker build -t {{imageName}} .
```

To run a container from the image:

```
$ docker run -p 80:80 -d -—name {{containerName}} {{imageName}} 
```

The -p flag maps the container port to the docker machine port. The -d flag will run the container in the background. The --name flag will give the container a custom name, if left off a random name will be generated. The container will be run in production mode.

## Future Work

This application can be expanded to include user profiles and a backend so users can store their locations of interest. As the app grows, *React Router* can be used to handle front end routing and *Redux* for state management.
