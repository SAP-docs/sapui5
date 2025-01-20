<!-- loio51677307ed16469fbfc9618101fe47ed -->

# Aggregation `domRef` Property

If you want to determine the position and size of an element within an aggregation, you can use the `domRef` property to select the respective node in the DOM.

Here are the possible types of the `domRef` property:


<table>
<tr>
<th valign="top">

Type

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`<string>`

</td>
<td valign="top">

CSS selector to search inside the control DOM node.

Example:

-   `domRef : "> .content"`: The aggregation's DOM node is a direct child of the control's DOM node and has the CSS class "`content`".

-   `domRef : ":sap-domref"`: The special value `:sap-domref` points to the control's DOM control.




</td>
</tr>
<tr>
<td valign="top">

`<function>`

</td>
<td valign="top">

Returns a reference to a DOM node.

This function can be used to find and return an existing DOM node or to create a DOM node as a side effect and add it to the control. For example, you can define an area for an aggregation that normally doesn't have a DOM node.

This function is called with the control and, if available, the aggregation name as a parameter. You can return an array of DOM nodes, to indicate that you need a bounding box around all the nodes.

</td>
</tr>
</table>

**Related Information**  


[Example: Enable VerticalLayout](example-enable-verticallayout-bcd64a1.md "Here's how you enable the VerticalLayout control.")

[Example: Enable ScrollContainers](example-enable-scrollcontainers-8f794e5.md "Here's how you enable the ScrollContainers control.")

