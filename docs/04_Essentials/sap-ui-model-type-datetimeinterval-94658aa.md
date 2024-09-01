<!-- loio94658aa4cfbe4fdfbd0981d78f6d9b3d -->

# sap.ui.model.type.DateTimeInterval

The interval data types represent intervals between two date/time related properties.

Three new types are used to format two date related properties from a model for displaying in the UI. Additionally they are used to parse and validate the values in UI controls before they are saved back to the model. All of them are subtypes of `sap.ui.model.CompositeType` and are supposed to be set with a composite binding. The new interval types are:

-   `sap.ui.model.type.DateInterval` - represents a date interval \(without time\) which transforms the source values into a formatted date interval string and the other way around.

-   `sap.ui.model.type.DateTimeInterval` - represents a date interval with the exact point of time \(date and time\) which transforms the source values into a formatted date+time interval string and the other way around

-   `sap.ui.model.type.TimeInterval` - represents a time interval \(without date\) which transforms the source values into a formatted time interval string and the other way around




<a name="loio94658aa4cfbe4fdfbd0981d78f6d9b3d__section_vk3_114_fbb"/>

## Usage with JSON, OData V2 or V4 models

> ### Note:  
> The new date interval types can be used together with different types of model. However, there are some differences in the usage when the new date interval types get used with a JSON, OData V2 or V4 model.

The interval types need two JavaScript `Date` objects from the sub-bindings to format them as a date interval string. If the values which come from the sub-binding aren’t instances of JavaScript `Date` object, they need to be converted to JavaScript `Date` objects before they are forwarded to the date interval types. The conversion can be done by setting a corresponding type on the sub-binding and this type knows how the value which comes directly from the model can be converted to a JavaScript `Date` object. A date interval type works together with the types on the sub-bindings to get the original value from the model converted to a JavaScript `Date` object.

> ### Restriction:  
> One exception is with the OData V2 Model. Although the date fields are saved as string in the model, they get converted to JavaScript `Date` objects by the open source library which is used in `v2.ODataModel`. Therefore it’s not needed to set an extra type on the sub-binding when the date interval types are used together with the OData V2 model.

The following example shows how this should be setup with a `sap/m/Table` which is bound to an OData V4 model. The table consists of four different columns whereas the `StartsAt` and `EndsAt` represent date field as string with Edm type `Edm.DateTimeOffset`. The date interval formatting is done by combining these two date fields together.

In order to let the date interval type correctly, get two JavaScript `Date` objects from the sub-bindings, a type `sap.ui.model.odata.type.DateTimeOffset` is set on each sub-binding to convert the date string into a JavaScript `Date` object.

```
// "ODataModel" required from module "sap/ui/model/odata/v4/ODataModel"
// "Table" required from module "sap/m/Table"
// "Text" required from module "sap/m/Text"
// "Column" required from module "sap/m/Column"
// "ColumnListItem" required from module "sap/m/ColumnListItem"
var urlV4 = "/databinding/proxy/http/services.odata.org/TripPinRESTierService/(S(kqyippfvpypubsah2zi1enbi))/";

// Some OData V4 model configuration
var oModelConfig = {
    groupId : "$direct",
    serviceUrl: urlV4,
    synchronizationMode: "None",
    operationMode: "Server"
};

var oModel = new ODataModel(oModelConfig);
var oTable = new Table({
    growing: true,
    columns : [
        new Column({header: new Text({text: "Name"})}),
        new Column({header: new Text({text: "StartsAt"})}),
        new Column({header: new Text({text: "EndsAt"})}),
        new Column({header: new Text({text: "Interval"})}),
    ]
});

oTable.setModel(oModel);
oTable.bindItems({
    path:"/People('russellwhyte')/Trips",
    template: new ColumnListItem({
        cells: [
           new Text({text:"{Name}"}),
            new Text({text:"{StartsAt}"}),
            new Text({text:"{EndsAt}"}),
            new Text({text:{
                parts:[
                    {
                        path:'StartsAt',
                        // requires OData type to convert the date
                        // string into JavaScript Date object
                        type: "sap.ui.model.odata.type.DateTimeOffset"

                    },{
                        path:'EndsAt',
                        // requires OData type
                        type: "sap.ui.model.odata.type.DateTimeOffset"
                    }
                ],
                type: 'sap.ui.model.type.DateInterval',
                formatOptions: {format: "yMMMdd"}

            }})
        ]
    })
});
```

For more information, see the [API Reference: `sap.ui.model.type.DateTimeInterval`](https://ui5.sap.com/#/api/sap.ui.model.type.DateTimeInterval).

