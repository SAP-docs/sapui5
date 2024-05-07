<!-- loiofaaff35246414793b061f0244fb67338 -->

# Example: JS Fragments Used in XML Views

Example of JS fragments used in an XML view

The example uses different combinations. Make sure that the `sap-ui-core.js` script location points to an existing SAPUI5 installation.



<a name="loiofaaff35246414793b061f0244fb67338__section_gzk_nqs_mmb"/>

## webapp/Fragment.fragment.js

Definition of a simple JS fragment containing two buttons:

```js
// fragment is located in a file named: my/own/Fragment.fragment.js,
sap.ui.define(["sap/m/Button"], function (Button) {
    return {
        createContent: function() {
            // button text is bound to Model, "press" action is bound to Controller's event handler
            return [
                new Button({text:'my Fragment Button'}),
                new Button(this.createId("btn2"), {text:'my second Fragment Button'})
            ]
        }
    }
});
```



<a name="loiofaaff35246414793b061f0244fb67338__section_d3y_4qs_mmb"/>

## webapp/View.view.xml

Definition of a simple XML view:

```xml
<mvc:View xmlns:core="sap.ui.core"
    xmlns:layout="sap.ui.layout"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    controllerName="my.own.Controller">
    <layout:VerticalLayout id="vl">
        <Button text="Find controls by ID" press="findControls"></Button>
        <Text text="Fragment referenced inline, no Fragment ID:" />
        <core:Fragment fragmentName='my.own.Fragment' type='JS' />
        <Text text="Fragment referenced inline, with Fragment ID 'myFrag':" />
        <core:Fragment id="myFrag" fragmentName='my.own.Fragment' type='JS' />
    </layout:VerticalLayout>
</mvc:View>
```



<a name="loiofaaff35246414793b061f0244fb67338__section_br1_pqs_mmb"/>

## webapp/Controller.controller.js

Definition of a simple controller used with the XML view:

```js
sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/core/Fragment'], function (Controller, Fragment) {
    "use strict";
    return Controller.extend("my.own.Controller", {
        metadata: {
            methods:{
                findControls: {public: true }
            }
        },
        findControls: function() {
            // Fragment is instantiated within an XMLView => all GIVEN IDs are prefixed with the
            // View ID and View.byId() needs to be used to find the controls
            var b1 = null; // ID is generated: "__button1"
            var b2 = this.byId("btn2"); // Button ID is given, Fragment has no ID: "myView--btn2"
            var b3 = null // Fragment has an ID, but Control ID is generated and hence not prefixed: "__button2"
            var b4 = this.byId(Fragment.createId("myFrag", "btn2")); // Button and Fragment ID are given, 
                //let the Fragment construct the prefixed ID and then let the View search the again prefixed ID
            alert("Controls in Fragment:\nButton 1: has no given ID, cannot be found\nButton 2: " + b2 + 
               "\nButton 3: has no given ID, cannot be found\nButton 4: " + b4);
        }
    });
});

```



<a name="loiofaaff35246414793b061f0244fb67338__section_f3f_s4s_mmb"/>

## webapp/index.html

Instance creation of controller and XML view:

```html
<!DOCTYPE html>
<html>
	<head>
	<meta content="charset=utf-8">
	
	<title>JSFragment used in XmlView</title>
	
	<!-- Load UI5, select theme and the "sap.m", "sap.ui.layout" control library -->
	<script id='sap-ui-bootstrap' type='text/javascript'
			src='/sapui5/resources/sap-ui-core.js'
			data-sap-ui-theme='sap_horizon'
			data-sap-ui-libs='sap.m,sap.ui.layout'
			data-sap-ui-resource-roots='{"my.own": "."}'
	</script>

	<script>
		sap.ui.require([
			'sap/ui/core/mvc/Controller',
			'sap/ui/core/mvc/XMLView'
		], function (Controller, XMLView) {
			Controller.create({
				name: "my.own.Controller"
			}).then(function (oController) {
				/*** THIS IS THE "APPLICATION" CODE ***/

				// instantiate the View
				XMLView.create({
                        viewName:"my.own.View",
                        controller: oController
				}).then(function (oView) {
					// put the View onto the screen
					oView.placeAt('content');
				});
			});
		});
	</script>
	
	</head>
	<body class='sapUiBody'>
		<div id='content'></div>
	</body>
</html>
```

