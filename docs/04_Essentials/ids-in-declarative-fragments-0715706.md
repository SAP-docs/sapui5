<!-- loio0715706772ed43f389d2ab9b381ef8ec -->

# IDs in Declarative Fragments

If a fragment with a control ID is instantiated twice without giving an ID, a duplicate ID error occurs.

Given the following XML fragment example:

```xml
<HBox xmlns="sap.m">
   <Button                    text="Hello World" />
   <Button id="btnInFragment" text="Hello World" />
</HBox>
```

Since 1.93 the `loadFragment` method is available on every controller instance \(`sap.ui.core.mvc.Controller` or subclasses\). Using this API makes accessing the resulting controls much easier, because the IDs of the fragment content is automatically prefixed by the view ID.

```js
sap.ui.define(["sap/ui/core/Controller"], function(Controller){

   return Controller.extend({

      onInit: function(){
         this.loadFragment({
            name: "my.useful.UiPartZ"
         }).then(function(oFragment){
            // ...
         }); // Button ID will be prefixed by the view ID
      }
   })
  
});
```

You can also pass an additional ID for the fragment content:

```js
sap.ui.define(["sap/ui/core/Controller"], function(Controller){

   return Controller.extend({

      onInit: function(){
         this.loadFragment({
            id: "myFragment"
            name: "my.useful.UiPartZ",
         }).then(function(oFragment){
            // ...
         }); // Button ID will be prefixed by the view ID and the fragment ID
      }
   })
  
});
```

In case the fragment should be called by a non-controller instance artefact, you have to choose the already existing `Fragment.load` API. Here, you have more flexibility with more options to configure.

The first button will always have a generated ID, as, for instance, `__button2`. This is regardless of how the fragment is instantiated or whether it resides inside a view.

The second button will either have the ID `btnInFragment`, in case the fragment is instantiated without giving an ID. This approach is easy to use, but implies the risk of ID collisions when instantiated multiple times:

```js
sap.ui.require(["sap/ui/core/Fragment"], function(Fragment){
   Fragment.load({
      name: "my.useful.UiPartZ"
   }).then(function(oFragment){
      // ...
   }); // Button ID will not be prefixed
});
```

The other possible ID of the second button is `myFragment--btnInFragment`, in case the fragment is instantiated giving the ID `myFragment`. You should not rely on the exact syntax of this prefixing.

```js
sap.ui.require(["sap/ui/core/Fragment"], function(Fragment){
   Fragment.load({
      name: "my.useful.UiPartZ",
      id: "myFragment"
   }).then(function(oFragment){
      // ...
   });
});
```

It is, however, possible that a containing view may add its prefix. For more information, see [IDs of Fragments in Views](ids-of-fragments-in-views-f10bf70.md).

