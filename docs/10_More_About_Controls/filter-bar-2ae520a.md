<!-- loio2ae520a67c44495ab5dbc69668c47a7f -->

# Filter Bar

The `sap.ui.comp.filterbar.FilterBar` control is used to provide a user-friendly interface for queries.

The frequently asked questions section aims at answering some basic questions that you might have when using this control.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.filterbar.FilterBar) and the [samples](https://ui5.sap.com/#/entity/sap.ui.comp.filterbar.FilterBar).



## Overview

The `FilterBar` control has been implemented as a toolbar with a collapsible filter area. Whereas the toolbar is always visible, the filter area can be hidden to reduce the space required.

> ### Note:  
> This applies to desktop use. On tablets, the filter area is always collapsed but can be expanded by the user. On phones, the filter area is not displayed at all. You can access the filters through the *Filters* dialog.

The toolbar includes the `VariantManagement` control and contains the following buttons:

-   *Go*

    Executes the query.

    A `Search` event is raised, and the consuming control must respond to it. The `showGoButton` property is set to `True` by default and determines whether the button is visible.

-   *Hide Filter Bar* /*Show Filter Bar*

    Hides or displays the filter area.

    > ### Note:  
    > This function is available for desktop use only.

-   *Filters*

    Lists the filters that are available and, if selected, displays the filter dialog.


> ### Note:  
> You can also deactivate the toolbar using the `useToolbar=false` property setting. In this case the filter bar buttons are rendered in the filter area right behind the filters; on phones, right before the filters. The *Filters* dialog is then called *Adapt Filters* dialog.

> ### Note:  
> The `FilterBar` control can be used on its own. However, we strongly recommend to use it in combination with the `SmartFilterBar` control.



## Details



### `FilterItem` and `FilterGroupItem`

Filters are similar to query parameters. A filter is represented either by a `FilterItem` element or its specialization, the `FilterGroupItem` element. They are populated via the `FilterItems` or `FilterGroupItems` aggregations. The main difference is that the `FilterGroupItem` has the `group` attribute. The `FilterItem` is internally processed as a `FilterGroupItem` that belongs to the `Basic` group.

The embedding component of the `FilterBar` control determines if a filter is mandatory and visible, defines its label, and whether the filter is visible in the filter area.



### *Filters* Dialog

The *Filters* dialog provides all the functions that are available with the `FilterBar` control. The dialog shows groups of filter fields that are connected semantically, and they all have a group title.

You can define which filter is visible in the filter bar. In the *Filters* dialog, you can select the following:

-   *All*: Displays all available filters

-   *Visible*: Displays the filters shown in the filter bar

-   *Active*: Displays the filters with a value

-   *Visible and Active*: Displays the filters shown in the filter bar and the ones with a value

-   *Mandatory*: Displays the mandatory filter fields


The information in this dialog is row-based. The *Basic* group with filters is always expanded. For each filter, you can select a checkbox to make the filter visible in the filter bar.

Mandatory filters can only be removed from the filter bar if they have a value. As long as a mandatory filter does not have a value, it will be treated as added to the filter bar.

There are two views that the user can choose, the list view, which is the default view, and the group view. The list view offers a more condensed display, for example, if there are fewer filter fields available.

The buttons in the dialog offer the following functions:

-   *OK*

    Closes the dialog.

    Any data that is entered by the user is taken over before the dialog is closed.

-   *Cancel*

    Reverts all changes made by the user since the dialog was opened and closes the dialog.

-   *Reset*

    Reverts all changes made to the current view by raising the `Reset` event and applies the current view again.




## Integration with Value Help Dialog

The filter bar is also used in the *Value Help* dialog scenarios. The filter bar property `advancedMode` must be set to `true` to enable this function.

The embedding component has to provide a search field using the `FilterItems` aggregation and an advanced search using the `FilterGroupItems` aggregation. For the search, the `Search` event is raised.



## Integration with Smart Variant Management

A view represents a set of filters. Views are handled and represented on the user interface by the `VariantManagement` control that is included in the toolbar of the `FilterBar` control. Views are stored in a backend system and also retrieved from there.

For views, the following is available:

-   Shell service for personalization
-   SAPUI5 flexibility

They can be accessed using the `SmartVariantManagement` or `SmartVariantManagementUI2` control.

For more information about the shell services, see the [API Reference](https://ui5.sap.com/#/api/sap.ushell.services.Personalization) in the Demo Kit. For more information about SAPUI5 flexibility, see [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md).

The consuming control that is using the `SmartVariantManagement` control has to provide the following dedicated methods:

-   `applyVariant` \(`oVariantContent`\)
-   `var oVariantContent` = `fetchVariant` \(\)

The `fetchVariant` has to return a JSON object. This is the information that is stored along with some administrative information, such as the name of the view and the ID. Once the view has been retrieved from the backend system and transferred to the consuming control, the `applyVariant` is executed. During execution, the consuming control must know the format of `oVariantContent`, since the control must also provide the method and react on it.

The following table shows which controls are used by the filter bar controls to handle views:

**Controls for View Management Integration**


<table>
<tr>
<th valign="top">

Control

</th>
<th valign="top">

Uses

</th>
</tr>
<tr>
<td valign="top">

`FilterBar` 

</td>
<td valign="top">

`SmartVariantManagementUI2` 

</td>
</tr>
<tr>
<td valign="top">

`SmartFilterBar` 

</td>
<td valign="top">

`SmartVariantManagement` 

</td>
</tr>
</table>



### Shell Service for Personalization

The shell service for personalization is handled internally by the `FilterBar` control. The basic view handling is implemented by the `SmartVariantManagementUI2` control. It extends the `VariantManagement` control. The shell service for personalization only supports end user personalization.

The consuming control of the `FilterBar` has to provide two methods, one for fetching the data that must be stored as the content of the view, and one for applying this data, if the view is set. Both methods have to be registered using the corresponding methods of the `FilterBar` control:

-   `registerApplyData` \(`fApplyData`\) – interface: `fApplyData` \(`oVariantContent`\)
-   `registerFetchData` \(`fFetchData`\) – interface: `oVariantContent` = `fFetchData` \(\)

A persistence key `setPersistencyKey` \(`sKey`\) must be provided as well. This key identifies the storage area and saves and retrieves the views currently used.

To trigger the retrieval of the views, the consuming control must register to the `Initialise` event of the `FilterBar` and call the `fireInitialise()` method in the `FilterBar` control.

> ### Note:  
> The retrieval of the initial views is done asynchronously. If the retrieval has been completed, the `SmartVariantManagementUI2` control will be populated with the view information, and the event handler for the `Initialise` event will be called.



### SAPUI5 Flexibility

SAPUI5 flexibility is handled internally by the `SmartFilterBar` control. The basic view handling is implemented by the `SmartVariantManagement` control. It extends the `VariantManagement` control. SAPUI5 flexibility features support end user personalization and also allow you to create and store views in the VENDOR layer of the layered repository.

> ### Note:  
> We recommend that you always use SAPUI5 flexibility rather than the shell service.

> ### Note:  
> You can also hide `VariantManagement` if no `persistencyKey` is provided. Also, you can separate the `VariantManagement` control from the `FilterBar` control by using the page variant of the `SmartVariantManagement` control.



## FAQ



### How can I use SAPUI5 flexibility in the `FilterBar` control?

In general, the `FilterBar` control supports the shell service for personalization. The following steps describe how to enable the `FilterBar` control to use the SAPUI5 flexibility features provided the `FilterBar` is already used and the consuming control supports the shell service via the `FilterBar` control. If this is not the case, make sure the shell service is used as described above before you start.

After that, here is what you need to do:

1.  Extend the `FilterBar` to create a new `FilterBar` control.

    ```js
    
    sap.ui.comp.filterbar.FilterBar.extend(“my.ui5flex.FilterBar”) {..}
    ```

2.  Overwrite the internal `_initializeVariantManagement` function of the `FilterBar` control.

    ```js
    
    my.ui5flex.FilterBar.prototype._initializeVariantManagement = function() {
          	if (this._oSmartVM && this.getPersistencyKey()) {
                var oPersInfo = new sap.ui.comp.smartvariants.PersonalizableInfo({
    		     type: "filterBar",
    		     keyName: "persistencyKey"		
                 });
    	     oPersInfo.addControl(this);
    
    	     this._oSmartVM.addPersonalizableControl(oPersInfo);					        
                 sap.ui.comp.filterbar.FilterBar.prototype._initializeVariantManagement.apply(this, arguments);
    
    	 } else {
    		this.fireInitialise();
     }
        };
    
    ```

    > ### Note:  
    > Here, the `_initializeVariantManagement` function has to be called instead of the `fireInitialise()` method, as mentioned before. The main purpose of this function is to register the extended `FilterBar` control to the `VariantManagement` control. Once the `VariantManagement` control has been initialized, the `FilterBar` control triggers the `fireInitialise()` method call internally.

3.  Overwrite the internal `_createVariantManagement` function of the `FilterBar` control.

    ```js
    
    my.ui5flex.FilterBar.prototype._createVariantManagement = function() {
             this._oSmartVM = new sap.ui.comp.smartvariants.SmartVariantManagement({
                    	showExecuteOnSelection: true,
                    	showShare: true
               	   });
                    return this._oSmartVM;
    };
    
    ```




## Further Communication between `FilterBar`, `SmartFilterBar`, and Consuming Control

The following is also valid for the `SmartFilterBar` control: Before a view is saved, the `FilterBar` control triggers the `beforeVariantSave` event. This allows the consuming control to prepare for the `fetchData` call, if required. Right after this event is raised, the `FilterBar` control calls the method provided by the `registerFetchData` method. If you select a view from the `VariantManagement` control or the `SmartVariantManagement` respectively after the `FilterBar` has called the method provided by the `registerApplyData` method, the `afterVariantLoad` event is raised.

> ### Note:  
> The `afterVariantLoad` event is also raised internally when you select *Cancel* or *Reset* in the *Filters* dialog of the filter bar.



## Related Information

[Smart Filter Bar](smart-filter-bar-7bcdffc.md)

[Smart Variant Management](smart-variant-management-06a4c3a.md)

