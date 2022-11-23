type Pkg = {
    [key: string]: unknown
}

type PeerDependencies = 'eslint' | 'prettier' | 'husky' | 'lint-staged'

type CustomerDependencies =
    | '@beaglee/eslint-config-base'
    | '@beaglee/eslint-config-vue'
    | '@beaglee/eslint-config-typescript'
    | '@beaglee/prettier'

type Dependencies = PeerDependencies | CustomerDependencies

type DependenciesConfig = {
    [key in Dependencies]?: string
}

export type { Pkg, Dependencies, DependenciesConfig }
