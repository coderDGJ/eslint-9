# Vue 3 + TypeScript + Vite

### eslint
1. 初始化 pnpm create vite eslint --template vue-ts 项目
2. npm.com 搜索 @antfu/eslint-config
3. 跟着文档配置 pnpm i -D eslint @antfu/eslint-config
    3.1 创建 eslint.config.mjs 文件
    3.2 配置脚本  script
    3.3 新建 .vscode/settings.json 配置后代码保存 ### eslint 会读取项目eslit配置自动修改 ###
4. 下载vscode eslint 插件  (注意版本)
5. 注意pnpm的版本 也可能导致script 执行命令失败
6. 修改完eslint.config.mjs 后 保存文件会显示 正在读取eslint 文件 解决： Cmd/Ctrl + Shift + P ，ESLint: Restart ESLint Server 重新运行eslint插件 

### git-hook
1. 安装 husky : pnpm add husky -D
2. 初始化husky : pnpm exec husky init 