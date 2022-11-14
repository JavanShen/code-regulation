import path from 'path'

const rootDirName = 'code-regulation'

const dir = path.resolve()

const pathChunk = dir.split(rootDirName)

export default dir.replace(pathChunk[pathChunk.length - 1], '')
