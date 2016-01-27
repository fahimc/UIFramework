var UIComponent = UIComponent || {};

UIComponent.AbstractCore = (function (){

var AbstractCore = function (){};

AbstractCore.prototype = {
  _definition: {
    is: 'abstract-core',
    properties:{
      
    }
  },
  ready: function () {
    console.log('core ready');
    UIFramework.setReady(true);
  },
  attached: function (){
      console.log('core attached');
  },
  detached: function (){
    console.log('core detached');
  },
  getDefinition: function (){
    return {
      is:this._definition.is,
      properties: this._definition.properties,
      ready: this.ready.bind(this),
      attached: this.attached.bind(this),
      detached: this.detached.bind(this)
    };
  }
}
return AbstractCore;
})();