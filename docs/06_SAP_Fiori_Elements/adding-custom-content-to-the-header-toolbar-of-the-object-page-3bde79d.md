<!-- loio3bde79d449c14fdf9bf45e8b889fa244 -->

# Adding Custom Content to the Header Toolbar of the Object Page

Interactive UI controls such as select dropdowns, input fields, or status indicators can be added to the header toolbar of the object page in SAP Fiori elements for OData V4. To add custom content to the header toolbar, use the `template` property in the `manifest.json` file.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the ExtensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

You can add custom actions directly into the header toolbar of the object page. This is useful when standard action buttons are not sufficient and you need interactive controls that display contextual status information or provide additional filtering capabilities.

This extension point also enables you to embed arbitrary UI controls, such as select dropdowns, input fields, or status indicators.

To add custom content to the header toolbar of the object page, add entries to `actions` under `content.header` in the target settings of the object page. An entry with a `template` property is treated as custom toolbar content.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> {
>     "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "MyObjectPage": {
>                     "type": "Component",
>                     "name": "sap.fe.templates.ObjectPage",
>                     "id": "MyObjectPage",
>                     "options": {
>                         "settings": {
>                             "entitySet": "MyEntity",
>                             "content": {
>                                 "header": {
>                                     "actions": {
>                                         "PriorityFilter": {
>                                             "template": "my.app.ext.PriorityFilter",
>                                             "position": {
>                                                 "placement": "Before",
>                                                 "anchor": "fe::StandardAction::Edit"
>                                             }
>                                         }
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

The following properties are supported:

-   `template` \(required\): The complete name of the XML fragment without the `.fragment.xml` suffix.

-   `position.placement`: `"Before"` or `"After"`, relative to the `anchor`. If you omit this property, the custom content is displayed at the end of the toolbar.

-   `position.anchor`: The ID of another action or custom toolbar content entry that is used to determine relative placement.


> ### Note:  
> To configure the overflow behavior of custom content in the header toolbar, use `OverflowToolbarLayoutData` with the root element in the XML fragment file.

The following sample code is an example of the XML fragment file:

> ### Sample Code:  
> Fragment Definition
> 
> ```xml
> <core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core">
>     <HBox id="priorityFilterContent" alignItems="Center" class="sapUiTinyMarginEnd">
>         <layoutData>
>             <OverflowToolbarLayoutData priority="High" group="1" />
>         </layoutData>
>         <Select id="priorityFilter"
>                 width="150px"
>                 change=".extension.my.app.ext.OPExtension.onPriorityFilterChange">
>             <items>
>                 <core:Item key="" text="All" />
>                 <core:Item key="high" text="High" />
>                 <core:Item key="medium" text="Medium" />
>                 <core:Item key="low" text="Low" />
>             </items>
>         </Select>
>     </HBox>
> </core:FragmentDefinition>
> ```

React to control events using a controller extension registered in the `manifest.json` file. Use the `extensionAPI` in your implementation as shown in the following sample code:

> ### Sample Code:  
> Controller Extension
> 
> ```
> sap.ui.define(["sap/ui/core/mvc/ControllerExtension"], function (ControllerExtension) {
>     "use strict";
>     return ControllerExtension.extend("my.app.ext.OPExtension", {
>         onPriorityFilterChange: function (oEvent) {
>             const extensionAPI = this.base.getExtensionAPI();
>             // ...
>         }
>     });
> });
> ```

**Related Information**  


[Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md "You can use extension points to add custom actions to the list report page and the object page in SAP Fiori elements for OData V4.")

[Adding Custom Content to the Table Toolbar](adding-custom-content-to-the-table-toolbar-c452fa6.md "Interactive UI controls such as select dropdowns, input fields, or status indicators can be added to the table toolbar in SAP Fiori elements for OData V4. To add custom content to the table toolbar, use the template property in the manifest.json file.")

