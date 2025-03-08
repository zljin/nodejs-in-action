/**
 * Event loop example 1
 * 注意时间循环执行顺序优先级
 * 1. Main thread execution 主线程执行
 * 2. Next tick callback 微任务
 * 3. Promise callback 微任务
 * 4. Immediate callback 宏任务
 * 5. Timeout callback 宏任务
 */
setTimeout(() => {
    console.log('4. Timeout callback');
}, 0);

Promise.resolve().then(() => {
    console.log('4. Promise callback');
});

setImmediate(() => {
    console.log('3. Immediate callback');
});

console.log('0. Main thread execution');

process.nextTick(() => {
    console.log('1. Next tick callback');
});