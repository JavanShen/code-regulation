import execaCommand from './utils/execaCommand.js'

await execaCommand('npx husky install')

await execaCommand('npx husky add .husky/pre-commit "npm run lint-staged"')
