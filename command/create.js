const path = require('path');

const inquirer = require('inquirer');
const Promise = require("bluebird");
const fs = require('../lib/file');
const questions = require('../lib/questions');

var config = require('../lib/config');


module.exports = function () {
    inquirer
        .prompt(questions.question2)
        .then((args) => {
            let path = '',
                appPath = '',
                modules = args.modules.split(',');

            fs.readJson('./lib/config.json')
                .then((data) => {
                    if(data) {
                        fs.showCreatePageModulesInfo('begin');

                        appPath = data.appPath;
                        path = data.appPath + '/pages/';

                        return fs.readJson(appPath + '/app.json');
                    }
                }).then((data) => {
                    let cur = data;

                    // 循环写入用户输入的 page module
                    modules.forEach(item =>{
                        let mod = path + item + '/';

                        cur.pages.push('pages/' + item + '/' + item);
                        fs.outPutFile(appPath + '/app.json', JSON.stringify(cur));

                        fs.ensureDir(path + item).then((flag) => {
                            if(flag) {
                                fs.inputPageModuleFile(mod+item);
                            }
                        })
                    });
                }).catch((err) => {
                    console.log('err', err);
                });
        });
};

