<!-- loio1da158152f644ba1ad408a3e982fd3df -->

# Lists

Lists have properties and events and they contain list items that inherit from `sap.m.ListItemBase`, which provides navigation, selection and event features. The list item type determines the way the list item interacts by providing additional features.



## List Properties

Lists can have the following properties:

-   The `mode` property defines the appearance of the left area of a list item. You can show a single selection, multi selection, delete buttons, or none of these. The `mode` property can have the following values:

    -   `None` \(default\)
    -   `SingleSelect` \(on the right side\)
    -   `SingleSelectLeft` \(on the left side\)
    -   `SingleSelectMaster` \(without select control for use cases like the split app, by default the !includeItemInSelection = true\)
    -   `MultiSelect`
    -   `Delete`

-   The `includeItemInSelection` property \(default: `false` defines the tap handling of a list item. By default, you can select an item by tapping the radio button or check box. To use the whole list item tap for selecting an item, change the property value to `true`. This property is only relevant in selection mode.

-   The `showUnread` property \(default: `false` decides whether an 'unread' indicator is added to each list item. When active, it shows a blue bubble for unread list items.
-   The `showNoData` property \(default: `true` shows a text to the user if a list has no content. The default text is 'No data'. You can use the `noDataText` property to change the default text.
-   The `noDataText` property \(default: 'No data'\) can be used to change the text that is displayed when the list has no content and the `showNoData` property is set to `true`.



## Swipe For Action

A user can swipe left on a list item to bring in a control, such as a button, and initiate an action for this item. This control is defined through the `swipeContent` aggregation of the list and is displayed to the right or center of the list item. For more information, see [Swipe List for Action](swipe-for-action-a01822c.md).



## List Events

Events are available for selecting, deleting and swiping in lists. The selection mode fires a `select` event and the deletion mode a `delete` event. A swipe left fires a `swipe` event. These events contain information about the list item that caused the event.

-   `select (listItem)`
-   `delete (listItem)` 
-   `swipe (listItem)`, see [Events](events-e498329.md)



## Rerendering

A list is rerendered together with all of its list items when the data of a bound model is changed. Due to the limited hardware resources of mobile devices, this may cause delays for lists that contain many list items. For this reason, we do **not** recommend using a list for these use cases.



## List Items

All list items inherit from `ListItemBase`, which contains the features for navigation, selection, and event.

Five different types of list items are available, which determine the way a list item interacts. A list item has a content area \(main area\), which may fire a `press` event, and a navigation area on the right hand side, which may fire a `press` or a `detailPress` event. The `type` property for each list item defines the events that are fired. You need to define a type to decide which visual feedback if given by a list item after it has been touched. The five available types are as follows:

-   `StandardListItem` provides an image, title, and description
-   `ActionListItem` provides a center-aligned text and is used to trigger actions
-   `DisplayListItem` has a label and a value
-   `InputListItem` provides a label and allows you to embed controls enabling user input, such as: input button, radio button, checkbox, slider, select, search
-   `CustomListItem` can be used for all list items that are not provided by SAPUI5. You can use it to build your own content and aggregate it.


Except for `ActionListItem`, list items do **not** by default fire an event unless it is configured with a type that defines how events are fired. The following table shows the different combinations of list item types and events:


<table>
<tr>
<th valign="top">

Type



</th>
<th valign="top">

Press Event



</th>
<th valign="top">

detailPress Event



</th>
<th valign="top">

Icon



</th>
<th valign="top">

Active Feedback



</th>
</tr>
<tr>
<td valign="top">

**Inactive \(default\)**



</td>
<td valign="top">

\--



</td>
<td valign="top">

\--



</td>
<td valign="top">

\--



</td>
<td valign="top">

\--



</td>
</tr>
<tr>
<td valign="top">

**Active**



</td>
<td valign="top">

yes



</td>
<td valign="top">

\--



</td>
<td valign="top">

\--



</td>
<td valign="top">

yes



</td>
</tr>
<tr>
<td valign="top">

**Navigation**



</td>
<td valign="top">

yes



</td>
<td valign="top">

\--



</td>
<td valign="top">

\>



</td>
<td valign="top">

yes



</td>
</tr>
<tr>
<td valign="top">

**Detail**



</td>
<td valign="top">

\--



</td>
<td valign="top">

yes



</td>
<td valign="top">

\(\>\)



</td>
<td valign="top">

\--



</td>
</tr>
<tr>
<td valign="top">

**DetailAndActive**



</td>
<td valign="top">

yes



</td>
<td valign="top">

yes



</td>
<td valign="top">

\(\>\)



</td>
<td valign="top">

yes \(content only\)



</td>
</tr>
</table>

As mentioned above, `ListItemBase` has an unread indicator property, which shows a blue bubble. This has to be enabled by the lists `showUnread` property. For selections on each list item a selected property \(default: `false`\) exists. Another feature is the `counter` property \(default: `null`\), which shows integer numbers except zero. If the number is zero, the counter is hidden. Properties for `ListItemBase`:

-   `unread` \(default: `false`\)
-   `selected` \(default: `false`\)
-   `counter` \(default: `undefined`\)

The following events are available for `ListItemBase`:

-   `press`: This event is fired when the content of a list item is tapped.
-   `detailPress`: This event is fired when the detail icon of a list item is tapped.



## List Item Types

The following types are available for list items:

-   `ActionListItem`

    In addition to the features inherited from `ListItemBase`, this type provides the `text` feature, which enables you to set a center aligned text. This is a simple list item for triggering actions. The following code snippet shows an example:

    ```js
    
      <List headerText="Actions">
        <ActionListItem text="Reject" />
        <ActionListItem text="Accept" />
      </List>
    
    ```

-   `DisplayListItem`

    In addition to the features inherited from `ListItemBase`, this type provides the `label` feature to set a label and the `value` feature to set a value. The following code snippet shows an example:

    ```js
    
      <DisplayListItem
        label="Name"
        value="{SupplierName}" />
    
    ```

-   `InputListItem`

    In addition to the features inherited from `ListItemBase`, this type provides the `label` feature to set a label and the `content` feature that can be aggregated with controls, for example a radio button or a search control. The following code snippet shows an example:

    ```js
    
      <List>
        <InputListItem label="WLAN">
          <Switch state="true" />
        </InputListItem>
        <InputListItem label="Price (EUR)">
          <Input
            placeholder="Price"
            value="799"
            type="Number" />
        </InputListItem>
    </List>
    
    ```

-   `StandardListItem`

    In addition to the features inherited from `ListItemBase`, this type provides the following additional features:

    -   `title`
    -   `description`
    -   `icon`: The icon is displayed on the left hand side of the list item and can be shown with or without an inset.

     `label` feature to set a label and the `content` feature that can be aggregated with controls, for example a radio button or a search control. The following code snippet shows an example:

    ```js
    
    <List headerText="Products"
        items="{/ProductCollection}">
        <items>
          <StandardListItem
            title="{Name}" />
        </items>
      </List>
    ```

-   `CustomListItem`

    In addition to the features inherited from `ListItemBase`, this type provides the option to aggregate content. You can use the `CustomListItem` for all list items that are not available in SAPUI5 standard, build your own content, and aggregate it.

    ```js
    
    <CustomListItem type="Inactive">
        <Label text="A first custom list item ..."  class="content"/>
        <Button text="Press me!" class="content"/>
    </CustomListItem>
    
    ```




## API Reference

-   [sap.m.List](https://ui5.sap.com/#/api/sap.m.List)
-   [sap.m.ListItemBase](https://ui5.sap.com/#/api/sap.m.ListItemBase)

-   **[Custom List Item](custom-list-item-3e426f1.md "You can use the sap.m.CustomListItem control to create your own
		layout if the other list items available in SAPUI5 do not fit your
		needs.")**  
You can use the `sap.m.CustomListItem` control to create your own layout if the other list items available in SAPUI5 do not fit your needs.

