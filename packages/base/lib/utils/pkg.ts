import { createRequire } from 'module'
import type { Pkg } from '../../types/pkg'

const req = createRequire(import.meta.url)

const pkg: Pkg = req('../../package.json')

const getPkg = (prop: string) => {
    return prop ? pkg[prop] : pkg
}

export default getPkg
