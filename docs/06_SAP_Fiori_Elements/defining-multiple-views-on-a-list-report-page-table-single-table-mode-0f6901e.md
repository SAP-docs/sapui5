<!-- loio0f6901e2a1d347a8acfec08cdf23c892 -->

# Defining Multiple Views on a List Report Page Table - Single Table Mode

You can define multiple views of a table and display them in single table mode. Users can switch between views using a segmented button.



> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Defining Multiple Views in a List Report Page Table - Single Table Mode](defining-multiple-views-in-a-list-report-page-table-single-table-mode-0d390fe.md).



<a name="loio0f6901e2a1d347a8acfec08cdf23c892__section_hnh_n53_fhc"/>

## Context

To define multiple views using single table mode, perform the following steps:



<a name="loio0f6901e2a1d347a8acfec08cdf23c892__section_xpb_p53_fhc"/>

## Procedure

1.  Add `SelectionVariants` to your annotations file.

    The following sample code shows how a `SelectionVariant` filters for items that cost a certain amount \(for example, at least 5,000 euros\):

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > 
    > <Annotation Term="UI.SelectionVariant" Qualifier="Expensive">
    >     <Record>
    >         <PropertyValue Property="Text" String="Expensive">
    >         </PropertyValue>
    >         <PropertyValue Property="SelectOptions">
    >             <Collection>
    >                 <Record Type="UI.SelectOptionType">
    >                     <PropertyValue Property="PropertyName"
    >                         PropertyPath="GrossAmount" />
    >                     <PropertyValue Property="Ranges">
    >                         <Collection>
    >                             <Record Type="UI.SelectionRangeType">
    >                                 <PropertyValue Property="Option"
    >                                     EnumMember="UI.SelectionRangeOptionType/GE" />
    >                                 <PropertyValue Property="Low" String="5000" />
    >                             </Record>
    >                         </Collection>
    >                     </PropertyValue>
    >                 </Record>
    >             </Collection>
    >         </PropertyValue>
    >     </Record>
    > </Annotation>
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
    > 
    > @UI.SelectionVariant: [
    >   {
    >     text: 'Expensive',
    >     qualifier: 'Expensive'
    >   }
    > ]
    > annotate view STTA_C_MP_Product with {
    > 
    > }
    > ```

    > ### Note:  
    > For the `SelectionVariant`, the following applies:
    > 
    > -   The `FilterExpression` of the `SelectionVariantType` is not supported.
    > 
    > -   The following `SelectionRangeOptionTypes` are supported without any wildcards, for example, \*, ?, …:
    > 
    >     -   EQ: Equal to
    > 
    >     -   BT: Between
    > 
    >     -   LE: Less than or equal to
    > 
    >     -   GE: Greater than or equal to
    > 
    >     -   NE: Not equal to
    > 
    >     -   GT: Greater than
    > 
    >     -   LT: Less than
    > 
    > 
    > 
    > For the `PresentationVariant`, `SortOrders` is supported.

2.  Extend the `manifest.json` file to switch on the multiple view feature and link to the variants you have added to your annotations. You do this in the list report page settings section under `sap.ui.generic.app`. Use `quickVariantSelection` for single table mode.

    -   The `variants` section \(lines 11-20\) contains a set of entries that point to the variants defined in the annotations.

    -   For each entry under `variants` \(for example, lines 12-15\), define an `annotationPath` \(line 14\) for a specific variant.

    -   Provide a key entry \(line 13\) that is used for initializing the corresponding `SegmentedButton` item. This is a mandatory entry.


    ```
    
    1 ...
    2 "sap.ui.generic.app": {
    3     "pages": [
    4        {
    5            "entitySet": "C_STTA_SalesOrder_WD_20",
    6            "component": {
    7                "name": "sap.suite.ui.generic.template.ListReport",
    8                "list": true,
    9                "settings": {
    10                    "quickVariantSelection": {
    11                        "variants": {
    12                            "0": {
    13                                "key": "_tab1",
    14                                "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#Expensive"
    15                            },
    16                            "1": {
    17                                "key": "_tab2",
    18                                "annotationPath": "com.sap.vocabularies.UI.v1.SelectionPresentationVariant#Cheap"
    19                            }
    20                        }
    21                    }
    22                    ...
    ```

    > ### Note:  
    > The `PresentationVariant` part of the `SelectionPresentationVariant` \(as used in the above example\) is not considered. The `SelectionPresentationVariant` is only used to find the `SelectionVariant` and the filters defined within it.




<a name="loio0f6901e2a1d347a8acfec08cdf23c892__section_hyx_1v3_fhc"/>

## Additional Examples



### `SelectionVariant` with a Qualifier

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.SelectionVariant" Qualifier="Expensive">
>      <Record>
>           <PropertyValue Property="Text" String="{@i18n>@Expensive}">
>           </PropertyValue>
>           <PropertyValue Property="SelectOptions">
>                <Collection>
>                     <Record Type="UI.SelectOptionType">
>                          <PropertyValue Property="PropertyName" PropertyPath="GrossAmount" />
>                          <PropertyValue Property="Ranges">
>                               <Collection>
>                                    <Record Type="UI.SelectionRangeType">
>                                         <PropertyValue Property="Sign" EnumMember="UI.SelectionRangeSignType/E"/>
>                                         <PropertyValue Property="Option" EnumMember="UI.SelectionRangeOptionType/LT" />
>                                         <PropertyValue Property="Low" String="5000" />
>                                    </Record>
>                               </Collection>
>                          </PropertyValue>
>                     </Record>
>                </Collection>
>           </PropertyValue>
>      </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "settings": {
>           "smartVariantManagement": true,
>           "quickVariantSelection": {
>                "showCounts": true,
>                "variants": {
>                     "0": {
>                          "key": "_tab1",
>                          "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#Expensive"
>                     },
>                     "1": {
>                          "key": "_tab2",
>                          "annotationPath": "com.sap.vocabularies.UI.v1.SelectionPresentationVariant#Cheap"
>                     }
>                }
>           }
>      }
> 
> 
> ```



### `SelectionVariant` without a Qualifier

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.SelectionVariant" >
>      <Record>
>           <PropertyValue Property="Text" String="{@i18n>@Expensive}">
>           </PropertyValue>
>           <PropertyValue Property="SelectOptions">
>                <Collection>
>                      <Record Type="UI.SelectOptionType">
>                           <PropertyValue Property="PropertyName" PropertyPath="GrossAmount" />
>                           <PropertyValue Property="Ranges">
>                                <Collection>
>                                     <Record Type="UI.SelectionRangeType">
>                                          <PropertyValue Property="Sign" EnumMember="UI.SelectionRangeSignType/E"/>
>                                          <PropertyValue Property="Option" EnumMember="UI.SelectionRangeOptionType/LT" />
>                                          <PropertyValue Property="Low" String="5000" />
>                                     </Record>
>                                </Collection>
>                           </PropertyValue>
>                      </Record>
>                 </Collection>
>            </PropertyValue>
>       </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "settings": {
>      "smartVariantManagement": true,
>      "quickVariantSelection": {
>           "showCounts": true,
>           "variants": {
>                "0": {
>                "key": "_tab1",
>                "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant"
>                },
>                "1": {
>                     "key": "_tab2",
>                     "annotationPath": "com.sap.vocabularies.UI.v1.SelectionPresentationVariant#Cheap"
>                }
>           }
>      }
> }
> 
> 
> ```



### `SelectionPresentationVariant` with a Qualifier

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.SelectionPresentationVariant"Qualifier="Cheap">
>      <Record>
>           <PropertyValue Property="Text" String="{@i18n>@Cheap}">
>           </PropertyValue>
>           <PropertyValue Property="SelectionVariant">
>                <Record>
>                     <PropertyValue Property="Text" String="Cheap">
>                     </PropertyValue>
>                     <PropertyValue Property="SelectOptions">
>                          <Collection>
>                               <Record Type="UI.SelectOptionType">
>                                    <PropertyValue Property="PropertyName"
>                                                   PropertyPath="GrossAmount" />
>                                    <PropertyValue Property="Ranges">
>                                         <Collection>
>                                              <Record Type="UI.SelectionRangeType">
>                                                   <PropertyValue Property="Option"
>                                                                  EnumMember="UI.SelectionRangeOptionType/LT" />
>                                                   <PropertyValue Property="Low" String="5000" />
>                                              </Record>
>                                         </Collection>
>                                    </PropertyValue>
>                               </Record>
>                          </Collection>
>                     </PropertyValue>
>                </Record>
>           </PropertyValue>
>           <PropertyValue Property="PresentationVariant">
>                <Record>
>                     <PropertyValue Property="Visualizations">
>                          <Collection>
>                               <AnnotationPath>@UI.LineItem#Reduced</AnnotationPath>
>                          </Collection>
>                     </PropertyValue>
>                     <PropertyValue Property="SortOrder">
>                          <Collection>
>                               <Record>
>                                    <PropertyValue Property="Property"
>                                                   PropertyPath="GrossAmount" />
>                                    <PropertyValue Property="Descending" Bool="false" />
>                               </Record>
>                          </Collection>
>                     </PropertyValue>
>                </Record>
>           </PropertyValue>
>      </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "settings": {
>      "smartVariantManagement": true,
>      "quickVariantSelection": {
>           "showCounts": true,
>           "variants": {
>                "0": {
>                     "key": "_tab1",
>                     "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#Expensive"
>                },
>                "1": {
>                     "key": "_tab2",
>                     "annotationPath": "com.sap.vocabularies.UI.v1.SelectionPresentationVariant#Cheap"
>                }
>           }
>      }
> }
> 
> 
> ```



### `SelectionPresentationVariant` without a Qualifier

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.SelectionPresentationVariant">
>      <Record>
>           <PropertyValue Property="Text" String="{@i18n>@Cheap}">
>           </PropertyValue>
>           <PropertyValue Property="SelectionVariant">
>                <Record>
>                     <PropertyValue Property="Text" String="Cheap">
>                     </PropertyValue>
>                     <PropertyValue Property="SelectOptions">
>                          <Collection>
>                               <Record Type="UI.SelectOptionType">
>                                    <PropertyValue Property="PropertyName"
>                                                   PropertyPath="GrossAmount" />
>                                    <PropertyValue Property="Ranges">
>                                         <Collection>
>                                              <Record Type="UI.SelectionRangeType">
>                                                   <PropertyValue Property="Option"
>                                                                  EnumMember="UI.SelectionRangeOptionType/LT" />
>                                                   <PropertyValue Property="Low" String="5000" />
>                                              </Record>
>                                         </Collection>
>                                    </PropertyValue>
>                               </Record>
>                          </Collection>
>                     </PropertyValue>
>                </Record>
>           </PropertyValue>
>           <PropertyValue Property="PresentationVariant">
>                <Record>
>                     <PropertyValue Property="Visualizations">
>                          <Collection>
>                               <AnnotationPath>@UI.LineItem#Reduced</AnnotationPath>
>                          </Collection>
>                     </PropertyValue>
>                     <PropertyValue Property="SortOrder">
>                          <Collection>
>                               <Record>
>                                    <PropertyValue Property="Property"
>                                                   PropertyPath="GrossAmount" />
>                                    <PropertyValue Property="Descending" Bool="false" />
>                               </Record>
>                          </Collection>
>                     </PropertyValue>
>                </Record>
>           </PropertyValue>
>      </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "settings": {
>      "smartVariantManagement": true,
>      "quickVariantSelection": {
>           "showCounts": true,
>           "variants": {
>                "0": {
>                     "key": "_tab1",
>                     "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant"
>                     },
>                "1": {
>                     "key": "_tab2",
>                     "annotationPath": "com.sap.vocabularies.UI.v1.SelectionPresentationVariant"
>                     }
>           }
>      }
> }
> 
> 
> ```

**Related Information**  


[Adding Segmented Buttons to a Table Toolbar](adding-segmented-buttons-to-a-table-toolbar-b0fb117.md "You can add segmented buttons to the toolbar to enable switching between the table content using a selection variant annotation.")

