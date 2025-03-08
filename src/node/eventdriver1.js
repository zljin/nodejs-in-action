/**
 * 事件驱动模型
 * 
 * EventEmitter 类是实现事件驱动的核心
 * https://www.runoob.com/nodejs/nodejs-event.html
 */

var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件 
    eventEmitter.emit('data_received');
}

// 创建Listener 并绑定事件处理程序
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {
    console.log('数据接收成功。');
});


// 触发监听事件
eventEmitter.emit('connection');