Builder Archetype: Electrode React App
==================================

A React app archetype for [builder][].

## Installation

To use the production and development workflows, install both this package
and the development module:

```sh
$ npm install --save builder @walmart/electrode-archetype-react-app
```

## Usage Notes

This archetype does not currently specify its own `.babelrc`. Your project
should specify its own in the root directory if you want non-default Babel
settings (like using stage 0, for instance). See [the recommended
settings](config/babel/.babelrc).

You should have a `.builderrc` file in your app's root directory:

```
---
archetypes:
  - "@walmart/electrode-archetype-react-app"
```

## Tasks

```
$ builder help

[builder:help]

Usage:

  builder [action] [task]

Actions:

  help, init, run, concurrent, install

Tasks:

  npm:test
    [@walmart/electrode-archetype-react-app] builder run lint && builder run test-frontend-cov

  build
    [@walmart/electrode-archetype-react-app] builder run clean-dist && webpack --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.js

  check
    [@walmart/electrode-archetype-react-app] builder run lint && builder run npm:test

  check-ci
    [@walmart/electrode-archetype-react-app] builder run lint && builder run test-frontend-ci

  check-cov
    [@walmart/electrode-archetype-react-app] builder run lint && builder run test-frontend-cov

  check-dev
    [@walmart/electrode-archetype-react-app] builder run lint && builder run test-frontend-dev

  clean
    [@walmart/electrode-archetype-react-app] builder run clean-dist && builder run clean-lib

  clean-dist
    [@walmart/electrode-archetype-react-app] rimraf dist

  clean-lib
    [@walmart/electrode-archetype-react-app] rimraf lib

  dev
    [@walmart/electrode-archetype-react-app] builder run server-dev & WEBPACK_DEV=true builder run server

  hot
    [@walmart/electrode-archetype-react-app] builder run server-hot & WEBPACK_DEV=true builder run server

  lint
    [@walmart/electrode-archetype-react-app] builder concurrent lint-client lint-client-test lint-server lint-server-test

  lint-client
    [@walmart/electrode-archetype-react-app] eslint --ext .js,.jsx -c node_modules/@walmart/electrode-archetype-react-app/config/eslint/.eslintrc-react client templates

  lint-client-test
    [@walmart/electrode-archetype-react-app] eslint --ext .js,.jsx -c node_modules/@walmart/electrode-archetype-react-app/config/eslint/.eslintrc-react-test test/client

  lint-server
    [@walmart/electrode-archetype-react-app] eslint -c node_modules/@walmart/electrode-archetype-react-app/config/eslint/.eslintrc-node server

  lint-server-test
    [@walmart/electrode-archetype-react-app] eslint -c node_modules/@walmart/electrode-archetype-react-app/config/eslint/.eslintrc-node test/server test/func

  server
    [@walmart/electrode-archetype-react-app] nodemon --watch client --watch client --watch server --watch config server/index.js --exec babel-node

  server-dev
    [@walmart/electrode-archetype-react-app] builder run clean-dist && webpack-dev-server --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.dev.js --progress --colors --port 2992

  server-hot
    [@walmart/electrode-archetype-react-app] builder run clean-dist && webpack-dev-server --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.hot.js --hot --progress --colors --port 2992 --inline

  test-frontend-ci
    [@walmart/electrode-archetype-react-app] karma start --browsers PhantomJS,Firefox node_modules/@walmart/electrode-archetype-react-app/config/karma/karma.conf.coverage.js --colors

  test-frontend-cov
    [@walmart/electrode-archetype-react-app] karma start node_modules/@walmart/electrode-archetype-react-app/config/karma/karma.conf.coverage.js --colors

  test-frontend-dev
    [@walmart/electrode-archetype-react-app] karma start node_modules/@walmart/electrode-archetype-react-app/config/karma/karma.conf.dev.js --colors
```

[builder]: https://github.com/FormidableLabs/builder
