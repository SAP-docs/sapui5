<!-- loioa575619e25c2487f904bae71764e2350 -->

# View Cloning

For normal controls, view cloning bases on control settings that are described by SAPUI5 metadata, such as properties, aggregations, associations, and event handlers. The clone operation collects these settings and creates a new instance.

Another important aspect of SAPUI5 views is their cloning behavior. As you might know, SAPUI5 aggregation bindings can use template control to create a series of similar controls based on a collection of data, for example, items in a `sap.ui.table.Table` for each entry in a model array. The data binding uses a `ManagedObject.clone` operation to create multiple controls out of a single template.

For views there is a conflict between this basic, generic approach and the way how views usually define their content: via hooks \(typed view\) or via persisted XML or JSON files. Furthermore, it is allowed and documented best practice to modify the view in the onInit hook of its controller. To avoid conflicts between the generic cloning and the MVC concepts, views implement a slightly modified clone operation: only a subset of the view settings are cloned, the remainder is re-created by calling the hook \(typed view\) or applying the external view description \(XML or JSON file\), depending on the view type.

Cloned in a generic way are the following settings:

-   any models that have been set \(`setModel()`\)
-   registered control event listeners, e.g. `attachPress`, `attachChange`, `attachSubmit`, ...
-   registered browser event listeners \(`attachBrowserEvent`\)
-   bindings \(`bindProperty`, `bindAggregation`\)

Not cloned, but recreated are all aggregations, namely the content.

In scenarios where the above clone approach still leads to undesirable behavior, factory functions can be used for the aggregation binding instead.

**Related Information**  


[List Binding \(Aggregation Binding\)](list-binding-aggregation-binding-91f0577.md "List binding (or aggregation binding) is used to automatically create child controls according to model data.")

