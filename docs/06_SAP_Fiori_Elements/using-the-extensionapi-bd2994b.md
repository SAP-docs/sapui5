<!-- loiobd2994b69ef542998becbc69ab093f7e -->

# Using the `extensionAPI`

The `extensionAPI` consists of several elements that are described below. It can be used for the list report and object page.



## API Methods

When coding the implementation of an extension hook or an event handler used in a view extension, you can use the public methods of `sap.ui.core.mvc.Controller`. However: Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

Any other methods or properties of the controller \(in particular any components whose names start with `‘_’`\) should be considered private and therefore should not be used.



<a name="loiobd2994b69ef542998becbc69ab093f7e__section_e55_4zp_znb"/>

## Additional Features in SAP Fiori Elements for OData V2

The `extensionAPI` can also be used for the analytical list page.



### API Methods

> ### Caution:  
> Do not create any instances of classes in the namespace `sap.suite.ui.generic.template`. This namespace is not intended for public use.

You can also access services provided by the template framework. From the controller, you can access these services through `<YourController>.extensionAPI`.

This gets you an object that is specific to the template you are currently enhancing, as shown in the examples below:


<table>
<tr>
<th valign="top">

Template



</th>
<th valign="top">

Instance



</th>
</tr>
<tr>
<td valign="top">

List Report



</td>
<td valign="top">

 `sap.suite.ui.generic.template.ListReport.extensionAPI.ExtensionAPI` 



</td>
</tr>
<tr>
<td valign="top">

Object Page



</td>
<td valign="top">

 `sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI` 



</td>
</tr>
<tr>
<td valign="top">

Analytical List Page



</td>
<td valign="top">

`sap.suite.ui.generic.template.AnalyticalListPage.extensionAPI.ExtensionAPI`



</td>
</tr>
<tr>
<td valign="top">



</td>
<td valign="top">

 



</td>
</tr>
</table>

> ### Note:  
> Do not rely on the names of these classes in your coding, as they can still be changed. However, the set of methods provided by these objects will only be extended in a compatible way.

For more information, see [ExtensionAPI](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.extensionAPI.extensionAPI), [ExtensionAPI for list report extensions](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ListReport.extensionAPI.ExtensionAPI) and [ExtensionAPI for object page extensions](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI).

> ### Sample Code:  
> ```
> /*
>  * Assumed use case: When the price is changed to a critical value (more than 1000), an email should be generated and sent.
>  * This should not happen for changes to the draft but only after activation has been successfully processed in the
>  * back-end system.
>  */
> 				
>  (function() {
> 	"use strict";
> 				
> 	function onAfterActivate(oEvent) {
> 		/*
> 		* AfterActivate event is raised at the end of front-end processing for activation. The object handed into the
> 		* handler contains a promise that is resolved after a successful response from the back-end system.
> 		*/
> 		oEvent.activationPromise.then(function(oResponse) {
> 			if (oResponse.data.Price > 1000) {
> 			sap.m.URLHelper.triggerEmail(null, "critical price change", "changed price of " + oResponse.data.Product_Text
> 			+ " to " + oResponse.data.Price + " " + oResponse.data.Currency);
> 			}
> 		});
> 	}		
> ```



### Using the `invokeActions` Method of the `extensionAPI`

`invokeActions` method calls a particular action multiple times and submits changes to the back end.

**Parameter Details**


<table>
<tr>
<th valign="top">

Parameter Name



</th>
<th valign="top">

Details



</th>
</tr>
<tr>
<td valign="top">

`@param {string} sFunctionName` 



</td>
<td valign="top">

Name of the function or action



</td>
</tr>
<tr>
<td valign="top">

`@param {array|sap.ui.model.Context} vContext`



</td>
<td valign="top">

Denotes the binding context



</td>
</tr>
<tr>
<td valign="top">

`@param {map} [mUrlParameters]`



</td>
<td valign="top">

Denotes URL parameters \(name-value pairs\) for the function or action. This is not present in `oSettings` for backward compatibility



</td>
</tr>
<tr>
<td valign="top">

`@param {object} oSettings`



</td>
<td valign="top">

Sets parameters for invoking application controller's `invokeActions` method



</td>
</tr>
<tr>
<td valign="top">

`@param {boolean} oSettings.bInvocationGroupingChangeSet`



</td>
<td valign="top">

Determines whether common or unique changeset is sent in batches



</td>
</tr>
<tr>
<td valign="top">

`@returns {Promise} A <code>Promise</code>`



</td>
<td valign="top">

Performs asynchronous execution of the action, resolving the same result as the `<code>Promise</code>`



</td>
</tr>
<tr>
<td valign="top">

`@throws {Error}`



</td>
<td valign="top">

Throws an error when the OData function import does not exists or the action input parameters are invalid



</td>
</tr>
</table>



<a name="loiobd2994b69ef542998becbc69ab093f7e__section_myh_q3q_znb"/>

## Additional Features in SAP Fiori Elements for OData V4



### API Methods

You can also access services provided by the template framework. From the controller, you can access these services through `getExtensionAPI`.

This gets you an object that is specific to the template you are currently enhancing, as shown in the examples below:


<table>
<tr>
<th valign="top">

Template



</th>
<th valign="top">

Instance



</th>
</tr>
<tr>
<td valign="top">

List Report



</td>
<td valign="top">

 `sap.fe.templates.ListReport.ExtensionAPI` 



</td>
</tr>
<tr>
<td valign="top">

Object Page



</td>
<td valign="top">

 `sap.fe.templates.ObjectPage.ExtensionAPI` 



</td>
</tr>
</table>

> ### Note:  
> Do not rely on the names of these classes in your coding, as they can still be changed. However, the set of methods provided by these objects will only be extended in a compatible way.

For information about the `ExtensionAPI`, see [API Reference](https://ui5.sap.com/#/api/sap.fe.core.ExtensionAPI).

