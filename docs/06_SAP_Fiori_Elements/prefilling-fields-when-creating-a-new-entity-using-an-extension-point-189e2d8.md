<!-- loio189e2d8a59f04a2693a4fde7f4a91a65 -->

# Prefilling Fields When Creating a New Entity Using an Extension Point

End users can create a new entity and prefill fields with specific values.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V2.

App developers can implement this feature in three different ways:

-   Passing values entered by the end user into the filter bar.

-   Using values from `DefaultValuesFunction`.

-   Using cross-app navigation. For more information, see [Prefilling Fields When Creating a New Entity](prefilling-fields-when-creating-a-new-entity-11ff444.md).




<a name="loio189e2d8a59f04a2693a4fde7f4a91a65__section_ttg_h3m_5cb"/>

## Passing Values Entered by the End User into the Filter Bar

In the list report, when an end user inputs a value into the filter bar, performs a search, and then creates a new object, this action suggests that this user intends to create an instance that wasn’t found in the previous search. To support this scenario, app developers can provide an additional option called *Create with Filters*, which passes the filter values entered by this user to the newly created instance.

App developers can perform the following steps to enable this feature:

1.  Add the following sample code to the `manifest.json` file:

    > ### Sample Code:  
    > ```
    > 
    > ... 
    > "sap.ui.generic.app": {  
    >     "_version": "???",   
    >     "settings": {   ...   },   
    >     "pages": {    
    >         "ListReport|myEntitySet": {     
    >             "entitySet": "myEntitySet",     
    >             "component": {      
    >                 "name": "sap.suite.ui.generic.template.ListReport",
    >                 "list": true,      
    >                 "settings": {       
    >                     "createWithFilters": {        
    >                         "strategy": "extension"       
    >                     },
    >             ...
    > 
    > ```

    Result: The standard *Create* button in the list report is replaced by a menu button that offers the following two options:

    -   For the first option, the text is provided by the `i18n` key `CREATE_NEW_OBJECT`, with the default being *Create Object*. We recommend replacing this with a more specific text, such as *Create New Product*.

    -   For the second option, the text is *Create with Filters*. We do not recommend overwriting this text.

        > ### Note:  
        > This option is enabled only if the data displayed in the table corresponds to the displayed filter values. This means that the end user might have to choose *Go* to enable this option if the selection is not triggered automatically.


2.  Implement the logic that transfers information from the filter bar to the instance creation process. To do so, app developers must override the extension function `getPredefinedValuesForCreateExtension(oSmartFilterBar)`. This function receives an instance of `sap.ui.comp.smartfilterbar.SmartFilterBar` and must return an object containing the name-value pairs that can be used in the creation process.

    The following sample code shows how to extract the filter values for `ProductCategory` and `Supplier`, if one exists and is unique:

    > ### Sample Code:  
    > ```
    > getPredefinedValuesForCreateExtension: function(oSmartFilterBar){   
    >     var oRet = {};   
    >     var oSelectionVariant = oSmartFilterBar.getUiState().getSelectionVariant();   
    >     var aSelectOptions = oSelectionVariant.SelectOptions;   
    >     var fnTransfer = function(sFieldname){    
    >         for (var i = 0; i < aSelectOptions.length; i++){     
    >             var oSelectOption = aSelectOptions[i];     
    >             if (oSelectOption.PropertyName === sFieldname){      
    >                 if (oSelectOption.Ranges.length === 1){       
    >                     var oFilter = oSelectOption.Ranges[0];       
    >                     if (oFilter.Sign === "I" && oFilter.Option === "EQ"){        
    >                         oRet[sFieldname] = oFilter.Low;       
    >                     }      
    >                 }      
    >                 break;     
    >             }    
    >         }   
    >     };     
    >     fnTransfer("ProductCategory");   
    >     fnTransfer("Supplier");   
    >     return oRet;  
    > },
    > ```

    > ### Note:  
    > We recommend using this option only for fields that are available and editable on the object page, and but cannot be modified through UI adaptation. Otherwise, end users might potentially save values they have never seen or cannot change.




<a name="loio189e2d8a59f04a2693a4fde7f4a91a65__section_ddx_d3k_jrb"/>

## Using Values from the `DefaultValuesFunction`

The following sample code extracts the filter values for `ProductCategory` and `Supplier`, if they exist and are unique. Otherwise, the values returned by the `DefaultValuesFunction` are set:

> ### Sample Code:  
> ```
> getPredefinedValuesForCreateExtension: function(oSmartFilterBar, oDefaultValues ){   
>     var oRet = {};   
>     var oSelectionVariant = oSmartFilterBar.getUiState().getSelectionVariant();   
>     var aSelectOptions = oSelectionVariant.SelectOptions;   
>     var fnTransfer = function(sFieldname){    
>         for (var i = 0; i < aSelectOptions.length; i++){     
>             var oSelectOption = aSelectOptions[i];     
>             if (oSelectOption.PropertyName === sFieldname){      
>                 if (oSelectOption.Ranges.length === 1){       
>                     var oFilter = oSelectOption.Ranges[0];       
>                     if (oFilter.Sign === "I" && oFilter.Option === "EQ"){        
>                         oRet[sFieldname] = oFilter.Low;       
>                     }      
>                 }      
>                 break;     
>             }  else if (oDefaultValues && Object.keys(oDefaultValues).includes(sFieldname)) {
>                 oRet[sFieldname] = oDefaultValues[sFieldname];
>             }
>         }   
>     };     
>     fnTransfer("ProductCategory");   
>     fnTransfer("Supplier");   
>     return oRet;  
> },
> 
> ```

For more information, see [Prefilling Fields Using the `DefaultValuesFunction`](prefilling-fields-using-the-defaultvaluesfunction-5ada91c.md).

