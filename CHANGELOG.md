# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

####################################################################################################
                                          Archetype-Next

## x.x.x (xxxx-xx-xx)

#### User Facing Changes

#### Internal Changes

####################################################################################################

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
