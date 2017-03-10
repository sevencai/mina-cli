#! /usr/bin/env node
process.env.NODE_PATH = __dirname + '/../node_modules/';

const program = require('commander');

// 定义当前版本
program
    .version(require('../package').version);

// 初始化项目
program
    .command('init')
    .description('Generate a new project')
    .alias('i')
    .action(() => {
        require('../command/init')()
    });

// 新建modules
program
    .command('create')
    .description('Generate new modules')
    .alias('c')
    .action(() => {
        require('../command/create')()
    });

program.parse(process.argv);

if(!program.args.length){
    program.help()
}
