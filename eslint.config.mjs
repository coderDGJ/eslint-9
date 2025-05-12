import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: false, // 启用 unocss
  markdown: false, // 禁用 markdown 规则
  vue: {
    overrides: {
      // 组件名称在模板中使用 PascalCase 命名
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { registeredComponentsOnly: false, ignores: ['micro-app', 'DefaultTheme.Layout'] },
      ],
      // 组件定义名称使用 PascalCase 命名
      'vue/component-definition-name-casing': 'off',
    },
  },
  typescript: true, // 启用 typescript 规则
  ignores: ['src/assets/*'], // 忽略 src/assets 目录
  stylistic: { // 启用 stylistic 规则
    overrides: {
      'style/indent-binary-ops': ['error', 2], // 强制使用 2 个空格缩进
    },
  },
}, {
  rules: {
    'no-restricted-syntax': 'off', // 禁用 no-restricted-syntax 规则
    'unused-imports/no-unused-imports': 'warn', // 警告未使用的导入
    // 排序导入
    'perfectionist/sort-imports': ['error', {
      groups: [
        ['builtin', 'external'], // 内置和外部导入
        ['internal', 'parent', 'sibling', 'index', 'object', 'unknown'], // 内部、父级、同级、索引、对象、未知
        'style', // 样式
        ['external-type', 'type', 'parent-type', 'sibling-type', 'index-type', 'internal-type'], // 外部类型、类型、父级类型、同级类型、索引类型、内部类型
      ],
    }],
    'sort-imports': 'off', // 禁用 sort-imports 规则
    'import/order': 'off', // 禁用 import/order 规则
  },
})
