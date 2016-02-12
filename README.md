# Builder Archetype: Electrode React App

A Walmart Labs flavored react app archetype for [builder][].

## tl;dr

#### What is this for?

This "app archetype" provides for common patterns across all app projects so that each app project can standardize on common development behavior and patterns. Its essentially pre-made patterns for npm scripts.

#### How do I start developing in my application project after installing?

```bash
# This runs both the node server and webpack (in hot mode)
$ builder run hot
```

#### What is `hot mode`?

`Hot mode` is where webpack transpiles your javascript and css code and continues to watch for any changes, and, builds and loads only the code that has changed on disk. It allows you to develop without re-loading your browser page as the changes will be automagically piped in.

#### How do I run my application tests?

```bash
# This will run test eslint and your spec tests
$ builder run check
```

#### How do I run my application tests without going through eslint (i.e., while I'm developing)?

```bash
# This will run only your spec tests
$ builder run test-dev
```

#### Why can't my test and code changes get automatically run with the tests?  Why do the tests take so long to start?

```bash
# This will start a webpack-dev-server to hot watch your code and also start a karma test browser that auto-reruns when specs or client code changes.
$ builder run test-watch-all
```

#### How do I use and/or view the final build files without minifying/uglifying but also with sourcemaps?

```bash
# This will build your code and save to disk, and then start a node server (without using webpack-dev-server).
$ builder run dev
```

#### Is there anything else that might be nice for my development?

```bash
# This will start the node server in debug mode so that you can place breakpoints, "debugger" statements, or use `node-inspector`.
$ builder run debug
```

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
  "extends": "./node_modules/@walmart/electrode-archetype-react-app/config/babel/.babelrc"
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

Flags: General

  --builderrc: Path to builder config file (default: `.builderrc`)

  --help: Display help and exit

  --version: Display version and exit

Tasks:

  npm:test
    [@walmart/electrode-archetype-react-app] builder run check

  build
    [@walmart/electrode-archetype-react-app] builder run build-dist

  build-dev
    [@walmart/electrode-archetype-react-app] builder run clean-dist && builder run build-dist-dev

  build-dist
    [@walmart/electrode-archetype-react-app] builder run clean-dist && builder run build-dist-min

  build-dist-dev
    [@walmart/electrode-archetype-react-app] webpack --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.dev.static.js --colors

  build-dist-min
    [@walmart/electrode-archetype-react-app] webpack --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.js --colors

  check
    [@walmart/electrode-archetype-react-app] builder run lint && builder run test-cov

  check-ci
    [@walmart/electrode-archetype-react-app] builder run lint && builder run test-ci

  check-cov
    [@walmart/electrode-archetype-react-app] builder run lint && builder run test-cov

  check-dev
    [@walmart/electrode-archetype-react-app] builder run lint && builder run test-dev

  clean
    [@walmart/electrode-archetype-react-app] builder run clean-dist && builder run clean-lib

  clean-dist
    [@walmart/electrode-archetype-react-app] rimraf dist

  dev
    [@walmart/electrode-archetype-react-app] builder run build-dev && builder run server

  hot
    [@walmart/electrode-archetype-react-app] WEBPACK_DEV=true builder concurrent server-hot server-watch

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
    [@walmart/electrode-archetype-react-app] node server/index.js

  server-debug
    [@walmart/electrode-archetype-react-app] node debug server/index.js

  server-dev
    [@walmart/electrode-archetype-react-app] builder run clean-dist && webpack-dev-server --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.dev.js --progress --colors --port 2992

  server-hot
    [@walmart/electrode-archetype-react-app] builder run clean-dist && webpack-dev-server --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.hot.js --hot --progress --colors --port 2992 --inline

  server-test
    [@walmart/electrode-archetype-react-app] builder run clean-dist && webpack-dev-server --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.test.js --progress --colors --port 3001

  server-watch
    [@walmart/electrode-archetype-react-app] nodemon --watch client --watch server --watch config server/index.js --exec babel-node

  test-ci
    [@walmart/electrode-archetype-react-app] builder run test-frontend-ci

  test-cov
    [@walmart/electrode-archetype-react-app] builder run test-frontend-cov

  test-dev
    [@walmart/electrode-archetype-react-app] builder run test-frontend-dev

  test-frontend
    [@walmart/electrode-archetype-react-app] karma start node_modules/@walmart/electrode-archetype-react-app/config/karma/karma.conf.js --colors

  test-frontend-ci
    [@walmart/electrode-archetype-react-app] karma start --browsers PhantomJS,Firefox node_modules/@walmart/electrode-archetype-react-app/config/karma/karma.conf.coverage.js --colors

  test-frontend-cov
    [@walmart/electrode-archetype-react-app] karma start node_modules/@walmart/electrode-archetype-react-app/config/karma/karma.conf.coverage.js --colors

  test-frontend-dev
    [@walmart/electrode-archetype-react-app] (pgrep -fl 'webpack-dev-server.*3001' && karma start node_modules/@walmart/electrode-archetype-react-app/config/karma/karma.conf.dev.js --colors) || builder run test-frontend

  test-frontend-dev-watch
    [@walmart/electrode-archetype-react-app] karma start node_modules/@walmart/electrode-archetype-react-app/config/karma/karma.conf.watch.js --colors --browsers Chrome --no-single-run --auto-watch

  test-watch
    [@walmart/electrode-archetype-react-app] (pgrep -fl 'webpack-dev-server.*3001' && builder run test-frontend-dev-watch) || builder run test-watch-all

  test-watch-all
    [@walmart/electrode-archetype-react-app] builder concurrent server-test test-frontend-dev-watch
```

[builder]: https://github.com/FormidableLabs/builder
