import fs from 'fs'
import path from 'path'
import rootDir from './rootPath.js'

interface Pkg {
    [key: string]: unknown
}

const pkg: Pkg = JSON.parse(
    fs.readFileSync(path.join(rootDir, './package.json'), 'utf-8') || '{}'
)

const getPkg = (prop: string) => {
    return prop ? pkg[prop] : pkg
}

export default getPkg