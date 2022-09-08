<!-- loiob45f038068ca4b68a2d8008c1de5f7fb -->

# The `FormElement` Building Block

The `FormElement` building block provides an easy way to add a label and visibility control to a field inside a form. The label can either be set manually, or the building block will get the label automatically from the annotations.



<a name="loiob45f038068ca4b68a2d8008c1de5f7fb__section_qd3_w4r_j5b"/>

## Usage

You can instantiate the building block by referencing the building block namespace within a fragment enabled for building block usage.

> ### Note:  
> You must use the `FormElement` building block inside the `formElements` aggregation of a `FormContainer` and the surrounding `Form` structure.

> ### Sample Code:  
> ```
> <f:Form>
>   <f:layout>
>     <f:ColumnLayout columnsM="2" columnsL="3" columnsXL="4" labelCellsLarge="12" />
>   </f:layout>
>   <f:formContainers>
>     <f:FormContainer>
>       <f:formElements>
>         <macros:FormElement xmlns:macro="sap.fe.macros" metaPath="MyProperty" id="myID" />
>       </f:formElements>
>     </f:FormContainer>
>   </f:formContainers>
> </f:Form>
> ```

This instantiates the actual control tree that corresponds to this building block. If you use the `FormElement` building block like in the example above, a `Field` building block is automatically created using the same `metaPath`.

If you want to configure the `Field` building block in a more detailed manner, you must use it inside the `fields` aggregation of the `FormElement` building block.

> ### Sample Code:  
> ```
> <f:Form xmlns:f="sap.ui.layout.form" >
>   <f:layout>
>     <f:ColumnLayout columnsM="2" columnsL="3" columnsXL="4" labelCellsLarge="12" />
>   </f:layout>
>   <f:formContainers>
>     <f:FormContainer>
>       <f:formElements>
>         <macros:FormElement xmlns:macro="sap.fe.macros" metaPath="MyProperty" id="myID">
>           <macros:fields>
>             <macros:Field metaPath="MyProperty"/>
>           </macros:fields>
>         </macros:FormElement>
>       </f:formElements>
>     </f:FormContainer>
>   </f:formContainers>
> </f:Form>
> ```

You can use the `FormElement` building block inside custom header facets, custom sections, custom pages, and custom table columns.



<a name="loiob45f038068ca4b68a2d8008c1de5f7fb__section_tjq_hpr_j5b"/>

## API

For information about the `FormElement` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.FormElement).

