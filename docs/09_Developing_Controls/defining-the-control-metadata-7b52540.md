<!-- loio7b52540d9d8c4e00b9723151622bbb64 -->

# Defining the Control Metadata

Control metadata consists of properties, events, as well as aggregations and associations.

The control metadata is defined as follows:

-   Properties

    A property has a name and an associated data type. It has a well-defined default value expressed as a literal of that data type. Properties are accessible to application code via the element's API as getters and setters, but are also used by a control's renderer in a read-only way. The following list gives an overview of the most important settings for a property:

    -   `type`: Data type of the control property; SAPUI5 provides an automatic type validation. Valid types are, for example, `string` \(default\) for a string property, `int` or `float` for number properties, `int[]`, etc. for arrays and `sap.ui.core.CSSSize` for a custom-defined type.

        For more information, see [Defining Control Properties](defining-control-properties-ac56d92.md).

    -   `defaultValue`: Default value that is set if the application does not set a value; if no default value is defined, the property value is `undefined`.


    These control-specific settings are only available when inheriting from a control or one of the base classes `sap.ui.core.Control`, `sap.ui.core.Element`, `sap.ui.base.ManagedObject`, see [Object Metadata and Implementation](object-metadata-and-implementation-91f29fe.md). For a complete list of the possible settings, see [API Reference: `sap.ui.base.ManagedObject.extend`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/sap.ui.base.ManagedObject.extend).

-   Events

    An event has a name as well as any number of parameters. The element's API offers support to manage event subscriptions.

    It is defined by its name only.

    ```js
    events: {
       "logout": {}
    }
    ```

    For each event, methods for registering, de-registering and firing the event are created. For the `logout` event, for example, the `attachLogout`, `detachLogout`, `fireLogout` methods are created.

    A control can enable events to be interrupted by the application. A tab control, for example, can enable the application to cancel a `close` event by setting the `allowPreventDefault` property of the event to `true` and checking the return value after firing the event:

    ```js
    events: {
       "close": {allowPreventDefault : true}  
    }
    ```

-   Aggregations and Associations

    An **aggregation** is a special relation between two UI element types. It is used to define the parent-child relationship within the above mentioned tree structure. The parent end of the aggregation has cardinality `0..1`, while the child end may have `0..1` or `0..*`. The element's API offers convenient and consistent methods to deal with aggregations \(e.g. to get, set, or remove target elements\). Examples are table rows and cells, or the content of a table cell.

    An **association** is another type of relation between two UI element types which is independent of the parent-child relationship within the above mentioned tree structure. Directed outgoing associations to a target of cardinality `0..1` are supported. They represent a loose coupling only and are thus implemented by storing the target element instance's ID. The most prominent example is the association between a label and its field.

    Aggregations and associations are defined by their name and a configuration object with the following information:

    -   `type`: The type should be a subclass of the element or the control; the default is `sap.ui.core.control`

    -   `multiple`: Defines whether it is a 0..1 aggregation or a 0..n aggregation; the default for aggregations is `true` = 0..n, and for associations the default is `false`

    -   `singularName`: For 0..n aggregations, the aggregation name typically is plural, but certain methods are created where the singular form is required \(for example, `addWorksetItem`\} for the "worksetItems" aggregation\).


    If only the type needs to be set, you can just give it as a string instead of the configuration object.

    One example:

    ```js
    aggregations: {
       "acceptButton" : "sap.m.Button", // if only type is given, no object is required
       "content" : {singularName: "content"},    // default type is "sap.ui.core.Control", 
                                                 // which is appropriate for generic containers
       "toolbarItems" : {type : "sap.m.Button", multiple : true, singularName : "toolbarItem"}
                                                 // a fully specified aggregation
    }
    ```

    Multiple methods are created automatically at runtime, depending on the multiplicity, for example `getWorksetItems`, `insertWorksetItem`, `addWorksetItem`, `removeWorksetItem`, `removeAllWorksetItems`, `indexOfWorksetItem`, `destroyWorksetItems`. These methods have a default implementation which does everything to handle the aggregation properly, but they can be overridden and extended by the control implementation.

    If you want to mark one aggregation as default aggregation in order to be able to omit the aggregation tag in XML views, you can do this by setting the `defaultAggregation` property to the name of the aggregation as shown in the following code snippet:

    ```js
    aggregations: {
       "content": {singularName: "content"} // default type is "sap.ui.core.Control", multiple is "true"
    
    },
    defaultAggregation: "content"
    ```


For a brief explanation of the differences between an aggregation and an association, see the *Control Metadata* section under [Working with Controls](../04_Essentials/working-with-controls-91f0a22.md). For a complete list of the possible settings, see [API Reference: `sap.ui.base.ManagedObject.extend`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/sap.ui.base.ManagedObject.extend).

