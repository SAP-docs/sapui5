<!-- loioc35fa60228f44317a68afe661e945754 -->

# Navigation from an App \(Outbound Navigation\)

You can configure navigation to an outside target.



> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).



<a name="loioc35fa60228f44317a68afe661e945754__section_q3c_dg5_5lb"/>

## Using a URL

You have two annotation options. You can either specify the absolute URL explicitly, or you can use a path reference to a property using the `DataFieldWithUrl` annotation as follows:

Example 1: `DataFieldWithURL` as path reference to a property:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataFieldWithUrl">
>     <PropertyValue Property="Label" String="Column label" />
>     <PropertyValue Property="Value" Path="URL"/>
>     <PropertyValue Property="Url" Path="URL"/>
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.<lineItem/fieldGroup>: [{ type: #WITH_URL, url: 'URL' }]
> URL;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> {
>     $Type :  'UI.DataFieldWithUrl',
>     Value :  URL,
>     Url :    URL,
>     Label :  'Column label'
> },
> ```

Example 2: `DataFieldWithURL` with absolute URL:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataFieldWithUrl">
>     <PropertyValue Property="Url" String="Your URL"/><!--For example: https://www.sap.com-->
>     <PropertyValue Property="Value" Path="URL"/>
>     <PropertyValue Property="Label" String="Company"/>
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> {
>     label: 'Company',
>     type: #WITH_URL,
>     url: 'Your URL' //For example: https://sap.com
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> {
>     $Type : 'UI.DataFieldWithUrl',
>     Url :   'Your URL', //For example: https://www.sap.com
>     Value : 'URL',
>     Label : 'Company'
> }
> ```

> ### Note:  
> A link control is rendered for the property on the list report page or on the object page in display mode only.



<a name="loioc35fa60228f44317a68afe661e945754__section_hy2_s5h_tgc"/>

## Navigation to a Semantic Object \(Intent-Based Navigation\)

If you associate a semantic object annotation with any property, this establishes [Intent-Based Navigation](http://help.sap.com/saphelp_nw75/helpdata/en/bd/8ae3d327ab4541bcce8e7353c046fc/content.htm).

An intent is a mechanism that lets you perform actions on semantic objects \(such as navigating to a sales order or displaying a fact sheet\) without having to worry about the UI technology or technical implementation of the navigation target. Intent-based navigation is necessary in the following cases:

-   Depending on the user's role, a different application or view of an application must be displayed.

-   You want to define an ambiguous navigation target. This means that, at runtime, a list of potential targets is suggested to the user.




### Options for Intent-Based Navigation

To enable intent-based navigation, you must associate a semantic object. Navigation can then be triggered using a link or a button.

**Using a Link**

-   Global association

    To use a specific property that is always shown as a link in your application, you must annotate the property with a semantic object. Wherever the property is used as a `DataField`, it is always rendered as a link, also known as semantic link.

    When a user chooses the semantic link and only one navigation target is found, direct navigation to the target is triggered. If more than one target is found, the system displays a popover containing some text and links to the targets for the user to choose from. You can hide unwanted semantic object actions from the popover using the `SemanticObjectUnavailableActions` annotation. You can also annotate a property with multiple semantic objects by using different qualifiers for the `SemanticObject` annotation.

    You can enhance the content of this popover and display a quick view containing more information about the navigation target. For more information, see [Enabling Quick Views for Link Navigation](enabling-quick-views-for-link-navigation-e5b509c.md).

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Annotations xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="ZFAR_CUSTOMER_LINE_ITEMS2_SRV.Item/CostCenter">
    >     <Annotation Term="com.sap.vocabularies.Common.v1.SemanticObject" String="CostCenter"/>
    > </Annotations>
    > 
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
    > annotate view ITEM with {
    >     @Consumption.semanticObject: 'CostCenter'
    >     costcenter;
    > }
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > annotate ZFAR_CUSTOMER_LINE_ITEMS2_SRV.Item with {
    >     @Common.SemanticObject : 'CostCenter'
    >     CostCenter
    > };
    > ```

    Semantic links can also point to dynamically added semantic objects. To do so, make sure that you point to a path that returns a valid semantic object name as a string at runtime.

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Annotations Target="myService.SalesorderManage/SoldToParty">
    >    <Annotation Term="Common.SemanticObject" Path="solToPartySemanticObject"/>
    > </Annotations>
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > No ABAP CDS annotation sample is available. Please use the local XML annotation.

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > SoldToParty: String(10) @(
    >  Common.SemanticObject: solToPartySemanticObject
    > );
    > ```

-   Local association

    To only show the property as a link in a specific use case \(for example, within a form on an object page\), you must use the `DataFieldWithIntentBasedNavigation` annotation. You can use this type of link in tables and forms, that is, a `DataFieldWithIntentBasedNavigation` can be added to a `LineItem` or `FieldGroup` annotation. The link text is set according to the `"Value"` property \(in the example below, this is the value of `SomePath`\). Note that in SAP Fiori elements for OData V2 `sap:unit` annotations aren't evaluated in this context.

    > ### Note:  
    > -   Make sure you define a unique target by specifying both the semantic object and an action. Otherwise, clicking the link will not trigger direct navigation to the target.
    > 
    > -   In applications where links are annotated with `DataFieldWithIntentBasedNavigation`, the context menu does not display the *Open in New Tab* and *Open in New Window* options when an user right-clicks on them.

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Record Type="UI.DataFieldWithIntentBasedNavigation">
    >     <PropertyValue Property="Label" String="My Link for navigation" />
    >     <PropertyValue Property="Value" Path="SomePath" />
    >     <PropertyValue Property="SemanticObject" String="MySemanticObject"/>
    >     <PropertyValue Property="Action" String="manage"/>
    > </Record>
    > 
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
    > @UI.<lineItem/fieldGroup>: [ 
    >   {
    >     label: 'My Link for navigation',
    >     value: 'SOMEPATH',
    >     semanticObjectAction: 'manage',
    >     type: #WITH_INTENT_BASED_NAVIGATION
    >   }
    > ]
    > @Consumption.semanticObject: 'MySemanticObject'
    > 
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    >     {
    >         $Type : 'UI.DataFieldWithIntentBasedNavigation',
    >         Label : 'My Link for navigation',
    >         Value : SomePath,
    >         SemanticObject : 'MySemanticObject',
    >         Action : 'manage',
    >     },
    > ```

    For examples of how to use the `DataFieldWithIntentBasedNavigation` annotation, see the [App-Specific Actions](adding-actions-to-tables-c909f6b.md#loioc909f6b493724764a30e5ff7db07e5d2__section_ifk_jqb_2nb) section in [Adding Actions to Tables](adding-actions-to-tables-c909f6b.md).


If a semantic object is configured for a property, the value of this property is passed within the semantic object in the navigation context. For example, if the property is `SoldToParty` with the value `001` and the `SemanticObject` is `Customer`, then the navigation context will have `Customer` with the value `001`.

**Using a Button**

To provide a button for navigation, you annotate a property as a `DataFieldForIntentBasedNavigation`.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataFieldForIntentBasedNavigation">
>     <PropertyValue Property="Label" String="My Button for navigation"/>
>     <PropertyValue Property="SemanticObject" String="MySemanticObject"/>
>     <PropertyValue Property="Action" String="manage"/>
> </Record>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.<lineItem/fieldGroup>: [ 
>   {
>     label: 'My Button for navigation',
>     semanticObjectAction: 'manage',
>     type: #FOR_INTENT_BASED_NAVIGATION
>   }
> ]
> @Consumption.semanticObject: 'MySemanticObject'
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> {
>     $Type : 'UI.DataFieldForIntentBasedNavigation',
>     Label : 'My Button for navigation',
>     SemanticObject : 'MySemanticObject',
>     Action : 'manage',
> },
> ```

You can replace standard internal navigation with external navigation by using intent-based navigation. For more information, see [Changing Navigation to Object Page](changing-navigation-to-object-page-1154c02.md).



### Actions Triggering External Navigation

Add the following property: `<PropertyValue Property="RequiresContext" Bool="true"/>`

If `RequiresContext` is `true`, then the button is disabled until a selection is made. If it's `false`, then the button is always enabled. The default value for `RequiresContext` is `false`.

> ### Note:  
> `RequiresContext` only determines whether the button is enabled based on the user's selected context. Regardless of its value, any available context is always passed along, following the standard navigation process.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataFieldForIntentBasedNavigation">
>    <PropertyValue Property="SemanticObject" String="EPMProduct"/>
>    <PropertyValue Property="Action" String="manage_st"/>
>    <PropertyValue Property="Label" String="IBNWithContext"/>
>    <PropertyValue Property="RequiresContext" Bool="true"/>
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> {    
>     semanticObject: 'EPMProduct',
>     semanticObjectAction: 'manage_st',
>     label: 'IBNWithContext',
>     requiresContext: true,
>     type: #FOR_INTENT_BASED_NAVIGATION
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> {
>    $Type: 'UI.DataFieldForIntentBasedNavigation',
>    SemanticObject: 'SalesOrder',
>    Action: 'manageInline',
>    Label: 'IBNwithcontext',
>    RequiresContext: true
> }
> ```

-   **Display or Hide Buttons Triggering External Navigation**

    You can define that context-independent buttons \(`RequiresContext` is set to `false`\) triggering external navigation are displayed only if the navigation target is supported on the current device. In addition, if the `SemanticObject` or the action is invalid and if the user doesn't have the correct authorizations, the button isn't displayed. As a prerequisite, you must have maintained the navigation target in the SAP Fiori launchpad as shown in the following images:

      
      
    **SAP Fiori launchpad: Maintain the Supported Devices for the Combination of Semantic Object and Action**

    ![](images/SupportedDevice_41cc89e.png "SAP Fiori launchpad: Maintain the Supported Devices for the Combination of Semantic
    								Object and Action")

      
      
    **SAP Fiori launchpad: Maintain the Mandatory Parameters for Semantic Object and Action**

    ![](images/mandatoryparameters_45f06a4.png "SAP Fiori launchpad: Maintain the Mandatory Parameters for Semantic Object and
    								Action")

    > ### Note:  
    > -   As already shown, you maintain mandatory parameters for navigation in SAP Fiori launchpad, such as a sales order ID. If you have specified `RequiresContext: False` for the combination of semantic object and action, and if for this combination you maintain a mandatory parameter in SAP Fiori launchpad, these settings contradict each other and the button isn't displayed.
    > 
    > -   This feature isn't relevant for context-dependent buttons. For information about context-dependent and context-independent actions, see [Actions](actions-14418d7.md).


You can also hide the intent-based navigation button by using `UI.Hidden` against the `UI.DataFieldForIntentBasedNavigation` button. This can have the static values `true` or `false`, or have a path-based value. You can't set `UI.Hidden` for inline `DataFieldForIntentBasedNavigation` buttons.



### Semantic Object Mapping

You can change the name of properties that are passed in the navigation context when using the intent-based navigation mechanism.

> ### Tip:  
> We recommend using the common field names from the global field catalog in both the source and target applications. If the source field name is not from the global field catalog, don't pass the source field name, but rather pass the global field catalog name to the target.

If the target field name isn't from the global field catalog, you can use the target-mapping mechanism to convert the incoming global field catalog name to the target-specific field.

To do this when using the semantic link-based navigation, use the `SemanticObjectMapping` annotation as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="com.c_salesordermanage_sd.defaultParamsForSalesOrderCreate/SoldToParty">
>      <Annotation Term="Common.SemanticObject" String="Customer"/>
>      <Annotation Term="Common.SemanticObjectMapping">
>           <Collection>
>                <Record Type="Common.SemanticObjectMappingType">
>                     <PropertyValue Property="LocalProperty" PropertyPath="SoldToPartyID"/>
>                     <PropertyValue Property="SemanticObjectProperty" String="CustomerID"/>
>                </Record>
>           </Collection>
>      </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> SoldToParty : String(10) @(Common : { 
>     SemanticObject                : 'Customer',
>     SemanticObjectMapping         : 'SoldToPartyID'[
>         {
>         LocalProperty           : SoldToPartyID,
>         SemanticObjectProperty  : 'CustomerID'
>         }
>     ]
> });
> ```

> ### Note:  
> Navigation properties cannot be used within the annotation as mapping properties.



<a name="loioc35fa60228f44317a68afe661e945754__section_e1w_2vh_tgc"/>

## Excluding Properties in a Navigation Context

The properties marked with the `PersonalData.IsPotentiallySensitive` annotation aren't included in the navigation context. You can also choose to exclude any property from the application using the `UI.ExcludeFromNavigationContext` annotation.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="ZEPM_C_User.C_UserDetailsType/CreditCardNumber">
>     <Annotation Term="com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive" />
> </Annotations>
> 
> <Annotations Target="ZEPM_C_SALESORDERITEMQUERY_CDS.ZEPM_C_SALESORDERITEMKPIResult/BusinessPartner">
>     <Annotation Term="UI.ExcludeFromNavigationContext />
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> annotate view C_UserDetails with {
>   @Semantics.personalData.isPotentiallySensitive: true
>   CreditCardNumber;
> }
> ```



<a name="loioc35fa60228f44317a68afe661e945754__section_gjq_4vh_tgc"/>

## Navigation to Object Pages in a Multi-Entity Set with Tabs

You can navigate to any object page in a target app that has a multi-entity set with tabs if the navigation context uniquely identifies a record in the target app. Configure both the source and target apps as follows:

In the extension controller of the source app, pass an additional parameter to the target app using the `adaptNavigationParameterExtension` extension. This additional parameter, a key-value pair, is used in the `manifest.json` file of the target app to uniquely identify the object page to be opened.

> ### Sample Code:  
> `ListReportExtension.controller.js`
> 
> ```
> adaptNavigationParameterExtension: function(oSelectionVariant, oObjectInfo) {
> if (oObjectInfo.semanticObject === "EPMSalesOrder" && oObjectInfo.action === "manage_sttasomv") {
>     oSelectionVariant.addParameter("<Key>", "<Value1>");
>     }
> }
> 
> ```

> ### Sample Code:  
> `ObjectPageExtension.controller.js`
> 
> ```
> adaptNavigationParameterExtension: function(oSelectionVariant, oObjectInfo) {
> if (oObjectInfo.semanticObject === "EPMSalesOrder" && oObjectInfo.action === "manage_sttasomv") {
>     oSelectionVariant.addParameter("<Key>", "<Value2>");
>     }
> }
> 
> ```

In the target app's `manifest.json` file, mark the parameter used to determine the object page with `useForTargetResolution`.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> 
> "sap.ui.generic.app": {
>         "settings": {
>             "inboundParameters": {
>                 "<Key>": {
>                     "useForTargetResolution": true
>                 }
>             }
>         }
> }
> 
> ```

After you identify the key, use its value in the page hierarchy to determine the object page.

> ### Example:  
> > ### Sample Code:  
> > ```
> > "sap.ui.generic.app": {
> >         "pages": {
> >             "ListReport|<EntitySet1>": {
> >                 "entitySet": "<EntitySet1>",
> >                 "component": {
> >                     "name": "sap.suite.ui.generic.template.ListReport",
> >                     "settings": {
> >                         "quickVariantSelectionX": {
> >                             "variants": {
> >                                 "1": {
> >                                     "key": "1",
> >                                     "entitySet": "<EntitySet1>",
> >                                     "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#VAR1"
> >                                 },
> >                                 "2": {
> >                                     "key": "2",
> >                                     "entitySet": "<EntitySet2>",
> >                                     "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#VAR2" 
> >                             }
> >                         }
> >                     }
> >                 },
> >                 "pages": {
> >                     "ObjectPage|<EntitySet1>": {
> >                         "entitySet": "<EntitySet1>",
> >                         "component": {
> >                             "name": "sap.suite.ui.generic.template.ObjectPage",
> >                             "settings": { 
> >                                 "targetResolution": {
> >                                     "<Key>": "<Value1>"
> >                                 }
> >                             }
> >                         }
> >                     },
> >                     "ObjectPage|<EntitySet2>": {
> >                         "entitySet": "<EntitySet2>",
> >                         "component": {
> >                             "name": "sap.suite.ui.generic.template.ObjectPage",
> >                             "settings": {
> >                                 "targetResolution": {
> >                                     "<Key>": "<Value2>"
> >                                 }
> >                             } 
> >                         } 
> >                     }
> >                 }
> >             }
> >         }
> >     }
> > 
> > ```

In this example, when `<Key>-<Value1>` is passed as an additional parameter in the navigation context, the `<EntitySet1>` object page is opened. Similarly, when `<Key>-<Value2>` is passed, the `<EntitySet2>` object page is opened.

> ### Note:  
> -   In case of a conflict, the `creationEntitySet` settings take priority over the configuration defined in the target app's `manifest.json` file.
> 
> -   If the navigation context from the source app doesn't provide enough information to identify a record on the desired object page, then the list report page is opened with the first tab selected.

