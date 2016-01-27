var UIComponent = UIComponent || {};

UIComponent.AbstractComponent = (function () {

  var AbstractComponent = function () {};

  AbstractComponent.prototype = {
    _definition: {
      is: 'abstract-component',
      properties: {}
    },
    _: {
      isReady: false,
      ready: function () {
        this._class.element = this;
        this._class._.isReady = true;
        UIFramework.ready(this._class.ready.bind(this._class));
      },
      attached: function () {
        this._class.attached();
      },
      detached: function () {
        this._class.detached();
      }
    },
    element: null,
    ready: function () {
      console.log('abstract component ready');
    },
    attached: function () {
      console.log('abstract component attached');
    },
    detached: function () {
      console.log('abstract component detached');
    },
    getDefinition: function () {
      var obj = {
        is: this._definition.is,
        properties: this._definition.properties,
        ready: this._.ready,
        attached: this._.attached,
        detached: this._.detached,
        _class: this
      };

      for (var key in this._definition) {
        if (key !== 'is' && key !== 'properties') {
          var item = this._definition[key];
          if (typeof(item) === 'string' && this[item] !== undefined) {
            obj[key] = this[item].bind(this);
          }
        }
      }

      return obj;
    }
  }
  return AbstractComponent;
})();

