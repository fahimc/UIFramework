var UIComponent = UIComponent || {};

UIComponent.UIExample = (function () {

  var UIExample = function () {};

  UIExample.prototype = Object.create(UIComponent.AbstractComponent.prototype, {
    _definition: {
      value: {
        is: 'ui-example',
        properties: {
          done: {
            type: Boolean,
            value: false
          }
        },
        onClick: 'onClick'
      }
    },
    ready: {
      value: function () {
        console.log('i\'m ready');
        this.element.done = true;
      }
    },
    onClick: {
      value: function (e) {
        console.log('on click');
        console.log(e,this);
      }
    }
  });
  return UIExample;
})();

