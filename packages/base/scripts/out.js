import { promises } from 'fs'

const pkg = JSON.parse(await promises.readFile('./package.json', 'utf-8'))

promises.writeFile(
    './dist/package.json',
    JSON.stringify(
        {
            ...pkg,
            bin: './bin/rec.js',
            files: ['bin', 'lib'],
            scripts: {}
        },
        null,
        2
    )
)
