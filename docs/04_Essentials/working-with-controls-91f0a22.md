<!-- loio91f0a22d6f4d1014b6dd926db0e91070 -->

# Working with Controls

Controls are used to define the appearance and behavior of screen areas.

Controls consist of:

-   Control name

    The control name is a string that consists of the library name and the control name, separated by a dot. The library name can be omitted if there is no need to assign the control to a library. It is possible, for example, to use `Square` as control name. For controls that are reused by others, we recommend to use a unique library name, for example `sap.byd.Square`.

-   Control metadata

    The metadata defines the properties, events, aggregations and associations of a control.

    Control properties, such as text or width, are used to modify the appearance or to relate to data that is displayed by the control. The controls are defined by the control metadata, which is the public API of the control. The API can be used by applications at runtime and also contains information on runtime features such as data binding and type validation checks.

    Controls can aggregate other controls. These controls with aggregations serve as a container or layout control to which the application can add child controls. They can also serve as composite controls if the control itself adds child controls and reuses available components. In an aggregation, child controls are owned by the parent control and are destroyed together with the parent control. A control can only have one aggregation parent. Adding the control to another aggregation removes it from the previous parent control.

    Associated controls are not part or children of an aggregation control. They are connected by ID instead of reference. Destroying a control in an association does not affect the other control. It is possible that an associated control does not yet or no longer exist.

    Controls fire events. Events typically relate to the control's purpose and functionality on a semantically higher level than browser events such as `click`. Examples for control events are `triggerSearch` for a search field or `collapse` in a panel.

-   Elements

    Elements are parts of controls or rather configuration packages for parts of controls. Elements **cannot** be used standalone and do **not** have their own renderer. Instead, the control that uses the element does the rendering: The `ComboBox` control, for example, renders the `Item` elements. The information provided for controls also applies to elements but not to the renderer. The `sap.ui.core.Element` class is the base class of `sap.ui.core.Control`.

-   Methods

    By convention, methods are public, unless their name starts with an underscore or if it is one of the special method types. When developing control libraries, public methods must be annotated with `@public` in the JSDoc, and private methods with `@private`. The generated getter/setter methods for properties are also public methods.

    Methods are added to a new control by simply providing the implementation. It is not necessary to add the method to the metadata. Other controls and the application must only call public methods and the control ensures that they remain compatible. There are no technical rules that prevent the call of private methods, but it is not allowed.


The base class for all controls in SAPUI5 is `sap.ui.core.Control`. To inherit and extend the functionality, specific controls can either inherit from the base class, or from another control.



## UI Control Constructors

A constructor is a special type of function that is called to create an object. The constructor uses values to set control properties, thus preparing the new object for use.

In SAPUI5, control constructors accept the following arguments in the specified order:

1.  An optional unique identifier of type `string` which must either be the first argument, or omitted altogether. If you omit the ID, the SAPUI5 framework automatically computes an ID. Specifying your own identifier allows your application to easily find the control and, for example, retrieve the current user input from it. Alternatively, you can keep a reference to the control in a variable.
2.  A simple object as `mSettings` parameter that defines values for any property, aggregation, association, or event.

The following code snippet shows an example of a constructor that is called to create a new text control saying "Hello World" with the specified tooltip and width:

```js
// required from sap/m/Text
var oText = new Text("testText",
{text : "Hello World", tooltip: "This is an example tooltip", width: "100px"});
```

The above example is an abbreviated version of the following code snippet with a detailed list of statements, which is alternatively supported:

```js
// required from sap/m/Text
var oText = new Text("testText"); 
oText.setText("Hello World");
oText.setTooltip("This is an example tooltip");
oText.setWidth("100px");
```

The supported parameters are documented in the *API Reference* of the respective control.

**Related Information**  


[Developing Controls](../09_Developing_Controls/developing-controls-8dcab00.md "You can create own content for SAPUI5. To develop controls in JavaScript, you can either extend existing controls or create new ones.")

