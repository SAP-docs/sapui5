<!-- loio391aad28bfc64616abe2500a631391c1 -->

# The `Form` Building Block

The `Form` building block provides an easy way to instantiate a form based on a `FieldGroup` annotation.



<a name="loio391aad28bfc64616abe2500a631391c1__section_ypv_nms_j5b"/>

## Usage

You can point directly to a `FieldGroup` annotation or to a `CollectionFacet` containing multiple `FieldGroups`.

You can also define additional inline form elements that will be added to your form.

> ### Sample Code:  
> `Form` Building Block
> 
> ```
> <macros:Form
>      id="myForm"
>      metaPath="@com.sap.vocabularies.UI.v1.FieldGroup#General"
>      title=”My Title”
> ></macros:Form>
> ```

```
<macros:Form
     id="myForm"
     metaPath="@com.sap.vocabularies.UI.v1.FieldGroup#General"
     title=”My Title”
>
     <macros:FormElement
          metaPath="ID"
          id="formElementMacroID"
          label="ID Property After Number"
          placement="After"
          anchor="DataField::NumberProperty"
     />
</macros:Form>
```



<a name="loio391aad28bfc64616abe2500a631391c1__section_r1c_sms_j5b"/>

## API

For information about the `Form` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Form).

