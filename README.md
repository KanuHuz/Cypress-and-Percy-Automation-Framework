#  Cypress-and-percy-course
Repository for the basic course of visual regression testing with Cypress and Percy.

#  Pre-requirements
To install the project dependencies and run the automated tests, you need to have [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed on your computer.
Keep in mind this repo does not include the node_modules folder.

> The following versions of the above-mentioned packages were used during the development of this project (node v18.12.1 and npm 9.2.0.)

> Installing Node.js automatically installs NPM so you don't need to do it yourself.

#  Installation
After cloning the project, access its directory (cd cypress-and-percy-course) and run npm install to install the dev dependencies.

#  Exporting the project token created on [Percy.io](https://docs.percy.io)
As an environment variable, export the token of your project (you can find it on Percy's dashboard). See the below examples for exporting the token for both Windows and Unix (Mac and Linux) operating systems.

> # Windows
> $ set PERCY_TOKEN=<your token here>

> # Unix
> $ export PERCY_TOKEN=<your token here>
> To check token type echo $PERCY_TOKEN on console

> Source: https://docs.percy.io/docs/cypress

#  Running the tests
Run 'npm test' to execute the tests in headless mode.
