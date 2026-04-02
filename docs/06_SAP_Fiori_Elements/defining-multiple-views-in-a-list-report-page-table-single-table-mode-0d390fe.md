<!-- loio0d390fed360c4c58a0f0619338938de1 -->

# Defining Multiple Views in a List Report Page Table - Single Table Mode

You can define multiple views of a table and display them in single table mode. Users can switch between views using a segmented button.



<a name="loio0d390fed360c4c58a0f0619338938de1__context_pg4_gvx_cmb"/>

## Context

To define multiple views using single table mode, perform the following steps:



<a name="loio0d390fed360c4c58a0f0619338938de1__steps_qg4_gvx_cmb"/>

## Procedure

1.  Add `SelectionVariants` to your annotations file.

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Annotations Target="com.c_salesordermanage_sd.SalesOrderManage">
    >      <Annotation Term="UI.SelectionVariant" Qualifier="Completed">
    >           <Record Type="UI.SelectionVariantType">
    >                <PropertyValue Property="SelectOptions">
    >                     <Collection>
    >                          <Record Type="UI.SelectOptionType">
    >                               <PropertyValue Property="PropertyName" PropertyPath="OverallSDProcessStatus" />
    >                               <PropertyValue Property="Ranges">
    >                                    <Collection>
    >                                         <Record Type="UI.SelectionRangeType">
    >                                              <PropertyValue Property="Option" EnumMember="UI.SelectionRangeOptionType/BT" />
    >                                              <PropertyValue Property="Low" String="A" />
    >                                              <PropertyValue Property="High" String="D" />
    >                                         </Record>
    >                                         <Record Type="UI.SelectionRangeType">
    >                                              <PropertyValue Property="Option" EnumMember="UI.SelectionRangeOptionType/BT" />
    >                                              <PropertyValue Property="Low" String="B" />
    >                                              <PropertyValue Property="High" String="C" />
    >                                         </Record>
    >                                    </Collection>
    >                               </PropertyValue>
    >                          </Record>
    >                     </Collection>
    >                </PropertyValue>
    >                <PropertyValue Property="Text" String="completed (2 Ranges)" />
    >           </Record>
    >      </Annotation>
    >      <Annotation Term="UI.SelectionVariant" Qualifier="InProcess">
    >           <Record Type="UI.SelectionVariantType">
    >                <PropertyValue Property="SelectOptions">
    >                     <Collection>
    >                          <Record Type="UI.SelectOptionType">
    >                               <PropertyValue Property="PropertyName" PropertyPath="OverallSDProcessStatus" />
    >                               <PropertyValue Property="Ranges">
    >                                    <Collection>
    >                                         <Record Type="UI.SelectionRangeType">
    >                                              <PropertyValue Property="Option" EnumMember="UI.SelectionRangeOptionType/EQ" />
    >                                              <PropertyValue Property="Low" String="B" />
    >                                         </Record>
    >                                    </Collection>
    >                               </PropertyValue>
    >                          </Record>
    >                     </Collection>
    >                </PropertyValue>
    >                <PropertyValue Property="Text" String="In Process" />
    >           </Record>
    >      </Annotation>
    > </Annotations>
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
    > 
    > @UI.SelectionVariant: [
    >   {
    >     text: 'completed (2 Ranges)',
    >     qualifier: 'Completed'
    >   },
    >   {
    >     text: 'In Process',
    >     qualifier: 'InProcess'
    >   }
    > ]
    > annotate view SALESORDERMANAGE with {
    > 
    > }
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > annotate com.c_salesordermanage_sd.SalesOrderManage with @(
    >   UI.SelectionVariant #Completed : {
    >     $Type : 'UI.SelectionVariantType',
    >     SelectOptions : [
    >         {
    >             $Type : 'UI.SelectOptionType',
    >             PropertyName : OverallSDProcessStatus,
    >             Ranges : [
    >                 {
    >                     $Type : 'UI.SelectionRangeType',
    >                     Option : #BT,
    >                     Low : 'A',
    >                     High : 'D'
    >                 },
    >                 {
    >                     $Type : 'UI.SelectionRangeType',
    >                     Option : #BT,
    >                     Low : 'B',
    >                     High : 'C'
    >                 }
    >             ]
    >         }
    >     ],
    >     Text : 'completed (2 Ranges)'
    >   },
    >   UI.SelectionVariant #InProcess : {
    >     $Type : 'UI.SelectionVariantType',
    >     SelectOptions : [
    >         {
    >             $Type : 'UI.SelectOptionType',
    >             PropertyName : OverallSDProcessStatus,
    >             Ranges : [
    >                 {
    >                     $Type : 'UI.SelectionRangeType',
    >                     Option : #EQ,
    >                     Low : 'B'
    >                 }
    >             ]
    >         }
    >     ],
    >     Text : 'In Process'
    >   },
    > );
    > 
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

2.  Extend the `manifest.json` file to switch on the multiple view feature and link to the variants you have added to your annotations. You do this in the list report page settings section under *routing* \> *targets*. In the `LineItem` control configuration, use `quickVariantSelection` for single table mode.

    -   The `paths` array contains a set of entries that point to the variants defined in the annotations.

    -   For each entry under `paths` \(for example, lines 15-24\), define an `annotationPath` for a specific variant.

    -   For performance reasons, by default, no counts are displayed in the `SegmentedButton` items. To enable counts, you have the option of adding an entry `showCounts: true` under `quickVariantSelection`. However, consider that additional `$count` requests can impact the performance.

    -   You can hide the title to show only the segmented buttons. To do so, use the `hideTableTitle` key. Enable this only if the title of your selection variants are explicit enough.


    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > 1"SalesOrderManageList": {
    > 2   "type": "Component",
    > 3   "id": "SalesOrderManageList",
    > 4   "name": "sap.fe.templates.ListReport",
    > 5   "options": {
    > 6      "settings": {
    > 7         "contextPath": "/SalesOrderManage",
    > 8         "controlConfiguration": {
    > 9            "@com.sap.vocabularies.UI.v1.LineItem": {
    > 10               "tableSettings": {
    > 11                  "type": "ResponsiveTable",
    > 12                  "quickVariantSelection": {
    > 13                     "paths": [
    > 14                        {
    > 15                           "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#Open"
    > 16                        },
    > 17                        {
    > 18                           "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#Completed"
    > 19                        },
    > 20                        {
    > 21                           "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#NotRelevant"
    > 22                        },
    > 23                        {
    > 24                           "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#InProcess"
    > 25                        }
    > 26                     ],
    > 27                     "hideTableTitle": true,
    > 28                     "showCounts": true
    > 29                  }
    > 30               }
    > 31            }
    > 32         },
    > 33         ...
    > 34  }}}
    > ```

    > ### Note:  
    > If `showCounts` is set to `true`, the segmented buttons show the count next to the button label and no count is shown next to the table title.
    > 
    > If `showCounts` is set to `false`, the count isn't displayed next to the button label and the table title.

      
      
    **Multiple Views in a List Report Page Table - Single Table Mode**

    ![](images/Multiple_Views_on_a_List_Report_Table_-_Single_Table_Mode_975a002.png "Multiple Views
                                in
                                a
                                List Report
                                Page
                                Table - Single Table Mode")


**Related Information**  


[Adding Segmented Buttons to a Table Toolbar](adding-segmented-buttons-to-a-table-toolbar-5532c89.md "You can add segmented buttons to the toolbar to enable switching between the table content using a selection variant annotation.")

<a name="concept_my4_l3b_c3c"/>

<!-- concept\_my4\_l3b\_c3c -->

## 

> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Defining Multiple Views on a List Report Page Table - Single Table Mode](defining-multiple-views-on-a-list-report-page-table-single-table-mode-0f6901e.md).

