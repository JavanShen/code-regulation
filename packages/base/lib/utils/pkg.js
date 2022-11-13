import fs from 'fs'
import path from 'path'
import rootDir from './rootPath.js'

const pkg = JSON.parse(
    fs.readFileSync(path.join(rootDir, './package.json'), 'utf-8') || '{}'
)

const getPkg = prop => {
    return prop ? pkg[prop] : pkg
}

export default getPkg
