module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        "vue/max-attributes-per-line": [2, {
            "singleline": 10,
            "multiline": {
                "max": 3,
                "allowFirstLine": true
            }
        }],
        // 标签末尾是否需要新一行
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always"
        }],
        'vue/html-self-closing': 'off',
        "vue/name-property-casing": ["error", "PascalCase"],
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 关闭检测函数名称和调用它的左括号之间的空格
        // 'func-call-spacing': 'off',
        // 缩进为4个空格
        'indent': ['error', 4],
        // 关闭检测未使用的变量
        'no-unused-vars': 'off',
        // 对象展开时总是要添加逗号，一行时行末不需要逗号
        // 'comma-dangle': ['error', 'always-multiline'],
        // 定义函数时，函数括号之前不允许添加空格
        // 'space-before-function-paren': ['error', 'never'],
        // 关闭禁用无效标签
        'no-tabs': 'off',
        // 关闭空行检测
        'no-multiple-empty-lines': 'off',
        // 关闭模板字符串检测
        'no-template-curly-in-string': 'off',
        'no-console': 'off',
        // 禁止添加分号
        'semi': ['error', 'never']
    }
}

