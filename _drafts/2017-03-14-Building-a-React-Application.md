---
layout: post
title: Building a React Application
category: draft
tags:
  - javascript
  - react
modified: 2017-03-14T00:00:00-07:00
comments: true
---

We're going to put together a single page React application, composed of multiple `Components`.  We'll setup this project using a combination of Node and Webpack.  For quickly adding front-end styling, we will use Semantic UI.

# Features

* Webpack
* ReactJS
* Babel
* Semantic UI
* Open Source

# Setup

## Create project directory

    mkdir projectName && cd projectName

## Initialize [Git/GitHub](https://github.com/)

    git init
    git create
    echo "# projectName" > README.md
    git add . && git commit -m "Initial commit" && git push origin master && git browse
    git branch --set-upstream-to=origin/master master
    git pull origin master

> `git create` and `git browse` commands are available via [hub](https://github.com/github/hub).

## Add [.gitignore](https://github.com/github/gitignore)

    touch .gitignore

> `.gitignore`

``` text
/node_modules
/dist
/npm-debug.log
```

## Install [NPM](https://www.npmjs.com/) modules

### Generate [package.json](https://docs.npmjs.com/files/package.json)

    npm init

> `package.json`

```json
{
  "name": "projectName",
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
    "url": "git+https://github.com/username/projectName.git"
  },
  "author": "Real Name <email@email.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/username/projectName/issues"
  },
  "homepage": "https://github.com/username/projectName#readme",
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

    npm install react react-dom --save

### Install [Webpack](https://webpack.github.io/) dependencies

    npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 css-loader less-loader --save-dev

# Create file structure

> Install [Semantic UI](https://semantic-ui.com/introduction/getting-started.html)

## Create `src` folder containing `app`

    mkdir src
    mkdir src/app
    mkdir src/app/components

## Add webpack config

    touch webpack.config.js src/index.html src/app/index.js

> `webpack.config.js`

```javascript
var path = require("path");
var webpack = require("webpack");

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
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url-loader?limit=100000&name=[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                include: SRC_DIR,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

module.exports = config;
```

> `src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>projectName</title>
  <script
    src="https://code.jquery.com/jquery-3.1.1.min.js"
    integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
    crossorigin="anonymous"></script>
</head>
<body>
<div id="app"></div>
<script src="/app/bundle.js"></script>
</body>
</html>
```

> `src/app/index.js`

```javascript
import React from "react";
import { render } from "react-dom";

require('../../semantic/dist/semantic.min.js');
require('../../semantic/dist/semantic.min.css');

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Header/>
        <Home/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));

$(document).ready(function() {
  $('.ui.dropdown')
    .dropdown()
  ;
});
```

> `src/app/components/Header.jsx`

```javascript
import React from "react";

export class Header extends React.Component {
  render() {
    return(
      <nav className="ui text menu">
        <div className="ui dropdown icon item">
          <i className="wrench icon"></i>
          <div className="menu">
            <div className="item">
              <i className="dropdown icon"></i>
              <span className="text">New</span>
              <div className="menu">
                <div className="item">Document</div>
                <div className="item">Image</div>
              </div>
            </div>
            <div className="item">
              Open...
            </div>
            <div className="item">
              Save...
            </div>
            <div className="item">Edit Preferences</div>
            <div className="divider"></div>
            <div className="header">
              Export
            </div>
            <div className="item">
              Share...
            </div>
          </div>
        </div>

        <div className="right menu">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input className="prompt" type="text" placeholder="Search videos..."></input>
              <i className="search link icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </div>
      </nav>
    );
  }
}
```

> `src/app/components/Home.jsx`

```javascript
import React from "react";

export class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>HOME</h1>
      </div>
    );
  }
}
```

## Add [open-source](https://en.wikipedia.org/wiki/Open-source_software) files

    touch LICENSE.txt CONTRIBUTING.md AUTHORS.md

> [LICENSE.txt](https://opensource.org/licenses/MIT)

```text
Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

> [README.md](https://github.com/matiassingers/awesome-readme)

```markdown
# projectName
```

> [CONTRIBUTING.md](https://github.com/blog/1184-contributing-guidelines)

```markdown
## Contributing

0. Fork it
0. Create a feature branch: `git checkout -b feature-something-useful`
0. Add yourself to the `AUTHORS.md` file
0. Commit your changes: `git commit -am 'Add useful feature'`
0. Push to the branch: `git push origin feature-something-useful`
0. Submit a pull request
```

> `AUTHORS.md`

```markdown
## Authors

- **Real Name** - [@username](https://github.com/username)
```

# Start development server

    npm start

> Project will run by default on `http://localhost:8080/`
