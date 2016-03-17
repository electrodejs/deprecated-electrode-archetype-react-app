# Builder Archetype: Electrode React App

A Walmart Labs flavored react app archetype for [builder][].

## tl;dr

#### What is this for?

This "app archetype" provides for common patterns across all app projects so that each app project can standardize on common development behavior and patterns. Its essentially pre-made patterns for npm scripts.

#### How do I start developing in my application project after installing?

```bash
# This runs both the node server and webpack (in hot mode)
$ builder run hot

# Also try `dev` mode when running off battery power and you wish to maximize battery life.
$ builder run dev
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
$ builder run dev-static
```

#### Is there anything else that might be nice for my development?

```bash
# This will start the node server in debug mode so that you can place breakpoints, "debugger" statements, or use `node-inspector`.
$ builder run debug
```

#### How do I fix the following nodemon and/or babel error in my project?

```bash
[builder:proc:start] Command: nodemon --watch client --watch client --watch server --watch config server/index.js --exec node
[nodemon] 1.8.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: $HOME/walmart/my-electrode-project/client/**/* $HOME/walmart/my-electrode-project/client/**/* $HOME/walmart/my-electrode-project/server/**/* $HOME/walmart/my-electrode-project/config/**/*
[nodemon] starting `babel-node server/index.js`
You have mistakenly installed the `babel` package, which is a no-op in Babel 6.
Babel's CLI commands have been moved from the `babel` package to the `babel-cli` package.

    npm uninstall babel
    npm install babel-cli
```

Ensure that you have removed only have `babel-cli`, `babel-core`, and `babel-loader` installed, and that you have removed `babel` and `babel-runtime`.


## Installation

If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

###### run the following in your project
```bash
$ npm install --save builder @walmart/electrode-archetype-react-app @walmart/electrode-archetype-react-app-dev

# As a part of the peerDependencies in `@walmart/electrode-archetype-react-app-dev`, you will also need to install at least the following:
$ npm install --save extract-text-webpack-plugin webpack-partial webpack-stats-plugin isparta-loader
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

###### Use `babel-core/register` in your server entry point

If you don't have a build step for your server code, then you must transpile
on the fly using `babel-register`. For performance reasons, we recommend
whitelisting the `react` module to be transpiled as well, so that the
`transform-node-env-inline` plugin gets applied to the React codebase:

```js
require("babel-core/register")({
  ignore: /node_modules\/(?!react\/)/
});
```

## Tasks

```
$ builder help

[builder:help]

Usage:

  builder <action> <task(s)>

Actions:

  run, concurrent, envs, help

Flags: General

  --builderrc: Path to builder config file (default: `.builderrc`)

  --help: Display help and exit

  --version: Display version and exit

Tasks:

  npm:test
    [@walmart/electrode-archetype-react-app] builder run check

  build
    [@walmart/electrode-archetype-react-app] builder run build-dist

  build-dev-static
    [@walmart/electrode-archetype-react-app] builder run clean-dist && builder run build-dist-dev-static

  build-dist
    [@walmart/electrode-archetype-react-app] builder run clean-dist && builder run build-dist-min

  build-dist-dev-static
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
    [@walmart/electrode-archetype-react-app] builder run clean-dist

  clean-dist
    [@walmart/electrode-archetype-react-app] rimraf dist

  debug
    [@walmart/electrode-archetype-react-app] builder run build-dev-static && builder run server-debug

  dev
    [@walmart/electrode-archetype-react-app] WEBPACK_DEV=true builder concurrent server-dev server-watch

  dev-static
    [@walmart/electrode-archetype-react-app] builder run build-dev-static && builder run server

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
    [@walmart/electrode-archetype-react-app] webpack-dev-server --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.dev.js --progress --colors --port 2992

  server-hot
    [@walmart/electrode-archetype-react-app] webpack-dev-server --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.hot.js --hot --progress --colors --port 2992 --inline

  server-test
    [@walmart/electrode-archetype-react-app] webpack-dev-server --config node_modules/@walmart/electrode-archetype-react-app/config/webpack/webpack.config.test.js --progress --colors --port 3001

  server-watch
    [@walmart/electrode-archetype-react-app] nodemon --ext js,jsx --watch client --watch server --watch config server/index.js --exec node

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
