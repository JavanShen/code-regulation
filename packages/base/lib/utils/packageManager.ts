import fs from 'fs'

const result: { [K: string]: boolean } = {
    npm: fs.existsSync('./package-lock.json'),
    yarn: fs.existsSync('./yarn.lock'),
    pnpm: fs.existsSync('./pnpm-lock.yaml')
}

let pm = ''

Object.keys(result).forEach(key => {
    if (result[key]) {
        pm = key
    }
})

const packageManager = pm

export default packageManager
