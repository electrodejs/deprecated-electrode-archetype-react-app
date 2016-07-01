# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

####################################################################################################
                                          Archetype-Next

## x.x.x (xxxx-xx-xx)

#### User Facing Changes

#### Internal Changes

####################################################################################################

## 7.0.2 (2016-07-01)

#### User Facing Changes

* Added support for CSS prefixing more browsers. 
  This will make css transforms work on Android for example

## 7.0.1 (2016-06-23)

#### User Facing Changes

* Added support for multiple bundles and multiple entry points. Read more here:
  https://gecgithub01.walmart.com/electrode/proposals/issues/119

## 6.3.0 (2016-06-23)

#### Internal Changes

* Use `stylus-relative-loader`, which supports dynamic import paths for
  multi-tenancy purposes.
* Add `stylus` as a dependency and upgrade to 0.54.5. `stylus-relative-loader`
  (and newer versions of `stylus-loader`) declare it as a `peerDependency`.

## 6.1.0 (2016-06-03)

#### Internal Changes

* Remove `lodash-webpack-plugin` as it was silently breaking some functionality


## 3.6.0 (2016-04-18)

#### User Facing Changes

* Only supported `moment` locales are included in the client-side bundle

#### Internal Changes

* Add `map-isomorphic-cdn` script

## 3.4.7 (2016-04-01)

#### User Facing Changes

* Fix IE9 CSS prefix support

#### Internal Changes

* Add production Babel transforms and always build with `NODE_ENV=production`
* Fix JS sourcemaps to not be overwritten by an empty CSS sourcemap

## 3.4.5 (2016-03-28)

#### Internal Changes

* Re-enabled webpack `DedupePlugin` to decrease bundle size

## 3.1.0 (2016-02-24)

#### User Facing Changes

* Added es5-node and mocha lint updates for server code and tests
* Added mocha, sinon, chai test support for server-only tests
* Added `builder run test-server-cov` and `builder run test-server-dev` to run mocha tests
* Updated webpack build to ignore files in `client/vendor`
* Updated webpack/karma to only load `test/client` files
* Updated webpack config to ignore `client/vendor` in addition to `node_modules`

#### Internal Changes

* Added .eslintrc-mocha-test for linting server tests
* Added config/mocha/setup.js to setup sinonChai and `expect`
* Updated karma `entry.js` to only load `test/client` files

## 3.0.4

#### Internal Changes

* Correct README
* Remove `karma-sinon-chai`

## 3.0.1 (2016-02-16)

#### User Facing Changes

* Added tl;dr for common questions and quickstart.
* Added `builder run dev-static` to build javascript and css for development without uglify.
* Fixed `builder run server-watch` so that `nodemon` will update on JSX file changs.
* Added `builder run debug` to re-build dev-static and run node server in debug mode.
* Added l10n support.
* Added extra image extension support for webpack builds.
* Fix sourcemaps for webpack development to use `eval`.

#### Internal Changes

* Cleaned up webpack using webpack-partial to compose loaders and plugins.
* Removed references to `builder run clean-lib` as this is only applicable to component repos.
* Moved dev dependencies into /dev/ and/or as peerDependencies.
* Added babel-polyfill to tests.
* Point all webpack configuration 127.0.0.1 references to dev.walmart.com.
* Add `engines` requirement to package.json for node v4 and npm v3.

## 2.1.0 (2016-02-08)

#### User Facing Changes

* Correct Babel5/6 conflict by upgrading isparta-loader to 2.x
* Correct test error where babel-polyfill was incorrectly required

#### Internal Changes

* Add babel-eslint and eslint-plugin-filenames devDependencies

## 2.0.0 (2016-02-03)

#### User Facing Changes

* Upgrade Babel 5->6
* Split the archetype into dev and prd
* Add babel-loader babel-cli and babel-cli peerDependencies

#### Internal Changes

* Sort npm scripts for improved readability
* Correct midding devDependencies
* Add .gitignore
* Update the scripts to more closely align with the component archetype
* Remove dependency on babel
* Remove unsupported babel-loader option

## 1.1.2 (2015-01-21)

## 1.1.0 (2015-01-03)

## 1.0.0 (2015-12-09)

### Added
- Initial release [#1](https://gecgithub01.walmart.com/electrode/electrode-archetype-react-app/pull/1/)
    - [configs for `webpack`, `karma`, `eslint`, `babel`](config)
    - [tasks](README.md#tasks)
    - docs for [README.md](README.md), [CHANGELOG.md](CHANGELOG.md), [CONTRIBUTING.md](CONTRIBUTING.md)
