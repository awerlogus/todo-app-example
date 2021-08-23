const fs = require('fs')

const dir = './src'

/** @type {(name: string) => boolean} */
const isDirectory = name => fs.lstatSync(`${dir}/${name}`).isDirectory()

const folders = fs.readdirSync(dir).filter(isDirectory)

/** @type {(path: string) => boolean} */
const linkExists = path => {
  try { fs.readlinkSync(path) }
  catch { return false }

  return true
}

for (const folder of folders) {
  if (linkExists(`node_modules/${folder}`)) {
    console.log(`Link to '${folder}' exists.`)

    continue
  }

  console.log(`Link to '${folder}' does not exist. Creating...`)

  fs.symlinkSync(`../src/${folder}`, `${__dirname}/node_modules/${folder}`, 'dir')
}
