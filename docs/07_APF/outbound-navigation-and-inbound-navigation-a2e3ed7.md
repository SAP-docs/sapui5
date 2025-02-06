<!-- loioa2e3ed7706a646e4b8746912e8d22f79 -->

# Outbound Navigation and Inbound Navigation

You can navigate from an APF-based application to another SAP Fiori application \(outbound navigation\) and you can also navigate from an SAP Fiori application to an APF-based application \(inbound navigation\).

In both cases, the source application sends a context object to the target application using the app state. The context object contains a filter object. This filter object represents selections made in the source application and hands over these selections to the target application in the form of a filter. The target application applies the filter or parts of it. For example, the target application can apply the filter to its data requests or visualize the filter as selections in the charts on the UI.



<a name="loioa2e3ed7706a646e4b8746912e8d22f79__section_ffr_dkj_3z"/>

## Outbound Navigation

When navigating from an APF-based application to another application, APF puts the cumulative filter of the current analysis path into the context object. The cumulative filter includes start filters and other filters such as selections made in the charts up to the active analysis step. The context object stores the cumulative filter in the formats described in the section [Filter Formats](outbound-navigation-and-inbound-navigation-a2e3ed7.md#loioa2e3ed7706a646e4b8746912e8d22f79__section_FilterFormats).

APF tries to reduce the cumulative filter to the select options format. If this is successful, the resulting filter is stored in the context object in the property `selectionVariant`.

If it is not possible to reduce the cumulative filter, the value of the property `selectionVariant` contains an error text instead of a select option. This is because select options can only express a subset of all possible filters whereas the format `sap.ui.model.Filter` can express all filters created by APF.

In addition, APF always creates a filter in the `sap.ui.model.Filter` format and stores it in the property `sapApfCumulativeFilter`.

The consuming application can read the app state as follows:

```
sap.ushell.Container
    .getService("CrossApplicationNavigation")
    .getAppState(oInject.instances.component, crossAppStateKey)
    .done(function(appState) {
        contextObject = appState.getData();
        if (contextObject && contextObject.sapApfCumulativeFilter) {
            // your code that processes the filter
        }
    });
```



## Inbound Navigation

When you navigate from an SAP Fiori application to an APF-based application, the SAP Fiori application can hand over a filter in the context object. The APF-based application automatically applies this filter to the analysis path. The context object contains the filter in one of the formats described in the section [Filter Formats](outbound-navigation-and-inbound-navigation-a2e3ed7.md#loioa2e3ed7706a646e4b8746912e8d22f79__section_FilterFormats).

The source application can set the app state as follows:

```
var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
var contextObject = {};
contextObject.sapApfCumulativeFilter = //add filter here
contextObject.selectionVariant = //add selectionVariant here
appState = oCrossAppNavigator.createEmptyAppState(oInject.instances.component);
appState.setData(contextObject);
appState.save();
oCrossAppNavigator.toExternal({
    target : {
        semanticObject : oNavigationTarget.semanticObject,
        action : oNavigationTarget.action
    },
    appStateKey : appState.getKey()
});

```



<a name="loioa2e3ed7706a646e4b8746912e8d22f79__section_FilterFormats"/>

## Filter Formats

APF hands over the cumulative filter of the current analysis path including all analysis steps up to the current step using the `CrossApplicationNavigation` service of the unified shell.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ushell.services.CrossApplicationNavigation) in the Demo Kit.

The context object contains two different properties that hand over the filter in two different formats:

-   Property `sapApfCumulativeFilter`:

    Filter object in the format of `sap.ui.model.Filter`

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.Filter) in the Demo Kit.

-   Property `selectionVariant`:

    Filter object in a select options format

    For more information, search for "Selection Variants" in the documentation of your SAP NetWeaver version on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_NETWEAVER](https://help.sap.com/viewer/p/SAP_NETWEAVER).


> ### Note:  
> The type information of a property is not included in any of the filters. If the consuming application requires the type information, it can be derived from the metadata.



### The Select Options Format

When the property `selectionVariant` of a context object is not undefined, it contains an object of the following form:

```
{
    "SelectionVariantID": <String>,
    "ParameterContextUrl": <String>,
    "FilterContextUrl": <String>,
    "Text": <String>,
    "Parameters": [],
    "ODataFilterExpression": <String>,
    "SelectOptions": […]
}

```

The property `SelectOptions` contains the filter object. The filter object is an array that expresses a conjunction. The elements of the array are range expressions.

```
"SelectOptions": [
    {
        "PropertyName": <String>,
        "Ranges": […]
    }	
]

```

A range expression is a filter that represents ranges and disjunctions of values.

```
{
    "Sign": "I" | "E",
    "Option": <Char(2)>,
    "Low": <String>,
    "High": <String> | null
}

```

`Sign` expresses inclusion or exclusion. `Option` expresses the operator, for instance, "EQ" for equal or "BT" for between. The other two properties express a low value and a high value. The high value is optional. If it is not used, it is set to null.

**Example:** The following filter expresses that values are either equal to 1 or between 3 and 5:

```
"Ranges": [
    {
        "Sign": "I",
        "Option": "EQ",
        "Low": "0001",
        "High": null
    },
    {
        "Sign": "I",
        "Option": "BT",
        "Low": "0003",
        "High": "0005"
    }
]

```

> ### Note:  
> APF does not support exclusions \(property `Sign` equals "E"\).



## Example

```
{
    "SelectionVariantID" : "20141023134315",
    "ParameterContextUrl" : "/(..)/AccountBalance/$metadata#AccountBalanceQueryParameters",
    "FilterContextUrl" : "/(..)/AccountBalance/$metadata#AccountBalanceQueryResult",
    "Text" : "Temporary Selection Variant, Account Balance, 24.10.2014 13:43:15",
    "Parameters" : [
        {
            "PropertyName" : "DisplayCurrency",
            "PropertyValue" : "EUR"
        },
        {
            "PropertyName" : "ExchangeRateType",
            "PropertyValue" : "M"
        }
    ],
    "ODataFilterExpression" : "",
    "SelectOptions" : [
        {
            "PropertyName" : "CompanyCode",
            "Ranges" : [ 
                {
                "Sign" : "I",
                "Option" : "EQ",
                "Low" : "0001",
                "High" : null
                },
                {
                "Sign" : "I",
                "Option" : "EQ",
                "Low" : "0002",
                "High" : null
                }
            ]
        },
        {
            "PropertyName" : "FiscalYear",
            "Ranges" : [
                {
                "Sign" : "I",
                "Option" : "EQ",
                "Low" : "2014",
                "High" : null
                }
            ]
        },
        {
            "PropertyName" : "GLAccount",
            "Ranges" : [
                {
                "Sign" : "I",
                "Option" : "BT",
                "Low" : "10000",
                "High" : "20000"
                },
                {
                "Sign" : "I",
                "Option" : "EQ",
                "Low" : "30000",
                "High" : null
                }
            ]
        }
] }  

```

**Related Information**  


[Creating Navigation Targets](creating-navigation-targets-d5762bc.md "")

[Analysis Path Processing](analysis-path-processing-f7da7d5.md)

