function MyClass() {}
MyClass.prototype = {
    method: function() {
        return 'hello'
    }
}
var myClass = new MyClass();
module.exports = myClass;