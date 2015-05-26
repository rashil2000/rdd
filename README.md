# rdd.js [![npm Version](http://img.shields.io/npm/v/rdd.svg?style=flat)](https://www.npmjs.org/package/rdd) [![Build Status](https://img.shields.io/travis/yuanqing/rdd.svg?style=flat)](https://travis-ci.org/yuanqing/rdd)

> Preview your `README.md` locally as it would appear on Github, with changes reflected on-the-fly. Great for [Readme Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html).

## Quick start

```
$ ls
README.md
$ npm i -g rdd
$ rdd -o
Serving on localhost:8888
```

Here we&rsquo;re using the `-o` flag to open the rendered page in the web browser. The rendered Markdown will be updated automatically whenever we change `README.md`.

## Usage

```
Usage: rdd [file] [options]

File:
  If not specified, tries to find a README file (eg. README.md) in the
  current directory.

Options:
  -o, --open BROWSER  Open the rendered Markdown file in the specified browser.
  -p, --port PORT     Set the port to serve the rendered file. Default: 8888.
  -h, --help          Print this message.
```

## Installation

Install via [npm](https://npmjs.com/):

```
$ npm i -g rdd
```

## Prior art

- [Grip](https://github.com/joeyespo/grip) is a similar tool written in Python

## Changelog

- 0.1.0
  - Initial release

## License

[MIT](https://github.com/yuanqing/rdd/blob/master/LICENSE)
