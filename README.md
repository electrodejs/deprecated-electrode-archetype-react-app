# Builder Archetype: Electrode React App

A Walmart Labs flavored react app archetype for [builder][].

## Installation

If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

###### run the following in your project
```bash
$ npm install --save builder @walmart/electrode-archetype-react-app
```

###### Add a `.builderrc`
The `.builderrc` should contain the following and be located in the root of your project

```yaml
---
archetypes:
  - "@walmart/electrode-archetype-react-app"
```

###### Add a `.babelrc` to your project
The `.babelrc` needs to extend
[the archetype's babel configuration](config/babel/.babelrc) in order to apply the presents (ES2015, React) and the plugins like i18n. If your project needs additional Babel settings (like using stage 0 features) you can add them to this file. See the [Babel docs](https://babeljs.io/docs/usage/babelrc/) for more information.

```json
{
  "extends": "./node_modules/@walmart/electrode-archetype-react-component/config/babel/.babelrc"
}
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
