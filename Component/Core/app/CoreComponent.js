var CoreComponent = function (definition) {
  return UIComponent.call(this, definition);
};
CoreComponent.prototype = Object.create(UIComponent.prototype, {
	_definition: {
		value: null
	},
  overrideDefinition: {
    value: function (obj) {
    	this._definition = obj;
      obj.ready = function ready() {
        UIFramework.setReady(true);
        obj._.ready();
      }
      obj.attached = function attached() {
        if (!obj._.attached) return
        UIFramework.elementAttached(obj._.attached);
      }
      obj.detached = function detached() {
        if (!obj._.detached) return;
        UIFramework.elementAttached(obj._.detached);
      }
      return obj;
    }    
  }
});

