<!-- loio85738e3ac3bb407d9e1cfeb8bb9268cb -->

# Normal Methods

Normal or public methods comprise all methods that do not belong to one of the special method types.

All methods are appended to the implementation object. Private methods are identified by a name starting with an underscore and must **not** be called from outside the control. The following code snippet is an example for the public method `divide` that calls the private helper method `_checkForZero` within the control:

```js

  divide: function(x, y) {     // a public method of the Control

      if (this._checkForZero(y)) {

         throw new Error("Second parameter may not be zero");

      }

      return x / y;

   },



   _checkForZero: function(y) { // private helper method

      if (y === 0) {

         return true;

      }

      return false;

   }
```

