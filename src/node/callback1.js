/**
 * Promises 是一种新的异步编程模式，它允许你以链式的方式处理异步操作
 */

const fs = require('fs').promises;
const path = require('path');

const file1Path = path.join('resource', 'file1.txt');
const file2Path = path.join('resource', 'file2.txt');
const file3Path = path.join('resource', 'file3.txt');
// const file3Path = path.join(__dirname, 'resource', 'file3.txt');

fs.readFile(file1Path, 'utf8')
    .then(data1 => {
        console.log('Data from file1:', data1);
        return fs.readFile(file2Path, 'utf8');
    })
    .then(data2 => {
        console.log('Data from file2:', data2);
        return fs.readFile(file3Path, 'utf8');
    })
    .then(data3 => {
        console.log('Data from file3:', data3);
    })
    .catch(err => {
        console.error('Error reading files:', err);
    });