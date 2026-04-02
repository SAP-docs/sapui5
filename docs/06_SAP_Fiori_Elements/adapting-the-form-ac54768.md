<!-- loioac54768a711a476795761574488e8971 -->

# Adapting the Form

You can include navigation properties in form fields to be available in key user adaptation.



## Including Navigation Properties

By default, all direct properties except navigation properties are available for key user adaptation.

To add navigation properties to the *Available Content: Fields* dialog of the form fields, use the `navigationPropertiesForAdaptationDialog` setting in the `manifest.json` file under the `@com.sap.vocabularies.UI.v1.Identification` or `@com.sap.vocabularies.UI.v1.Fieldgroup` settings.

The `navigationPropertiesForAdaptationDialog` setting is an array of navigation property paths relative to the current entity type.

If the path points to a navigation property, all properties from this navigation are available in the *Available Content: Fields* dialog. If the path points to a simple property, only this field is available in the *Available Content: Fields* dialog. You can also use the matching pattern syntax to include several navigation properties as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "ObjectPage": {
>     ...
>     "options": {
>         "settings": {
>             ...
>             "controlConfiguration": {
>                 ...
>                 "@com.sap.vocabularies.UI.v1.Identification": {
>                     "navigationPropertiesForAdaptationDialog": [ "_CompanyCode/N*", "_Supplier"]
>                 },
>                 ...
>             }
>         }
>     },
>     ...
> }
> 
> ```

All properties of the navigation type `_Supplier` are added to the form adaptation, if they are not marked as hidden.

All properties of the navigation type `_CompanyCode` starting with `N` are added to the form adaptation.

