const { RuleTester } = require('eslint');
var rule = require('../../../lib/rules/no-debugger');
var ruleTester = new RuleTester({
  parserOptions: {
      ecmaVersion: 7, // 默认支持语法为es5 
  },
});

ruleTester.run("no-debugger", rule, {
  valid: [
    {
      code: 'const a = 123;function sum(b) {}'
    },
    {
      code: 'let a = 1; function sum(b) { return a + b;} var c = 0;'
    },
  ],
  invalid: [
    {
      code: 'const a = 123;function sum(b) {debugger;}',
      errors: [
        {
          messageId: 'unexcepted',
          type: "DebuggerStatement"
        }
      ]
    },
    {
      code: 'let a = 1; function sum(b) { debugger; return a + b;} var c = 0;',
      errors: [
        {
          messageId: 'unexcepted',
          type: "DebuggerStatement"
        }
      ]
    },
  ]
})