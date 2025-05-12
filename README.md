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
4. 配置 package.json
```
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue,mjs}": "eslint --fix"
  }
```
提交代码的时候 会自动执行 eslint --fix 修复代码 ， 如果有错误也会提示

### 使用 commitlint 规范 git commit
1. 安装 commitlint : pnpm add -D @commitlint/cli @commitlint/config-conventional
2. 运行： echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js (新建commitlint.config.js,并写入配置项目)
3.package.json 配置
```
 "simple-git-hooks": {
    "pre-commit": "npx lint-staged",
    "commit-msg": "npx commitlint --edit"
  }
```
4. 运行： npx simple-git-hooks
5.package.json 配置
```
"config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
```

# Git 提交规范
本项目使用 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范进行 Git 提交。

## 提交格式

提交信息必须符合以下格式：

```
type(scope?): subject
```

### 提交类型（type）

- ✨ `feat`: 新功能
- 🐛 `fix`: 修复bug
- 📝 `docs`: 文档变更
- 💄 `style`: 代码格式（不影响代码运行的变动）
- ♻️ `refactor`: 重构（既不是新增功能，也不是修复bug）
- ⚡️ `perf`: 性能优化
- ✅ `test`: 增加测试
- 🔨 `chore`: 构建过程或辅助工具的变动
- ⏪️ `revert`: 回退
- 📦️ `build`: 打包
- 🎡 `ci`: CI相关变更

### 示例

```bash
# 添加新功能
git commit -m "feat: 添加用户登录功能"

# 修复bug
git commit -m "fix: 修复登录按钮点击无响应的问题"

# 更新文档
git commit -m "docs: 更新API文档"
```
