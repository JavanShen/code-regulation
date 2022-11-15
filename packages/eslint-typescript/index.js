module.exports = {
    extends: [
        '@beaglee/eslint-config-base',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    plugins: ['@typescript-eslint'],
    settings: {
        'import/resolver': {
            typescript: {}
        }
    }
}
