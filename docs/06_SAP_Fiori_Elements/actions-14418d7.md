<!-- loio14418d7692414bb994fda11cc2850846 -->

# Actions

You can use generic actions provided by SAP Fiori elements and implement application-specific actions using annotations or extension points.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Actions](actions-cbf16c5.md).

Application-specific actions either trigger an interaction with the back end, calling an OData service, or they trigger navigation. Depending on where you want to place an action, and how you want to use it, specific attributes, prerequisites, and guidelines apply. The details are described in this topic and in the floorplan-specific sections. For details about navigation, see [Configuring Navigation](configuring-navigation-1a6c395.md).



<a name="loio14418d7692414bb994fda11cc2850846__section_rkb_c1j_l4b"/>

## Overview


<table>
<tr>
<th valign="top">

 

</th>
<th valign="top">

Action Type

</th>
<th valign="top">

Context Dependency

</th>
<th valign="top">

Use

</th>
</tr>
<tr>
<td valign="top" colspan="4">

Global Actions

</td>
</tr>
<tr>
<td valign="top" rowspan="4">

 

</td>
<td valign="top" rowspan="3">

custom action

</td>
<td valign="top" rowspan="3">

context independent

</td>
<td valign="top">

List report page

Object page

[Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-3530e6b.md)

</td>
</tr>
<tr>
<td valign="top">

Overview page

[Defining Custom Actions](defining-custom-actions-c3de5c0.md)

</td>
</tr>
<tr>
<td valign="top">

Analytical list page

[Defining Custom Actions](defining-custom-actions-c3de5c0.md) 

</td>
</tr>
<tr>
<td valign="top">

annotation-based

</td>
<td valign="top">

page content is passed

</td>
<td valign="top">

Object page

[Enabling Actions in the Object Page Header](enabling-actions-in-the-object-page-header-87566a3.md)

</td>
</tr>
<tr>
<td valign="top" colspan="4">

Actions in the Table Toolbar

</td>
</tr>
<tr>
<td valign="top" rowspan="5">



</td>
<td valign="top" rowspan="3">

annotation-based

</td>
<td valign="top" rowspan="3">

depends \(see linked topics\)

</td>
<td valign="top">

List report page

Object page

[Adding Actions to Tables](adding-actions-to-tables-c909f6b.md)

[Generic Action Buttons in Tables on the Object Page: Additional Considerations](generic-action-buttons-in-tables-on-the-object-page-additional-considerations-d27ae99.md)

</td>
</tr>
<tr>
<td valign="top">

Analytical list page

</td>
</tr>
<tr>
<td valign="top">

[Configuring the Table-Only View as the Default Option](configuring-the-table-only-view-as-the-default-option-d074e26.md) 

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

custom action

</td>
<td valign="top" rowspan="2">

context independent

</td>
<td valign="top">

List report page

Object page

[Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-3530e6b.md)

</td>
</tr>
<tr>
<td valign="top">

Analytical list page

[Defining Custom Actions](defining-custom-actions-c3de5c0.md) 

</td>
</tr>
<tr>
<td valign="top">



</td>
<td valign="top">

n/a

</td>
<td valign="top">

n/a

</td>
<td valign="top">

[Displaying Actions on the Object Page](displaying-actions-on-the-object-page-91f81fa.md)

[Enabling the Related Apps Button](enabling-the-related-apps-button-f302a97.md)

</td>
</tr>
<tr>
<td valign="top" colspan="4">

Actions in Forms and Sections on the Object Page

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

 

</td>
<td valign="top">

annotation-based

</td>
<td valign="top">

depends \(see linked topics\)

</td>
<td valign="top">

[Adding Action Buttons to Forms in Sections](adding-action-buttons-to-forms-in-sections-14338ee.md) 

</td>
</tr>
<tr>
<td valign="top">

custom action

</td>
<td valign="top">

context independent

</td>
<td valign="top">

[Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-3530e6b.md) 

</td>
</tr>
<tr>
<td valign="top" colspan="4">

Actions in the Chart Toolbar

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

 

</td>
<td valign="top" rowspan="2">

annotation-based

</td>
<td valign="top" rowspan="2">

depends \(see linked topics\)

</td>
<td valign="top">

[Defining Actions in the Chart Toolbar](defining-actions-in-the-chart-toolbar-b13196e.md) 

</td>
</tr>
<tr>
<td valign="top">

Analytical list page

[Configuring the Chart-Only View as the Default Option](configuring-the-chart-only-view-as-the-default-option-8e6e885.md)

</td>
</tr>
<tr>
<td valign="top">

using `manifest.json` settings

</td>
<td valign="top">

depends \(see linked topics\)

</td>
<td valign="top">

Analytical list page

[Defining Custom Actions](defining-custom-actions-c3de5c0.md) 

</td>
</tr>
<tr>
<td valign="top" colspan="4">

Determining Actions

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

 

</td>
<td valign="top" rowspan="2">

annotation-based

</td>
<td valign="top">

page content is passed

</td>
<td valign="top">

Object page

[Defining Determining Actions](defining-determining-actions-ee6c827.md)

</td>
</tr>
<tr>
<td valign="top">

available content is passed

</td>
<td valign="top">

Analytical list page

[Configuring the Table-Only View as the Default Option](configuring-the-table-only-view-as-the-default-option-d074e26.md)

</td>
</tr>
<tr>
<td valign="top">

custom action

</td>
<td valign="top">

context independent

</td>
<td valign="top">

Object page

[Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-3530e6b.md)

</td>
</tr>
<tr>
<td valign="top" colspan="4">

Actions in the Quick View Card

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

 

</td>
<td valign="top" rowspan="2">

annotation-based

</td>
<td valign="top">

context dependent

</td>
<td valign="top">

Overview page

[Quick View Cards](quick-view-cards-f65817a.md)

</td>
</tr>
<tr>
<td valign="top">

 

</td>
<td valign="top">

List report page

Object page

[Enabling Quick Views for Link Navigation](enabling-quick-views-for-link-navigation-e5b509c.md)

</td>
</tr>
</table>

> ### Note:  
> The overview page only supports micro actions, for example, actions in the quick view cards that open when you click the right-hand side of the stack card. For more information, see [Quick View Cards](quick-view-cards-f65817a.md) and [Defining Custom Actions](defining-custom-actions-c3de5c0.md).



<a name="loio14418d7692414bb994fda11cc2850846__section_akm_d3l_ylb"/>

## Generic and Application-Specific Actions



### Generic Actions

On list report pages and object pages, standard actions such as *Create* \(+\), *Delete*, and *Edit*, as well as actions that trigger external navigation to related apps, are provided by SAP Fiori elements. You can enable or disable these actions.

For more information, see [Adding Actions to Tables](adding-actions-to-tables-c909f6b.md), [Actions on the List Report Page](actions-on-the-list-report-page-43ff607.md), [Enabling the Related Apps Button](enabling-the-related-apps-button-f302a97.md)



### App-Specific Actions

There are different ways to configure custom actions.

-   Annotation-based actions

    -   Actions that require user confirmation, for example, those for critical actions that can have severe consequences. The system opens a dialog in which the user has to confirm the action. For more information, see [Adding Confirmation Popovers for Actions](adding-confirmation-popovers-for-actions-2315b07.md).

    -   Actions that require additional user input, for example, an approval comment. The system opens a dialog with one or more entry elements in which the user enters the required data. The system can prefill data, if applicable.

    -   Actions that require none of the above. The system triggers the action.


-   Custom actions \(using manifest extension\)

    You can also configure custom actions by changing the `manifest.json` file. For more information, see [Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-3530e6b.md).

    For the analytical list page, you can define actions in the chart toolbar. For more information, see [Configuring the Chart-Only View as the Default Option](configuring-the-chart-only-view-as-the-default-option-8e6e885.md) and [Defining Custom Actions](defining-custom-actions-c3de5c0.md).




<a name="loio14418d7692414bb994fda11cc2850846__section_ukw_hvb_jmb"/>

## Application-Specific Actions by Position on the UI



### Global Actions

Global actions are placed at the top of the page and refer to the whole page \(for example *Display Log*\). They can be configured either by using annotations \(applicable for the object page only\), or by using manifest entries \(applicable for the list report page and the object page\).



### Actions in the Table Toolbar

You can display actions in the toolbar to allow users to perform an action for one or more lines in the table.

You can also configure inline actions. They're displayed in a column \(specified in the annotation\) in the individual line item. When the user triggers the action, it affects only the individual line item.



### Determining Actions

Determining actions are placed in the footer of the app. These actions are also called finalizing actions and are meant for those actions that apply to the whole page. Don't define actions that are specific to a control or parts of the page as finalizing actions.

Example: *Save* or *Accept/Reject* in an object page.

> ### Note:  
> Determining actions aren't appropriate for the list report page, because the list report page holds several records and the finalizing actions are applicable to the whole page, and not just some selected records of the list report page table.



<a name="loio14418d7692414bb994fda11cc2850846__section_ax2_h1m_ylb"/>

## Context-Dependent and Context-Independent Actions

Both actions calling OData function imports \(`UI.DataFieldForAction`\) and actions for external navigation \(`UI.DataFieldForIntentBasedNavigation`\) can be either context-independent or context-dependent. For context-dependent actions, users have to select line items in a table. Only then are the buttons that visualize these actions enabled. However, they are always visible. For context-independent actions, users don't have to select line items in a table. Buttons visualizing context-independent actions are always enabled.



### Handling Within `UI.DataFieldForIntentBasedNavigation` Buttons

When you configure navigation buttons, you have two options:

-   Configure the button so that the user must explicitly select a context \(`RequiresContext=true`\).

-   Configure the button so that the user doesn't need to select a context \(`RequiresContext=false`\), meaning that the available context is passed.




### Context-Independent Actions for External Navigation

The following coding sample shows the annotations for a context-independent action for external navigation \(`UI.DataFieldForIntentBasedNavigation`\) \(Property="`RequiresContext`" Bool="`false`"\):

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataFieldForIntentBasedNavigation" >
>             <PropertyValue Property="Label" String="Navigation Tester with RequiresContext"/>
>             <PropertyValue Property="SemanticObject" String="Object"/>
>             <PropertyValue Property="Action" String="Action"/>
>             <PropertyValue Property="RequiresContext" Bool="false"/>
>        </Record> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> {
>     label: 'Navigation Tester with RequiresContext',
>     semanticObject: 'Object',
>     semanticObjectAction: 'Action', 
>     requiresContext: false,
>     type: #FOR_INTENT_BASED_NAVIGATION
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.DataFieldForIntentBasedNavigation',
>     Label : 'Navigation Tester with RequiresContext',
>     SemanticObject : 'Object',
>     Action : 'Action',
>     RequiresContext : false
> }
> ```



### Context-Dependent Actions for External Navigation

The following coding sample shows the annotations for a context-dependent action for external navigation \(`UI.DataFieldForIntentBasedNavigation`\):

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataFieldForIntentBasedNavigation" >
>             <PropertyValue Property="Label" String="Navigation Tester with RequiresContext"/>
>             <PropertyValue Property="SemanticObject" String="Object"/>
>             <PropertyValue Property="Action" String="Action"/>
>             <PropertyValue Property="RequiresContext" Bool="true"/>
> </Record> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> {
>     label: 'Navigation Tester with RequiresContext',
>     semanticObject: 'Object',
>     semanticObjectAction: 'Action', 
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
>     $Type : 'UI.DataFieldForIntentBasedNavigation',
>     Label : 'Navigation Tester with RequiresContext',
>     SemanticObject : 'Object',
>     Action : 'Action',
>     RequiresContext : true
> }
> ```



### Handling Within `UI.DataFieldForAction` Buttons

You can choose to pass the context when the `UI.DataFieldForAction` button is invoked.

**Bound Actions \(Context-Dependent\)**

Context-dependent function imports provide an `sap:action-for` annotation defining the entity type for the required context.

> ### Sample Code:  
> ```
> <FunctionImport Name="C_STTA_SalesOrder_WD_20Setdisabledstatus"
> ReturnType="STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrder_WD_20Type"
> EntitySet="C_STTA_SalesOrder_WD_20" m:HttpMethod="POST" sap:action-for="STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrder_WD_20Type"
> sap:applicable-path="Setdisabledstatus_ac">
> ```

**Action Parameters for Bound Actions \(Context-Dependent\)**

Bound actions can have parameters that are defined by the back end. If the name of the parameter matches with any property of the bound entity, then the value of that property is used from the selected row. In case of multi select, the action parameters are not filled with the selected context values.

**Unbound Actions \(Context-Independent\)**

Context-independent function imports don't provide an `sap:action-for` annotation.

> ### Sample Code:  
> ```
> <FunctionImport Name="C_STTA_SalesOrder_WD_20Create_simple" 
> ReturnType="STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrder_WD_20Type" 
> EntitySet="C_STTA_SalesOrder_WD_20" m:HttpMethod="POST" />
> ```

Context-independent actions calling OData function imports can be placed in the table and smart chart toolbars of the list report page and the object page as determining actions in the list report page or in the object page header.

**Action Parameters for Unbound Actions \(Context-Independent\)**

Unbound actions can have parameters that are defined by the back end. All the function import properties are displayed in the action parameter dialog. The action dialog displays a parameter as mandatory if it is marked `'Nullable:false'` in the function import definition.

> ### Note:  
> You can also call function imports with or without input parameters using multiselection in tables.

**Grouping of Multiple Invocations of the Same Action Using Multiple Selections in the Table**

You can control the grouping of the multiple invocations of the action for each instance when an action is executed. To do so, use the `UI.DataFieldForAction` annotation.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataFieldForAction">
>   <PropertyValue Property="Label" String="My Action"/>
>   <PropertyValue Property="Action" String="STTA_SALES_ORDER_WD_20_SRV.STTA_SALES_ORDER_WD_20_SRV_Entities/C_STTA_SalesOrder_WD_20My_FunctionImport"/>
>   <PropertyValue Property="InvocationGrouping" EnumMember="UI.OperationGroupingType/Isolated"/>
> </Record>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
>  {
>     label: 'My Action',
>     dataAction: 'PUSHDOWN:C_STTA_SalesOrder_WD_20My_FunctionImport',
>     invocationGrouping: #ISOLATED,
>     type: #FOR_ACTION,
>     position: 1 
>   }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.DataFieldForAction',
>     Label : 'My Action',
>     Action : 'STTA_SALES_ORDER_WD_20_SRV.STTA_SALES_ORDER_WD_20_SRV_Entities/C_STTA_SalesOrder_WD_20My_FunctionImport',
>     InvocationGrouping : #Isolated
> },
> ```

The `InvocationGrouping` property denotes how multiple invocations of the same action on multiple instances are grouped. This annotation is optional. The value is `String enum`. The following enumerations are available:


<table>
<tr>
<th valign="top">

Value

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

UI.OperationGroupingType/Isolated

</td>
<td valign="top">

The request for each selected instance is sent in a separate change set within a single batch.

Even if an error occurs for a selected instance, the requests for the other selected instances are still executed.

</td>
</tr>
<tr>
<td valign="top">

UI.OperationGroupingType/ChangeSet

</td>
<td valign="top">

-   The request for each selected instance is sent in the same change set within a single batch.

-   Even if only a single selected instance results in an error when an action is executed, none of the selected instances are executed. This means that the action is either executed successfully for all instances, or isn't executed for any of the selected instances.


You must ensure that the setting for the total number of requests of OData batches is high enough.

</td>
</tr>
</table>

> ### Note:  
> If you use context-independent actions, you need to label them in a way that makes it clear to the app user that the action is context independent.



### Prefilling Action Parameters with Calculated Default Values

You can calculate default values for action parameters through a back-end function. As a result, when a user opens the action parameter dialog on the UI, the parameter fields are prefilled with the returned values of the back-end function.

In case a single record is selected and an action is called that calls the `DefaultValuesFunction` function import, then the default values fetched from the function import gets populated in the parameter dialog, irrespective of the existing value present for the selected record. In case of multiple selections, default values fetched from the `DefaultValuesFunction` gets populated in the parameter dialog and the remaining input parameter remains empty.

To achieve this, you must annotate the action with `Common.DefaultValuesFunction`.

> ### Sample Code:  
> `DefaultValuesFunction` for Function Import Actions
> 
> ```
> <FunctionImport 
>     Name="GetDefaultsForSetText" 
>     ReturnType="cds_zrc_dv_defaultvalues.ZRC_DV_A_SetText" 
>     m:HttpMethod="GET" 
>     sap:action-for="cds_zrc_dv_defaultvalues.RootType">
>     <Parameter 
>         Name="UUID" 
>         Type="Edm.Guid" 
>         Mode="In"/>
> </FunctionImport>
> 
> <Annotations 
>     xmlns="http://docs.oasis-open.org/odata/ns/edm" 
>     Target="cds_zrc_dv_defaultvalues.cds_zrc_dv_defaultvalues_Entities/SetText">
>     
>     <Annotation 
>         Term="com.sap.vocabularies.Common.v1.SideEffects" 
>         Qualifier="Action">
>         <Record>
>             <PropertyValue Property="TargetProperties">
>                 <Collection>
>                     <PropertyPath>Text</PropertyPath>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
>     
>     <Annotation 
>         Term="com.sap.vocabularies.Common.v1.DefaultValuesFunction" 
>         String="GetDefaultsForSetText"/>
> </Annotations>
> 
> ```

For more information, see [Prefilling Fields Using the DefaultValuesFunction](prefilling-fields-using-the-defaultvaluesfunction-6613e42.md).

**Related Information**  


[Adding Confirmation Popovers for Actions](adding-confirmation-popovers-for-actions-2315b07.md "You can display a confirmation popover when the user triggers an action.")

[Using Action Control for Context-Dependent Actions](using-action-control-for-context-dependent-actions-5b0b686.md "You can use action control to display actions by adding the sap:action-for and sap:applicable-path terms to your action or function import.")

[Configuring Navigation](configuring-navigation-1a6c395.md "You can configure the SAP Fiori elements navigation within an app (internal navigation) and the navigation to and from an app (external navigation).")

