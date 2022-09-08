<!-- loio365bdbd737034334a38a6fef07345196 -->

# Consuming OData V2 Services with the OData V4 Model

The SAPUI5 framework can consume OData V2 Services in a non-intrusive way as if working directly with OData V4.



<a name="loio365bdbd737034334a38a6fef07345196__section_jb5_msp_fbb"/>

## Overview

With SAPUI5 the OData V4 Model supports the consumption of OData V2 services. The framework takes care to convert the metadata and the data in a way that the application developer writes its application as he would do with an OData V4 model with a corresponding OData V4 service. As OData V4 supports various features that are not covered by OData V2, some features of the OData V4 model cannot be used. A list of the restrictions is available below.

Here is an example of a manifest.json file, which shows how to configure your application to consume a V2 service with the V4 model.

```
{
    "_version" : "1.1.0",
    "sap.app" : {
        ...
        "dataSources" : {
            "default" : {
                "uri" : "<ODataV2 Service URL>",
                "type" : "OData",
                "settings" : {
                    "odataVersion" : "2.0"
                }
            }
        },
        ...
    },
    ...
    "sap.ui5" : {
        ...
        "dependencies" : {
            "minUI5Version" : "1.49",
            ...
        },
        "models" : {
            "" : {
                "dataSource" : "default",
                "settings" : {
                    "autoExpandSelect" : false,
                    "operationMode" : "Server",
                    "synchronizationMode" : "None"
                },
                "type" : "sap.ui.model.odata.v4.ODataModel"
            }
        },
        ...
    }
}
```

If you have an OData V2 service and you want to consume this service with an OData V4 model, you have to set `type` of the corresponding model to ***sap.ui.model.odata.v4.ODataModel*** and `odataVersion` of the corresponding data source to ***2.0***. Both settings are needed. Additionally, the `minUI5Version` has to be at least **1.49**.



<a name="loio365bdbd737034334a38a6fef07345196__section_djd_wtp_fbb"/>

## Type Mapping and Data Conversion

OData V4 has several types, which do not exist in OData V2 \(e.g. `Edm.Date`, `Edm.TimeOfDay`\) and the other way around `Edm.DateTime`, `Edm.Time`\), so we need a mapping between corresponding data types.

The following OData V2 types are supported and mapped:

-   `Edm.Binary`, `Edm.Boolean`, `Edm.Byte`, `Edm.Decimal`, `Edm.Double`, `Edm.Guid`, `Edm.Int16`, `Edm.Int32`, `Edm.Int64`, `Edm.SByte`, `Edm.String` do not need a type mapping as they exist in both OData versions.

-   `Edm.DateTime` is mapped to OData V4 type `Edm.Date` if the property has the OData V2 annotation `sap:display-format="date"` or otherwise to `Edm.DateTimeOffset` with UTC timezone.

-   `Edm.Time` is mapped to OData V4 type `Edm.TimeOfDay`.


Some data types have different representation in OData V2 and OData V4. The application developer should only use the OData V4 values. The framework takes care that the values are converted before sending the request to the backend \(e.g. as a value of a key property\) and after receiving the response from the backend.

Here are some examples:

-   OData V2 uses a different alphabet for the base-64 encoding for `Edm.Binary`. OData V2 uses '***\+***' and '***/***' but OData V4 uses instead '***\-***' and '***\_***'.

-   For `Edm.DateTimeOffset` OData V2 uses a JavaScript Date \(i.e. ***Date\(1420529121547\)***\) and OData V4 a String \(i.e. ***"2015-01-06T12:25:21.547"***\) representation.




<a name="loio365bdbd737034334a38a6fef07345196__section_tfd_1xp_fbb"/>

## Mapping of OData V4 Features



### System Query Options

**$expand / $select system query options**

OData V4 supports "$expand with options", which means an $expand option can contain query options for the expanded navigation property such as $select, $orderby or $expand itself.. OData V2 does not support "$expand with options" but only $expand and $select with path values. An OData V4 $expand option, which contains only $select and $expand options, is transformed to the corresponding OData V2 $expand and $select options by "flattening" the OData V4 structure.

> ### Example:  
> OData V4 system query options to expand line items:
> 
> ```
> $expand=SO_2_SOITEM($select=DeliveryDate,ItemPosition,SalesOrderID)
> $select=SalesOrderID,GrossAmount
> ```
> 
> These options are converted into following OData V2 system query options:
> 
> ```
> $expand=SO_2_SOITEM
> $select=SO_2_SOITEM/DeliveryDate,SO_2_SOITEM/ItemPosition,SO_2_SOITEM/SalesOrderID,SalesOrderID,GrossAmount
> 
> ```

> ### Note:  
> Because of the flat structure of $expand and $select, the URLs get longer than the URLs in OData V4. In some browsers that might be an issue if you use $direct as group ID. \(for more information see: [Batch Control](batch-control-74142a3.md)\).



### $orderby

OData V4 supports system query option $orderby also in $expand structures, but OData V2 supports only $orderby on top level. When consuming an OData V2 service with an OData V4 model, system query $orderby on top level is supported but an error is raised if $orderby is used in $expand.

`$orderby` can also work with expressions, but those need to be identical in V2 and V4.



### $count

In OData V2 $count can only be used on top level. An error is raised if $count is used in $expand. On top level, $count is converted to V2 $inlinecount and propagated to the request.



### $filter

In OData V2 $filter can only be used on top level. An error is raised if $filter is used in $expand. On top level, $filter is converted to V2 syntax and propagated to the request. $filter supports comparisons, `and`, `or`, `not` and the following built-in functions:

-   String functions: `concat`, `contains` \(converted to `substringof`\), `endswith`, `indexof`, `length`, `startswith`, `tolower`, `toupper`, `trim`

-   Date and time functions: `day`, `hour`, `minute`, `month`, `second`, `year`

-   Arithmetic functions: `ceiling`, `floor`, `round`


The remaining functions are unsupported because they have no equivalent in V2.

> ### Caution:  
> Avoid passing literals to date, time and arithmetic functions, because the parameter to these functions can have different types and it cannot be decided which one is correct.
> 
> > ### Example:  
> > In floor\(42\) the 42 can be either an `Edm.Double` or an `Edm.Decimal`. Avoid comparing two literals like, for example `42 eq 42`, because the converter determines the type of a literal from the other operand in comparisons.



### $search

Some OData V2 servers support $search. The query option is passed through unconverted.



### OData V2 Annotations

Following V2 \(attributes with namespace [http://www.sap.com/Protocols/SAPData](http://www.sap.com/Protocols/SAPData)\) annotations are converted to corresponding V4 annotations \(see OData V2 Model -\> Meta Model for OData V2 -\>[Enhancement of the OData Meta Model](odata-v2-model-6c47b2b.md#loio341823349ed04df1813197f2a0d71db2__Enhancement)\).

**OData V2 Annotations defined at `EntitySet`:**

-   creatable, deletable, deletable-path, label, pageable, requires-filter, searchable, topable, updatable, updatable-path


**OData V2 Annotations defined at `Property`:**

-   aggregation-role, creatable, creatable-path, display-format \(with values `NonNegative` and `UpperCase`\), field-control, filterable, filter-restriction, heading, label, precision, quickinfo, required-in-filter, sortable text, unit, updatable, visible


**OData V2 Annotations defined at `Schema`:**

-   sap:schema-version="foo"


sap:semantics:

-   bday, body, city, class, completed, country, currency-code dtend, dtstart, due, duration, familyname, fbtype, fiscalyear, fiscalyearperiode, from, givenname, honorific, location, middlename, name, nickname, note, org, org-role, org-unit, percent-complete, photo, pobox, priority, received, region, sender, status, street, subject, suffix, tel \(with types `cell`, `work`, `fax`\), title, transp, url, unit-of-measure, url, wholeday, year, yearmonth, yearmonthday, yearquarter, yearweek, zip


**OData V2 Annotations defined at `NavigationProperty`:**

-   filterable, creatable, creatable-path


**OData V2 Annotations defined at `FunctionImport`:**

-   action-for, label


Warnings are logged for all SAP attributes that have not been processed by the V2 converter.



<a name="loio365bdbd737034334a38a6fef07345196__section_xm5_3yp_fbb"/>

## Restrictions

Not all OData V4 features are supported yet when consuming an OData V2 service. We have the following restrictions:

-   The OData V4 model can consume an OData V2 service for read scenarios only.

-   The OData V2 services has to provide inline type metadata in responses, i.e. property `__metadata.__type`. This information is needed to convert the data between the OData V2 and the OData V4 types.

-   Supported data types are listed above \(see [Type Mapping and Data Conversion](consuming-odata-v2-services-with-the-odata-v4-model-365bdbd.md#loio365bdbd737034334a38a6fef07345196__section_djd_wtp_fbb)\).

-   System query options $orderby, $filter and $count on top level and $expand and $select are supported. All other system query options raise an exception.

-   Not all OData V2 annotations are converted yet. Supported OData V2 annotations are listed above \(see [OData V2 Annotations](consuming-odata-v2-services-with-the-odata-v4-model-365bdbd.md#loio365bdbd737034334a38a6fef07345196__subsection_kmw_4fl_nbb)\).


> ### Caution:  
> OData V4 validates that namespaces are always loaded from the same URI. Ensure to reference the metadata document \(e.g. `.../IWBEP/GWSAMPLE_BASIC/$metadata`\) in additional annotation files and not the service document \(`.../IWBEP/GWSAMPLE_BASIC`\).

