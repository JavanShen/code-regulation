import fs from 'fs'

const addPrettier = () => {
    fs.writeFileSync(
        './.prettierrc.js',
        `module.exports = require('@beaglee/prettier')`
    )
}

export default addPrettier
