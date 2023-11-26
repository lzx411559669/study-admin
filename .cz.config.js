module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复bug' },
    { value: 'docs', name: 'docs:     文档更新' },
    { value: 'style', name: 'style:    代码格式' },
    { value: 'refactor', name: 'refactor: 代码重构' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     测试用例' },
    { value: 'build', name: 'build:    构建工具' },
    { value: 'ci', name: 'ci:       持续集成' },
    { value: 'chore', name: 'chore:    其他更新' },
    { value: 'revert', name: 'revert:   回退' },

  ],
  //消息步骤
  messages: {
    type: '选择提交类型:',
    scope: '选择提交范围:',
    customScope: '输入自定义提交范围:',
    subject: '输入提交信息:',
    body: '输入提交详情:',
    breaking: '输入破坏性更新信息:',
    footer: '输入脚注信息:',
    confirmCommit: '确认使用以上信息提交？（y/n/e/h）',
  },
  //跳过问题
  skipQuestions: ['body', 'footer'],
  //subject文字默认是72
  subjectLimit: 72,
}
