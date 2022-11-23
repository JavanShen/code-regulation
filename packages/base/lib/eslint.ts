import fs from 'fs'
import type { Config } from '../types/config'

const extend = {
    Vanilla: ['@beaglee/eslint-config-base'],
    Vue: ['@beaglee/eslint-config-vue']
}

const addEslint = ({ framework, variant }: Config) => {
    const res = extend[framework]

    if (variant === 'TypeScript') {
        res.push('@beaglee/eslint-config-typescript')
    }

    const eslint = {
        extends: res
    }

    fs.writeFileSync(
        './.eslintrc.js',
        `module.exports = ${JSON.stringify(eslint, null, 4)}`
    )
}

export default addEslint
