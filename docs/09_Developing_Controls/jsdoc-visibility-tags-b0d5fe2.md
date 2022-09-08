<!-- loiob0d5fe2f1b0b497cbd67cd5a1d35fa4c -->

# JSDoc Visibility Tags

Tags such as `@public` or `@private` allow you to control the visibility of the JSDoc documentation.

 

You can select from several block tags to determine if and how the JSDoc documentation for your API is displayed in the *API Reference*. The tag you choose also affects API usage and compatibility, namely

-   whether your API is meant to be used in application development or SAPUI5 framework development,
-   whether you have to keep your API compatible. For more information, see [Compatibility Rules](../02_Read-Me-First/compatibility-rules-91f0873.md).

The following table gives an overview over the available tags:

<a name="loiob0d5fe2f1b0b497cbd67cd5a1d35fa4c__table_pbq_1lj_1nb"/>Tags for Visibility


<table>
<tr>
<th valign="top">

Tag



</th>
<th valign="top">

Description



</th>
<th valign="top">

Compatibility Required



</th>
<th valign="top">

Can be used by applications



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

 `@public` 



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

 `@protected` 



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

The API might be used outside the relevant class or subclasses, but only in closely related classes in SAPUI5 framework development.



</td>
<td valign="top">

 [`Control.prototype.invalidate`](https://ui5.sap.com/#/api/sap.ui.core.Control%23methods/invalidate) 



</td>
</tr>
<tr>
<td valign="top">

 `@private` 



</td>
<td valign="top">

Indicates that the API is not meant for use outside of SAPUI5 framework development. It won't be visible in the SAPUI5 documentation.

> ### Note:  
> If you also document private methods with JSDoc, mark them as `@private`. This is currently the default in SAPUI5, but not in JSDoc, so it is safer to explicitly specify this.



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

The API is not meant to be used outside its own class, module, package, or library.

We recommend to use the underscore character "`_`" as a prefix for technical names of private entities.



</td>
<td valign="top">

 [`Icon.prototype._getOutputTitle`](https://github.com/SAP/openui5/blob/c67c74d5de985904b50fb250b0d335c08b275025/src/sap.ui.core/src/sap/ui/core/Icon.js#L477) 



</td>
</tr>
<tr>
<td valign="top">

 `@ui5-restricted` 



</td>
<td valign="top">

Indicates that the API is only meant for certain stakeholders within SAPUI5 framework development and won't be visible in the SAPUI5 documentation.

> ### Note:  
> `@ui5-restricted` should always be preceded by `@private`. This is to make sure that content isn't accidentally made public if an external JSDoc generator is used that doesn't recognize this tag.



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif)<sup>2,3</sup> 



</td>
<td valign="top">

 ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif) 



</td>
<td valign="top">

To specify the stakeholders that are allowed to use this API, insert a space- or comma-separated list of stakeholders after the tag, typically package names like `sap.ui.core`, like this:

`@ui5-restricted package_name_1, package_name_2`

You can also add free text.



</td>
<td valign="top">

`@ui5-restricted sap.ui.core, sap.m, sap.viz`

in

[`Control.prototype.setBlocked`](https://github.com/SAP/openui5/blob/c67c74d5de985904b50fb250b0d335c08b275025/src/sap.ui.core/src/sap/ui/core/Control.js#L944)



</td>
</tr>
<tr>
<td valign="top">

 `@sap-restricted` 



</td>
<td valign="top">

Deprecated, replaced by `@ui5-restricted` 



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

1\) Unless the API is tagged as `@experimental`.  
 2\) There’s no compatibility promise for `ui5-restricted` APIs. However, before introducing incompatible changes the owner is expected to announce them to the listed stakeholders, so that all affected parties can cooperate to achieve a smooth migration.  
 3\) Any potential new usage should be discussed with the owner first, then the stakeholder information should be updated, and only then should the API be used.

If more than one of the above tags is used, the last one wins.

> ### Note:  
> The SAPUI5 documentation only includes APIs of categories `@public` and `@protected`.

