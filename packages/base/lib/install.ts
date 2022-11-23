import execaCommand from './utils/execaCommand.js'
import packageManager from './utils/packageManager.js'

await execaCommand(`${packageManager || 'npm'} install`)
