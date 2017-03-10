
var path = require('path');

var inquirer = require('inquirer');
var fs = require('../lib/file');
var questions = require('../lib/questions');

var config = require('../lib/config');

module.exports = function () {
    // 清空屏幕并显示 npm 信息
    fs.showNpmInfo();

    // 等待用户输入项目信息
    inquirer
        .prompt(questions.question1)
        .then((args) => {
            let dir = path.resolve(process.cwd(), './' + args.appName);

            // 将 appName 写入配置文件
            fs.outPutFile('./lib/config.json', JSON.stringify({
                appPath: dir
            })).then(flag => {
                if(flag) fs.showCreateDirInfo('begin');
            });

            // 确定如果是否有目录，则开始复制
            fs.ensureDir(dir)
                .then((flag) => {
                    return flag == true
                        ? fs.copy('./template', dir)
                        : Promise.reject(flag);

                }).then((flag) => {
                    if(flag) {
                        fs.showCreateDirInfo('end');
                    }
                })
                .catch(err => {
                    console.log('err', err);
                });
        });
};

