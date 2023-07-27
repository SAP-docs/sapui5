<!-- loiob0d5fe2f1b0b497cbd67cd5a1d35fa4c -->

# Use Only Public APIs

SAPUI5 APIs are classified into different types. Only APIs of type `public` should be used by application developers.

All SAPUI5 APIs are assigned one of several possible types. App developers should only use `public` APIs, as compatibility is guaranteed only for these. APIs of type `protected` are not relevant for app developers; they are only relevant for library development. For example, they could be functions called by certain controls in control development.

The following table gives an overview over these API types:

**API Types**


<table>
<tr>
<th valign="top">

API Type



</th>
<th valign="top">

Description



</th>
<th valign="top">

Compatibility Assured?



</th>
<th valign="top">

Can be used by applications?



</th>
<th valign="top">

Further Details



</th>
<th valign="top">

Example



</th>
</tr>
<tr>
<td valign="top">

 `public` 



</td>
<td valign="top">

Indicates that the API, such as a class or method, is generally available for application developers.



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif)<sup>1</sup> 



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">



</td>
<td valign="top">

 [`ManagedObject.prototype.getId`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject%23methods/getId) 



</td>
</tr>
<tr>
<td valign="top">

 `protected` 



</td>
<td valign="top">

Indicates that usage of the API is restricted. It is not meant to be used by applications.



</td>
<td valign="top">

 ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif)<sup>1</sup> 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

The API might be used outside the relevant class or subclasses, but only in closely related classes in SAPUI5 library / control development.



</td>
<td valign="top">

 [`Control.prototype.invalidate`](https://ui5.sap.com/#/api/sap.ui.core.Control%23methods/invalidate) 



</td>
</tr>
<tr>
<td valign="top">

 `private` 



</td>
<td valign="top">

Indicates that the API is not meant for use outside of SAPUI5 framework development. It won't be visible in the SAPUI5 documentation.



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

The API is not meant to be used outside its own class, module, package, or library.



</td>
<td valign="top">

 [`Icon.prototype._getOutputTitle`](https://github.com/SAP/openui5/blob/c67c74d5de985904b50fb250b0d335c08b275025/src/sap.ui.core/src/sap/ui/core/Icon.js#L477) 



</td>
</tr>
<tr>
<td valign="top">

 `ui5-restricted` 



</td>
<td valign="top">

Indicates that the API is only meant for certain stakeholders within SAPUI5 framework development and won't be visible in the SAPUI5 documentation.



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif)<sup>2,3</sup> 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

Any potential new usage should be discussed with the owner first, then the stakeholder information should be updated, and only then should the API be used.



</td>
<td valign="top">

 [`Control.prototype.setBlocked`](https://github.com/SAP/openui5/blob/c67c74d5de985904b50fb250b0d335c08b275025/src/sap.ui.core/src/sap/ui/core/Control.js#L944) 



</td>
</tr>
<tr>
<td valign="top">

 `sap-restricted` 



</td>
<td valign="top">

Deprecated, replaced by `ui5-restricted` 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
</tr>
</table>

1\) Unless the API is experimental.  
 2\) There’s no compatibility promise for `ui5-restricted` APIs. However, before introducing incompatible changes the owner is expected to announce them to the listed stakeholders, so that all affected parties can cooperate to achieve a smooth migration.

> ### Note:  
> The SAPUI5 documentation only includes APIs of categories `public` and `protected`.

**Related Information**  


[Compatibility Rules](../02_Read-Me-First/compatibility-rules-91f0873.md "The following sections describe what SAP can change in major, minor, and patch releases. Always consider these rules when developing apps, features, or controls with or for SAPUI5.")

