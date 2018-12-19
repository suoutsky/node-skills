console.log(process.arch);
console.log(process.memoryUsage());
switch (process.arch) {
    case 'x64':
        require('./lib.x64.node')
    case 'ia32':
        require('./lib.Win32.node')
        break;
    default:
        throw new Error('unsupported process.arch', process.arch);
}
const result = {
    "rss": 21663744,  // 常驻内存大小
    "heapTotal": 7159808, // 动态分配的可用内存
    "heapUsed": 4447624, // 已经使用的堆大小
    "external": 8224
}