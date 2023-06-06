<!-- loio6c9e61dc157a40c19460660ece8368bc -->

# Dates, Times, Timestamps, and Time Zones

SAPUI5 applications often deal with timestamps, dates and times. Typically, these timestamps, dates and times are stored in a back-end system and communicated to the client via OData services. SAPUI5 offers a variety of UI5 data types and formatters for handling these timestamps, dates and times.

When talking about dates, times, or timestamps, we'll use the following definitions:

-   A **date** is a representation of a specific day within a year that is independent of any time zone. For example, New Year's Eve 2022 is on 2022/12/31, regardless of the time zone in which the user is in. The time zone is irrelevant for dates.
-   A **time** is a representation of a specific hour/minute/second within a day that is independent of any time zone. For example, if all shops of a brand open at 9:00 AM, they will open at 9:00 AM in whichever time zone the shop is in. The time zone is irrelevant for times.
-   A **timestamp** represents a point in time that can be displayed or edited in specific time zones. For example, if a meeting starts at a specific date and a specific time in a specific time zone, its timestamp may be displayed as `27.11.2022, 14:00:00 Honolulu` or as `28.11.2022, 11:00:00 Australia/Canberra`, depending on the user's time zone.

> ### Note:  
> Be aware of the discrepancy between our definitions given here and the behavior of some methods of the JavaScript global `Date` object. For example,
> 
> -   `Date#getTime` returns a timestamp and not a time in our terminology,
> -   `Date#getDate` returns only the day of a date and not the entire date.

The intermediate processing of these entities on the client side typically uses the JavaScript `Date` object, which represents a timestamp. This may cause issues if dates are used and time zone handling comes into play. Typically, timestamps are displayed in the time zone of the browser. It is also possible to display a timestamp in a different time zone, for example in the `America/New_York` time zone, by using  [ `sap.ui.model.odata.type.DateTimeWithTimezone`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.DateTimeWithTimezone) or [ `sap.ui.core.format.DateFormat.getDateTimeWithTimezoneInstance`](https://ui5.sap.com/#/api/sap.ui.core.format.DateFormat.getDateTimeWithTimezoneInstance).

For testing purposes, you can use the `sap-timezone` URL parameter to switch from the browser's time zone to any provided time zone. For example, with `?sap-timezone=Pacific/Honolulu` the Honolulu time zone \(GMT-10:00\), and with `?sap-timezone=Pacific/Kiritimati` the Kiritimati time zone \(GMT+14:00\) is used for formatting and parsing timestamps, except for the timestamps that are formatted or parsed with  [ `sap.ui.model.odata.type.DateTimeWithTimezone`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.DateTimeWithTimezone) or [ `sap.ui.core.format.DateFormat.getDateTimeWithTimezoneInstance`](https://ui5.sap.com/#/api/sap.ui.core.format.DateFormat.getDateTimeWithTimezoneInstance).

> ### Restriction:  
> If you use a configured time zone, **your application may break** if it uses the JavaScript `Date` object in combination with functions that use the local browser time zone, for example `oDate.getHours()` or `oDate.getDate()`. To avoid such issues, we strongly recommend the following approach:
> 
> -   Use data binding with the corresponding SAPUI5 OData types wherever possible in your application.
> -   Always use [ `UI5Date.getInstance`](https://ui5.sap.com/#/api/module:sap/ui/core/date/UI5Date/methods/sap/ui/core/date/UI5Date.getInstance) to create new date instances. For more information, see the [UI5Date section](dates-times-timestamps-and-time-zones-6c9e61d.md#loio6c9e61dc157a40c19460660ece8368bc__section_ui5date) below.

This topic describes the different OData Edm types and the corresponding SAPUI5 data type, how to display timestamps in a specific time zone, a list of best practices for handling timestamps, dates, and times in SAPUI5, and a list of common pitfalls.



<a name="loio6c9e61dc157a40c19460660ece8368bc__section_nrw_4x3_dwb"/>

## Timestamps, Dates, and Times in OData

OData provides different Edm types for handling timestamps, dates, and times. For these Edm types, SAPUI5 provides corresponding [SAPUI5 data types](formatting-parsing-and-validating-data-07e4b92.md) to be used with data binding for formatting and parsing timestamps, dates and times. The following table shows which SAPUI5 data type belongs to which Edm type, and which meaning these types have:


<table>
<tr>
<th valign="top">

Edm Type



</th>
<th valign="top">

Transported as \(in JSON Format\)



</th>
<th valign="top">

Model Representation



</th>
<th valign="top">

SAPUI5 Type



</th>
<th valign="top">

Meaning



</th>
</tr>
<tr>
<td valign="top" colspan="5">

**OData V4 Edm Types**



</td>
</tr>
<tr>
<td valign="top">

`Edm.Date`



</td>
<td valign="top">

"Date" : "2014-03-25"



</td>
<td valign="top">

String



</td>
<td valign="top">

 [ `sap.ui.model.odata.type.Date`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Date)



</td>
<td valign="top">

A **date** as defined above.



</td>
</tr>
<tr>
<td valign="top">

`Edm.DateTimeOffset`



</td>
<td valign="top">

"DateTimeOffset" : "2015-01-06T07:25:21Z"



</td>
<td valign="top">

String



</td>
<td valign="top">

 [ `sap.ui.model.odata.type.DateTimeOffset`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.DateTimeOffset)



</td>
<td valign="top">

A **timestamp** as defined above.



</td>
</tr>
<tr>
<td valign="top">

`Edm.TimeOfDay`



</td>
<td valign="top">

"TimeOfDay" : "07:25:21"



</td>
<td valign="top">

String



</td>
<td valign="top">

 [ `sap.ui.model.odata.type.TimeOfDay`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.TimeOfDay)



</td>
<td valign="top">

A **time** as defined above.



</td>
</tr>
<tr>
<td valign="top" colspan="5">

**OData V2 Edm Types**



</td>
</tr>
<tr>
<td valign="top">

`Edm.DateTime`



</td>
<td valign="top">

"DateTime" : "\\/Date\(1395752399000\)\\/"



</td>
<td valign="top">

JavaScript `Date`



</td>
<td valign="top">

 [ `sap.ui.model.odata.type.DateTime`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.DateTime) with constraint`displayFormat: "Date"`



</td>
<td valign="top">

A **date** as defined above if the property/parameter is annotated with `sap:display-format="Date"`. Using this type as a **timestamp** is not recommended; use `Edm.DateTimeOffset` instead.



</td>
</tr>
<tr>
<td valign="top">

`Edm.DateTimeOffset`



</td>
<td valign="top">

"DateTimeOffset" : "\\/Date\(1420529121547+0000\)\\/"



</td>
<td valign="top">

JavaScript `Date`



</td>
<td valign="top">

 [ `sap.ui.model.odata.type.DateTimeOffset`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.DateTimeOffset)



</td>
<td valign="top">

A **timestamp** as defined above.



</td>
</tr>
<tr>
<td valign="top">

`Edm.Time`



</td>
<td valign="top">

"Time" : "PT11H33M55S"



</td>
<td valign="top">

\{ ms : 41635000 , \_\_edmType : 'Edm.Time' \}



</td>
<td valign="top">

 [ `sap.ui.model.odata.type.Time`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Time)



</td>
<td valign="top">

A **time** as defined above.



</td>
</tr>
</table>

Timestamps are always transported between client and server in UTC \(Coordinated Universal Time\), but on the UI they are displayed in the user's time zone, i.e. the time zone used by the browser which is configured in the operating system. The UTC offset \("Z" in OData V4, or "+0000" in OData V2 in the examples above\) is neither used to determine a time zone on the client nor to transport time zone information from the client to the back end.

Dates and times are time zone-independent, so OData V4 uses strings like "2014-03-25" or "07:25:21" for transporting dates and times between server and client, and for storing the values in the OData model. In OData V2, however, there is no specific data type for dates. There is an `sap:display-format="Date"` annotation at an OData property/parameter having the Edm type `DateTime`, which means that the given timestamp has to be interpreted as a date. The  [ `sap.ui.model.odata.type.DateTime`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.DateTime) with the constraint `sap:display-format="Date"` uses UTC to extract the date information from a timestamp.

When using dates and times, we strongly recommend to use data bindings with the corresponding SAPUI5 data types. If data is retrieved or sent via OData, e.g. for filtering, **make sure to use data types from the `sap.ui.model.odata.type` namespace. This is also valid for data bindings with non-OData-models, such as JSON models.** For examples, see [Best Practices](dates-times-timestamps-and-time-zones-6c9e61d.md#loio6c9e61dc157a40c19460660ece8368bc__section_BP).



<a name="loio6c9e61dc157a40c19460660ece8368bc__section_jrv_5wm_2fb"/>

## Displaying Timestamps in a Specific Time Zone

Displaying timestamps in a specific time zone provided by the back end is done using the composite type  [ `sap.ui.model.odata.type.DateTimeWithTimezone`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.DateTimeWithTimezone). The first part of the composite binding contains the timestamp as an `Edm.DateTimeOffset`, and the second part contains the IANA time zone ID.

> ### Example:  
> **Using `sap.ui.model.odata.type.DateTimeWithTimezone` with OData V4**
> 
> ```
> <!-- 'DateTimeOffset' refers to an Edm.DateTimeOffset property -->
> <!-- 'TimezoneID' refers to an Edm.String property holding the IANA time zone ID -->
> <!-- If no type is set, the OData V4 model automatically determines the types based on the metadata -->
> <Text text="{
>         parts: ['DateTimeOffset', 'TimezoneID'],
>         type: 'sap.ui.model.odata.type.DateTimeWithTimezone'
>      }" />
> <!-- You must specify the types when copying the OData model values to a JSON model -->
> <Text text="{
>         parts: [
>             {path: 'json>DateTimeOffset', type: 'sap.ui.model.odata.type.DateTimeOffset'},
>             {path: 'json>TimezoneID', type: 'sap.ui.model.odata.type.String'}
>         ],
>         type: 'sap.ui.model.odata.type.DateTimeWithTimezone'
>      }" />
> ```

> ### Example:  
> **Using `sap.ui.model.odata.type.DateTimeWithTimezone` with OData V2**
> 
> ```
> <!-- '/v2/DateTimeOffset' refers to an Edm.DateTimeOffset property -->
> <!-- 'TimezoneID' refers to an Edm.String property holding the IANA time zone ID -->
> 
> <Text text="{
>         parts: [
>             {path: '/v2/DateTimeOffset', parameters: {useUndefinedIfUnresolved: true}},
>             {path: 'TimezoneID', parameters: {useUndefinedIfUnresolved: true}}
>         ],
>         type: 'sap.ui.model.odata.type.DateTimeWithTimezone'
>      }" />
> ```

> ### Example:  
> **Using `sap.ui.model.odata.type.DateTimeWithTimezone` to display only a time zone**
> 
> ```
> <!-- 'TimezoneID' refers to an Edm.String property holding the IANA time zone ID -->
> <Text text="{
>         formatOptions: {showDate: false, showTime: false},
>         parts: [{value: null}, {path: 'TimezoneID'}],
>         type: 'sap.ui.model.odata.type.DateTimeWithTimezone'
>      }" />
> ```



<a name="loio6c9e61dc157a40c19460660ece8368bc__section_odr_ryd_jxb"/>

## Core Configuration-Specified Time Zones in SAPUI5

As of Version 1.114.0, SAPUI5 is enabled to set a time zone that's different from the browser's time zone.

> ### Caution:  
> Using the configuration API in a running application can lead to unexpected data inconsistencies.

For more information, see the `timezone` configuration parameter in [Configuration Options and URL Parameters](configuration-options-and-url-parameters-91f2d03.md)



<a name="loio6c9e61dc157a40c19460660ece8368bc__section_ui5date"/>

## `sap.ui.core.date.UI5Date`

The [ `sap.ui.core.date.UI5Date`](https://ui5.sap.com/#/api/module:sap/ui/core/date/UI5Date) class is a subclass of JavaScript `Date`. Regardless of whether a time zone is configured or not, the `UI5Date` class is meant to replace the JavaScript `Date` entirely within SAPUI5. Therefore, make sure to always use [ `UI5Date.getInstance`](https://ui5.sap.com/#/api/module:sap/ui/core/date/UI5Date/methods/sap/ui/core/date/UI5Date.getInstance) where `Date`s are required.

> ### Caution:  
> Use the [ `UI5Date.getInstance`](https://ui5.sap.com/#/api/module:sap/ui/core/date/UI5Date/methods/sap/ui/core/date/UI5Date.getInstance) method instead of `new Date(...)` to create new `Date` instances. This method returns a `UI5Date` if the browser time zone and the configured time zone are different, and a regular JavaScript `Date` otherwise.

> ### Example:  
> **How to create and use a `UI5Date`**
> 
> ```
> sap.ui.define([
>     "sap/base/Log",
>     "sap/ui/core/date/UI5Date"
> ], function (Log, UI5Date) {
>     "use strict";
>  
>     // Assuming the application is called with this URL parameter: sap-timezone=Pacific/Kiritimati   
>     // Create an instance of UI5Date with a preset date
>     var oUI5Date = UI5Date.getInstance(2023, 0, 1, 0, 0, 0, 0); // To create an instance of UI5Date for today/now, just use UI5Date.getInstance() without parameters
>      
>     Log.info(oUI5Date.getDate()); // Returns 1, the day of the month in the configured time zone
>   
>     Log.info(oUI5Date.setDate(20)); // Returns the timestamp in milliseconds, based on the UNIX epoch, until the "20th Jan 2023 00:00:00" in "Pacific/Kiritimati" time
>  
>     // "20th Jan 2023 00:00:00" in "Pacific/Kiritimati" time is equal to "19th Jan 2023 10:00:00" in universal time
>     Log.info(oUI5Date.getUTCDate()); // Returns 19, the day of the month in universal time,
>  
>     Log.info(oUI5Date.setUTCDate(24)); // Returns the timestamp in milliseconds, based on the UNIX epoch, until the "24th Jan 2023 10:00:00" in universal time   
> });
> 
> ```



<a name="loio6c9e61dc157a40c19460660ece8368bc__section_BP"/>

## Best Practices

**Use data binding with the corresponding OData types against the string-based property \(`value`\) of the control** used to display the date, time, timestamp, or a date range.



### Value initialization with `getModelValue`

If an application has to create new entities for a model and initialize them with date, time, and timestamp values, you must ensure that they are in a valid model format. We provide the `getModelValue` method for this use case, which is implemented by the following `sap.ui.model.odata.type` types:

-   `sap.ui.model.odata.type.Date`,
-   `sap.ui.model.odata.type.DateTime`,
-   `sap.ui.model.odata.type.DateTimeOffset`,
-   `sap.ui.model.odata.type.Time`,
-   `sap.ui.model.odata.type.TimeOfDay`.

> ### Example:  
> **Initialize valid model values with an existing data binding**
> 
> ```
> sap.ui.define([
>     "sap/ui/core/date/UI5Date",
>     "sap/ui/core/mvc/Controller"
> ], function (UI5Date, Controller) {
>     "use strict";         
>  
>     return Controller.extend("myController", { 
>         /**
>          * Assume you have the following control defined in the corresponding XML view of this controller:
>          * 
>          * With OData V2: <DateTimePicker id="deliveryDate::createSalesOrderItemDialog" value="{
>          *                              path : 'DeliveryDate',
>          *                              type : 'sap.ui.model.odata.type.DateTimeOffset'
>          *                          }"/>
>          *
>          * With OData V4: <DateTimePicker id="deliveryDate::createSalesOrderItemDialog" value="{DeliveryDate}"/>
>          */
>         onCreateItem : function () {
>             var oDeliveryDate = UI5Date.getInstance(),
>                 // Get the data type via the data binding
>                 oType = this.byId("deliveryDate::createSalesOrderItemDialog").getBinding("value").getType();
>  
>             oDeliveryDate.setMonth(oDeliveryDate.getMonth() + 1);            
>             this.byId("ToLineItems").getBinding("rows").create({
>                 DeliveryDate: oType.getModelValue(oDeliveryDate)
>             });
>         }
>     });
> });
> ```

If no data binding is available, the required data type has to be taken from the metadata.

> ### Example:  
> **Initialize valid model values without an existing data binding in OData V4**
> 
> ```
> sap.ui.define([
>     "sap/ui/core/date/UI5Date",
>     "sap/ui/core/mvc/Controller"
> ], function (UI5Date, Controller) {
>     "use strict";         
>  
>     return Controller.extend("myController", {        
>         onCreateItem : function () {
>             var oDeliveryDate = UI5Date.getInstance();
>                 // Get the data type via the metadata    
>                 oListBinding = this.byId("SO_2_SOITEM").getBinding("items"),
>                 sPath = oListBinding.getHeaderContext().getPath() + "/DeliveryDate",
>                 oType = oListBinding.getModel().getMetaModel().getUI5Type(sPath);     
>  
>             oDeliveryDate.setMonth(oDeliveryDate.getMonth() + 1);       
>             oListBinding.create({
>                 DeliveryDate: oType.getModelValue(oDeliveryDate)
>             });
>         }
>     });
> });
> ```

You don't necessarily have to take the type from the binding or the metadata; you can create the type yourself. The type must be created in sync with the `$metadata` document.

> ### Example:  
> **Initialize valid model values for a manually created type**
> 
> ```
> sap.ui.define([
>     "sap/ui/core/date/UI5Date",
>     "sap/ui/core/mvc/Controller",
>     "sap/ui/model/odata/type/DateTime"
> ], function (UI5Date, Controller, DateTime) {
>     "use strict";         
>  
>     return Controller.extend("myController", { 
>         onCreateItem : function () {
>             var oBirthDay = UI5Date.getInstance(1995, 5, 13);
>                 // Create the type with the constraints as defined in the $metadata document
>                 oType = new DateTime(undefined, {displayFormat: "date"});  
>                          
>             this.byId("contacts").getBinding("rows").create({
>                 Name: "Max",
>                 LastName: "Mustermann",
>                 BirthDay: oType.getModelValue(oBirthDay)
>             });
>         }
>     });
> });
> ```

To ensure consistency and reduce the number of type instances during runtime, we recommend to get the type via a binding or metadata.



### `sap.m.DatePicker` with `Edm.Date` or `Edm.DateTime`

> ### Example:  
> **Using `sap.m.DatePicker` with an OData V4 date in an XML view**
> 
> ```
> 
> <!-- Model value is a string in the format "yyyy-MM-dd" -->
> <DatePicker value="{/V4/Date1}" />
>  
> <!-- When binding an Edm.Date, for example via a JSON model, you have to specify a type -->
> <DatePicker value="{
>     path: 'json>/V4/Date1',
>     type: 'sap.ui.model.odata.type.Date'
>     }" />
> ```

> ### Example:  
> **Using `sap.m.DatePicker` with an OData V2 date in an XML view**
> 
> ```
> <!-- Model value is a JavaScript Date object in UTC time zone -->
> <DatePicker value="{
>     constraints: {displayFormat: 'Date'},
>     path: '/V2/Date1',
>     type: 'sap.ui.model.odata.type.DateTime'
> }" />
> ```



### `sap.m.TimePicker` with `Edm.TimeOfDay` or `Edm.Time`

> ### Example:  
> **Using `sap.m.TimePicker` with an OData V4 TimeOfDay in an XML view**
> 
> ```
> <!-- Model value is a string in the format "hh:mm:ss" resp. "hh:mm:ss.SSS" -->
> <!--    (the number of S depends on the type's precision) -->
> <TimePicker value="{/V4/Time}"/>
>  
> <!-- When binding an Edm.TimeOfDay, for example via a JSON model, you have to specify a type -->
> <TimePicker value="{path: 'json>/V4/Time', type: 'sap.ui.model.odata.type.TimeOfDay'}"/>
> ```

> ### Example:  
> **Using `sap.m.TimePicker` with an OData V2 time in an XML view**
> 
> ```
> <!-- Model value is an object like {ms: 41635000, __edmType: 'Edm.Time'} -->
> <TimePicker value="{path: '/V2/Time', type: 'sap.ui.model.odata.type.Time'}"/>
> ```



### `sap.m.DateTimePicker` with `Edm.DateTimeOffset`

> ### Example:  
> **Using `sap.m.DateTimePicker` with an OData V4 DateTimeOffset in an XML view**
> 
> ```
> <!-- Model value is a string in the format "yyyy-MM-dd'T'HH:mm:ss" resp. "yyyy-MM-dd'T'HH:mm:ss.SSS" -->
> <!--   (the number of S depends on the type's precision), e.g. "2015-01-06T07:25:21Z" -->
> <DateTimePicker value="{/V4/DateTimeOffset}"/>
>  
> <!-- When binding an OData V4 Edm.DateTimeOffset, for example via a JSON model, you must specify a type -->
> <!--    and you have to set the constraint V4 to true. -->
> <DateTimePicker value="{constraints: {V4: true}, path: 'json>/V4/DateTimeOffset', type: 'sap.ui.model.odata.type.DateTimeOffset'}"/>
> ```

> ### Example:  
> **Using `sap.m.DateTimePicker` with an OData V2 DateTimeOffset in an XML view**
> 
> ```
> 
> <!-- Model value is a JavaScript Date object -->
> <DateTimePicker value="{path: '/V2/DateTimeOffset', type: 'sap.ui.model.odata.type.DateTimeOffset'}"/>
> ```



### `sap.m.DateRangeSelection` with `Edm.Date` or `Edm.DateTime`

With a `DateRangeSelection` control the user can select two dates, a start date and an end date. The control has the two properties `dateValue` and `secondDateValue` for these values, which expect a JS `Date` object, but there is only one property `value`, which expects a string property. For binding the `value` against a start date and an end date, the composite type `sap.ui.model.type.DateInterval` has to be used.

> ### Example:  
> **Using `sap.m.DateRangeSelection` with OData V4 dates in an XML view**
> 
> ```
> <!-- Date1 and Date2 are Edm.Date properties (V4)) -->
> <DateRangeSelection value="{
>     formatOptions: {UTC: true},
>     parts: ['/V4/Date1', '/V4/Date2'],
>     type: 'sap.ui.model.type.DateInterval'
> }" />
>  
> <!-- When binding Edm.Date properties, for example via a JSON model, you have to specify a type -->
> <DateRangeSelection value="{
>     formatOptions: {UTC: true},
>     parts: [{
>         path: 'json>/V4/Date1',
>         type: 'sap.ui.model.odata.type.Date'
>     }, {
>         path: 'json>/V4/Date2',
>         type: 'sap.ui.model.odata.type.Date'
>     }],
>     type: 'sap.ui.model.type.DateInterval'
> }" />
> ```

> ### Example:  
> **Using `sap.m.DateRangeSelection` with an OData V2 dates in an XML view**
> 
> ```
> 
> <!-- Date1 and Date2 are Edm.DateTime properties with the sap:display-format='Date' annotation -->
> <DateRangeSelection value="{
>     formatOptions: {UTC: true},
>     parts: [{
>         constraints: {displayFormat: 'Date'},
>         path: '/V2/Date1',
>         type: 'sap.ui.model.odata.type.DateTime'
>     }, {
>         constraints: {displayFormat: 'Date'},
>         path: '/V2/Date2',
>         type: 'sap.ui.model.odata.type.DateTime'
>     }],
>     type: 'sap.ui.model.type.DateInterval'
> }" />
> ```



### Data transfer between an OData and a JSON model

JSON models can also be used if the data is stored in the JSON model in the same way as in the corresponding OData model. If you already have the values in an OData model, you can transfer them to a JSON model. Dates, times and timestamps in the OData V2 model are stored as objects, so take care to clone these objects before transferring the values to a JSON model.

> ### Note:  
> We recommend to bind controls directly to the OData model, and to use JSON models only where directly binding to the OData model does not work.

> ### Example:  
> **Transfer dates, times, and timestamps between an OData V2 model and a JSON model**
> 
> ```
> transferDatesTimesAndTimestampsFromODataV2ModelToJSONModel: function (oContext) {
>     // assume "oContext" is an OData V2 context referencing an entity with the properties 
>     //   "DateTime" (date), "DateTimeOffset" (timestamp) and "Time" (time)
>     var oDate = oContext.getProperty("DateTime"),
>         oDateTimeOffset = oContext.getProperty("DateTimeOffset"),
>         oTime = oContext.getProperty("Time");
>  
>     return new JSONModel({
>             DateTime: oDate ? UI5Date.getInstance(oDate) : null,
>             DateTimeOffset: oDateTimeOffset ? UI5Date.getInstance(oDateTimeOffset) : null,
>             Time: oTime ? Object.assign({}, oTime) : null
>         });
> },
> transferDatesTimesAndTimestampsFromJSONModelToODataV2Model: function (oContext, oJSONModel) {
>     // assume "oContext"  is an OData V2 context referencing an entity with the properties 
>     //   "DateTime" (date), "DateTimeOffset" (timestamp) and "Time" (time)
>     // assume "oJSONModel" is a JSONModel containing the values to be transferred 
>     //   to the OData V2 model "oDataModel"
>     var oDate = oJSONModel.getProperty("/DateTime"),
>         oDateTimeOffset = oJSONModel.getProperty("/DateTimeOffset"),
>         oTime = oJSONModel.getProperty("/Time"),
>         oDataModel = oContext.getModel();
>  
>     oDataModel.setProperty("DateTime", oDate ? UI5Date.getInstance(oDate) : null, oContext);
>     oDataModel.setProperty("DateTimeOffset", oDateTimeOffset ? UI5Date.getInstance(oDateTimeOffset) : null, oContext);
>     oDataModel.setProperty("Time", oTime ? Object.assign({}, oTime) : null, oContext);
> },
> getJSONModelWithFixInitialValues: function () {
>     return new JSONModel({
>         DateTime: UI5Date.getInstance(Date.UTC(2022, 11, 15)), // for Dec 15th 2022
>         DateTimeOffset: UI5Date.getInstance(Date.UTC(2022, 11, 15, 10, 45)), 
>             // for Dec 15th 2022, 10:45 AM (UTC) resp. Dec 15th 2022 11:45:00 CEST
>         Time: {
>             ms: ((10 * 60 + 35) * 60 + 15) * 1000,  // for 10:35:15 AM
>             __edmType: "Edm.Time"
>         }
>     });
> }
> ```

If an OData V4 model is used, cloning is not necessary, as the model representation of dates, times, and timestamps is a string.

> ### Example:  
> **Transfer dates, times, and timestamps between an OData V4 model and a JSON model**
> 
> ```
> transferDatesTimesAndTimestampsFromODataV4ModelToJSONModel: function (oContext) {
>     // assume "oContext" is an OData V4 context referencing an entity with the properties 
>     //   "Date" (date), "DateTimeOffset" (timestamp) and "TimeOfDay" (time)
>     return new JSONModel({
>             Date: oContext.getProperty("Date"),
>             DateTimeOffset: oContext.getProperty("DateTimeOffset"),
>             TimeOfDay: oContext.getProperty("TimeOfDay")
>         });
> },
> transferDatesTimesAndTimestampsFromJSONModelToODataV4Model: function (oContext, oJSONModel) {
>     // assume "oContext"  is an OData V4 context referencing an entity with the properties 
>     //  "Date" (date), "DateTimeOffset" (timestamp) and "TimeOfDay" (time)
>     // assume "oJSONModel" is a JSONModel containing the values to be transferred 
>     //  to the OData V4 Model "oDataModel"
>     oContext.setProperty("DateTime", oJSONModel.getProperty("/Date"));
>     oContext.setProperty("DateTimeOffset", oJSONModel.getProperty("/DateTimeOffset"));
>     oContext.setProperty("Time", oJSONModel.getProperty("/Time"));
> },
> getJSONModelWithFixInitialValues: function () {
>     return new JSONModel({
>         Date: "2022-12-15", // for Dec 15th 2022
>         DateTimeOffset: "2022-12-15T10:45:00Z", 
>           // for Dec 15th 2022, 10:45 AM (UTC) resp. Dec 15th 2022 11:45:00 CEST
>         TimeOfDay: "10:35:15",  // for 10:35:15 AM
>     });
> }
> ```

When binding an OData V4 property via an OData V4 model, type information is automatically determined, and there is no need to specify a type in the binding information. If you bind an OData V4 property via a JSON model, however, you have to specify the type.



<a name="loio6c9e61dc157a40c19460660ece8368bc__section_CP"/>

## Common Pitfalls



### Controls are used with the JavaScript `Date` object

**To display or modify dates, times or timestamps, we recommend to bind the `value` property of the control with the corresponding data type.** The SAPUI5 framework then takes care that the values are properly displayed and sent to the back end.

> ### Caution:  
> Applications calculating with or converting JavaScript `Date`s, e.g. by adding or subtracting time zone offsets \(`oDate.getTimeZoneOffset()`\) or by using `oDate.getHour()` or `oDate.getDate()`, will break if a user-configured time zone is used that is different from the browser's time zone. The time zone offset is relative to the browser's time zone, but the timestamp is displayed in the configured time zone.

Use data binding with the corresponding OData types, so that the framework takes care to properly display the dates, times and timestamps and sends them properly to the back end.



### Unexpected type in `$metadata` document

Instead of using Edm types for dates/times, an Edm.String type is used, especially when using function import parameters. The application then has to take care that the date/time values are properly sent to the back end.

**For date/time types we recommend to use the corresponding Edm type** for properties and function import resp. action parameters, for example:

> ### Example:  
> **Extract from an OData V4 `$metadata` document**
> 
> ```
> <EntityType Name="MyEntityType">
>     ...
>     <Property Name="Date" Type="Edm.Date" />
>     <Property Name="DateTimeOffset" Type="Edm.DateTimeOffset" />
>     <Property Name="TimeOfDay" Type="Edm.TimeOfDay" />
>     ...
> </EntityType>
> ```

> ### Example:  
> **Extract from an OData V2 `$metadata` document**
> 
> ```
> <EntityType Name="MyEntityType" sap:content-version="1">
>     ...
>     <Property Name="Date" Type="Edm.DateTime" Precision="0" sap:display-format="Date" sap:label="Date" />
>     <Property Name="DateTimeOffset" Type="Edm.DateTimeOffset" Precision="7" sap:label="Time Stamp" />
>     <Property Name="Time" Type="Edm.Time" Precision="0" sap:label="Field of type TIMS" />
>     ...
> </EntityType>
> ```

