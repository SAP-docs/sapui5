<!-- loioa2fe8e763014477e87990ff50657a0d0 -->

# Composite Binding

Calculated fields enable the binding of multiple properties in different models to a single property of a control.

The value property of a text field, for example, may be bound to a property `firstName` and a property `lastName` in a model. The application can access these values in a formatter function and can decide how they should be processed or combined together. If no formatter function is specified, the values are joined together by default. You can use the `useRawValues` property to specify if the parameter values in the formatter function are formatted according to the type of the property or not.

The multiple property bindings are stored in a `CompositeBinding` and can be accessed by calling the `getBindings` function. You can access the composite binding, for example, by using the `getBinding('value')` function of the control. The composite binding has no path, model, context, and type because it contains multiple property bindings containing the necessary information. A composite binding may, for example, store two property bindings which belong to different models and have different types.

If you have specified a formatter function, it is also available in the composite binding.

There are several options to create multiple bindings for a control. The syntax is very similar to the normal single binding declaration.

Each binding is created by the specified parts and assigned information. A part must contain the path to the property in the model and may contain additional information for the binding, for example a type.



<a name="loioa2fe8e763014477e87990ff50657a0d0__section_N10044_N10011_N10001"/>

## Constructor Declaration

1.  Use binding objects to add additional parameters, for example the type:

    ```js
    // "Input" required from module "sap/m/Input"
    // "StringType" required from module "sap/ui/model/type/String"
    // "Float" required from module "sap/ui/model/type/Float"
    
    oTxt = new Input({
        value: {
            parts: [
                {path: "/firstName", type: StringType},
                {path: "/lastName"},
                {path: "myModel2>/amount", type: Float} // path to property in another model
            ]
        }
    }); 
    ```

2.  Use strings which only take the path:

    ```js
    // "Input" required from module "sap/m/Input"
    
    oTxt = new Input({
        value: {
            parts: [
                "/firstName",
                "/lastName",
                "myModel2>/fraud" // path to property in another model
            ]
        }
    });
    ```




<a name="loioa2fe8e763014477e87990ff50657a0d0__section_N10062_N10011_N10001"/>

## Bind Property Declaration

1.  Use binding objects to add additional parameters, for example the type:

    ```js
    // "StringType" required from module "sap/ui/model/type/String"
    
    oTxt.bindValue({
        parts: [{path: "/firstName", type: StringType}, {path: "/lastName"}]
    }); 
    ```

2.  Use strings which only take the path:

    ```js
    oTxt.bindValue({
        parts: ["/firstName", "/lastName"]
    }); 
    ```


These samples also work with a relative binding path, when you use them as a template in a list binding.



<a name="loioa2fe8e763014477e87990ff50657a0d0__section_tlp_5np_rcb"/>

## Complex Syntax for Calculated Fields

Complex \(or "extended"\) syntax can be used for calculated fields in declarative views, such as XML views. The following examples show how to use the feature:

-   You can mix text with calculated fields as follows:

    ```
    <Label text="Hello Mr. {path: '/singleEntry/firstName', formatter: '.myFormatter'}, {/singleEntry/lastName}"/>
    ```

    > ### Note:  
    > Use translatable text in your application.

-   Use a syntax with leading quotation marks \("..."\) if you use MVC and your formatter or type is located in the controller. In the following example, the existing type or formatter function in the controller is used:

    ```
    <Text text="{path: 'gender', formatter: '.myGenderFormatter'} {firstName}, {lastName}"/>
    ```

-   If you have a global formatter function, use the following syntax:

    ```
    <mvc:View
        xmlns:mvc="sap.ui.core.mvc"
        xmlns="sap.m"
        xmlns:core="sap.ui.core"
        core:require="{sharedFormatter: 'my/sharedFormatter'}">
        <Text binding="{birthday}" text="{
            parts: ['day', 'month'], 
            formatter: 'sharedFormatter'
        }"/>
    ```

    > ### Note:  
    > The formatter of a composite binding is called for every property update. **This happens also if some parts are not yet available**, i.e. `undefined`.

-   For a global type that is created with the specified format options, see the following example:

    ```
    <mvc:View
        xmlns:mvc="sap.ui.core.mvc"
        xmlns="sap.m"
        xmlns:core="sap.ui.core"
        core:require="{Float: 'sap/ui/model/type/Float'}">
        <Label text="A type test: {path: '/singleEntry/amount', type: 'Float', formatOptions: {minFractionDigits: 1}} EUR"/>
    ```




<a name="loioa2fe8e763014477e87990ff50657a0d0__section_v3n_qyz_gbc"/>

## Composite Binding With Static Binding Parts

An [`sap.ui.model.StaticBinding`](https://ui5.sap.com/#/api/sap.ui.model.StaticBinding) is the way to define a part in a composite binding with a constant value.

It is useful in cases where you'd like to use a common formatter function or type in multiple composite bindings: With a constant value as part of the binding, you can achieve a different behavior of the **same** formatter function or type in different places.

**Example 1: Different formatted values with same formatter function**

> ### Example:  
> ```xml
> <!-- formatStatus returns a text or an icon source computed from the first two parts depending on the third part -->
> <core:Icon decorative="false"
>     src="{
>         parts: ['deliveryStatus', 'paymentStatus', {value: 'icon'}],
>         formatter: 'formatter.formatStatus'
>     }"
>     tooltip="{
>         parts: ['deliveryStatus', 'paymentStatus', {value: 'tooltip'}],
>         formatter: 'formatter.formatStatus'
>     }"/>
> ```

**Example 2: Constant part in type**

This example uses `sap.ui.model.odata.type.DateTimeWithTimezone` to display only a time zone. For more information, see [Dates, Times, Timestamps, and Time Zones](dates-times-timestamps-and-time-zones-6c9e61d.md).

> ### Example:  
> ```xml
> <mvc:View
>     xmlns:mvc="sap.ui.core.mvc"
>     xmlns="sap.m"
>     xmlns:core="sap.ui.core"
>     core:require="{DateTimeWithTimezone: 'sap/ui/model/odata/type/DateTimeWithTimezone'}">
>     <!-- 'TimezoneID' refers to an Edm.String property holding the IANA time zone ID -->
>     <Text text="{
>         parts: [{value: null}, {path: 'TimezoneID'}],
>         type: 'DateTimeWithTimezone',
>         formatOptions: {showDate: false, showTime: false}
>     }"/>
> ```

**Related Information**  


[Binding Syntax](binding-syntax-e2e6f41.md "You bind UI elements to data of a data source by defining a binding path to the model that represents the data source in the app.")

