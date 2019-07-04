# rdd [![npm Version](https://badgen.net/npm/v/rdd)](https://www.npmjs.org/package/rdd) [![Build Status](https://badgen.net/travis/yuanqing/rdd?label=build)](https://travis-ci.org/yuanqing/rdd)

> Preview your Markdown locally as it would appear on GitHub, with live updating

## Quick start

Requires [Node.js](https://nodejs.org/).

```sh
$ ls
README.md
$ npm i -g rdd
$ rdd -o
Serving on 0.0.0.0:8888/README.md
```

Here we’re using the `-o` flag (`--open` works, too) to open the rendered page in our default web browser. The page will be updated automatically whenever we change `README.md`. This is useful for [Readme Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html).

## Usage

```
rdd [file]

Renders and serves the given Markdown file

Options:
  --help      Show help                                                [boolean]
  --version   Show version number                                      [boolean]
  --open, -o  Open the rendered Markdown file in your default web browser
                                                      [boolean] [default: false]
  --port, -p  Set the preferred port to serve your Markdown file
                                                        [number] [default: 8888]
  --toc, -t   Insert a table of contents into the Markdown file
                                                      [boolean] [default: false]
```

Use the `<!-- toc -->` and `<!-- tocstop -->` HTML comments to [demarcate where a table of contents should be rendered in your Markdown document](https://github.com/jonschlinkert/markdown-toc#tocinsert). (This table of contents will be updated automatically as you edit your file.)

To “commit” the table of contents in your Markdown document, do:

```
$ rdd -t
```

## Installation

```sh
$ npm install --global rdd
```

## Known issues

- Syntax highlighting for code blocks (using [Highlight.js](https://github.com/isagalaev/highlight.js)) is slightly different from what GitHub actually uses

## Prior art

- [Grip](https://github.com/joeyespo/grip) is a similar tool written in Python

## License

[MIT](LICENSE.md)
