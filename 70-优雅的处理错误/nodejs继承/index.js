function Animal(){
    this.name = 'animal';
  }
   
  // 当前的
  function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
  }
  
  // 原型链上的 
  (function () {
    var Super = function () { };
    Super.prototype = Animal.prototype;
    Cat.prototype = new Super();
  })();





  function Animal(){
    this.name = 'animal';
  }
   
  function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
  }
   
  require('util').inherits(Cat, Animal);
  // <=>
  /*
  Cat.super_ = Animal;
  Object.setPrototypeOf(Cat.prototype, Animal.prototype);
  */