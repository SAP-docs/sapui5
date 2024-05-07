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
    oTxt = new sap.m.Input({
        value: {
            parts: [
                    {path: "/firstName", type: new sap.ui.model.type.String()},
                    {path: "/lastName"},
                    {path: "myModel2>/amount", type: new sap.ui.model.type.Float()} // path to property in another model
                   ]
              }
    }); 
    ```

2.  Use strings which only take the path:

    ```js
    oTxt = new sap.m.Input({
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
    oTxt.bindValue({
        parts: [
                {path: "/firstName", type: new sap.ui.model.type.String()},
                {path: "/lastName"}
               ]
    }); 
    ```

2.  Use strings which only take the path:

    ```js
    oTxt.bindValue({
        parts: [
                "/firstName",
                "/lastName"
               ]
    }); 
    ```


These samples also work with a relative binding path, when you use them as a template in a list binding.



<a name="loioa2fe8e763014477e87990ff50657a0d0__section_tlp_5np_rcb"/>

## Complex Syntax for Calculated Fields

Complex \(or "extended"\) syntax can be used for calculated fields in declarative views, such as HTML and XML views. The following examples show how to use the feature:

-   You can mix text with calculated fields as follows:

    ```js
    
    <Label text="Hello Mr. {
                             path:'/singleEntry/firstName', 
                             formatter: '.myFormatter'
                            }, 
                            {
                             /singleEntry/lastName
                            }
     " />
    ```

    > ### Note:  
    > Use translatable text in your application.

-   Use a syntax with leading quotation marks \("..."\) if you use MVC and your formatter or type is located in the controller. In the following example, the existing type or formatter function in the controller is used:

    ```js
    
    <TextField value="{
                       path:'gender', 
                       formatter:'.myGenderFormatter'
                      } 
                      {firstName}, 
                      {lastName}
    "/>
    ```

-   If you have a global formatter function, use the following syntax:

    ```js
    
    <TextField value="{
                  parts: [
                          {path:'birthday/day'},
                          {path:'birthday/month'},
                          {path:'birthday/year'}
                         ], 
                  formatter:'my.globalFormatter'
    }"/>
    ```

    > ### Note:  
    > The formatter of a composite binding is called for every property update. **This happens also if some parts are not yet available**, i.e. `undefined`.

-   For a global type that is created with the specified format options, see the following example:

    ```js
    
    <Label text="A type test: {
                               path:'/singleEntry/amount', 
                               type:'sap.ui.model.type.Float', 
                               formatOptions: { minFractionDigits: 1}
                              } EUR
    "/>
    ```


