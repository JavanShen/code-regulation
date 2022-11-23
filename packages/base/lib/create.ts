import inquirer from 'inquirer'
import packageManager from './utils/packageManager.js'
import type { Config } from '../types/config'

import addDependency from './pkg.js'
import addEslint from './eslint.js'
import addPrettier from './prettier.js'

const create = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'framework',
                message: 'Select a framework',
                choices: ['Vanilla', 'Vue']
            },
            {
                type: 'list',
                name: 'variant',
                message: 'Select a variant',
                choices: ['JavaScript', 'TypeScript']
            },
            {
                type: 'list',
                name: 'manager',
                message: 'Select a package manager',
                choices: ['npm', 'yarn', 'pnpm'],
                default: packageManager
            }
        ])
        .then(async (answer: Config) => {
            addDependency(answer)
            addEslint(answer)
            addPrettier()
        })
}

export default create
