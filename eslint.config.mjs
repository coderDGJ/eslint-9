import antfu from "@antfu/eslint-config";
// 第一个参数是该插件配置   从第二个参数起时 eslint的
export default antfu(
    {
        // 项目类型。'lib' 表示库，默认为 'app'
        type: "app",
        // 或自定义样式规则
        stylistic: {
            indent: 4, // 4, 或 'tab'
            quotes: "double", // 双引号 / 单引号
            semi: true, // 是否使用分号
            jsx: true, // 是否启用 JSX
            // 行尾换行符
            // 单引号
            // 尾随逗号
            // 对象括号间距
            // JSX 标签闭合在同一行
            // 箭头函数参数括号

        },
        // TypeScript 和 Vue 是自动检测的，你也可以明确启用它们：
        typescript: true,
        vue: {
            overrides: {
                "vue/multi-word-component-names": "off",
            },
        },

        // 禁用 jsonc 和 yaml 支持
        jsonc: false,
        yaml: false,

        // Flat 配置中不再支持 `.eslintignore`，请使用 `ignores` 代替
        ignores: [
            "**/fixtures",
            // ...globs
        ],
    },
);
