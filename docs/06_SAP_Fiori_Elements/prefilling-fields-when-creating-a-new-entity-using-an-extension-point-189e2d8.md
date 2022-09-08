<!-- loio189e2d8a59f04a2693a4fde7f4a91a65 -->

# Prefilling Fields When Creating a New Entity Using an Extension Point

When you create a new entity, y can prefill fields with specific values.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

There are two ways you can implement this feature:

-   Passing values entered by you into the filter bar

-   Using Values from the `DefaultValuesFunction`

-   Using cross-app navigation. For more information, see [Prefilling Fields When Creating a New Entity](prefilling-fields-when-creating-a-new-entity-11ff444.md).




<a name="loio189e2d8a59f04a2693a4fde7f4a91a65__section_ttg_h3m_5cb"/>

## Passing Values Entered by the User into the Filter Bar

In the list report, if you enter a value into the filter bar, perform a search, and then create a new object, this can mean that you want to create an instance that wasn’t found with the previous search. You can support this scenario by providing the additional option `"Create with filters"`, that passes filter values entered by the you to the newly created instance.

To enable this feature, you must add the following snippet to the `manifest.json`:

```

... 
"sap.ui.generic.app": {  
    "_version": "???",   
    "settings": {   ...   },   
    "pages": {    
        "ListReport|myEntitySet": {     
            "entitySet": "myEntitySet",     
            "component": {      
                "name": "sap.suite.ui.generic.template.ListReport",
                "list": true,      
                "settings": {       
                    "createWithFilters": {        
                        "strategy": "extension"       
                    },
            ...

```

Result: The standard *Create* button in the list report is replaced by a menu button that gives you two options:

-   The text for the first option is given by the `CREATE_NEW_OBJECT` i18n key. The default text is *Create Object*. We recommend overwriting this text with a more specific text, for example, *Create New Product*.

-   The text for the second option is *Create with Filters*. We do not recommend overwriting this text.

    > ### Note:  
    > This option is enabled only if the data displayed in the table corresponds to the displayed filter values. This means that the user might have to choose *Go* to enable the option if the selection is not triggered automatically.




<a name="loio189e2d8a59f04a2693a4fde7f4a91a65__section_ddx_d3k_jrb"/>

## Using Values from the `DefaultValuesFunction`

You can implement the logic that transfers information from the filter bar to the creation process or the values returned by the . To do so, you have to override the`getPredefinedValuesForCreateExtension(oSmartFilterBar,oDefaultValues)` extension function. This function receives an instance of `sap.ui.comp.smartfilterbar.SmartFilterBar` and the default values received from the back end, if the entity type is annotated with `Common.v1.DefaultValuesFunction`. This must return an object that represents the name/value pairs that can be used in the creation process.

The following code sample extracts the filter values for `ProductCategory` and `Supplier` \(if they exist and are unique\). Otherwise, the values returned by the `DefaultValuesFunction` are set:

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

You can implement the logic that transfers information from the filter bar to the creation process. To do so, you have to override the `getPredefinedValuesForCreateExtension(oSmartFilterBar)` extension function. This function receives an instance of `sap.ui.comp.smartfilterbar.SmartFilterBar` and must return an object that represents the name/value pairs that should be used in the creation process.

This is shown in the following code sample, which extracts the filter values for `ProductCategory` and `Supplier` \(if one exists and is unique\):

> ### Sample Code:  
> ```
> 
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
> 
> ```

> ### Note:  
> We recommend using this option only for fields that are available and editable on the object page, and that will not be changed via UI adaptation. Otherwise, users might potentially save values that they have never seen or cannot change.

