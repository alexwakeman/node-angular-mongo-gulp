# Gulp, browser-sync, Node.js and MongoDB for AngularJS, Bootstrap front-end


## Description

This is a project skeleton to quickly start your project. It's composed of a nodejs backend server used to host a RESTful api using express and mongoose, and a frontend AngularJS application with ui-router. Gulp is used as the build management system, with browser-sync used to serve static files.


## Installation

Get the sources:
```bash
git clone https://github.com/alexwakeman/node-angular-mongo-gulp.git
```

### NodeJS

In order to start the nodejs server, we need express and mongoose dependencies.

In the `server/` directory, install the nodejs dependencies:
```bash
alex@home:server$ npm install
```

### AngularJS

Install Gulp dependencies including browser-sync:
```bash
alex@home:$ npm install
```

Use Gulp to build your JavaScript sources into app/js/concat/app.js, and open browser-sync:
```bash
alex@home$ gulp
```

You should see:
```bash
alex@home:$ gulp
[16:35:19] Using gulpfile ~/node-angular-mongo-gulp/gulpfile.js
[16:35:19] Starting 'sass'...
[16:35:19] Finished 'sass' after 8.38 ms
[16:35:19] Starting 'scripts'...
[16:35:19] Finished 'scripts' after 38 ms
[16:35:19] Starting 'serve'...
[16:35:19] Finished 'serve' after 42 ms
[16:35:19] Starting 'default'...
[16:35:19] Finished 'default' after 10 μs
[BS] Access URLs:
 ------------------------------------
       Local: http://localhost:3000
    External: http://192.168.0.4:3000
 ------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.0.4:3001
 ------------------------------------
[BS] Serving files from: ./app

```

## Usage

### Server (HTTP)

Uses gulp-browserify to serve up static angular files at http://localhost:3000

### Server (RESTful API)

The nodejs server is only used as a RESTful API. It is not meant to be used as a HTTP server delivering the Angularjs application.

Starts the nodejs application:
```bash
node server/app.js
```

You should see:
```bash
alex@home:/var/www/angular/template$ node server/app.js 
[INFO] Your project API started on port 4001
[DB] Successfully connected to: mongodb://localhost/template
```

### Client

Open your browser on `http://localhost:3000/`, but should open with browser-sync

## Stack

* AngularJS v1.2.17
* ui-router v0.2.10
* Bootstrap v3.0.2
* MongoDB 
* Node.js
* mongoose
* browser-sync v2.7.6

## Licence
The MIT License (MIT)

Copyright (c) 2015 Alex Wakeman (alex@colab.codes)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
