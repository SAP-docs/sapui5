<!-- loio61d4e2b154a7449da198577dfbc75a22 -->

# Step 22: Custom Formatters \(TypeScript\)

If we want to do a more complex logic for formatting properties of our data model, we can also write a custom formatting function. We will now add a localized status with a custom formatter, because the status in our data model is in a rather technical format.



## Preview

  
  
**A status is now displayed with a custom formatter**

![A list of invoices is displayed below the panel](images/UI5_Walkthrough_Step_22_7aa185a.png "A status is now displayed with a custom formatter")



<a name="loio61d4e2b154a7449da198577dfbc75a22__section_lp1_2nk_syb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 22: Custom Formatters](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/22) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-22.zip).



<a name="loio61d4e2b154a7449da198577dfbc75a22__section_sxs_4kz_nzb"/>

## webapp/i18n/i18n.properties

We add three new entries to the resource bundle that reflect our translated status texts 'New', 'In Progess', and 'Done'. We will use these texts to format the status values 'A', 'B', and 'C' of our invoices when displayed in the invoice list view.

```ini

...

# Invoice List
invoiceListTitle=Invoices
invoiceStatusA=New
invoiceStatusB=In Progress
invoiceStatusC=Done
```



<a name="loio61d4e2b154a7449da198577dfbc75a22__section_mp1_2nk_syb"/>

## webapp/model/formatter.ts \(New\)

We place a new `formatter.ts` file in the model folder of the app, This time we do not need to extend from any base object, but just return an object with our `formatter` functions in it. We add a `statusText` function that gets a status as input parameter and returns a human-readable text that is read from the `resourceBundle` file.

```js
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Controller from "sap/ui/core/mvc/Controller";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

export default  {
    statusText: function (this: Controller, status: string): string | undefined {
        const resourceBundle = <ResourceBundle> (<ResourceModel> this?.getOwnerComponent()?.getModel("i18n"))?.getResourceBundle();
        switch (status) {
            case "A":
                return resourceBundle.getText("invoiceStatusA");
            case "B":
                return resourceBundle.getText("invoiceStatusB");
            case "C":
                return resourceBundle.getText("invoiceStatusC");
            default:
                return status;
        }
    }
};
```

The new `formatter.ts` file is placed in the `model` folder of the app, because formatters are working on data properties and format them for display on the UI.

> ### Note:  
> In the above example, `this` refers to the controller instance as soon as the formatter gets called. We access the resource bundle via the component using `this.getOwnerComponent().getModel()` instead of using `this.getView().getModel()`. The latter call might return `undefined`, because the view might not have been attached to the component yet, and thus the view can't inherit a model from the component.

**Additional Information:**

-   [API Reference: `sap.ui.core.mvc.Controller#getOwnerComponent`](https://ui5.sap.com/#/api/sap.ui.core.mvc.Controller/methods/getOwnerComponent). 
-   [API Reference: `sap.ui.core.mvc.Controller#onInit`](https://ui5.sap.com/#/api/sap.ui.core.mvc.Controller/methods/onInit). 



## webapp/view/InvoiceList.view.xml

To load our formatter functions, we use the [`require`](../04_Essentials/require-modules-in-xml-view-and-fragment-b11d853.md) attribute with the `sap.ui.core` namespace URI, for which the `core` prefix is already defined in our XML view. This allows us to write the attribute as `core:require`. We then add our custom formatter module to the list of required modules and assign it the `Formatter` alias, making it available for use within the view.

We add a status using the `firstStatus` aggregation to our `ObjectListItem` that will display the status of our invoice. The custom formatter function is specified with the reserved `formatter` property of the binding syntax. There, we use our `Formatter` alias that holds our formatter functions in order to access the desired function via `Formatter.statusText`. When called, we want the `this` context to be set to the current view controller's context. To achieve this, we use [`.bind($controller)`](../04_Essentials/formatting-parsing-and-validating-data-07e4b92.md).

```xml
<mvc:View
    controllerName="ui5.walkthrough.controller.InvoiceList"
    xmlns="sap.m"
    xmlns:core="sap.ui.core"
    xmlns:mvc="sap.ui.core.mvc">
    <List
        headerText="{i18n>invoiceListTitle}"
        class="sapUiResponsiveMargin"
        width="auto"
        items="{invoice>/Invoices}">
        <items>
            <ObjectListItem
                title="{invoice>Quantity} x {invoice>ProductName}"
                number="{
                    parts: [
                        'invoice>ExtendedPrice',
                        'view>/currency'
                    ],
                    type: 'sap.ui.model.type.Currency',
                    formatOptions: {
                        showMeasure: false
                    }
                }"
                numberUnit="{view>/currency}"
                numberState="{= ${invoice>ExtendedPrice} > 50 ? 'Error' : 'Success' }">
                <firstStatus>
                    <ObjectStatus
                        core:require="{
                            Formatter: 'ui5/walkthrough/model/formatter'
                        }"
                        text="{
                            path: 'invoice>Status',
                            formatter: 'Formatter.statusText.bind($controller)'
                        }"/>
                </firstStatus>
            </ObjectListItem>
        </items>
    </List>
</mvc:View>
```

Instead of a technical status we get now the human-readable texts below the `number` attribute of the `ObjectListItem` that we specified in our resource bundle.

**Related Information**  


[Formatting, Parsing, and Validating Data](../04_Essentials/formatting-parsing-and-validating-data-07e4b92.md "Data that is presented on the UI often has to be converted so that is human readable and fits to the locale of the user. On the other hand, data entered by the user has to be parsed and validated to be understood by the data source. For this purpose, you use formatters and data types.")

