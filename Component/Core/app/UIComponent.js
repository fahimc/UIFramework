var UIComponent = function (definition) {
  return this.getDefinition(definition);
};
UIComponent.prototype = {
  getDefinition: function getDefinition(definition) {
    var obj = Object.assign(definition);
    obj._ = {
      ready: definition.ready,
      attached: definition.attached,
      detached: definition.detached
    };

    return this.overrideDefinition(obj);
  },
  overrideDefinition: function (obj) {
    obj.ready = function ready() {
      UIFramework.ready(obj._.ready);
    }
    obj.attached = function attached() {
      if (!obj._.attached) return
      UIFramework.elementAttached(obj._.attached);
    }
    obj.detached = function detached() {
      if (!obj._.detached) return;
      UIFramework.elementDetached(obj._.detached);
    }
    return obj;
  }
};

