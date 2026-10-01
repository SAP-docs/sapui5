<!-- loioc452fa6991754f95b92a3efecc2771a9 -->

# Adding Custom Content to the Table Toolbar

Interactive UI controls such as select dropdowns, input fields, or status indicators can be added to the table toolbar in SAP Fiori elements for OData V4. To add custom content to the table toolbar, use the `template` property in the `manifest.json` file.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the ExtensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

You can add custom actions directly into the table toolbar. This is useful when standard action buttons are not sufficient and you need interactive controls that display contextual status information or provide additional filtering capabilities.

This extension point also enables you to embed arbitrary UI controls, such as select dropdowns, input fields, or status indicators.

To add custom content to the header toolbar of the object page, add entries to `actions` under the relevant table's `controlConfiguration`. An entry is treated as custom toolbar content when it has a `template` property rather than a `press` handler.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "sap.ui5": {
>     "routing": {
>         "targets": {
>             "RootElementList": {
>                 "type": "Component",
>                 "name": "sap.fe.templates.ListReport",
>                 "id": "RootElementList",
>                 "options": {
>                     "settings": {
>                         "controlConfiguration": {
>                             "@com.sap.vocabularies.UI.v1.LineItem": {
>                                 "actions": {
>                                     "StatusFilter": {
>                                         "template": "my.app.ext.StatusFilter",
>                                         "position": {
>                                             "placement": "Before",
>                                             "anchor": "StandardAction::Create"
>                                         },
>                                         "priority": "Low",
>                                         "overflowGroup": 1
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

-   `priority`: The overflow priority. You can use the following values:

    -   `"Low"` \(default\)

    -   `"High"`

    -   `"AlwaysOverflow"`

    -   `"NeverOverflow"`


    For more information about the overflow priority of actions, see the [Setting a Priority for Actions](actions-cbf16c5.md#loiocbf16c599f2d4b8796e3702f7d4aae6c__Setting_Priority) section in [Actions](actions-cbf16c5.md).

-   `overflowGroup`: The ID of an overflow group as an integer. When there's not enough space in the toolbar to display all items that share the same group ID, these items are moved together into overflow. For more information, see the [Grouping Actions for the Overflow](actions-cbf16c5.md#loiocbf16c599f2d4b8796e3702f7d4aae6c__Grouping_For_Overflow)


> ### Note:  
> In the table toolbar, configure the overflow behavior using the `priority` and `overflowGroup` settings in the `manifest.json` file. The framework wraps the fragment in an `ActionToolbarAction`, and any layout data on the inner fragment root has no effect.

The following sample code is an example of the XML fragment file:

> ### Sample Code:  
> Fragment Definition
> 
> ```xml
> <core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core">
>     <HBox id="statusFilterContent" alignItems="Center" class="sapUiTinyMarginEnd">
>         <Select id="statusFilter"
>                 width="150px"
>                 change=".extension.my.app.ext.LRExtension.onStatusFilterChange">
>             <items>
>                 <core:Item key="" text="All" />
>                 <core:Item key="active" text="Active" />
>                 <core:Item key="inactive" text="Inactive" />
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
>     return ControllerExtension.extend("my.app.ext.LRExtension", {
>         onStatusFilterChange: function (oEvent) {
>             const extensionAPI = this.base.getExtensionAPI();
>             // ...
>         }
>     });
> });
> ```

**Related Information**  


[Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md "You can use extension points to add custom actions to the list report page and the object page in SAP Fiori elements for OData V4.")

[Adding Custom Content to the Header Toolbar of the Object Page](adding-custom-content-to-the-header-toolbar-of-the-object-page-3bde79d.md "Interactive UI controls such as select dropdowns, input fields, or status indicators can be added to the header toolbar of the object page in SAP Fiori elements for OData V4. To add custom content to the header toolbar, use the template property in the manifest.json file.")

