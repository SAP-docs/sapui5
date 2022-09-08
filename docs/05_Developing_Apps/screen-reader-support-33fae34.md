<!-- loio33fae3482358438e93daea5232527093 -->

# Screen Reader Support

SAPUI5 application developers need to be aware of how the screen reader reads out the contents of the UI. Labels, headings, and descriptions help you describe the contents and visual elements of an application.



## General Recommendations

The following rules and guidelines will help you avoid common pitfalls and show you best practices. You still need to be aware that there may be deviations between the interpretation of the markup by the different screen readers.



### Generate valid HTML

The screen reader software gets the information about the page directly from the DOM. Therefore, if the DOM is invalid, the information presented to the user might be invalid as well. Ideally, if the DOM is correct, the screen reader software will interpret it correctly. The nesting of the elements is also important and plays role for the validity, and can be validated in the app context \(for example the heading levels\). When you need to create new controls or change the HTML structure of existing ones for some reason, you have to check the validity of the resulting HTML.



### Use titles for complex components

Complex controls like pages, panels, and tables need a title to summarize the contents they hold. If you use the standalone `Title` control, make sure that it is associated with the element that needs the title.

> ### Example:  
> ```
> <mvc:View
>       xmlns:mvc="sap.ui.core.mvc"
>       xmlns="sap.m">
>    <Title id="rbGroupTitle" text="Select an option" textAlign="Center"/>
> 
>    <RadioButtonGroup columns="2" selectedIndex="2" ariaLabelledBy="rbGroupTitle">
>       <buttons>
>          <RadioButton id="RB2-1" text="Option 1"/>
>          <RadioButton id="RB2-2" text="Option 2" editable="false"/>
>          <RadioButton id="RB2-3" text="Option 3"/>
>       </buttons>
>    </RadioButtonGroup>
> </mvc:View>
> 
> ```



### Use labels

Make sure that all edit boxes, search fields, and column headers have labels. If not, use the `Label` control and add one. Labels have to be connected to each control, for example by using one of the following:

-   `labelFor=”…”`

-   `aria-label=”…”`

-   `aria-labelledby=”…”`

-   `placeholder=”…”`

-   `title=”…”`




### Titles in headings

For headings \(table toolbar, page header, form toolbar, panel toolbar\) the text should be in a `sap.m.Title` control \(make sure that it is associated with the element that needs the title and, if not, add the reference using `aria-labelledby`\).

> ### Example:  
> ```
> <mvc:View
>       xmlns:mvc="sap.ui.core.mvc"
>       xmlns="sap.m">
>    <Panel expandable="true">
>       <headerToolbar>
>          <Toolbar height="3rem">
>             <Title text="Header"/>
> 
>             <ToolbarSpacer/>
>             <Button icon="sap-icon://settings"/>
>             <Button icon="sap-icon://drop-down-list"/>
>          </Toolbar>
>       </headerToolbar>
>       <content>
>          <Text text="Lorem ipsum"/>
>       </content>
>    </Panel>
> </mvc:View>
> 
> 
> ```



### Labels and descriptions for input controls

When using `Input` controls, always provide a label \(make sure it is connected with the input\). You can also use the `description` property to add additional information. If you use `sap.m.Input`, the description is usually used for showing the unit of measurement \(for example. "EUR"\).

> ### Example:  
> ```
> <mvc:View
>    xmlns:l="sap.ui.layout"
>    xmlns:mvc="sap.ui.core.mvc"
>    xmlns="sap.m">
>    <l:VerticalLayout
>       class="sapUiContentPadding"
>       width="100%">
>       <l:content>
>          <Label text="Product price" labelFor="productPriceInput"/>
>          <Input
>             id="productPriceInput"
>             value="220"
>             description="EUR / 5 pieces"
>             width="200px"
>             fieldWidth="60px" />
>       </l:content>
>    </l:VerticalLayout>
> </mvc:View>
> 
> ```



### Empty labels in drop-down lists

In some cases, you may need to provide an empty option in a drop-down field such as `Select`. This way you want to indicate that none of the items in the drop-down is applicable, or offer the empty option as a way to clear the selection. In this case, you should properly label the empty option with *\(None\)* and not leave it blank.

The labeling on the empty option will be read by the screen reader and the end user will be correctly informed about the semantics of the empty option.

> ### Tip:  
> The empty label *\(None\)* should always be the first item in the drop-down.

For more information, see [Fiori Guidelines for Empty states](https://experience.sap.com/fiori-design-web/designing-for-empty-states/).



### List with info toolbar

When using the `List` control with visible non-active info toolbar with plain text content, you need to associate the `aria-labelledby` of the list with the text content of the `infoToolbar` aggregation.

> ### Example:  
> ```
> ...
> <List ariaLabelledBy="textInInfoToolbarId">
>                 <infoToolbar>
>                                <OverflowToolbar active="false">
>                                                <Label id="textInInfoToolbarId" text="Announce this text when the first list item is focused" />
>                                </OverflowToolbar>
>                 </infoToolbar>
>                 <items>
> 			  ...
> </List>
> ...
> ```



### Provide additional information when there are changes in the screen

Make sure to provide additional information to the user, when changes in the screen are done, based on user interaction. You can use one of the following informative techniques:

-   Include additional text description via `ariaDescribedBy`/`ariaLabelledBy` API for the control triggering the update \(Button, Search Field, or other interactive control\). For example: When search results will be placed in the area below, you can add a text describing how/where the users can locate the results.

-   Include additional text description via `ariaDescribedBy`/`ariaLabelledBy` on the parent control level. For example: In the case of apps using the list-detail pattern, where the list is on the left side and results are presented on the right side, you should add additional text describing that upon selection in the list, the details will be loaded in the details panel.

-   When something is opening on the screen, you can move the focus there, if your use case requires it. For example, for apps using the list-detail pattern when the user needs to browse the available items, the focus should stay in the list area. And in cases when the user has selected an item from the list and needs to perform an action, the focus should move to the details area.

    > ### Note:  
    > For controls that are toggling/opening regions and are still present after the toggling, then the focus should remain on them. But if the control is hidden afterwards – the focus needs to be moved, into the default focus position in the toggled/opened region.

-   The `sap.ui.core.InvisibleMessage` enables developers to specify the message to be announced when something dynamically changes on the user interface. For more information, see [Invisible Messaging](invisible-messaging-b9a7d6f.md).



## Tips for Testing

Start a screen reader, start the application, walk through the application using the keyboard and listen. For example, you can also use *Reading mode* or similar functions of your screen reader because some elements do not need to have the focus to be readable by screen readers.

-   Is everything that you need to use the application read correctly?

    -   Each element’s role, name, state, label, tooltip, further information \(attached errors, usage hints\)?

    -   Is this the case for interactive and semantic/non-semantic elements?

    -   Actively check that all visible UI elements are read.


-   Is it read correctly?

    -   No duplicates?

    -   No strange pronunciation, like reading English with German words or vice versa?

    -   No nonsense, wrong values, another element’s attributes?


-   Are screen updates like application messages, dialogs \(popups\), and similar dynamic content read correctly and at the right time?


-   **[Landmark API](landmark-api-fd7f9d4.md "The landmark API allows app developers to set different roles and labels that allow
		users to access the sections of the page using the screen reader
		functions/shortcuts.")**  
The landmark API allows app developers to set different roles and labels that allow users to access the sections of the page using the screen reader functions/shortcuts.
-   **[Labeling and Tooltips](labeling-and-tooltips-329a029.md "The following guidelines help you properly label your controls in order to have good
		accessibility.")**  
The following guidelines help you properly label your controls in order to have good accessibility.
-   **[Invisible Messaging](invisible-messaging-b9a7d6f.md "The Invisible Message class provides a way to grammatically expose dynamic content
		changes in a way that can be announced by screen readers.")**  
The Invisible Message class provides a way to grammatically expose dynamic content changes in a way that can be announced by screen readers.
-   **[Dialogs, Popups, and Popovers](dialogs-popups-and-popovers-5709e73.md "SAPUI5 dialog controls can
		serve different purposes within the application and are therefore handled differently by the
		screen reader. ")**  
SAPUI5 dialog controls can serve different purposes within the application and are therefore handled differently by the screen reader.

