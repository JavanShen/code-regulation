import type { Config } from '../types/config'
import type { Dependencies } from '../types/pkg'

const dependency = {
    Vanilla: ['@beaglee/eslint-config-base'],
    Vue: ['@beaglee/eslint-config-vue']
} as const

const peer = [
    'eslint',
    'prettier',
    'husky',
    'lint-staged',
    '@beaglee/prettier'
] as const

const getDependencies = ({ framework, variant }: Config) => {
    const res: Dependencies[] = [...peer, ...dependency[framework]]

    if (variant === 'TypeScript') {
        res.push('@beaglee/eslint-config-typescript')
    }

    return res
}

export default getDependencies
