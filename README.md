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
3. 编写 shell 脚本
如果项目需要在每多个 git操作阶段执行脚本，请使用 husky

#该项目使用更轻量的 simple-git-hooks 如果项目比较小型，可以考虑使用
1. 安装 simple-git-hooks : pnpm add simple-git-hooks -D
2. 安装 lint-staged : pnpm add lint-staged -D
3. 初始化 git hooks : npx simple-git-hooks