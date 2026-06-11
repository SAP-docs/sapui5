<!-- loiofef65d03d01a4b2baca28983a5449cf7 -->

# Enabling Semantic Operators in the Filter Bar

You can use semantic date values, such as *Today* or *Last Week*, on the filter bar of list report page, analytical list page, and overview page applications in SAP Fiori elements for OData V4.

Semantic operators are enabled by default for the following fields:

-   `Edm.Date`-based fields for which `FilterRestrictions.AllowedExpressions` is set to `SingleRange` or `SingleValue`

-   `Edm.DateTimeOffset`-based fields for which `FilterRestrictions.AllowedExpressions` is set to `SingleRange`


You can set the `FilterRestrictions` to `SingleRange` as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```
> 
> <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.xml">
>    <edmx:Include Namespace="Org.OData.Capabilities.V1" Alias="Capabilities" />
> </edmx:Reference>
> <Annotations Target="com.c_salesordermanage_sd.EntityContainer/SalesOrderManage">
>     <Annotation Term="Capabilities.FilterRestrictions">
>         <Record Type="Capabilities.FilterRestrictionsType">
>             <PropertyValue Property="FilterExpressionRestrictions">
>                 <Collection>
>                     <Record Type="Capabilities.FilterExpressionRestrictionType">
>                         <PropertyValueProperty="Property"PropertyPath="myDate"/>
>                         <PropertyValueProperty="AllowedExpressions"String="SingleRange"/>
>                     </Record>
>                     …
>                     …
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
>     …
>     …
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> @Capabilities : {
>    FilterRestrictions : {
>       FilterExpressionRestrictions :
>          [{
>             Property : 'myDate',
>             AllowedExpressions : 'SingleRange'
>          }]
>       }
> }
> ...
> entity MyEntity {
> ...
>     myDate: Date;
> }
> ```



<a name="loiofef65d03d01a4b2baca28983a5449cf7__section_otf_dzw_jnb"/>

## Setting a Default Value for a Semantic Date Field

You can define default values for semantic date fields in the `manifest.json` file.

For list report page and analytical list page applications, configure the filter field in the `controlConfiguration` section, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json` 
> 
> ```
> "settings" : {  
>    "contextPath" : "/SalesOrderManage",
>    "controlConfiguration" : {
>       "@com.sap.vocabularies.UI.v1.SelectionFields" : {
>    …
>    …
>          "filterFields": {
>             "SalesOrderDate": { 
>                "settings": {
>                   "defaultValues": [{"operator": "YESTERDAY"}] 
>                }
>             }
>          }
>    …
>    …
>       }
>    }
> }
> 
> ```

For overview page applications, configure the `sap.ovp.controlConfiguration` section, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>    "controlConfiguration": {
>       "@com.sap.vocabularies.UI.v1.SelectionFields": {
>          "filterFields": {
>             "stock_date": {
>                "settings": {
>                   "defaultValues": [
>                      {
>                         "operator": "LASTYEARSINCLUDED",
>                         "values": [6]
>                      }
>                   ],
>                   "operatorConfiguration": [
>                      {
>                         "path": "key",
>                         "equals": "TOMORROW",
>                         "exclude": false
>                      },
>                      {
>                         "path": "key",
>                         "equals": "DATE,FROM,TO,DATERANGE,TODAY,YESTERDAY,TODAYFROMTO,LASTDAYS,NEXTDAYS,THISWEEK,LASTWEEK,LASTWEEKS,NEXTWEEK,NEXTWEEKS,SPECIFICMONTH,THISMONTH,LASTMONTH,LASTMONTHS,NEXTMONTH,NEXTMONTHS,THISQUARTER,LASTQUARTER,LASTQUARTERS,NEXTQUARTER,NEXTQUARTERS,QUARTER1,QUARTER2,QUARTER3,QUARTER4,THISYEAR,LASTYEAR,NEXTYEAR,NEXTYEARS,YEARTODATE,DATETOYEAR",
>                         "exclude": true
>                      }
>                   ]
>                }
>             }
>          }
>       }
>    }
> }
> ```

The `operator` property defines the default value for the semantic date field. In this code sample, the default value is `"YESTERDAY"`.

Semantic date fields supports both single date-based operators and date range-based operators. The following operators are available:

-   Single date-based operators

    -   `"YESTERDAY"`

    -   `"TOMORROW"`

    -   `"TODAY"`

    -   `"FIRSTDAYWEEK"`

    -   `"LASTDAYWEEK"`

    -   `"FIRSTDAYMONTH"`

    -   `"LASTDAYMONTH"`

    -   `"FIRSTDAYQUARTER"`

    -   `"LASTDAYQUARTER"`

    -   `"FIRSTDAYYEAR"`

    -   `"LASTDAYYEAR"`


-   Date range-based operators

    -   `"THISWEEK"`

    -   `"LASTWEEK"`

    -   `"NEXTWEEK"`

    -   `"THISMONTH"`

    -   `"LASTMONTH"`

    -   `"NEXTMONTH"`

    -   `"THISQUARTER"`

    -   `"LASTQUARTER"`

    -   `"NEXTQUARTER"`

    -   `"QUARTER1"`

    -   `"QUARTER2"`

    -   `"QUARTER3"`

    -   `"QUARTER4"`

    -   `"THISYEAR"`

    -   `"LASTYEAR"`

    -   `"NEXTYEAR"`

    -   `"YEARTODATE"`

    -   `"DATETOYEAR"`

    -   `"NEXTXDAYSINCLUDED"`

    -   `"LASTXDAYSINCLUDED"`

    -   `"LASTXWEEKSINCLUDED"`

    -   `"NEXTXWEEKSINCLUDED"`

    -   `"LASTXMONTHSINCLUDED"`

    -   `"NEXTXMONTHSINCLUDED"`

    -   `"LASTXQUARTERSINCLUDED"`

    -   `"NEXTXQUARTERSINCLUDED"`

    -   `"LASTXYEARSINCLUDED"`

    -   `"NEXTXYEARSINCLUDED"`

    -   `"Empty"`



> ### Note:  
> -   For semantic date fields, only default values defined in the `manifest.json` file are applied. Default values defined through `SelectionVariant` are ignored.
> 
> -   Semantic date operators are evaluated based on a fixed calendar definition.
> 
>     > ### Example:  
>     > The standard fiscal quarter `"QUARTER1"` represents the first quarter of the calendar year: January to March. If you're using a non-standard fiscal calendar, the default evaluation won't suit you.



## Defining Default Values for Operators That Require Parameters

For semantic date operators that require parameters for example, setting `NEXTXDAYS` as the default operator with a default value for `X`, you must specify both the operator and the corresponding parameter values in the `manifest.json` file. The following table shows the manifest settings for operators that require parameter values.

**Defining Default Values for Operators That Require Parameters**


<table>
<tr>
<th valign="top">

Operator

</th>
<th valign="top">

`manifest.json` Sample

</th>
<th valign="top">

Comment

</th>
</tr>
<tr>
<td valign="top">

`DATE` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
    "filterFields": {
        "SalesOrderDate": {
            "settings": {
                "defaultValues": [{"operator": "DATE", "values": ["2018-12-28"]}]
            }
        }
    }
}

```



</td>
<td valign="top">

Required date format: YYYY-MM-DD

</td>
</tr>
<tr>
<td valign="top">

`FROM` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
    "filterFields": {
        "SalesOrderDate": {
            "settings": {
                "defaultValues": [{"operator": "FROM", "values": ["2018-12-28"]}]
            }
        }
    }
}

```



</td>
<td valign="top">

Required date format: YYYY-MM-DD

</td>
</tr>
<tr>
<td valign="top">

`TO` 

</td>
<td valign="top">

```
"@com.sap.vocabularies.UI.v1.SelectionFields": {
    "filterFields": {
        "SalesOrderDate": {
            "settings": {
                "defaultValues": [{"operator": "TO", "values": ["2018-12-28"]}]
            }
        }
    }
}
```



</td>
<td valign="top">

Required date format: YYYY-MM-DD

</td>
</tr>
<tr>
<td valign="top">

`DATERANGE` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
    "filterFields": {
        "SalesOrderDate": {
            "settings": {
                "defaultValues": [{"operator": "DATERANGE", "values": ["2019-11-02", "2022-01-01"]}]
            }
        }
    }
}
```



</td>
<td valign="top">

Required date format: YYYY-MM-DD

</td>
</tr>
<tr>
<td valign="top">

`TODAYFROMTO` 

</td>
<td valign="top">

```
"@com.sap.vocabularies.UI.v1.SelectionFields": {
    "filterFields": {
        "SalesOrderDate": {
            "settings": {
                "defaultValues": [{"operator": "TODAYFROMTO", "values": [5, 6]}]
            }
        }
    }
}
```



</td>
<td valign="top">

First value: Days before TODAY

Second value: Number of days after TODAY

</td>
</tr>
<tr>
<td valign="top">

`LastXDays` / `LastXWeeks` / `LastXMonths` / `LastXQuarters` / `LastXYears` 

</td>
<td valign="top">

```
"@com.sap.vocabularies.UI.v1.SelectionFields": {
    "filterFields": {
        "SalesOrderDate": {
            "settings": {
                "defaultValues": [{"operator": "LASTDAYS", "values": [6]}]
            }
        }
    }
}
```



</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`NextXDays` / `NextXWeeks` / `NextXMonths` / `NextXQuarters` / `NextXYears` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
    "filterFields": {
        "SalesOrderDate": {
            "settings": {
                "defaultValues": [{"operator": "NEXTDAYS", "values": [6]}]
            }
        }
    }
}

```



</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`LastXDaysIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "LASTXDAYSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the last X days, including the current day.

</td>
</tr>
<tr>
<td valign="top">

`NextXDaysIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "NEXTXDAYSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the next X days, including the current day.

</td>
</tr>
<tr>
<td valign="top">

`LastXWeeksIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "LASTXWEEKSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the last X weeks, including the current day.

</td>
</tr>
<tr>
<td valign="top">

`NextXWeeksIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "NEXTXWEEKSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the next X weeks, including the current days.

</td>
</tr>
<tr>
<td valign="top">

`LastXMonthsIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "LASTXMONTHSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the last X months, including the current day.

</td>
</tr>
<tr>
<td valign="top">

`NextXMonthsIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "NEXTXMONTHSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the next X months, including the current day.

</td>
</tr>
<tr>
<td valign="top">

`LastXQuartersIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "LASTXQUARTERSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the last X quarters, including the current day.

</td>
</tr>
<tr>
<td valign="top">

`NextXQuartersIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "NEXTXQUARTERSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the next X quarters, including the current day.

</td>
</tr>
<tr>
<td valign="top">

`LastXYearsIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "LASTXYEARSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the last X years, including the current day.

</td>
</tr>
<tr>
<td valign="top">

`NextXYearsIncluded` 

</td>
<td valign="top">

```

"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "NEXTXYEARSINCLUDED", "values":[6]}]
         }
      }
   }
}

```



</td>
<td valign="top">

The range contains the next X years, including the current day.

</td>
</tr>
<tr>
<td valign="top">

`SpecificMonth`

``

</td>
<td valign="top">

```
"@com.sap.vocabularies.UI.v1.SelectionFields": {
   "filterFields": {
      "SalesOrderDate": {
         "settings": {
            "defaultValues" : [ {"operator": "SPECIFICMONTH", "values":[1]}]
         }
      }
   }

} 
```



</td>
<td valign="top">

The numeric assignment is zero \(for example, January is 0\)

</td>
</tr>
</table>

> ### Tip:  
> If the semantic filter field originates from a navigation entity set, specify the name of the filter field in the `"<navigationProperty>::<filterField>"` format. In the following code sample, `"SalesOrderDate"` comes from a navigation entity set where `"_Item"` is the name of the associated navigation property:
> 
> > ### Sample Code:  
> > `manifest.json`
> > 
> > ```
> > "@com.sap.vocabularies.UI.v1.SelectionFields": {
> > 
> >    "filterFields": {
> >       "_Item::SalesOrderDate": {
> >          "settings": {
> >             "defaultValues" : [ {"operator": "SPECIFICMONTH", "values":[1]}]
> >          }
> >       }
> >    }
> >  
> > }
> > ```

> ### Note:  
> You can't define default values as described in this section for `Edm.DateTime`-based fields.



## Excluding Certain Date Range Types

You can use the `operatorConfiguration` setting to include and exclude specific date range values. Applications can use this setting for more complex and detailed configuration.

> ### Example:  
> To remove `"TODAY"` from the date range, proceed as shown in the following sample code:
> 
> > ### Sample Code:  
> > ```
> > "filterFields": {
> >     "SalesOrderDate": {
> >        "settings": {
> >            "operatorConfiguration": [
> >                  {
> >                      "path": "key",
> >                       "equals": "TODAY",
> >                       "exclude": true
> >                   } // TODAY filter will be removed
> >             ]
> >        }
> >     }
> >  }
> > ```
> 
> The following screenshot shows the result:
> 
> ![](images/Date_Range_1_e0b551e.png)

> ### Example:  
> To include `"TODAY"` and exclude "Today -X/+Y Days", proceed as shown in the following sample code:
> 
> > ### Sample Code:  
> > ```
> > "filterFields": {
> >     "SalesOrderDate": {
> >        "settings": {
> >            "operatorConfiguration": [
> >                  {
> >                      "path": "key",
> >                       "equals": "TODAY",
> >                       "exclude": false
> >                   },
> >                   {
> >                     "path": "key",
> >                      "equals": "TODAYXYDAYS",
> >                      "exclude": true
> >                   }
> >             ]
> >        }
> >     }
> >  }
> > ```
> 
> The following screenshot shows the result:
> 
> ![](images/Date_Range_2_a9217ea.png)

The following list shows all supported operators for the `"exclude"` configuration:

-   `"DATE"`

-   `"FROM"`

-   `"TO"`

-   `"DATERANGE"`

-   `"TODAY"`

-   `"YESTERDAY"`

-   `"TOMORROW"`

-   `"TODAYFROMTO"`

-   `"LASTDAYS"`

-   `"NEXTDAYS"`

-   `"THISWEEK"`

-   `"LASTWEEK"`

-   `"LASTWEEKS"`

-   `"NEXTWEEK"`

-   `"NEXTWEEKS"`

-   `"SPECIFICMONTH"`

-   `"THISMONTH"`

-   `"LASTMONTH"`

-   `"LASTMONTHS"`

-   `"NEXTMONTH"`

-   `"NEXTMONTHS"`

-   `"THISQUARTER"`

-   `"LASTQUARTER"`

-   `"LASTQUARTERS"`

-   `"NEXTQUARTER"`

-   `"NEXTQUARTERS"`

-   `"QUARTER1"`

-   `"QUARTER2"`

-   `"QUARTER3"`

-   `"QUARTER4"`

-   `"THISYEAR"`

-   `"LASTYEAR"`

-   `"LASTYEARS"`

-   `"NEXTYEAR"`

-   `"NEXTYEARS"`

-   `"YEARTODATE"`

-   `"DATETOYEAR"`

-   `"Empty"`


> ### Note:  
> -   Excluding specific semantic operators is allowed only for `SingleRange`-based *Date* fields.
> 
> -   When you exclude an operator for a filter field that's based on a semantic date and comes from a navigation entity set, specify the `filterField` using the following format:
> 
>     ```
>     "<navigationProperty>::<propertyName>"
>     ```
> 
>     > ### Example:  
>     > If `"_Items"` is the navigation property and `"DispatchDate"` is the property, the `filterField` for which `"settings"` is defined is `"_Items::DispatchDate"`.



## Enabling Additional Date Range Operators

You can use additional date range operators for single range-based fields of type `Edm.Date` or `Edm.DateTimeOffset`. Using these operators, you can combine single value date operators, such as `TODAY` or `TOMORROW,` with the *FROM* or *TO* operations.

The following additional operators are available:

-   `"FROMTODAY"`

-   `"FROMTOMORROW"`

-   `"FROMYESTERDAY"`

-   `"FROMFIRSTDAYWEEK"`

-   `"FROMLASTDAYWEEK"`

-   `"FROMFIRSTDAYMONTH"`

-   `"FROMLASTDAYMONTH"`

-   `"FROMFIRSTDAYQUARTER"`

-   `"FROMLASTDAYQUARTER"`

-   `"FROMFIRSTDAYYEAR"`

-   `"FROMLASTDAYYEAR"`

-   `"TOTODAY"`

-   `"TOTOMORROW"`

-   `"TOYESTERDAY"`

-   `"TOFIRSTDAYWEEK"`

-   `"TOLASTDAYWEEK"`

-   `"TOFIRSTDAYMONTH"`

-   `"TOLASTDAYMONTH"`

-   `"TOFIRSTDAYQUARTER"`

-   `"TOLASTDAYQUARTER"`

-   `"TOLASTDAYYEAR"`


These additional semantic date operators aren't available by default. To enable them, extend the `manifest.json` file.

For list report page and analytical list page applications, configure the filter field in the `controlConfiguration` section, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "targets": {
>    "SalesOrderManageList": {
>       "options": {
>          "settings": {
>             "controlConfiguration": {
>                "@com.sap.vocabularies.UI.v1.SelectionFields": {
>                   "filterFields": {
>                      "SalesOrderDate": {
>                         "settings": {
>                            "operatorConfiguration": [
>                            {
>                               "path": "key",
>                               "equals": "FROMTODAY",
>                               "exclude": false // By default, "exclude" is set to true for all these additional date range operators and have to be explicitly set to false in case the operator needs to be enabled
>                            },
>                           {
>                              "path": "key",
>                              "equals": "TOYESTERDAY",
>                              "exclude": false
>                           }]
>                        }
>                     },
>                     …….
>                     …….
>                  }
> ```

For overview page applications, configure the filter field in the `sap.ovp.controlConfiguration` section, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>    "controlConfiguration": {
>       "@com.sap.vocabularies.UI.v1.SelectionFields": {
>          "filterFields": {
>             "SalesOrderDate": {
>                "settings": {
>                   "operatorConfiguration": [
>                      {
>                         "path": "key",
>                         "equals": "FROMTODAY",
>                         "exclude": false
>                      },
>                      {
>                         "path": "key",
>                         "equals": "TOYESTERDAY",
>                         "exclude": false
>                      }
>                   ]
>                }
>             }
>          }
>       }
>    }
> }
> ```

You can also use these additional semantic date range operators as default values for the filter fields.

> ### Note:  
> These operators aren't available when using the `FilterBar` building block. They're also not available as filters in the table or chart within the object page.



<a name="loiofef65d03d01a4b2baca28983a5449cf7__section_q5w_tgf_nmb"/>

## More Information

For more information about configuring filter bars on a list report page, see [Adapting the Filter Bar](adapting-the-filter-bar-609c39a.md).

For more information about configuring global filter on the overview page, see [Configuring the Global Filter on the Overview Page](configuring-the-global-filter-on-the-overview-page-73d9693.md).

