var UIFramework = (function () {
  var UIFramework = {
    _isReady: false,
    _readyCollection: [],
    ready: function ready(callback) {
      if (this._isReady) {
        callback();
        return;
      }
      this._readyCollection.push(callback);
    },
    elementAttached: function elementAttached(callback) {
      callback();
    },
    elementDetached: function elementDetached(callback) {
      callback();
    },
    setReady: function (boolean) {
      this._isReady = true;
      this._executeReady();
    },
    _executeReady: function () {
      var length = this._readyCollection.length;
      for (var a = 0; a < length; a++) {
        this._readyCollection[a]();
      }
      this._readyCollection = [];
    },
    _getInstance: function (){
      var publicMethods = {};
      for(var key in this){
         if(key.substring(0,1) !== '_'){
            publicMethods[key] = this[key].bind(this);
         } 
      }
    return publicMethods;
    }
  };

  return UIFramework._getInstance();

})();

