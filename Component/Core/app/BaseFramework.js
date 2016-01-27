UIFramework.Base = (function (){

var Base = function (){};

Base.prototype = {
  init: function (){
    console.log('init');
    document.addEventListener('DOMContentLoaded',this.onLoad.bind(this));
  },
  onLoad: function (){
    console.log('on load');
    UIFramework.setReady(true);
  }
}

return Base;
  
})();