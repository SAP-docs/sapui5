<!-- loioba065421bdb74d6ead22489e3037a260 -->

# The `ConditionalSwitch` Building Block

> ### Remember:  
> The `ConditionalSwitch` building block is an experimental feature and subject to revisions. It's not intended for productive usage.

You can use the `ConditionalSwitch` building block when you need to decide at runtime which type of control to display based on complex conditions.

The building block requires a list of properties to bind to and watch. It also requires a factory function that returns the control to be displayed based on the current values of the properties. You can use this building block in tables or forms where you want to display different controls in a cell based on the data of the current row or on the context that can only be determined at runtime.

> ### Sample Code:  
> The `ConditionalSwitch` Building Block
> 
> ```
> 
> <macros:Table metaPath="/Products/@com.sap.vocabularies.UI.v1.LineItem">
>     <macros:columns>
>         <macros:Column key="My ComplexColumn" width="20rem">
>             <macros:ConditionalSwitch factory=".myColumnFactory">
>                 <fe:ConditionalSwitchProperty key="travelID" value="{TravelID}" />
>                 <fe:ConditionalSwitchProperty key="price" value="{TotalPrice}" />
>             </macros:ConditionalSwitch>
>         </macros:Column>
>     </macros:columns>
>  </macros:Table>
> 
> ```

> ### Sample Code:  
> Factory function
> 
> ```
>  // In the controller
>  myColumnFactory: function (properties, context, oldControl) {
>     if (properties.travelID) {
>         if (oProps.price > 1000) {
>             return new ObjectStatus({ text: "Expensive!", state:"Warning" });
>         } 
> 		else {
>             return new Button({ text: "Increase Price !" });
>         }
>     }
>  }
> 
> ```

The factory function can also return the `oldControl` parameter, which is the control that you previously created by the factory. Returning `oldControl` avoids the unnecessary recreation of controls. In table scenarios, the `context` parameter contains the binding context of the current row, which you can use to access additional data if needed.

For grid, tree, or analytical tables, this factory function executes in real time every time you scroll through the table. To avoid performance issues, ensure your factory function is lightweight.



<a name="loioba065421bdb74d6ead22489e3037a260__section_h14_bxl_zgc"/>

## API

For information about the `ConditionalSwitch` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.ConditionalSwitch).

