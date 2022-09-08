<!-- loiof1ee7a8b2102415bb0d34268046cd3ea -->

# Using Data Binding for Data Export

Data binding supports the export of data in a specific format so that the data can be used in other programs.

To export data, load the necessary modules as shown in the following example:

```js
sap.ui.require(["sap/ui/core/util/Export", "sap/ui/core/util/ExportTypeCSV"], function(Export, ExportTypeCSV) {
    // ...
});
```

The following code snippet uses a JSON model as basis for the export. You can also use other models, such as the OData model.

```js

// "JSONModel" required from module "sap/ui/model/json/JSONModel"
var oModel = JSONModel([
    {
        firstname: "Al",
        lastname: "Dente"
    },
    {
        firstname: "Andy",
        lastname: "Friese"
    },
    {
        firstname: "Anita",
        lastname: "Mann"
    },
    {
        firstname: "Doris",
        lastname: "Schutt"
    },
    {
        firstname: "Kenya",
        lastname: "Dewit"
    }
]);

```

In the next step, create the data export object and pass the required information for the export to the object:

```js

// "Export" required from module "sap/ui/core/util/Export"
var oExport = new Export({

    // "ExportTypeCSV" required from module "sap/ui/core/util/ExportTypeCSV"
    // Type that will be used to generate the content. Own ExportType's can be created to support other formats
    exportType: new ExportTypeCSV({
        separatorChar: ";"
    }),

    // Pass in the model created above
    models: oModel,

    // binding information for the rows aggregation 
    rows: {
        path: "/" 
    },

    // column definitions with column name and binding info for the content
    columns: [
        {
            name: "First name",
            template: {
                content: {
                    path: "firstname"
                }
            }
        },
        {
            name: "Last name",
            template: {
                content: {
                    path: "lastname"
                }
            }
        }
    ]
});

```

The export class provides a generate method that triggers the generation process and returns a jQuery Promise object. The done handler is called when the generation process has finished. If you use the OData model, this happens asynchronously. The always handler is also called when the generation has failed. When the generation has finished and the export object is no longer needed, destroy the export object.

```js

oExport.generate().done(function(sContent) {
    console.log(sContent);
}).always(function() {
    this.destroy();
});

```

The above example provides the following output:

```
First name;Last name
Al;Dente
Andy;Friese
Anita;Mann
Doris;Schutt
Kenya;Dewit
```

You can directly save the file by triggering a download. This calls the generate method internally and uses the file util class \(`sap/ui/core/util/File`\) to trigger the download.

```js

oExport.saveFile().always(function() {
    this.destroy();
});

```



## Export Types

You can use the CSV export type out of the box, or define other export types. The concept is similar to custom notepad controls, see [Developing Controls](../09_Developing_Controls/developing-controls-8dcab00.md). The generate method is called and should return the created file as a string.

> ### Note:  
> Make sure that all values are encoded or escaped properly.

```js

// "ExportType" required from module "sap/ui/core/util/ExportType"
// "encodeXML" required from module "sap/base/security/encodeXML"
ExportType.extend("my.own.ExportType", {

    init: function() {
        // Set default values
        this.setProperty("fileExtension", "mytype", true);
        this.setProperty("mimeType", "text/mytype", true);
        this.setProperty("charset", "utf-8", true);
    },

    generate: function() {
        var aBuffer = [];

        var oColumns = this.columnGenerator(),
            oColumn;

        aBuffer.push("<columns>");

        while (!(oColumn = oColumns.next()).done) {
            aBuffer.push("<column>" + encodeXML(oColumn.value.name) + "</column>");
        }

        aBuffer.push("</columns>");
        
        var oRows = this.rowGenerator(),
            oRow;

        aBuffer.push("<rows>");

        while (!(oRow = oRows.next()).done) {
            var oCells = oRow.value.cells,
                oCell;

            aBuffer.push("<row>");
            aBuffer.push("<cells>");

            while (!(oCell = oCells.next()).done) {
                aBuffer.push("<cell");
                if (oCell.value.customData.color) {
                    aBuffer.push(" color=\"" + encodeXML(oCell.value.customData.color) + "\"");
                }
                aBuffer.push(">");
                aBuffer.push(encodeXML(oCell.value.content));
                aBuffer.push("</cell>");
            }


        
        aBuffer.push("</rows>");
        
        return aBuffer.join("");
    }
});

```

**Custom Data**

It is also possible to pass `customData` to the cell template. This can be used to provide additional metadata to the `ExportType` \(see example code above\).

```js

// column definitions with column name, binding info for the content and additional custom data
columns: [
    {
        name: "First name",
        template: {
            content: {
                path: "firstname"
            },
            customData: [
                {
                    "key": "color",
                    "value": {
                        path: "color"
                    }
                }
            ]
        }
    },
    {
        name: "Last name",
        template: {
            content: {
                path: "lastname"
            }
        }
    }
]

```

**Model Data**

```js

// "JSONModel" required from module "sap/ui/model/json/JSONModel"
var oModel = new JSONModel([
    {
        firstname: "Al",
        lastname: "Dente",
        color: "red"
    },
    {
        firstname: "Andy",
        lastname: "Friese",
        color: "black"
    },
    {
        firstname: "Anita",
        lastname: "Mann",
        color: "yellow"
    },
    {
        firstname: "Doris",
        lastname: "Schutt",
        color: "green"
    },
    {
        firstname: "Kenya",
        lastname: "Dewit",
        color: "blue"
    }
]);

```

**Output**

```xml

<columns>
    <column>First name</column>
    <column>Last name</column>
</columns>
<rows>
    <row>
        <cells>
            <cell color="red">Al</cell>
            <cell>Dente</cell>
        </cells>
    </row>
    <row>
        <cells>
            <cell color="black">Andy</cell>
            <cell>Friese</cell>
        </cells>
    </row>
    <row>
        <cells>
            <cell color="yellow">Anita</cell>
            <cell>Mann</cell>
        </cells>
    </row>
    <row>
        <cells>
            <cell color="green">Doris</cell>
            <cell>Schutt</cell>
        </cells>
    </row>
    <row>
        <cells>
            <cell color="blue">Kenya</cell>
            <cell>Dewit</cell>
        </cells>
    </row>
</rows>

```



## Integration in Controls

`sap/ui/table/Table`

The `exportData` method creates an export instance and fills the rows and columns with the table's rows/column definition, if not defined otherwise. This also includes filters and sorters that have been applied to the columns.

```js

// "ExportTypeCSV" required from module "sap/ui/core/util/ExportTypeCSV"

oTable.exportData({
    exportType: ExportTypeCSV()
})
.saveFile()
.always(function() {
    this.destroy();
});

```

