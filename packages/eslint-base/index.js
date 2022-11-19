module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['eslint-config-airbnb-base', 'plugin:prettier/recommended'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                packageDir: ['./']
            }
        ],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
            },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        'prefer-destructuring': ['error', { object: false, array: false }],
        'import/prefer-default-export': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                ts: 'never'
            }
        ]
    },
    ignorePatterns: ['!.*', 'dist', 'node_modules'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['js', 'ts']
            }
        }
    }
}
