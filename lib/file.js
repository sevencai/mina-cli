const chalk = require('chalk');
const path = require('path');
const clear = require('clear');
const figlet = require('figlet');
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs-extra'));
var data = require('../lib/data');


module.exports = {

    ensureDir(dir) {
        return new Promise ((resolve, reject) => {
            fs.ensureDir(dir, err => {
                if(!err) resolve(true);

                reject(err);
            })
        })
    },

    copy(from ,to) {
        return new Promise((resolve, reject) => {
            fs.copy(from ,to, err => {
                if(!err) resolve(true);

                reject(err);
            })
        })
    },

    outPutFile(file, content = '') {
        return new Promise((resolve, reject) => {
            fs.outputFile(file, content, err => {
                if(!err) resolve(true);

                reject(err);
            })
        })
    },

    readJson(file) {
        return new Promise((resolve, reject) => {
            fs.readJson(file, (err, data) => {
                if(!err) resolve(data);

                reject(err);
            })
        })
    },

    getCurrentDirectoryBase () {
        return path.basename(process.cwd());
    },

    getCurrentRootPath() {
        return process.cwd();
    },

    isDirExists(filePath) {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (err) {
            return false;
        }
    },

    showNpmInfo() {
        clear();
        console.log(
            chalk.yellow(
                figlet.textSync('MINA CLI', {horizontalLayout: 'full'})
            ));
    },

    showCreateDirInfo(type = 'begin') {
        if(type == 'begin') {
            console.log(chalk.white('\n Start creating Project...'))
        } else if(type == 'end'){
            console.log(chalk.green('\n Creating Project Ok...'))
        }

    },

    showCreatePageModulesInfo(type = 'begin') {
        if(type == 'begin') {
            console.log(chalk.white('\n Start creating page modules ...'))
        } else if(type == 'end'){
            console.log(chalk.green('\n Creating page modules Ok...'))
        }
    },

    inputPageModuleFile (path) {
        let fixes = ['.json', '.js', '.wxml', '.wxss'], str;

        for(let i in fixes) {
            if(fixes.hasOwnProperty(i)) {
                str = fixes[i] == '.js' ? data.str : '';

                this.outPutFile(path + fixes[i], str);
            }
        }

        this.showCreatePageModulesInfo('end');
    }

};