/**
 * @fileoverview 测试用的eslint
 * @author shuaishuai
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



// import processors
module.exports.processors = {
    // add your processors here
};

module.exports = {
    rules: requireIndex(__dirname + "/rules"),
    configs: {
        // 导出自定义规则 在项目中直接引用
        shuaiRule: {
            plugins: ['shuailint'], // 引入插件
            rules: {
                // 开启规则
                'shuailint/settimeout-no-number': 'error'
            }
        }
    }
}

