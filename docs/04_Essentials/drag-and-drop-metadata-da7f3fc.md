<!-- loioda7f3fc826f7418d9cc3b5a61285a08d -->

# Drag-and-Drop Metadata

To influence the drag-and-drop behavior, use the metadata definition of a control.



<a name="loioda7f3fc826f7418d9cc3b5a61285a08d__section_itw_shl_bfb"/>

## Overview

You can use the `dnd` key for the drag-and-drop behavior of a control. Here is an example that shows you how the `dnd` key can be used:

```js
Control.extend('my.CustomControl', {
      metadata : {
          properties : {
              value : { type : 'string' },
              width : { type : 'sap.ui.core.CSSSize', defaultValue : 'auto' }
          },
          dnd : { draggable: false, droppable: true },
          aggregations : {
              header : { type : "sap.ui.core.Control", multiple : false, dnd : true },
              items : { type: 'sap.ui.core.Control', multiple : true, selector : "#{id}-items", dnd : {
                       draggable: true, dropppable: true, layout: "Horizontal"
              } },
          }
     }

```

You can use the following attributes in the metadata of a control for drag and drop:

-   `draggable`: Defines whether the control or aggregation is draggable

    Default value of `draggable` is `false`.

-   `droppable`: Defines whether dropping is allowed for the control or within the control and/or from one of its aggregations to another one

    Default value of `droppable` is `false`.

-   `layout`: Defines the arrangement of the items in the aggregation

    Possible values are `Vertical` \(for example, rows in a table\) and `Horizontal` \(for example, columns in a table\). Default value of `layout` is `Vertical`.

-   `selector`: Defines the location of the aggregation in the control DOM

    This setting is recommended for the aggregation with cardinality `0..n`.


**Related Information**  


[API Reference: `sap.ui.core.Element.extend`](https://ui5.sap.com/#/api/sap.ui.core.Element/methods/sap.ui.core.Element.extend)

[API Reference: `sap.ui.base.ManagedObject.extend`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/sap.ui.base.ManagedObject.extend)

