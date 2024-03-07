<!-- loio24580fb89258491db986482f4ed45e47 -->

# Step 19: Aggregation Binding \(TypeScript\)

Now that we have established a good structure for our app, it's time to add some more functionality. We start exploring more features of data binding by adding some invoice data in JSON format that we display in a list below the panel.



## Preview

  
  
**A list of invoices is displayed below the panel**

![The graphic has an explanatory text.](images/UI5_Walkthrough_Step_19_b05bdb4.png "A list of invoices is displayed below the panel")



<a name="loio24580fb89258491db986482f4ed45e47__section_zfj_ljk_syb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 19: Aggregation Binding](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/19) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-19.zip).



<a name="loio24580fb89258491db986482f4ed45e47__section_agj_ljk_syb"/>

## webapp/model/localInvoices.json \(New\)

We create a new `model` folder in our app project and place the new `localInvoices.json` file in it. We enter the following JSON data into the file:

```
{
    "Invoices": [
        {
            "ProductName": "Pineapple",
            "Quantity": 21,
            "ExtendedPrice": 87.2,
            "ShipperName": "Fun Inc.",
            "ShippedDate": "2015-04-01T00:00:00",
            "Status": "A"
        },
        {
            "ProductName": "Milk",
            "Quantity": 4,
            "ExtendedPrice": 10,
            "ShipperName": "ACME",
            "ShippedDate": "2015-02-18T00:00:00",
            "Status": "B"
        },
        {
            "ProductName": "Canned Beans",
            "Quantity": 3,
            "ExtendedPrice": 6.85,
            "ShipperName": "ACME",
            "ShippedDate": "2015-03-02T00:00:00",
            "Status": "B"
        },
        {
            "ProductName": "Salad",
            "Quantity": 2,
            "ExtendedPrice": 8.8,
            "ShipperName": "ACME",
            "ShippedDate": "2015-04-12T00:00:00",
            "Status": "C"
        },
        {
            "ProductName": "Bread",
            "Quantity": 1,
            "ExtendedPrice": 2.71,
            "ShipperName": "Fun Inc.",
            "ShippedDate": "2015-01-27T00:00:00",
            "Status": "A"
        }
    ]
}
```

The `localInvoices` file simply contains five invoices in a JSON format that we can use to bind controls against them in the app. JSON is a very lightweight format for storing data and can be directly used as a data source for SAPUI5 applications.



## webapp/manifest.json

We add a new model named `invoice` to the `sap.ui5` section of the descriptor. This time we want a JSONModel, so we set the type to `sap.ui.model.json.JSONModel`. The `uri` key is the path to our data relative to the component.

```
{
  ...
  "sap.ui5": {
    "models": {
      "i18n": {
        "type": "sap.ui.model.resource.ResourceModel",
        "settings": {
          "bundleName": "ui5.walkthrough.i18n.i18n",
          "supportedLocales": [
            ""
          ],
          "fallbackLocale": ""
        }
      },
      "invoice": {
        "type": "sap.ui.model.json.JSONModel",
        "uri": "model/localInvoices.json"
      }
        },
        "resources": {
          "css": [
            {
              "uri": "css/style.css"
            }
          ]
        }
      }
}
```

With this little configuration our component will automatically instantiate a new `JSONModel` which loads the invoice data from the `localInvoices.json` file. Finally, the instantiated `JSONModel` is put onto the component as a named model invoice. The named model is then visible throughout our app.



<a name="loio24580fb89258491db986482f4ed45e47__section_qtl_rcz_nzb"/>

## webapp/i18n/i18n.properties

In the text bundle we create a new text for an Invoice List title, which we'll need in the view we are about to create.

```ini
# App Descriptor
appTitle=Hello World
appDescription=A simple walkthrough app that explains the most important concepts of SAPUI5

# Hello Panel
showHelloButtonText=Say Hello
helloMsg=Hello {0}
homePageTitle=UI5 TypeScript Walkthrough
helloPanelTitle=Hello World
openDialogButtonText=Say Hello With Dialog
dialogCloseButtonText=Ok

# Invoice List
invoiceListTitle=Invoices
```



<a name="loio24580fb89258491db986482f4ed45e47__section_sqg_ycz_nzb"/>

## webapp/view/InvoiceList.view.xml \(New\)

In the view folder, we create a new `InvoiceList.view.xml` view to display the invoices. We use a list control with the custom header text we just specified in our resource bundle and assign the CSS class `sapUiResponsiveMargin` to it. We bound the item aggregation of the list to the root path `Invoices` of the JSON data in our invoice model. And since we defined a named model, we have to prefix each binding definition with the `invoice` identifier followed by the `>` symbol.

In the `items` aggregation, we define the template for the list that will be automatically repeated for each invoice of our test data. More precisely, we use an `sap/m/ObjectListItem` to create a control for each aggregated child of the `items` aggregation. The `title` property of the list item is bound to the `Quantity` and `ProductName` properties of a single invoice. This is achieved by defining a relative path \(without `/` character in the beginning\).

```xml
<mvc:View
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <List
      headerText="{i18n>invoiceListTitle}"
      class="sapUiResponsiveMargin"
      width="auto"
      items="{invoice>/Invoices}" >
      <items>
         <ObjectListItem
            title="{invoice>Quantity} x {invoice>ProductName}"/>
      </items>
   </List>
</mvc:View>
```

The binding in the list item works because we have bound the `items` aggregation via `items={invoice>/Invoices}` to the invoices.



## webapp/view/App.view.xml

In the app view we add a second view and assign it to our newly created `InvoiceList` view to display our invoices below the panel.

```xml
<mvc:View
	controllerName="ui5.walkthrough.controller.App"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc"
	displayBlock="true">
    <Shell>
        <App class="myAppDemoWT">
            <pages>
                <Page title="{i18n>homePageTitle}">
                    <content>
                        <Panel
                            headerText="{i18n>helloPanelTitle}"
                            class="sapUiResponsiveMargin"
                            width="auto">
                            <content>
                                <mvc:XMLView
                                    viewName="ui5.walkthrough.view.HelloPanel"/>
                                <mvc:XMLView
                                    viewName="ui5.walkthrough.view.InvoiceList"/>
                            </content>
                        </Panel>
                    </content>
                </Page>
            </pages>
        </App>
    </Shell>
</mvc:View>
```



<a name="loio24580fb89258491db986482f4ed45e47__section_hzd_f2z_nzb"/>

## Conventions

-   Any files needed for creating models and the logic relating to model data are stored in the `model` folder. This includes grouping, filtering, and formatting data

-   Model file names are lowercased


**Related Information**  


[Folder Structure: Where to Put Your Files](../05_Developing_Apps/folder-structure-where-to-put-your-files-003f755.md "The details described here represent a best practice for structuring an application that features one component, one OData service and less than 20 views. If you're building an app that has more components, OData services and views, you may have to introduce more folder levels than described here.")

[Lists](../10_More_About_Controls/lists-1da1581.md "Lists have properties and events and they contain list items that inherit from sap.m.ListItemBase, which provides navigation, selection and event features. The list item type determines the way the list item interacts by providing additional features.")

[API Reference: `sap.ui.base.ManagedObject.AggregationBindingInfo` ](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject.AggregationBindingInfo)

[API Reference: `sap.m.List`](https://ui5.sap.com/#/api/sap.m.List)

[Samples: `sap.m.List` ](https://ui5.sap.com/#/entity/sap.m.List)

[List Binding \(Aggregation Binding\)](../04_Essentials/list-binding-aggregation-binding-91f0577.md "List binding (or aggregation binding) is used to automatically create child controls according to model data.")

