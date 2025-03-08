/**
 * 打印浏览器测全局对象的全局属性
 * 全局对象即浏览器下的window对象
 * 在nodejs中，全局对象是global
 * 
 * 
 * 
 * process是一个全局变量，即global对象的属性
 * 用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口
 */

// 打印全局对象的属性
//console.log(global);//global对象
console.log(__filename);//global对象的属性之一，当前文件名
console.log(__dirname);
console.log('byvoid%diovyb', 1991);



process.on('exit', function (code) {

    // 以下代码永远不会执行
    setTimeout(function () {
        console.log("该代码不会执行");
    }, 0);
    // 打印process对象的属性
    console.log(process.version);//Node.js版本
    console.log(process.platform);//操作系统平台
    console.log(process.arch);//操作系统架构
    console.log(process.cwd());//当前工作目录
    console.log(process.memoryUsage());//内存使用情况

    console.log('退出码为:', code);
});
console.log("程序执行结束");
