<!-- loio19eabf5b13214f27b929b9473df3195b -->

# Aggregation Handling in XML Views

In XML views, aggregated child controls can be added as child tags.



Aggregations of the XML view itself and of the controls inside the view are handled in the same way. If a container control has marked one of its aggregations as the default aggregation, you can add children directly into that control. For example, `XMLView`'s `content` aggregation is marked as the default, so you can define content for the aggregation directly in the XML view, without adding a `content` tag. However, when a container control doesn't have a default aggregation, or when adding a child control into another one of its aggregations, you need to use an aggregation tag, for example, the `dependents` tag.

> ### Note:  
> Before SAPUI5 1.102, it wasn't possible to add child controls into an XML view's aggregations other than the `content` aggregation. This has since been extended, so that the aggregations of the XML view itself and those of the controls inside the view are now handled in the same way.

> ### Note:  
> Some containers may not have default content, for example, the splitter container has two equally important content areas.
> 
> The framework supports you by issuing error message in case of errors in the aggregation handling in XML views.

You fill aggregations as shown in the following example. The namespace of the parent control tag and the aggregation tag must be the same.

```xml

<mvc:View controllerName="module:sap/hcm/Address" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
   <Panel>
      <content>  <!-- this is the general way of adding children: use the aggregation name -->
         <Image src="http://www.sap.com/global/ui/images/global/sap-logo.png"/>
         <Button text="Press Me"/>
      </content>
   </Panel>
</mvc:View>
```

If an aggregation of **cardinality `0..1`** has an alternative type and if you want to specify a value of that alternative type, you have to do this as an attributes, not as a nested element.

> ### Example:  
> For the `noData` aggregation of the `sap.ui.comp.smarttable.SmartTable` control, you can either define a string or a nested text control.
> 
> 
> <table>
> <tr>
> <th valign="top">
> 
> String
> 
> </th>
> <th valign="top">
> 
> Nested text control
> 
> </th>
> </tr>
> <tr>
> <td valign="top">
> 
> ```
> <SmartTable noData="No data available">
> 	...
> </SmartTable>
> 
> ```
> 
> 
> 
> </td>
> <td valign="top">
> 
> ```
> <SmartTable ....>
> 	<noData>
> 		<Text text="No data available" icon="sap-icon://..." />
> 	</noData>
> 	...
> </SmartTable>
> 
> ```
> 
> 
> 
> </td>
> </tr>
> </table>

You can also use attributes to define binding information for aggregations with cardinality `0..n`. For more information, see *Declarative List Binding in XML Views* under [List Binding \(Aggregation Binding\)](list-binding-aggregation-binding-91f0577.md).

