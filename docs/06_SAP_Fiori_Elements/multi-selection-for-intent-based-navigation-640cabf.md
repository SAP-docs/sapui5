<!-- loio640cabfd35c3469aacf31be28924d50d -->

# Multi-Selection for Intent-Based Navigation

By default, multi-selection for intent-based navigation is enabled.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.

> ### Note:  
> The records which do not have a unique key field cannot be identified. For example, if the following contexts are to be passed during navigation:
> 
> 
> <table>
> <tr>
> <th valign="top">
> 
> Record
> 
> 
> 
> </th>
> <th valign="top">
> 
> P1
> 
> 
> 
> </th>
> <th valign="top">
> 
> P2
> 
> 
> 
> </th>
> </tr>
> <tr>
> <td valign="top">
> 
> 1
> 
> 
> 
> </td>
> <td valign="top">
> 
> A
> 
> 
> 
> </td>
> <td valign="top">
> 
> X
> 
> 
> 
> </td>
> </tr>
> <tr>
> <td valign="top">
> 
> 2
> 
> 
> 
> </td>
> <td valign="top">
> 
> B
> 
> 
> 
> </td>
> <td valign="top">
> 
> Y
> 
> 
> 
> </td>
> </tr>
> <tr>
> <td valign="top">
> 
> 3
> 
> 
> 
> </td>
> <td valign="top">
> 
> A
> 
> 
> 
> </td>
> <td valign="top">
> 
> Y
> 
> 
> 
> </td>
> </tr>
> </table>
> 
> The navigation context that is passed has \(P1=A or B\) and \(P2=X or Y\) rather than \(P1=A and P2=X\) and \(P1=B and P2=Y\) and \(P1=A and P2=Y\). In the target app, individual properties are concatenated via AND, and multiple property values are concatenated via OR: \(P1=A OR P1=B\) AND \(P2=X OR P2=Y\). This might result in an additional record BX.

The selection variant that is passed has the following format:

> ### Sample Code:  
> Structure of the selection variant that is passed
> 
> ```
> {"selectionVariant":
>     "SelectOptions":[
>         {"PropertyName":"SalesOrder","Ranges":[
>             {"Sign":"I","Option":"EQ","Low":"2919682","High":null}, // Context from 1st record for "SalesOrder"
>             {"Sign":"I","Option":"EQ","Low":"2915717","High":null}  // Context from 2nd record for "SalesOrder"
>         ]},
>         {"PropertyName":"SalesOrderType","Ranges":[
>             {"Sign":"I","Option":"EQ","Low":"OR","High":null}, // Context from 1st record for "SalesOrderType"
>             {"Sign":"I","Option":"EQ","Low":"SE","High":null}  // Context from 2nd record for "SalesOrderType"
>         ]},
>         {"PropertyName":"TransactionCurrency","Ranges":[
>             {"Sign":"I","Option":"EQ","Low":"EUR","High":null},
>             {"Sign":"I","Option":"EQ","Low":"USD","High":null}
>         ]},
> .....
> .....
> ```

