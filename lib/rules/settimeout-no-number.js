/**
 * @fileoverview 第二个参数禁止是数字
 * @author shuaishuai
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "第二个参数禁止是数字",
            category: "Fill me in",
            recommended: false
        },
        fixable: 'code',  // 打开修复功能
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            CallExpression: (node) => {
                if (node.callee.name !== 'setTimeout') return ;
                const timeNode = node.arguments && node.arguments[1];
                if (!timeNode) return ;
                if (timeNode.type === 'Literal' && typeof timeNode.value === 'number') {
                    context.report({
                        node,
                        message: 'setTimeout第二个参数禁止是数字',
                        fix(fixer) {
                            const numberValue = timeNode.value;
                            const statementString = `const countNumber = ${numberValue}\n`;
                            return [
                                // 修改数字为变量
                                fixer.replaceTextRange(node.arguments[1].range, 'countNumber'),
                                // 在setTimeout 之前增加一行声明变量的代码，用户自行修改变量名
                                fixer.insertTextBeforeRange(node.range, statementString),
                            ]
                        }
                    })
                }
            }

        };
    }
};
