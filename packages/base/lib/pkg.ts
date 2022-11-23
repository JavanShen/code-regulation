import fs from 'fs'
import getDependencies from './dependencies.js'
import depVersion from './depVersion.js'
import type { Pkg, DependenciesConfig } from '../types/pkg'
import type { Config } from '../types/config'

const addDependency = (config: Config) => {
    try {
        const pkg: Pkg = JSON.parse(
            fs.readFileSync('./package.json', 'utf-8') || '{}'
        )

        const res = getDependencies(config)

        const dependencies: DependenciesConfig = res.reduce((pre, cur) => {
            const newObj = {
                ...pre,
                cur: depVersion[cur]
            }
            return newObj
        }, {} as DependenciesConfig)

        pkg.devDependencies = {
            ...(pkg.devDependencies as object),
            ...dependencies
        }

        fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 4))
    } catch (error) {
        throw new Error('找不到package.json文件')
    }
}

export default addDependency
