module.exports = {
    root: true,
    env: {
        node: true
    },
    // 一些引用的规范
    extends: ['eslint-config-airbnb-base', 'plugin:prettier/recommended'],
    // 自定义规则
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        'vue/multi-word-component-names': 0,
        // 取消对for...of的限制
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
        ]
    },
    // File ignored by default.  Use a negated ignore pattern
    ignorePatterns: ['!.*', 'dist', 'node_modules']
}
