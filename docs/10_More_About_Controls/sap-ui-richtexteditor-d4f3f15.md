<!-- loiod4f3f1598373452bb73f2120930c133c -->

# sap.ui.richtexteditor

The sap.ui.richtexteditor offers functionality for text editing - like, for example, bullets, indentation, fonts, and coloring.



<a name="loiod4f3f1598373452bb73f2120930c133c__section_lld_djj_wz"/>

## Overview

The `RichTextEditor` uses a third-party library called TinyMCE. Beside the native toolbar, it can also use a toolbar built with sap.m controls.



### Preamble

Because of the use of а third-party component some additional restrictions apply for the proper usage and support of the control:

-   If you use API calls to the native API of TinyMCE, we **cannot** guarantee backwards compatibility after an upgrade of the TinyMCE library.

-   The default value of the `editorType` property is set to always point to the version of TinyMCE, that is recommended by SAPUI5, therefore it will be subject to change in the future.

-   The following table shows the supported TinyMCE versions in the respective SAPUI5 versions:


    <table>
    <tr>
    <th valign="top">

    SAPUI5 Version
    
    </th>
    <th valign="top">

    Available TinyMCE Version
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    1.38
    
    </td>
    <td valign="top">
    
    -   3.5.11

    -   4.5.7


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    1.71
    
    </td>
    <td valign="top">
    
    -   4.7.13

        Introduced with SAPUI5 1.71.0

        Replaced by 4.9.10 with SAPUI5 1.71.49

    -   4.9.10

        Introduced with 1.71.49

        Deprecated as of 1.71.62

    -   6.5.1

        Introduced with 1.71.62



    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    1.84
    
    </td>
    <td valign="top">
    
    -   4.9.10

        Deprecated as of 1.84.42

    -   6.5.1

        Introduced with 1.84.42



    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    1.96
    
    </td>
    <td valign="top">
    
    -   4.9.10

        Deprecated as of 1.96.28

    -   5.5.1

        Deprecated as of 1.96.28

    -   6.5.1

        Introduced with 1.96.28



    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    1.108
    
    </td>
    <td valign="top">
    
    -   4.9.10

        Deprecated as of 1.108.0

    -   5.10.2
    -   6.1.0

        Replaced by 6.3.1 in 1.108.10

    -   6.3.1

        Introduced with 1.108.10

        Replaced by 6.5.1 in 1.108.20

    -   6.5.1

        Introduced with 1.108.20



    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    1.120
    
    </td>
    <td valign="top">
    
    -   5.10.2

        Deprecated as of 1.120.0

    -   6.5.1


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    1.122
    
    </td>
    <td valign="top">
    
    -   5.10.9
    -   6.8.2


    
    </td>
    </tr>
    </table>
    
-   Accessibility features that the wrapper control provides, like high-contrast themes and keyboard handling, are not fully available for the native toolbar.

-   For the usage of high contrast themes TinyMCE relies on the Windows setting. Thus, if you want to use SAPUI5 high contrast theme and the `RichTextEditor` control, you need to turn on the high contrast mode setting of the OS.
-   The `RichTextEditor` uses a third-party component, which might in some cases not be completely compatible with the way UI5's \(re-\)rendering mechanism works. **If you keep hidden instances of the control \(instances that are not visible in the DOM\), you might run into problems with some browser versions**. In this case, please make sure that you destroy the `RichTextEditor` instance instead of hiding it, and create a new one when you show it again.

-   Known cases that might cause Content Security Policy relevant issues:

    -   If you are using one of the following plugins: `linkchecker`, `preview`.

    -   If you are using the `tinymce.ui.Iframe` widget.


-   If you want to use the custom toolbar, you need to instantiate the `RichTextEditor` in the application’s controller. This way the controller can check and wait for the `sap.m` library to be loaded and then init the controls. RichTextEditor can be embedded in an XML view, but as the XML view adds an additional layer, this may lead to problems while loading the custom toolbar. The sap.m library cannot be required from TinyMCE. This means that `sap.m` may not be available in time for the rendering of the custom toolbar.

    See [Supported Library Combinations](../02_Read-Me-First/supported-library-combinations-363cd16.md).

    Using the native toolbar in an XML view is still possible.

-   If your use case requires it and you have enabled the mobile theme, the custom toolbar cannot be used and the TinyMCE native toolbar and layout are loaded. For more information, see the Native TinyMCE Mobile Support section below.
-   The `RichTextEditor` is not a form control and if is used in forms will result in accessibility and responsiveness issues, and this is why it should be avoided. Alternately you can add the `RichTextEditor` underneath other form controls and link it to a title via the [`ariaLabelledBy`](https://ui5.sap.com/#/api/sap.ui.richtexteditor.RichTextEditor%23associations) association.



### Guidelines

-   Do not instantiate the `RichTextEditor` from a hidden container \(for example a `div` with `visibility="hidden">`\).

-   Make sure that you destroy the `RichTextEditor` instance instead of hiding it, and create a new one when you show it again.

-   The `RichTextEditor` has to be used only for desktop scenarios.




### Custom `sap.m.Toolbar`

To replace the native toolbar, set the following properties:

-   `customToolbar=true`

-   If you want to use the custom toolbar, you need to instantiate the `RichTextEditor` in the application’s controller. It cannot be embedded in an XML view.


> ### Caution:  
> In order to render the custom toolbar, make sure that your application has loaded the sap.m library.

**Configure and remove buttons in button groups in the custom toolbar**

With version 1.102 it is possible to redefine the button groups configuration in order to show only particular set of buttons in the custom toolbar of the `RichTextEditor`.

This is possible in few ways:

-   By providing the buttons group configurations as a whole by setting the `buttonGroups` property of the control.
-   By providing individual button group configuration using the `addButtonGroup` method.

Consider the following when choosing your approach:

-   Setting `buttonGroups` will override all current custom toolbar button group configurations. This method allows for total redefining of the custom toolbar groups.
-   Using `addButtonGroups` will try to add non-existing group into the configuration array, however, if such group configuration exists already, a warning will be logged and the new configuration will not be added. In order to replace the existing configuration you will need to remove it first via `removeButtonGroup`.

Below is a list of supported groups and buttons, that can be specified in the configuration objects. Format is `group name`: `supported buttons`:

-   font-style: bold, italic, underline, strikethrough
-   font: fontselect, fontsizeselect, forecolor, backcolor
-   clipboard: cut, copy, paste
-   structure: bullist, numlist, outdent, indent
-   undo: undo, redo
-   insert: image, emoticons
-   link: link, unlink
-   text-align: alignleft, aligncenter, alignright, alignjustify

Additional supported groups, that can be added only after the editor is loaded. They can not be specified in the above mentioned configuration:

-   table: table
-   styleselect: styleselect

> ### Note:  
> Adding configuration for `text-align` group with any buttons will still render a menu button with all available options inside. Removing/hiding the group can be achieved by invoking `removeButtonGroup` or `setShowGroupTextAlign`\(`false`\) depending on the desired result.
> 
> There is no synchronization between the `setShowGroup` properties and the configuration object that the application can specify via `buttonGroups` in the constructor or on a later stage. This means that in case new configuration is provided and for particular group the passed object contains the `visible: true` property, this group property will be respected no matter if the `RichTextEditor`'s property for this particular group is set to `false`.

Here are examples how to remove some of the buttons in a group:

> ### Example:  
> By using the `buttonsGroup` configuration object you can overwrite the default configuration and provide your own:
> 
> > ### Sample Code:  
> > ```
> > var oRichTextEditor = new RTE("myRTE", {
> > editorType: sap.ui.richtexteditor.EditorType.TinyMCE5,
> > customToolbar: true,
> > buttonGroups: [
> > {
> > name: "font-style",
> > visible: true,
> > priority: 10,
> > customToolbarPriority: 10,
> > buttons: [
> > "bold", "italic"
> > ]
> > },
> > {
> > name: "font",
> > visible: true,
> > priority: 20,
> > customToolbarPriority: 20,
> > buttons: [
> > "forecolor", "backcolor"
> > ]
> > }
> > ],
> > });
> > 
> > ```

> ### Example:  
> By using the `addButtonGroup` method you have the following configuration:
> 
> > ### Sample Code:  
> > ```
> > var oRichTextEditor = new RTE("myRTE", {
> > editorType: sap.ui.richtexteditor.EditorType.TinyMCE5,
> > width: "100%",
> > height: "300px",
> > customToolbar: true
> > });
> > 
> > ```
> 
> If the application does not need the *underline* and *strike thought* buttons and you want to remove them from the toolbar. In such case you can use the `addButtonGroup` method and specify configuration for only this particular group. Having in mind the above mentioned, your code will need to remove the group first thus you should invoke:
> 
> > ### Sample Code:  
> > ```
> > oRichTextEditor.removeButtonGroup("font-style");
> > ```
> 
> and then call:
> 
> > ### Sample Code:  
> > ```
> > oRichTextEditor.addButtonGroup({
> > name: "font-style",
> > visible: true,
> > priority: 10,
> > customToolbarPriority: 10,
> > buttons: [
> > "bold", "italic"
> > ]
> > });
> > 
> > ```



### Custom Buttons

With version 1.48, you can add your own buttons to the custom toolbar. The buttons are stored in the `customButtons` aggregation. Make sure that you provide dedicated click events for your buttons.



### Tables

As of version 1.50, the table functionality is available just by adding the table button group for both toolbars \(TinyMCE and custom\).

> ### Note:  
> This changes won't affect applications already using a `sap.ui.richtexteditor.RichTextEditor` with an added table plugin.
> 
> When the table button group is added and the `customToolbar` property is set to **`true`**, a button with a table icon will be visible in the custom toolbar. This button opens a `sap.m.Dialog` for inserting tables. You can choose how many rows and columns your table will have and set the height and width properties. After creating the table, the native TinyMCE context menu for modifying the table properties, triggered from selecting the table in the edit area, will be available.





### Headings

As of version 1.52, the heading functionality is available by adding the `styleselect` or `formatselect` button group to both toolbars \(TinyMCE and custom\). The available formatting options are heading 1 to heading 6 and paragraph.

> ### Note:  
> These changes won't affect applications already using a `sap.ui.richtexteditor.RichTextEditor` with an added `styleselect` or `formatselect` option.

For more information, see the [sample](https://ui5.sap.com/#/entity/sap.ui.richtexteditor.RichTextEditor).





### Custom Button Order

As of version 1.54, you can customize the position of the button groups in the custom toolbar. This can be done by supplying a value for the new `customToolbarPriority` property of the button group. The groups in the toolbar are placed in ascending order respective to their `customToolbarPriority` values.

> ### Example:  
> ```
> RichTextEditor.setButtonGroups([{
> 
>                        name: "font-style",
> 
>                        visible: true,
> 
>                        row: 0,
> 
>                        priority: 10,
> 
>                        customToolbarPriority: 30,
> 
>                        buttons: [
> 
>                               "bold", "italic", "underline", "strikethrough"
> 
>                        ]
> 
>                }, {
> 
>                        name: "text-align",
> 
>                        visible: true,
> 
>                        row: 0,
> 
>                        priority: 20,
> 
>                        customToolbarPriority: 20,
> 
>                        buttons: [
> 
>                               "justifyleft", "justifycenter", "justifyright", "justifyfull"
> 
>                        ]
> 
>                }, {
> 
>                        name: "clipboard",
> 
>                        visible: true,
> 
>                        row: 1,
> 
>                        priority: 10,
> 
>                        customToolbarPriority: 10,
> 
>                        buttons: [
> 
>                               "cut", "copy", "paste"
> 
>                        ]
> 
>                }]).
> ```





### Native TinyMCE Mobile Support

Since version 4.7 onward TinyMCE provides native mobile support. You can enable it in your app, after version 1.76 of SAPUI5. Keep in mind that we do not recommend the use of it, as it comes with some restrictions explained in the Preamble section of this chapter.

In order to enable the mobile theme use the below configuration:

> ### Example:  
> > ### Sample Code:  
> > ```
> > var oRichTextEditor = new sap.ui.richtexteditor.RichTextEditor();
> > oRichTextEditor.attachBeforeEditorInit(function(oEvent) {
> > 	var oConfig = oEvent.getParameter('configuration');
> > 		oConfig.mobile = {
> > 			theme: "mobile"
> > 			toolbar: [
> > 				"undo",
> > 				"redo",
> > 				"bold",
> > 				"italic",
> > 				"underline",
> > 				"link",
> > 				"unlink",
> > 				"image",
> > 				"bullist",
> > 				"numlist",
> > 				"fontsizeselect",
> > 				"forecolor",
> > 				"styleselect",
> > 				"removeformat"
> > 			]
> > 		};
> > 	});
> > ```

For the full mobile TinyMCE configuration, see [https://www.tinymce.com/docs-4x/mobile/](https://www.tinymce.com/docs-4x/mobile/).

**Related Information**  


[Supported Library Combinations](../02_Read-Me-First/supported-library-combinations-363cd16.md "SAPUI5 provides a set of JavaScript and CSS libraries, which can be combined in an application using the combinations that are supported.")

