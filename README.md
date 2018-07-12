# About
This is a simple web template for Node.js organized according to a 4 tier MVC architecture.

It's goal is to provide a quick starting point for those who wants to develop web applications using Node.js and its related technologies.

# Node modules
This template includes the following modules.

* [express](https://www.npmjs.com/package/express): one of the most used web frameworks for node. 
* [ejs](https://www.npmjs.com/package/ejs): embedded Javascript templates. Is the view engine of the web site.
* [mysql](https://www.npmjs.com/package/mysql): MySQL database management system driver for node.
* [consign](https://www.npmjs.com/package/consign): successor of express-load. It is used to load scripts separated according to MVC architecture (for example, those in models, controllers, routes, etc).
* [body-parser](https://www.npmjs.com/package/body-parser): body parsing middleware for node. Used to parse incoming request bodies before handling them in the backend. After that, you can access properties like `req.body.foo`;
* [express-session](https://www.npmjs.com/package/express-session): a session middleware for Express. Can be used to control logged users, selected language, background color, nickname, and others session related variables. Session properties can be accessed using `session` object of `req`, for example: `req.session.username`;
* [express-validator](https://www.npmjs.com/package/express-validator): a middleware to validate incoming requests. Can be used, for example, to check if a required field (not validated by the front-end) was not filled.

It is also recommended to install [nodemon](https://www.npmjs.com/package/nodemon) so you don't have to restart your application to reflect changes every time the code is changed.

# Other modules
This template also includes the version 4 of [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/) and its starter template.

# Usage
1. Clone this repository in your workspace:
    ```
        git clone ...
    ```
2. Install dependencies:
    ```
        npm install --save
    ```
3. Change web application info in `package.json` file, such as app name, license and so on.
4. Run the application
    ```
        nodemon app
    ```
    or 
    ```
        node app
    ```
5. If everything worked, you should be able to reach the page in [http://localhost:8888](http://localhost:8888).

