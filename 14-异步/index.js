var EventEmitter = require('events').EventEmitter;
function complexOperation() {
    var events = new EventEmitter();
    // events.emit('sucess');
    process.nextTick(function () {
        events.emit('sucess');
    });
    // setTimeout(() => {
    //     events.emit('success');
    // }, 1000
    return events;
}
complexOperation().on('success', function () {
    console.log('success!');
});