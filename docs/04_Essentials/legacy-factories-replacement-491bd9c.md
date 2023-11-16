<!-- loio491bd9c70b9f4c4d913c8c7b4a970833 -->

# Legacy Factories Replacement

Overview of the replacement of global functions with the factory functions

The AMD module syntax already avoids Globals and enforces the strict dependency declaration. The following table shows how APIs which use synchronous requests to fetch modules or resources internally, can be replaced with asynchronous alternatives. The W3C has already deprecated the use of synchronous requests in the browser main thread, so this replacement prepares your applications for the removal of synchronous requests.

The SAPUI5 framework by default uses synchronous requests internally in several places. Most have already been replaced by asynchronous alternatives, or prepared to exchange the synchronous behaviour shown below. The asynchronous adoption starts from the beginning with the bootstrap script tag, where the `async` configuration parameter should be set to `true`. Applications can register an event callback via [`sap.ui.getCore()#attachInit`](https://ui5.sap.com/#/api/sap.ui.core.Core/methods/attachInit). . The examples below show only the most frequently used synchronous APIs. There are more of these APIs, and most often the asynchronous alternatives return a `Promise` that can be used to retrieve the former return value.


<table>
<tr>
<th valign="top">

Legacy, synchronous API

</th>
<th valign="top">

Modern API

</th>
</tr>
<tr>
<td valign="top" colspan="2">

Declarative App Description

</td>
</tr>
<tr>
<td valign="top">

```

sap.ui.component({

    name: "my.comp"

});

```



</td>
<td valign="top">

```

sap.ui.require(['sap/ui/core/Component'], function(Component){

    Component.create({

        name: "my.comp"

        // default: manifest: true

    }).then(function(oComp) { ... });
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Components - Some API still experimental

</td>
</tr>
<tr>
<td valign="top">

```

var oComponentInstance = sap.ui.component({

    name: "my.comp"

});

```



</td>
<td valign="top">

```

sap.ui.require(['sap/ui/core/Component'], function(Component){

    Component.create({

        name: "my.comp"

    }).then(function(oComp) { ... });
});
```

Alternatively, migrate to `componentUsages` with an additional adaption in the `manifest.json` file:

```

createContent: function() {

   var oReuseComponentPromise = this.createComponent({

    "usage": "reuse"

  }).then(function(oComp) { ... });

}

```



</td>
</tr>
<tr>
<td valign="top">

```

var oComponentClass = sap.ui.component.load({

    name: "my.comp"

});

```



</td>
<td valign="top">

```

sap.ui.require(['sap/ui/core/Component'], function(Component){

    Component.load({

        name: "my.comp"

    }).then(function(oClass) {

        var oComponentInstance = new oClass({...});

    });

});

```



</td>
</tr>
<tr>
<td valign="top">

```
var oComponentInstance = sap.ui.component("my-comp-id");
```



</td>
<td valign="top">

```

sap.ui.require(['sap/ui/core/Component'], function(Component){

 

    var oComponentInstance = Component.get("my-comp-id");

});

```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

i18n texts

</td>
</tr>
<tr>
<td valign="top">

```

jQuery.sap.resources({

    url: "mybundle.properties"

});

```



</td>
<td valign="top">

```

// sap/ui/Resources -> sap/base/i18n/ResourceBundle

sap.ui.require(['sap/base/i18n/ResourceBundle'], function(Resource){

    ResourceBundle.create({

        url: "mybundle.properties",
	   async: true

    }).then(function(oResource) { ... });
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Views

</td>
</tr>
<tr>
<td valign="top">

```

var oView = sap.ui.view({

    viewName: "my.View",

    type: "XML"

});

```



</td>
<td valign="top">

```

sap.ui.require(['sap/ui/core/mvc/View'], function(View){

    View.create({ 

        viewName: "my.View",

        type: "XML"

    }).then(function(oView) { ... });
});
```



</td>
</tr>
<tr>
<td valign="top">

```

var oView = sap.ui.xmlview({

    viewName: "my.View"

});

```



</td>
<td valign="top">

```

sap.ui.require(['sap/ui/core/mvc/XMLView'], function(XMLView){

    XMLView.create({ 

        viewName: "my.View"

    }).then(function(oView) { ... });
});
```



</td>
</tr>
<tr>
<td valign="top">

```

var oView = sap.ui.jsview({
								
    viewName: "my.View"
								
});

```



</td>
<td valign="top">

For defining views, use `View.extend`. For loading and creating a view instance, use `View.create`.

```

sap.ui.define(['sap/ui/core/mvc/View', 'sap/m/Panel'], function(View, Panel){
								
    return View.extend("my.View", {

		// define, which controller to use
		getControllerName: function() {
			return "my.Controller";
		},

		// whether the ID of content controls should be prefixed automatically with the view ID
		getAutoPrefixId: function() {
			return true; // default is false
		},

		// create view content and return the root control(s)
		createContent: function() {
			return new Promise(function(res, rej) {
				res(new Panel({...}));
			}).catch(function(oError) {
				throw oError;
			});
    	}
								
    });
});

```

```
sap.ui.require(['sap/ui/core/mvc/View'], function(View){
								
    View.create({ 
						
        viewName: "my.View"
								
    }).then(function(oView) { ... });
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Controllers

</td>
</tr>
<tr>
<td valign="top">

```
var oController = sap.ui.controller({ ... });
```



</td>
<td valign="top">

```

sap.ui.require(['sap/ui/core/mvc/Controller'], function(Controller){

    Controller.create({ 

        ...

    }).then(function(oController) { ... });
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Extension Points

</td>
</tr>
<tr>
<td valign="top">

```
var aControls = sap.ui.extensionpoint( ... );
```



</td>
<td valign="top">

```

sap.ui.require(['sap/ui/core/ExtensionPoint'], function(ExtensionPoint){

    ExtensionPoint.load({ 

        ...

    }).then(function(aControls) { ... });
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Fragments

</td>
</tr>
<tr>
<td valign="top">

```

var aControls = sap.ui.fragment({ 

    name: "my.fragment",

    type: "XML"

});

```



</td>
<td valign="top">

If you're instantiating your fragment in a controller which extends `sap.ui.core.mvc.Controller`, you can use the `loadFragment` function:

```

sap.ui.define(['sap/ui/core/mvc/Controller'], function(Controller){

    return Controller.extend("my.MyController", {

        onInit: function(){
            this.loadFragment({
                name: "my.fragment"
            }).then(function(aControls) { ... });
        }
        
    });
});
```

If you're instantiating your fragment outside a controller, you can use the static `Fragment.load` function:

```

sap.ui.require(['sap/ui/core/Fragment'], function(Fragment){

    Fragment.load({

        name: "my.fragment",

        type: "XML"

    }).then(function(aControls) { ... });
});
```

> ### Caution:  
> Please make sure that you are correctly chaining to the `loadFragment` or `Fragment.load` Promise!
> 
> Calling `sap.ui.getCore().byId("...")` or `oController.byId("...")` will result in `undefined` if called before the `loadFragment` or `Fragment.load` Promise is resolved.



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Version Info

</td>
</tr>
<tr>
<td valign="top">

```
var oVersionInfo = sap.ui.getVersionInfo();
```



</td>
<td valign="top">

```

sap.ui.require(['sap/ui/core/VersionInfo'], function(VersionInfo){

    VersionInfo.load({ 

        ...

    }).then(function(oVersionInfo) { ... });
});
```



</td>
</tr>
</table>

