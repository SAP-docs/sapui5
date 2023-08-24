<!-- loio3e9c0104db864fbabc9fc786cbdf76a4 -->

# ARIA Attribute Mapping

Navigation with the keyboard and screen reader have to both work properly at the same time. In order for this to happen, you need to use the correct ARIA attributes and to map them to their HTML counterparts.



## Attribute Mapping

The mapping of HTML attributes to ARIA attributes is described in the following table:

**Attribute Mapping**


<table>
<tr>
<th valign="top">

HTML Attribute



</th>
<th valign="top">

ARIA Attribute



</th>
</tr>
<tr>
<td valign="top">

`editable` 



</td>
<td valign="top">

`aria-readonly` 



</td>
</tr>
<tr>
<td valign="top">

`enabled` 



</td>
<td valign="top">

`aria-disabled` 



</td>
</tr>
<tr>
<td valign="top">

`visible` 



</td>
<td valign="top">

`aria-hidden` 



</td>
</tr>
<tr>
<td valign="top">

`required` 



</td>
<td valign="top">

`aria-required` 



</td>
</tr>
<tr>
<td valign="top">

`checked` 



</td>
<td valign="top">

`aria-checked` 



</td>
</tr>
<tr>
<td valign="top">

`selected` 



</td>
<td valign="top">

`aria-selected` 



</td>
</tr>
</table>

For custom controls, not part of the ARIA role definitions, mapping to similar and existing ARIA base role concepts is applied. In special cases, custom role names can be added by the SAPUI5 framework using `aria-describedby` or `aria-labelledby` references.



## Additional API Associations

In order to ease the setting of ARIA attributes, we have introduced two new associations to the SAPUI5 API:

1.  • ariaLabelledBy - holds a reference to the control that has the `aria-labelledby` attribute set

2.  • ariaDescribedBy - holds a reference to the control that has the `aria-describedby` attribute set


These associations have the following structure:

> ### Source Code:  
> ```
> ariaLabelledBy : {
> 
> type : "sap.ui.core.Control",
> 
> multiple : true,
> 
> singularName : "ariaLabelledBy"
> 
> }
> 
> ```

> ### Source Code:  
> ```
> ariaDescribedBy : {
> 
> type : "sap.ui.core.Control",
> 
> multiple : true,
> 
> singularName : "ariaDescribedBy"
> 
> }
> 
> ```

