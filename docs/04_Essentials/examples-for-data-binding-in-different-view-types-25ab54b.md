<!-- loio25ab54b0113c4914999c43d07d3b71fe -->

# Examples for Data Binding in Different View Types

Examples how complex syntax can be used for calculated fields in XML, HTML, and JS views.



<a name="loio25ab54b0113c4914999c43d07d3b71fe__section_yqd_24p_rcb"/>

## XML View \(Recommended\)

```js

<mvc:View 
    controllerName="testdata.complexsyntax"
    xmlns:core="sap.ui.core"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    core:require="{
        globalFormatter: 'my/globalFormatter',
        Float: 'sap/ui/model/type/Float'
    }">
    <Label text="Hello Mr. {/employees/0/lastName}, {path: '/employees/0/firstName', formatter: '.myFormatter'}"/>
    <Table items="{/employees}">
        <columns>
            <Column>
                <Label text="Name"/>
            </Column>
            <Column>
                <Label text="Birthday"/>
            </Column>
        </columns>
        <items>
            <ColumnListItem>
                <cells>
                    <Text text="{path: 'gender', formatter: '.myGenderFormatter'} {firstName}, {lastName}"/>
                    <Text text="{parts: [{path: 'birthday/day'}, {path: 'birthday/month'}, {path: 'birthday/year'}], formatter: 'globalFormatter'}"/>
                </cells>
            </ColumnListItem>
        </items>
    </Table>
    <Label text="{path: '/statistics/amount', type: 'Float', formatOptions: {minFractionDigits: 1}}"/>
</mvc:View>

```



<a name="loio25ab54b0113c4914999c43d07d3b71fe__section_gqr_g4p_rcb"/>

## Typed View

A typed view is not a declarative view. It is written in JavaScript and extends the `sap.ui.core.mvc.View` class. The following example shows how the `View` class can be extended to form such a typed view:

```js
sap.ui.define([
    "my/globalFormatter",
    "sap/ui/core/mvc/View",
    "sap/ui/model/type/Float",
    "sap/m/Table",
    "sap/m/Column",
    "sap/m/ColumnListItem",
    "sap/m/Label",
    "sap/m/Text"
    ], function(globalFormatter, View, Float, Table, Column, ColumnListItem, Label, Text) {
    return View.extend("testdata.complexsyntax", {
      
        getControllerName() {
            return "testdata.complexsyntax";
        },
        getAutoPrefixId() {
            return true;
        },
        createContent(oController) {
            const oLabelWelcome = new Label({ 
                text: "Hello Mr. {/employees/0/lastName}, {path: '/employees/0/firstName', formatter: '.myFormatter'}"
            }, oController);
            const oLabelName = new Label({text: "Name"});
            const oLabelBirthday = new Label({text: "Birthday"});
            const oColumnName = new Column({header: oLabelName});
            const oColumnBirthday = new Column({header: oLabelBirthday});
            const oTextName = new Text({
                text: "{path: 'gender', formatter: '.myGenderFormatter'} {firstName} {lastName}"
            }, oController);
            const oTextBirthday = new Text({
                text: "{parts: [{ path: 'birthday/day'}, {path: 'birthday/month'}, {path: 'birthday/year' }], formatter: 'globalFormatter'}"
            }, oController);
            const oColumnListItemTemplate = new ColumnListItem({cells: [oTextName, oTextBirthday]});
            const oTable = new Table({ 
                columns: [
                    oColumnName,
                    oColumnBirthday
                ],
                items: {
                    path: "/employees",
                    template: oColumnListItemTemplate,
                    templateShareable: false
                }
            });
            
            const oLabelAmount = new Label({text: {path: '/statistics/amount', type: 'Float'}});
            
            return [oLabelWelcome, oTable, oLabelAmount];
        }
    });
});
```

