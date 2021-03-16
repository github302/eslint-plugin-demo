/**
 * @fileoverview 第二个参数禁止是数字
 * @author shuaishuai
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/settimeout-no-number"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 7, // 默认支持语法为 es5
    }
});
ruleTester.run("settimeout-no-number", rule, {

    valid: [
        {
            code: 'let someNumber = 1000; setTimeout(() => { console.log(11); }, someNumber)'
        }, {
            code: 'setTimeout(() => { console.log(11) }, someNumber)'
        }
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "setTimeout(() => { console.log(22); }, 1000)",
            errors: [{
                message: "setTimeout第二个参数禁止是数字",
                type: "CallExpression" // rule 监听的对应钩子
            }]
        }
    ]
});
