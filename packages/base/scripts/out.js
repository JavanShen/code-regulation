import fs from 'fs'

fs.createReadStream('./package.json', 'utf-8').pipe(
    fs.createWriteStream('./dist/package.json', 'utf-8')
)
