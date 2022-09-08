<!-- loio2c677b574ea2486a8d5f5414d15e21c5 -->

# XML Fragments

XML fragments are similar to XML view, but have no <View\> tag as root element. Instead, there is an SAPUI5 control.

You define a simple XML fragment as shown in the following code snippet:

```xml
<Button xmlns="sap.m" id="btnInFragment" text="Hello
    World"/>
```

This simple UI definition can, for instance, be located in a file named `…/my/useful/VerySimpleUiPart.fragment.xml`, be referenced by its name `my.useful.VerySimpleUiPart`, and can be found by the module loading mechanism.

A slightly more complex XML fragment can be defined as follows:

```xml
<VBox xmlns="sap.m">
		<Label text="My Label inside an XML fragment"/>
		<Button id="btnInFragment" text="Hello World" press="doSomething"/>
		<Button text="{/someText}"/>
	</VBox>
```

The event handler is bound to the `doSomething` method of a controller. This is expressed by the `doSomething` value of the `press` event attribute. This means that this fragment can only be instantiated with a controller if the controller has this method. If not, the code throws an error.

You can see how the data binding syntax is the same as that of XML views. Of course, this requires the fragment to be placed into a part of the UI tree where the model is available.

