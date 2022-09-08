<!-- loioe5310932a71f42daa41f3a6143efca9c -->

# Data Binding

In this tutorial, we will explain the concepts of data binding in SAPUI5.

You use data binding to bind UI elements to data sources to keep the data in sync and allow data editing on the UI.

For data binding, you need a model and a binding instance: The model instance holds the data and provides methods to set the data or to retrieve the data from a server. It also provides a method for creating bindings to the data. When this method is called, a binding instance is created, which contains the binding information and provides an event, which is fired whenever the bound data changes. An element can listen to this event and update its visualization according to the new data.

The UI uses data binding to bind controls to the model which holds the application data, so that the controls are updated automatically whenever application data changes. Data binding is also used the other way round, when changes in the control cause updates in the underlying application data, for example data entered by the user. This is called two-way binding.



## Preview

 ![](images/Tutorial_Data_Binding_896048e.png) 

> ### Tip:  
> You don't have to do all tutorial steps sequentially, you can also jump directly to any step you want. Just download the code from the previous step, copy it to your workspace and make sure that the application runs by calling the `webapp/index.html` file.
> 
> You can view and download the files for all steps in the Demo Kit at [Data Binding](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding). Depending on your development environment you might have to adjust resource paths and configuration entries.
> 
> For more information check the following sections of the tutorials overview page \(see [Get Started: Setup, Tutorials, and Demo Apps](get-started-setup-tutorials-and-demo-apps-8b49fc1.md)\):
> 
> -   [Downloading Code for a Tutorial Step](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_download)
> 
> -   [Adapting Code to Your Development Environment](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_adaptation)

1.  [Step 1: No Data Binding](step-1-no-data-binding-4cde849.md "In this step, we simply place some text on the screen using a standard
			sap.m.Text control. The text in this control is a hard-coded part of
		the control's definition; therefore, this is not an example of data binding!")  
In this step, we simply place some text on the screen using a standard `sap.m.Text` control. The text in this control is a hard-coded part of the control's definition; therefore, this is not an example of data binding!
2.  [Step 2: Creating a Model](step-2-creating-a-model-5278bfd.md "In this step, we create a model as container for the data on which your application
		operates.")  
In this step, we create a model as container for the data on which your application operates.
3.  [Step 3: Create Property Binding](step-3-create-property-binding-d70e989.md "Although there is no visible difference, the text on the screen is now derived from
		model data.")  
Although there is no visible difference, the text on the screen is now derived from model data.
4.  [Step 4: Two-Way Data Binding](step-4-two-way-data-binding-c72b922.md "In the examples used so far, we have used a read-only field to display the value of a
		model property. We will now change the user interface so that the first and last name fields
		are displayed using sap.m.Input fields and an additional check box control
		is used to enable or disable both input fields. This arrangement illustrates a feature known
		as &quot;two-way data binding&quot;. Now that the view contains more controls, we will also move the
		view definition into an XML file.")  
In the examples used so far, we have used a read-only field to display the value of a model property. We will now change the user interface so that the first and last name fields are displayed using `sap.m.Input` fields and an additional check box control is used to enable or disable both input fields. This arrangement illustrates a feature known as "two-way data binding". Now that the view contains more controls, we will also move the view definition into an XML file.
5.  [Step 5: One-Way Data Binding](step-5-one-way-data-binding-88756c0.md "In contrast to the two-way binding behavior shown above, one-way data binding is also
		possible. Here, data is transported in one direction only: from the model, through the
		binding instance to the consumer (usually the property of a control), but never in the other
		direction. In this example, we will change the previous example to use one-way data binding.
		This will illustrate how the flow of data from the user interface back to the model can be
		switched off if required.")  
In contrast to the two-way binding behavior shown above, one-way data binding is also possible. Here, data is transported in one direction only: from the model, through the binding instance to the consumer \(usually the property of a control\), but never in the other direction. In this example, we will change the previous example to use one-way data binding. This will illustrate how the flow of data from the user interface back to the model can be switched off if required.
6.  [Step 6: Resource Models](step-6-resource-models-9790d9a.md "Business applications also require language-specific (translatable) texts used as
		labels and descriptions on the user interface.")  
Business applications also require language-specific \(translatable\) texts used as labels and descriptions on the user interface.
7.  [Step 7: \(Optional\) Resource Bundles and Multiple Languages](step-7-optional-resource-bundles-and-multiple-languages-4e593b4.md "The reason we have resource bundles is to allow an app to run in multiple languages
		without the need to change any code. To demonstrate this feature, we will create a German
		version of the app – in fact all we need to do is create a German version of the resource
		bundle file. In our code, the German locale needs to be activated for the
		ResourceModel.")  
The reason we have resource bundles is to allow an app to run in multiple languages without the need to change any code. To demonstrate this feature, we will create a German version of the app – in fact all we need to do is create a German version of the resource bundle file. In our code, the German locale needs to be activated for the ResourceModel.
8.  [Step 8: Binding Paths: Accessing Properties in Hierarchically Structured Models](step-8-binding-paths-accessing-properties-in-hierarchically-structured-models-9373793.md "In step 6 , we stated that the fields in a resource model are arranged in a flat
		structure; in other words, there can be no hierarchy of properties; however, this is true
		only for resource models. The properties within JSON and OData models almost always are
		arranged in a hierarchical structure. Therefore, we should take a look at how to reference
		fields in a hierarchically structured model object.")  
In step 6 , we stated that the fields in a resource model are arranged in a flat structure; in other words, there can be no hierarchy of properties; however, this is true only for resource models. The properties within JSON and OData models almost always are arranged in a hierarchical structure. Therefore, we should take a look at how to reference fields in a hierarchically structured model object.
9.  [Step 9: Formatting Values](step-9-formatting-values-6fdf0ac.md "We also want to provide our users a way of contacting Harry Hawk. Therefore we will
		add a link that sends an e-mail to Harry. To achieve that we will convert our data in the
		model to match the sap.m.URLHelper.normalizeEmail API. As soon as the
		user changes the name, the e-mail will also change. We will need a custom formatter function
		for this.")  
We also want to provide our users a way of contacting Harry Hawk. Therefore we will add a link that sends an e-mail to Harry. To achieve that we will convert our data in the model to match the `sap.m.URLHelper.normalizeEmail` API. As soon as the user changes the name, the e-mail will also change. We will need a custom formatter function for this.
10. [Step 10: Property Formatting Using Data Types](step-10-property-formatting-using-data-types-9252ee4.md "SAPUI5 provides a set of
		simple data types such as Boolean, Currency,
			Date and Float. These data types can then be applied
		to controls in order to ensure that the value presented on the screen is formatted
		correctly, and, if the field is open for input, that the value entered by the user adheres
		to the requirements of that data type. We will now add a new field called Sales
			Amount of type Currency. ")  
SAPUI5 provides a set of simple data types such as `Boolean`, `Currency`, `Date` and `Float`. These data types can then be applied to controls in order to ensure that the value presented on the screen is formatted correctly, and, if the field is open for input, that the value entered by the user adheres to the requirements of that data type. We will now add a new field called *Sales Amount* of type `Currency`.
11. [Step 11: Validation Using the Message Manager](step-11-validation-using-the-message-manager-b8c4e53.md "So far, we have created a currency field that can format itself correctly. The
		currency data type also has the ability to validate that user input adheres to to the
		requirements of a currency; however, data type validation functions are managed by SAPUI5, which of itself has no
		mechanism for reporting error messages back to the UI; therefore, we need a mechanism for
		reporting error messages raised by validation functions back to the user. In this step, we
		will connect the entire view to a feature known as the &quot;Message Manager&quot;. Once this
		connection is established, any validation error messages generated based on the user input
		will be passed to the message manager which in turn will connect them to the appropriate
		view and control that caused the error.")  
So far, we have created a currency field that can format itself correctly. The currency data type also has the ability to validate that user input adheres to to the requirements of a currency; however, data type validation functions are managed by SAPUI5, which of itself has no mechanism for reporting error messages back to the UI; therefore, we need a mechanism for reporting error messages raised by validation functions back to the user. In this step, we will connect the entire view to a feature known as the "Message Manager". Once this connection is established, any validation error messages generated based on the user input will be passed to the message manager which in turn will connect them to the appropriate view and control that caused the error.
12. [Step 12: Aggregation Binding Using Templates](step-12-aggregation-binding-using-templates-97830de.md "Aggregation binding (or &quot;list binding&quot;) allows a control to be bound to a list within
		the model data and allows relative binding to the list entries by its child controls. ")  
Aggregation binding \(or "list binding"\) allows a control to be bound to a list within the model data and allows relative binding to the list entries by its child controls.
13. [Step 13: Element Binding](step-13-element-binding-6c7c5c2.md "Now we want to do something with that newly generated list. In most cases you will
		use a list to allow the selection of an item and then show the details of that item
		elsewhere. In order to achieve this, we use a form with relatively bound controls and bind
		it to the selected entity via element binding.")  
Now we want to do something with that newly generated list. In most cases you will use a list to allow the selection of an item and then show the details of that item elsewhere. In order to achieve this, we use a form with relatively bound controls and bind it to the selected entity via element binding.
14. [Step 14: Expression Binding](step-14-expression-binding-5cff8d1.md "Expression binding allows you to display a value on the screen that has been
		calculated from values found in some model object. This way simple formatting or
		calculations can be inserted directly into the data binding string. In this example, we will
		change the color of the price depending on whether it is above or below some arbitrary
		threshold. The threshold value is also stored in the JSON model. ")  
Expression binding allows you to display a value on the screen that has been calculated from values found in some model object. This way simple formatting or calculations can be inserted directly into the data binding string. In this example, we will change the color of the price depending on whether it is above or below some arbitrary threshold. The threshold value is also stored in the JSON model.
15. [Step 15: Aggregation Binding Using a Factory Function](step-15-aggregation-binding-using-a-factory-function-284a036.md "Instead of hard-coding a single template control, we use a factory function to
		generate different controls based on the data received at runtime. This approach is much
		more flexible and allows complex or heterogeneous data to be displayed.")  
Instead of hard-coding a single template control, we use a factory function to generate different controls based on the data received at runtime. This approach is much more flexible and allows complex or heterogeneous data to be displayed.

**Related Information**  


[Data Binding](../04_Essentials/data-binding-68b9644.md "You use data binding to bind UI elements to data sources to keep the data in sync and allow data editing on the UI.")

[Model View Controller \(MVC\)](../04_Essentials/model-view-controller-mvc-91f2334.md "The Model View Controller (MVC) concept is used in SAPUI5 to separate the representation of information from the user interaction. This separation facilitates development and the changing of parts independently.")

