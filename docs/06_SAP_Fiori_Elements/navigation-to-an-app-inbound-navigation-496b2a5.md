<!-- loio496b2a5a39b540df9220d7590cabc576 -->

# Navigation to an App \(Inbound Navigation\)

You can configure navigation to an SAP Fiori elements floorplan \(inbound navigation\).

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Navigation to an App \(Inbound Navigation\)](navigation-to-an-app-inbound-navigation-c337d8b.md).

When navigating to an SAP Fiori elements application that has a filter bar \(with the exception of the overview page\), the incoming context is processed and the filter bar populated. This overrides the default variant/filter settings of the SAP Fiori elements application.



<a name="loio496b2a5a39b540df9220d7590cabc576__section_w52_g2z_cqb"/>

## Handling Incoming Filters

An incoming value for a field that is also a filter field in the entity set of the target application is applied to the filter field. If the field is not yet seen in the filter bar, upon finding a value for the field from the incoming context, the filter field is brought into the visible area in the filter bar.



### Handling Default Values from SAP Fiori launchpad \(FLP\)

When dealing with incoming navigation, in addition to the navigation context passed by the source application, there are also other values coming from the FLP, like the FLP target mapping default values. The FLP target mapping can have parameters to which you can assign default values. These default values can also point to the FLP user default values.

  
  
**Handling Default Values from FLP**

![](images/Handling_Default_Values_from_FLP_9c2ee88.png "Handling Default Values from FLP")

-   When you navigate to a list report page application using intent-based navigation:

    Only the values added by the FLP through the standard target mapping mechanism are considered.

-   When you navigate to a list report page application using a static FLP tile \(with no navigation context\):

    If no user default variant is available, the FLP default values passed using the target mapping mechanism are used.

-   When you navigate to a list report page application using a dynamic tile, such as an *SAP Smart Business* tile where the navigation context is passed:

    In this case, a special handling applies for `DisplayCurrency`. If a mandatory filter field or a parameter with the technical name `DisplayCurrency` or `P_DisplayCurrency` respectively, doesn't receive a value from the incoming navigation context, it is set using the default `DisplayCurrency` setting configured in the end user's SAP Fiori launchpad. For all other fields, the FLP default values are ignored, except those provided by the FLP through the standard target mapping mechanism.


> ### Note:  
> The user default values from SAP Fiori launchpad marks the standard variant as dirty.



<a name="loio496b2a5a39b540df9220d7590cabc576__section_krn_xk3_vlb"/>

## Deep Linking

Navigation to the application uses deep linking. For more information, see [Navigation](https://experience.sap.com/fiori-design/concept/navigation/) in the SAP Design System guidelines and go to the *Deep Links* section.

> ### Note:  
> You need the SAP Fiori launchpad for this type of navigation. For a stand-alone application, you need to change the links in the annotations as required.

For the SAP Fiori launchpad, the configuration steps for [Intent-Based Navigation](http://help.sap.com/saphelp_nw75/helpdata/en/bd/8ae3d327ab4541bcce8e7353c046fc/content.htm) are also relevant since it's the same mechanism.

If the source application provides all the key fields in the URL to uniquely identify an object page \(or subobject page\) record, then the link is opened directly instead of the list report page or the analytical list page. Otherwise, the list report page or the analytical list page is opened.



### Deep Linking to Object Pages

You can trigger deep linking to object pages by providing all technical keys corresponding to the list report page entity set. Depending on the value of the `IsActiveEntity` technical key, the result is:

-   either the active or draft page is loaded

    or

-   if the draft is requested from the URL and is not accessible for the user, the user sees an error page


Technical keys are part of the metadata and are configured in the back end.

> ### Sample Code:  
> ```xml
> <EntityType Name="SalesOrderManage">
>    <Key>
>       <PropertyRef Name="ID"/>
>       <PropertyRef Name="IsActiveEntity"/>
>    </Key>  
> </EntityType>
> ```

> ### Example:  
> Technical keys are passed in the URL that triggers deep linking: …<code>?<b>ID</b>=11111111-aaaa-bbbb-cccc-ddddeeeeffff&amp;<b>IsActiveEntity</b>=true</code> 



### Deep Linking to Subobject Pages

You can also trigger deep linking directly to the n-th level of a subobject page. You must provide the manifest setting to indicate that deep linking is allowed for the subobject level.

> ### Note:  
> -   To directly load the n-th level subobject page, `allowDeepLinking` has to be true for all the n levels of the subobject page.
> 
>     > ### Example:  
>     > To be able to directly load the 2nd-level subobject page, `allowDeepLinking` has to be true for the 1st-level subobject page and the 2nd-level subobject page.
> 
>     If `allowDeepLinking` is false, then the last subobject page for which `allowDeepLinking` is true is loaded. 
> 
>     > ### Example:  
>     > If `allowDeepLinking` is false for the 2nd-level subobject page, but true for the 1st-level and 3rd-level subobject page, and you provide semantic keys up to the 3rd level of the subobject page, then the 1st-level subobject page is loaded.
> 
> 
> -   `allowDeepLinking` is not required or relevant for the object page. Deep linking to an object page always happens if the URL has all the technical or semantic keys of the entity set of the object page. It is only required for the deep linking to subobject page.

> ### Restriction:  
> We don't support deep linking for applications that are configured with parameters or mandatory filters.



<a name="loio496b2a5a39b540df9220d7590cabc576__section_zst_cld_hmb"/>

## Inbound Navigation to Subobject Pages Using Deep Linking

You can configure inbound navigation to any subobject page belonging to an application by using deep linking. To do so, make the following settings:

1.  In the target application's `manifest.json` file, for the corresponding subobject page, set `allowDeepLinking: true`, as shown in the following sample code:

    > ### Sample Code:  
    > manifest.json
    > 
    > ```
    > "pages": {
    >      "navigationProperty": "to_ProductText",
    >      "entitySet": "STTA_C_MP_ProductText",
    >      "component": {
    >           "name": "sap.suite.ui.generic.template.ObjectPage",
    >           "settings": {
    >                "allowDeepLinking": true
    >           }
    >      }
    > }
    > 
    > ```

    If multiple pages on the same level have this property set to `true`, the entry that comes first in the manifest is used.

    Navigation to any level is possible by setting `allowDeepLinking: true` for each level. Note that each level needs to have the setting `allowDeepLinking: true`. In the following sample code, the navigation goes to subobject level 3:

    > ### Sample Code:  
    > ```
    > Object Page1: {
    >      allowDeepLinking:true,
    >      SubObjectPage1:{
    >           allowDeepLinking:true
    >           SubObjectPage2:{
    >                allowDeepLinking:true
    >                SubObjectPage3:{
    >                     allowDeepLinking:true
    >                }
    >           }
    >      }
    > }
    > 
    > ```

2.  Provide the URL parameters for navigation, as described under [Configuring Navigation](https://help.sap.com/viewer/cc1c7615ee2f4a699a9272453379006c/7.5.5/en-US/bd8ae3d327ab4541bcce8e7353c046fc.html).




<a name="loio496b2a5a39b540df9220d7590cabc576__section_lqp_pv3_tgc"/>

## Configuring Sort Order

If the `xapp-state` carries the sort orders during inbound navigation to a target list report page or an analytical list page application, the target framework reads these sort parameters from the `xapp-state` and applies it as the sorting criteria to the table in the list report page or the analytical list page.

Although the sorters coming from the navigation is merged with the existing sorting criteria of the table, the sorters from the navigation context always take the priority.

The following are some of the possible scenarios:

-   If the user defined control variant exists as default with a sorter, the framework merges the navigation sorter on priority followed by the sorter from control variant.

-   If there is no default user defined variant with sorters, the framework merges the navigation sorter on priority followed by the sorter from `PresentationVariant` annotations.

-   If neither default user defined variant nor `PresentationVariant` is defined, the framework only uses sorters coming from navigation.




<a name="loio496b2a5a39b540df9220d7590cabc576__section_aps_5v3_tgc"/>

## Enabling Fullscreen Mode for Inbound Navigation in Flexible Column Layout Mode

During inbound navigation to flexible column layout application, if the navigation context points to a unique object, you can open the object in fullscreen mode by adding the configuration mentioned here. To experience better performance, set the `"defaultLayoutTypeIfExternalNavigation": "MidColumnFullScreen"` for the main objects and `"EndColumnFullScreen"` for sub-objects.

> ### Sample Code:  
> ```
> "pages": {
>     "ObjectPage|C_STTA_BusinessPartner": {
>         "entitySet": "C_STTA_BusinessPartner",
>         "defaultLayoutType": "TwoColumnsMidExpanded",
>         "defaultLayoutTypeIfExternalNavigation": "MidColumnFullScreen",
>         "component": {
>             "name": "sap.suite.ui.generic.template.ObjectPage"
>              "settings':{"allowDeepLinking": true
>         }
>     },
>     "pages": {
> .....
> ```

> ### Note:  
> -   If the navigation is external and flexible column layout is enabled, the flag `defaultLayoutTypeIfExternalNavigation` is considered.
> 
> -   If the app is launched from SAP Fiori launchpad and flexible column layout is enabled, the flag `defaultLayout` is considered.

