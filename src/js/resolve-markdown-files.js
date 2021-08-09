const path = require('path')
const markdownExtensions = require('markdown-extensions')

const name = require('../../package.json').name

function logError (message) {
  console.error(`${name}: ${message}`)
  process.exit(1)
}

async function resolveMarkdownFiles (globPatterns) {
  const files = globPatterns.filter(fname => markdownExtensions.indexOf(path.extname(fname).replace('.', '')) !== -1)
  if (files.length === 0) {
    return logError('Need a Markdown file')
  }
  return files
}

module.exports = resolveMarkdownFiles
