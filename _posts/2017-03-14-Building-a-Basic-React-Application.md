---
layout: post
title: Building a Basic React Application
category: blog
tags:
  - javascript
  - react
modified: 2017-03-14T00:00:00-07:00
comments: true
---

We're going to put together a single page application using React.

#### Features

* Webpack
* ReactJS
* Babel
* Open Source

## Setup

### Create project directory

    $ mkdir projectName && cd projectName

### Initialize [Git/GitHub](https://github.com/)

    $ git init
    $ git create
    $ echo "# projectName" > README.md
    $ git add . && git commit -m "Initial commit" && git push origin master && git browse
    $ git branch --set-upstream-to=origin/master master
    $ git pull origin master

> `git create` and `git browse` commands are available via [hub](https://github.com/github/hub).

### Add [.gitignore](https://github.com/github/gitignore)

    $ touch .gitignore

#### `.gitignore`
```
/node_modules
/dist
/npm-debug.log
```

## Install [NPM](https://www.npmjs.com/) modules

### Generate [package.json](https://docs.npmjs.com/files/package.json)

    $ npm init

#### `package.json`
``` json
{
  "name": "video-door",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npm run build",
    "build": "webpack -d && cp src/index.html dist/index.html && webpack-dev-server --content-base src/ --inline --hot",
    "build:prod": "webpack -d && cp src/index.html dist/index.html"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ibraheem4/video-door.git"
  },
  "author": "Ibraheem Abdul-Malik <ibraheem4@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ibraheem4/video-door/issues"
  },
  "homepage": "https://github.com/ibraheem4/video-door#readme",
  "dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  },
  "devDependencies": {
    "babel-core": "^6.24.0",
    "babel-loader": "^6.4.0",
    "babel-preset-es2015": "^6.24.0",
    "babel-preset-react": "^6.23.0",
    "babel-preset-stage-2": "^6.22.0",
    "webpack": "^2.2.1",
    "webpack-dev-server": "^2.4.2"
  }
}
```

> I prefer the [MIT License](https://opensource.org/licenses/MIT) because it is the simplest and most popular free software license.

### Install [React](https://facebook.github.io/react/) dependencies

    $ npm install react react-dom --save

### Install [Webpack](https://webpack.github.io/) dependencies

    $ npm install webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev

## Create file structure

#### Create `src` folder containing `app`

    $ mkdir src
    $ mkdir src/app

#### Add webpack config

    $ touch webpack.config.js src/index.html src/app/index.js

#### `webpack.config.js`
``` javascript
var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
}

module.exports = config;
```

#### `src/index.html`
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>projectName</title>
</head>
<body>
<script src="/app/bundle.js"></script>
</body>
</html>
```

#### `src/app/index.js`
``` javascript
console.log("It works!")
```

#### Add [open-source](https://en.wikipedia.org/wiki/Open-source_software) files

    $ touch LICENSE.txt CONTRIBUTING.md AUTHORS.md

#### [LICENSE.txt](https://opensource.org/licenses/MIT)

#### [README.md](https://github.com/matiassingers/awesome-readme)

#### [CONTRIBUTING.md](https://github.com/blog/1184-contributing-guidelines)
``` markdown
## Contributing

0. Fork it
0. Create a feature branch: `git checkout -b feature-something-useful`
0. Add yourself to the `AUTHORS.md` file
0. Commit your changes: `git commit -am 'Add useful feature'`
0. Push to the branch: `git push origin feature-something-useful`
0. Submit a pull request
```

#### AUTHORS.md
``` markdown
## Authors

- **Real Name** - [@username](https://github.com/username)
```