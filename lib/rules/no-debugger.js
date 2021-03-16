/**
 * @fileoverview 禁止debugger
 * @author shuaishuai
 */
 "use strict";

 //------------------------------------------------------------------------------
 // Rule Definition
 //--
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: 'diable debugger',
      category: "Possible Errors",
      recommended: true,
      url: '',
    },
    fixable: "code",
    schema: [], // option 参数
    messages: {
      unexcepted: "Unexpected 'debugger' statement. "
    }
  },
  create: function(context) {
    return {
      DebuggerStatement: (node) => {
        console.log("DebuggerStatement");
        context.report({
            node,
            messageId: 'unexcepted',
            fix(fixer) {
              return fixer.remove(node);
            }
        })
      }
    }
  }
}