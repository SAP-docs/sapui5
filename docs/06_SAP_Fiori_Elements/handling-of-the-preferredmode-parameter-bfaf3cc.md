<!-- loiobfaf3ccf3d6d4735990cc793b21f5529 -->

# Handling of the `preferredMode` Parameter

Applications can configure the mode in which the object page is initially launched using the `preferredMode` parameter.

The `preferredMode=create` is a URL parameter that can be used by applications to trigger the direct launch of the object page in create mode even when the navigation target is the list report template.

If we configure the list report and object page app in the SAP Fiori launchpad with a start-up parameter `preferredMode=create`, then on navigating to the app, the object page is directly loaded in create mode. This behavior is also achieved if `preferredMode=create` is added to the navigation URL: \(…`#SalesOrder-manage?preferredMode=create`\). Application developers can also add URL parameters after `preferredMode=create` to pass specific values to be used in the creation process.

> ### Example:  
> To set the value 01 for the `DefectCategory` field, enter the URL `…#Defect-displayWorklist?preferredMode=create&DefectCategory=01`.

For information about specific restrictions and the required manifest changes for this behavior, see the separate sections in this topic.



## Additional Features in SAP Fiori Elements for OData V2

Enter the `preferredMode` parameter to specify the mode in which the object page should be opened as follows:


<table>
<tr>
<th valign="top">

PreferredMode Parameter



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

In case of draft applications, a new draft is created by using the `POST` call, by default. Users can override this behavior and configure applications to call a function import annotated with `newAction`..

You can use URL parameters to prefill specific values. This is currently not supported for draft creation via `newAction`. For example, to set the value 01 for the *DefectCategory* field, enter the URL `…#Defect-displayWorklist?preferredMode=create&DefectCategory=01`.

> ### Note:  
> The target application must specify in its `manifest.json` which parameters are to be used from the incoming URL. In the following example, only the `Supplier` parameter is used.
> 
> ```
> "sap.ui.generic.app": { 
>    "_version": "1.2.0",
>    "settings": {
>       ... 
>   "inboundParameters": {
>          "DefectCategory": {
>             "useForCreate": true
>          }
>       }
>    },
>    "pages": [
>       {
>          ...
> ```



</td>
</tr>
<tr>
<td valign="top">

mode



</td>
<td valign="top">

If the specified mode isn't suitable for the current draft state, there is no silent fallback. However, the user gets an error message before the object page is opened in the potentially available mode.



</td>
</tr>
<tr>
<td valign="top">

 `callUnboundAction` 



</td>
<td valign="top">

You can use this value to automatically trigger an unbound action when an app is started with this startup parameter during an external navigation scenario.The startup parameters must contain the mandatory specification of the unbound action and values for the inbound parameters of that action.

The target app must expose the unbound action. The following example shows how you can do this in the `manifest.json`:

> ### Sample Code:  
> ```
> "sap.ui.generic.app": { 
>    "_version": "1.2.0",
>    "settings": {
>       ... 
>   "inboundParameters": {
>          "myActionName": {
>             "useForActionResolution": {
> 		   "myCreateWithNameAndStreet": "myCreate1",
> 		   "myCreateWithoutNameAndStreet": "myCreate3",	
>          }
>       }
> 
> ```

This snippet shows two unbound actions `myCreate1` and `myCreate3` that are used by this feature. These actions are defined in the `metadata.xml` of the service as follows:

> ### Sample Code:  
> ```
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

Moreover, the source app can also pass values for any inbound parameter of the specified action. For example, to invoke the `myCreate1` function import with the inbound parameters `ResultIsActiveEntity` and `Name`, pass the startup parameter in the URL as shown here:

> ### Sample Code:  
> ```
> #NewActionTest-NewActionTest?preferredMode=callUnboundAction& myActionName=myCreateWithNameAndStreet& ResultIsActiveEntity=true&Name=myName
> ```



</td>
</tr>
</table>

> ### Note:  
> There is no double navigation. If no object page is defined in the target app's manifest or the \(usually internal\) navigation to the object page is overridden by external navigation, the list report is shown.



<a name="loiobfaf3ccf3d6d4735990cc793b21f5529__section_evr_bcd_hmb"/>

## Additional Features in SAP Fiori Elements for OData V4

The `preferredMode` parameter works as follows:

-   If the application has defined a create action \(property `NewAction` of the annotation `StickySupported` or `DraftRoot`\) and if this is dependent on the mandatory parameters, then on launch of the app the action parameter dialog requests the user to enter the parameters. After entering the parameter values, the object page opens in create mode.

-   If the application has not defined a create action or if this is not dependent on the mandatory parameters, then on launch of the app the object page doesn't open in create mode.

-   Applications can also define `createWith:` followed by the desired action as the `preferredMode` value. In this case, this action is called when the app is opened in create mode.

    If the specified action has parameters, then an action parameter dialog appears after navigation to the target application. If values are already available from the navigation context for some of the fields, these values are taken over into the dialog. This is shown in the following sample code:

    > ### Sample Code:  
    > ```
    > "preferredMode": {
    >      "defaultValue": {
    >           "value": "createWith:com.c_salesordermanage_sd.CreateWithSalesOrderType",
    >           "format": "value"
    >      }
    > },
    > ```

-   Applications can also define `autoCreateWith:`, which works like `createWith:` except for the following behavior:

    -   If values can be determined from the navigation context for all action parameters, the action parameter dialog is skipped after navigation.

    -   If no value can be determined for at least one parameter, the action parameter dialog is still displayed and the provided values are taken over into the dialog fields.


    > ### Sample Code:  
    > ```
    > "preferredMode": {
    >      "defaultValue": {
    >           "value": "autoCreateWith:com.c_salesordermanage_sd.CreateWithSalesOrderType",
    >           "format": "value"
    >      }
    > },
    > ```


> ### Note:  
> If an application has its own view instead of the default object page template and is configured with a start-up parameter `preferredMode=create` \(or has the URL parameter `preferredMode=create`\), this does not result in the behavior described above. In this case, the list report application is launched instead.

> ### Note:  
> There is no double navigation. If no object page is defined in the target app's manifest, the list report is shown.



### Passing Parameters when Using `preferredMode=create`

When `preferredMode=create` is used with URL parameter values, there's a difference in the handling of the parameters based on creation mode:

-   For POST-based create, the values are only considered if they are also specified via the "`useForCreate`" manifest property in the target application. URL parameters that are not defined with the "`useForCreate`" manifest property are not passed to the back end during the creation process.

    > ### Sample Code:  
    > Manifest changes to specify parameters relevant for `useForCreate`
    > 
    > ```
    > "options": {
    >     "settings": {
    >         "entitySet": "SalesOrderManage", // Object Page
    >         ...
    >         "inboundParameters": {
    >              "SalesOrderType": {
    >                 "useForCreate": true
    >              }
    >         }
    >     }
    > }
    > ```

    If the manifest of the target application's object page is configured as shown in the sample code, an incoming URL like …`#SalesOrder-manage?preferredMode=create&SalesOrderType=OR&Supplier=ABC` results in only the part `SalesOrderType=OR` being passed to the back end in the create call. The "`Supplier`" value is ignored because it is not mentioned in the "`useForCreate`" setting.

-   For `NewAction()`-based create, the incoming value of the navigation context is always applied to the matching fields \(exact technical name match\) in the action parameter dialog. If no matching field is configured, the parameters from the navigation context are not passed. In this case the manifest setting "`useForCreate`" is not considered at all.

    > ### Note:  
    > The parameter values in the navigation context are also passed for matching fields that are hidden, that is, the matching field is configured for the action parameter dialog in `NewAction()`, but not seen because of the `UI.Hidden` annotation.


**Related Information**  


[Actions in the List Report](actions-in-the-list-report-993e99e.md "The list report supports a number of actions.")

[Actions](actions-cbf16c5.md "You can use generic actions provided by SAP Fiori elements and implement application-specific actions using annotations or extension points.")

