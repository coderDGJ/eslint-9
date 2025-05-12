import type { UserConfig } from '@commitlint/types'

const rule: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    settings: {},
    messages: {
      skip: '跳过',
      max: '最多 %d 字符',
      min: '最少 %d 字符',
      emptyWarning: '不能为空',
      upperLimitWarning: '超出限制',
      lowerLimitWarning: '低于限制',
    },
    questions: {
      type: {
        description: '请选择提交类型:',
        enum: {
          feat: {
            description: '新功能',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: '修复bug',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '文档修改',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: '代码格式修改',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: '代码重构',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: '性能优化',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '测试相关',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: '构建相关',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: 'CI配置相关',
            title: 'Continuous Integration',
            emoji: '⚙️',
          },
          chore: {
            description: '其他修改',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: '回退代码',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: '请输入修改范围（可选）:',
      },
      subject: {
        description: '请输入提交说明:',
      },
      body: {
        description: '请输入详细描述（可选）:',
      },
      isBreaking: {
        description: '是否有破坏性更新（可选）?',
      },
      breakingBody: {
        description: '请输入破坏性更新的详细描述（可选）:',
      },
      breaking: {
        description: '请列出所有破坏性更新（可选）:',
      },
      isIssueAffected: {
        description: '是否有关联的issue（可选）?',
      },
      issuesBody: {
        description: '如果有关联的issue，请添加描述（可选）:',
      },
      issues: {
        description: '请列出关联的issue (如: "#123, #456"):',
      },
    },
  },
}

export default rule
