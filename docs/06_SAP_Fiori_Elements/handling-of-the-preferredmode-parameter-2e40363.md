<!-- loio2e4036356aa040f4908a38c023179e86 -->

# Handling of the `preferredMode` Parameter

Applications can configure the mode in which the object page is initially launched using the `preferredMode` parameter.

The `preferredMode` parameter supports multiple values that allow you to specify the mode in which the object page is launched.

> ### Note:  
> If no object page is defined in the `manifest.json` file of the target app, or if the \(usually internal\) navigation to the object page is overridden by external navigation, the list report is shown.
> 
> In this case, the information described in this topic does not apply.



<a name="loio2e4036356aa040f4908a38c023179e86__section_rr2_sz2_qbc"/>

## Using the `preferredMode=create` Parameter

You can configure the list report and object page applications in the SAP Fiori launchpad with a start-up parameter `preferredMode=create`. When you launch the application from the tile, the list report and object page load directly in create mode.

To achieve this behavior during external navigation, you can add `preferredMode=create` to the navigation URL during external navigation.

> ### Example:  
> `...#SalesOrder-manage?preferredMode=create`

You can also append URL parameters after `preferredMode=create` to pass specific values to be used in the creation process.

> ### Example:  
> To set the value 01 for the `DefectCategory` field, enter the URL `…#Defect-displayWorklist?preferredMode=create&DefectCategory=01`.

You can specify the mode in which the object page can be opened by entering the `preferredMode` parameter, as shown in the following table:


<table>
<tr>
<th valign="top">

`PreferredMode` Parameter

</th>
<th valign="top">

Results in the following mode

</th>
</tr>
<tr>
<td valign="top">

display

</td>
<td valign="top">

Object page opens in display mode unless the user is already working on a draft. In this case, the draft is opened in edit mode.

</td>
</tr>
<tr>
<td valign="top">

edit

</td>
<td valign="top">

A draft is created if one doesn't exist yet. If an outdated draft by another user exists \("unsaved changes"\), the user can decide to cancel this draft and create their own, or to keep the other user's draft and open it in display mode. If another user's draft exists and is not outdated, the page is opened in display mode.

</td>
</tr>
<tr>
<td valign="top">

create

</td>
<td valign="top">

*Create Object Page* is opened in the target application.

In draft-enabled applications, a new draft is created by using the `POST` call, by default. Users can override this behavior and configure applications to call a function import annotated with `newAction`.

You can use URL parameters to prefill specific values. This is not supported for draft creation with `newAction`. For example, to set the value 01 for the *DefectCategory* field, enter the URL `…#Defect-displayWorklist?preferredMode=create&DefectCategory=01`.

> ### Note:  
> The target application must specify in its `manifest.json` file which parameters are to be used from the incoming URL. In the following example, only the `DefectCategory` parameter is used.
> 
> ```
> 
> "sap.ui.generic.app": { 
>     "_version": "1.2.0",
>     "settings": {
>         ... 
>         "inboundParameters": {
>             "DefectCategory": {
>                 "useForCreate": true
>             }
>         }
>     },
>     "pages": [{
>         ...
> ```



</td>
</tr>
<tr>
<td valign="top">

`callUnboundAction` 

</td>
<td valign="top">

You can use this value to automatically trigger an unbound action when an app is started with this startup parameter during an external navigation scenario. The startup parameters must contain the mandatory parameters of the unbound action and values for the inbound parameters of that action.

The target app must make the unbound action available. To do this, you can specify the changes in the `manifest.json` file, as shown in the following sample code:

> ### Sample Code:  
> ```
> 
> "sap.ui.generic.app": { 
>     "_version": "1.2.0",
>     "settings": {
>         ... 
>         "inboundParameters": {
>             "myActionName": {
>                 "useForActionResolution": {
>                 "myCreateWithNameAndStreet": "myCreate1",
>                 "myCreateWithoutNameAndStreet": "myCreate3",	
>                 }
>             }
> 
> 
> ```

The sample code shows two unbound actions, `myCreate1` and `myCreate3`, that are used by this feature. These unbound actions are defined in the `metadata.xml` of the service, as shown in the following sample code:

> ### Sample Code:  
> ```
> 
> <FunctionImport Name="myCreate1" ReturnType="cds_zvd_drafts_customer_sd.CustomerType" EntitySet="Customer" m:HttpMethod="POST">
> <Parameter Name="ResultIsActiveEntity" Type="Edm.Boolean" Mode="In" Nullable="true" sap:label="Result is active"/>
> <Parameter Name="Name" Type="Edm.String" Mode="In" MaxLength="40" Nullable="true" sap:label="Customer Name"/>
> <Parameter Name="Street" Type="Edm.String" Mode="In" MaxLength="40" Nullable="true" sap:label="Customer Street"/>
> </FunctionImport>
> <FunctionImport Name="myCreate3" ReturnType="cds_zvd_drafts_customer_sd.CustomerType" EntitySet="Customer" m:HttpMethod="POST">
> <Parameter Name="ResultIsActiveEntity" Type="Edm.Boolean" Mode="In" Nullable="true" sap:label="Result is active"/>
> </FunctionImport>
> 
> ```

The source app passes the startup parameter `mode/preferredMode` as `callUnboundAction`. `myActionName` is used to specify the unbound action that is called. The actions must be addressed by their logical names and not by their technical names.

The target app must contain a top-level object page defined for the same entity set the unbound action is defined for \(in this case `Customer`\). Also, the instance returned by the action must be an instance of this entity set.

The source app can also pass values for any inbound parameter of the specified action. In the following sample code, `myCreate1` function import is called with the inbound parameters `ResultIsActiveEntity` and `Name`.

> ### Sample Code:  
> ```
> #NewActionTest-NewActionTest?preferredMode=callUnboundAction&myActionName=myCreate1&ResultIsActiveEntity=true&Name=myName
> ```



</td>
</tr>
</table>

**Related Information**  


[Actions in the List Report Page](actions-in-the-list-report-page-43ff607.md "The list report supports a number of actions.")

[Actions](actions-14418d7.md "You can use generic actions provided by SAP Fiori elements and implement application-specific actions using annotations or extension points.")

[Configuring Navigation](configuring-navigation-1a6c395.md "SAP Fiori elements control the navigation within an app (internal navigation) and the navigation to and from an app (external navigation).")

