import { createRequire } from 'module'

interface Pkg {
    [key: string]: unknown
}

const req = createRequire(import.meta.url)

const pkg: Pkg = req('../../package.json')

const getPkg = (prop: string) => {
    return prop ? pkg[prop] : pkg
}

export default getPkg
