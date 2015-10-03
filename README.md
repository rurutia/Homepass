# Homepass login page with AngularJS

This project is writing Homepass webapp login and verification in AngularJS

###Live demo

[demo link](http://tc1027.metawerx.com.au/homepass-web)

*Note: this demo runs on Java/Spring MVC backend with almost identical front end codes as in this project except using a little RequireJS. The reason to choose Java is because I only have personal Java hosting.*

### Install Dependencies

There two kinds of dependencies in this project:

* Get Node/Express and Karma via `npm`
* Get AngularMocks via `bower`

`npm` *package.json* has been configured to automatically run `bower install` so run:

```
npm install
```

to install both dependencies.

Two new folders will be created in the project.

* `node_modules` - contains the npm packages
* `bower_components` - contains the angular framework files for testing

###Run the Application

The project has been configured with a simple development Node server. The simplest way to start this server is:

```
npm start
```

Now browse to the app at localhost:3000.

### Running Unit Tests

Run unit tests written in `Jasmine` with `Karma Test Runner`

* the configuration file is `karma.conf.js`
* the unit tests located under `test` folder with file names ending with `...Spec.js`

Do a single run of the tests:

```
npm run test-single-run
```