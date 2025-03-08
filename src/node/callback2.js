/**
 * 
 * async/await：
基于 Promises，async/await 提供了一种更接近同步代码风格的异步编程方式，使得异步代码更易于理解和维护。
 */

const fs = require('fs').promises;
const path = require('path');

const file1Path = path.join('resource', 'file1.txt');
const file2Path = path.join('resource', 'file2.txt');
const file3Path = path.join('resource', 'file3.txt');

async function readFiles() {
    try {
        const data1 = await fs.readFile(file1Path, 'utf8');
        const data2 = await fs.readFile(file2Path, 'utf8');
        const data3 = await fs.readFile(file3Path, 'utf8');

        console.log('Data from all files:', data1, data2, data3);
    } catch (err) {
        console.error('Error reading files:', err);
    }
}

readFiles();