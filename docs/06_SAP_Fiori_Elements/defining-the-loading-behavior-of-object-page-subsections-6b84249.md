<!-- loio6b842496b70a421591c3234b44e3b3c5 -->

# Defining the Loading Behavior of Object Page Subsections

You can define the loading behavior of subsections in an object page in the manifest settings.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

To define the loading behavior, identify the `id` of the subsection, and add the following settings under the respective object page or subobject page property:

> ### Sample Code:  
> ```
> 
> "loadingBehavior":{
> 	"waitForHeaderData":true/false,
> 	"waitForViewportEnter":true/false
> }
> ```

You can use the `waitForHeaderData` and `waitForViewportEnter` properties to define whether you want the subsection to load after the header data is loaded, or after the viewport is loaded.

-   If you set the `waitForHeaderData` property to `true`, the subsection waits for the header data to load before activating its binding. This is useful when there is a table or a chart in the subsection and you want to wait for the header data to add some additional filters before rebinding them, for example, using `onBeforeRebindTableExtension`.

-   If you set the `waitForViewportEnter` property to `true`, the subsection waits to enter the viewport before activating its binding. If you set this flag to `false`, the data loading behavior is independent of whether or not the subsection is inside the viewport. Setting this property to `false` is useful when you want to load subsection data together with header data.

    > ### Note:  
    > If you do not define the `loadingBehavior` of a subsection, the default behavior is set as follows:
    > 
    > > ### Sample Code:  
    > > ```
    > > 
    > > "loadingBehavior":{
    > > 	"waitForHeaderData":false,
    > > 	"waitForViewportEnter":true
    > > }
    > > ```
    > 
    > If you define the `loadingBehavior` property for a subsection with `waitForHeaderData` as `true`, the other property, which you have not defined, is considered `false`. The same is applicable for the `waitForViewportEnter` property.


> ### Sample Code:  
> ```
> "pages": {
>                     "ObjectPage|C_STTA_SalesOrder_WD_20": {
>                         "entitySet": "C_STTA_SalesOrder_WD_20",
>                         "component": {
>                             "name": "sap.suite.ui.generic.template.ObjectPage",
>                             "settings": {
>                                
>                                 "sections": {
>                                     "SalesOrderItemsID": {
>                                         "navigationProperty": "to_Item",
>                                         "entitySet": "C_STTA_SalesOrderItem_WD_20",
>                                         "createMode": "inline",
>                                         "tableSettings": {
>                                             "inlineDelete": true
>                                         },
>                                         "loadingBehavior":{
>                                             "waitForHeaderData":true,
>                                             "waitForViewportEnter":false
>                                         }
>                                     },
>                                     "ContactsID": {
>                                         "loadingBehavior":{
>                                             "waitForHeaderData":false,
>                                             "waitForViewportEnter":false
>                                         }
>                                     }
>                                 }
> 
> ```

**Related Information**  


[Rebinding a Table with Each Instance Change on an Object Page](rebinding-a-table-with-each-instance-change-on-an-object-page-a6946a8.md "You can rebind a table on each instance change in an object page.")

