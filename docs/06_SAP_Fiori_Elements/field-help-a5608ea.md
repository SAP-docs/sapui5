<!-- loioa5608eabcc184aee99e1a7d88b28816c -->

# Field Help

A field can be associated with a helper control, depending on how the field is configured.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

Fields can have an associated value help, or a drop-down list for several fixed values, for example. Fields can also have a date or date-time picker. This topic provides information about the supported associations and how applications can enable them.



<a name="loioa5608eabcc184aee99e1a7d88b28816c__section_crm_mzx_q4b"/>

## Value Help

Value help allow end users to either select a value from a value help entity associated with the field or specify a condition to look up a suitable value within that entity.



### Title of the Value Help Dialog

If the `DataField` annotation for the field includes a `label` property, it is used as the title of the value help dialog. Otherwise, the label annotation of the property is used.

For context-dependent value help, the label defined in the `ValueList` is used. If it is not defined, the `label` property is used. If it is not found, the `label` property in the `UI.DataField` annotation is used.



### Using `ValueList` Annotations

Direct `ValueList` annotations under the property level annotations:

> ### Sample Code:  
> ```xml
> <Annotations Target="Self.ArtistsType/CountryOfOrigin">
>     <Annotation Term="Common.ValueList">
>         <Record>
>             <PropertyValue Property="CollectionPath" String="myEntityName"/>
>             <PropertyValue Property="SearchSupported" Bool="true"/>
>             <PropertyValue Property="Parameters">
>                 <Collection>
>                     <Record Type="Common.ValueListParameterInOut">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="CountryOfOrigin"/>
>                         <PropertyValue Property="ValueListProperty" String="CountryCode"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterDisplayOnly">
>                         <PropertyValue Property="ValueListProperty" String="CountryCode_Text"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterDisplayOnly">
>                         <PropertyValue Property="ValueListProperty" String="CountryIndicator"/>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Consumption.valueHelpDefinition:
>         [{
>           entity :{
>             name    : ' myEntityName', // ValueList CollectionPath (The collection path points to consumption VH entity and will have the ValueListParameterDisplayOnly fields within it)
>             element : ' CountryCode' // ValueListProperty of ValueListParameterInOut           
>           },
>           label  : 'mylabel', // ValueList label
>           qualifier: 'test'
>           }]
> CountryOfOrigin, // LocalDataProperty of ValueListParameterInOut
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> entity Artist {
>             CountryOfOrigin                   : String(40)           @(Common : {
>            Label        : 'Country',
>             ValueList    : {
>                 CollectionPath : 'myEntityName',
>                 Parameters     : [
>                 {
>                     $Type             : 'Common.ValueListParameterInOut',
>                     LocalDataProperty : CountryOfOrigin,
>                     ValueListProperty : 'CountryCode'
>                 },
>                 {
>                     $Type             : 'Common.ValueListParameterDisplayOnly',
>                     ValueListProperty : 'CountryCode_Text'
>                 },
>                 {
>                     $Type             : 'Common.ValueListParameterDisplayOnly',
>                     ValueListProperty : 'CountryIndicator'
>                 }
>                 ]
>             }
>         });
> 
> ```



### Using `ValueListReference` Annotations

`ValueListReference` annotations pointing to another metadata source \(service\) as a reference for the value help:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="Self.ArtistsType/CountryOfOrigin">
>     <Annotation Term="Common.ValueListReferences">
>         <Collection>
>             <String>
>                 ../../../../srvd_f4/sap/myentityname/0001;ps='srvd-sadl_gw_appmusicdr_definition-0001';va='com.sap.gateway.srvd.sadl_gw_appmusicdr_definition.v0001.et-c_mdbu_v4_artisttp.countryoforigin'/$metadata
>             </String>
>         </Collection>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

The string here is the path relative to the main metadata file containing these `ValueListReference` annotations.

`ValueListMapping` annotations in the referenced metadata file:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="ParentService.ArtistsType/CountryOfOrigin">
>     <Annotation Term="Common.ValueListMapping">
>         <Record>
>             <PropertyValue Property="Label" String="Country Code Value Help"/>
>             <PropertyValue Property="CollectionPath" String="myEntityName"/>
>             <PropertyValue Property="Parameters">
>                 <Collection>
>                     <Record Type="Common.ValueListParameterInOut">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="CountryOfOrigin"/>
>                         <PropertyValue Property="ValueListProperty" String="CountryCode"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterDisplayOnly">
>                         <PropertyValue Property="ValueListProperty" String="CountryCode_Text"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterDisplayOnly">
>                         <PropertyValue Property="ValueListProperty" String="CountryIndicator"/>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

The `"ParentService"` in the annotation sample is an alias defined for the main service from where the annotation sample \(a\) was picked.



### Using the `Text` and `TextArrangement` Annotation

The field can show the value or its textual description, or it can show the value and the textual description together.

You must annotate the `Common.Text` on the field to define the textual description.

The value help itself already has a definition with a collection path, but you also need to add a `Text` annotation to the collection path.

You must annotate the `Common.TextArrangement` to specify the display format. Otherwise, the default display format is `#TextFirst` and shows the description together with the value, as in *Euro \(EUR\)*. Other display formats are listed further in this subsection.

> ### Example:  
> If you use the value help for `Currencies` on the `currency_code` property with a `Text` and a `TextArrangement` definition, the `currency_code` field displays a value help that is sourced from the `Currencies` entity. The code is the key field. Note the following:
> 
> -   Using `Common.Text` associates the descriptive text \(name\) from the `Currencies` entity with the key \(`currency_code`\) in the `Products` entity. This ensures that whenever `currency_code` is displayed, it can be enriched with its corresponding name.
> 
> -   Using `Common.TextArrangement` specifies the display format for the key value and its description. The code samples below show the display format `#TextFirst`, which is the default.
> 
> -   Using `CollectionPath` in the value help definition lets you point to the `Currencies` entity. But you also need to add a `TextArrangement` annotation to the collection path.
> 
> 
> The interplay of these annotations is shown in the following sample code:
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > <!-- Value Help with Text and TextArrangement -->
> > <Annotations Target="sap.capire.officesupplies.CatalogAdminService.Products/currency_code">
> >      <Annotation Term="Common.Text" Path="currency/name">
> >           <Annotation Term="UI.TextArrangement" EnumMember="UI.TextArrangementType/TextFirst"/>
> >      </Annotation>
> >      <Annotation Term="Common.ValueList">
> >           <Record Type="Common.ValueListType">
> >                <PropertyValue Property="CollectionPath" String="Currencies"/>
> >                <PropertyValue Property="Label" String="Währung"/>
> >                <PropertyValue Property="Parameters">
> >                     <Collection>
> >                          <Record Type="Common.ValueListParameterInOut">
> >                               <PropertyValue Property="LocalDataProperty" PropertyPath="currency_code"/>
> >                               <PropertyValue Property="ValueListProperty" String="code"/>
> >                          </Record>
> >                          <Record Type="Common.ValueListParameterDisplayOnly">
> >                               <PropertyValue Property="ValueListProperty" String="name"/>
> >                          </Record>
> >                     </Collection>
> >                </PropertyValue>
> >           </Record>
> >      </Annotation>
> >      <Annotation Term="Common.Label" String="Währung"/>
> >      <Annotation Term="Core.Description" String="Währungscode gemäß ISO 4217"/>
> > </Annotations>
> > <!-- Annotate Text and TextArrangement to key property of the enity which is defined as CollectionPath in the value help -->
> > <Annotations Target="sap.capire.officesupplies.CatalogAdminService.Currencies/code">
> >      <Annotation Term="Common.Text" Path="name">
> >           <Annotation Term="UI.TextArrangement" EnumMember="UI.TextArrangementType/TextFirst"/>
> >      </Annotation>
> >      <Annotation Term="Common.Label" String="Währungscode"/>
> > </Annotations>
> > ```
> 
> > ### Sample Code:  
> > ABAP CDS Annotation
> > 
> > ```
> > <!-- ABAP CDS Annotation: value help for Currencies (on property currency_code) with Text and TextArrangement -->
> > annotate view PRODUCTS with {
> >      @Consumption.valueHelpDefinition:
> >      [{
> >           entity :{
> >                name : 'Currencies',
> >                element : 'code'
> >           },
> >           label : 'Currency'
> >      }]
> > 
> >      @ObjectModel: {
> >           text: {
> >                element: [ 'name' ]
> >           }
> >      }
> >      @UI.textArrangement: #TEXT_First
> >      currency_code;
> > }
> > 
> > <!-- Annotate Text and TextArrangement to key property of the enity which is defined as CollectionPath in the value help -->
> > annotate view Currencies with {
> >      @ObjectModel.representativeKey: 'code'
> >      @UI.selectionField: true
> >      @ObjectModel.text: {
> >           element: 'name'
> >      }
> >      @UI.textArrangement: #TEXT_FIRST
> >      code;
> >      name;
> > };
> > ```
> 
> > ### Sample Code:  
> > CAP CDS Annotation
> > 
> > ```
> > <!-- Value Help with Text and TextArrangement -->
> > annotate sap.fe.officesupplies.CatalogAdminService.Products with {
> >      @Common.Label : 'Currency'
> >      @Common : {
> >           Text : currency.name,
> >           TextArrangement : #TextOnly
> >      }
> >      @Common.ValueListWithFixedValues : true
> >      @Common.ValueList : {
> >           $Type : 'Common.ValueListType',
> >           Label : 'Currency',
> >           CollectionPath : 'Currencies',
> >           Parameters : [
> >                {
> >                     $Type : 'Common.ValueListParameterInOut',
> >                     LocalDataProperty : currency_code,
> >                     ValueListProperty : 'code'
> >                },
> >                {
> >                     $Type : 'Common.ValueListParameterDisplayOnly',
> >                     ValueListProperty : 'name'
> >                }
> >           ]
> >      }
> >      @Core.Description : 'A currency code as specified in ISO 4217'
> >      currency_code
> > };
> > <!-- Annotate Text and TextArrangement to key property of the enity which is defined as CollectionPath in the value help-->
> > annotate Currencies with {
> >      code @(Common: {
> >           Text : name,
> >           TextArrangement: #TextFirst
> >      });
> > }
> > ```

You can use the `Common.TextArrangement` annotation to configure the display format of a table column of the value help dialog and a value help with a dropdown list \(`ValueListWithFixedValues`\). The following options are available:

**Value Help with a Dialog and a Dropdown List**


<table>
<tr>
<th valign="top">

`Text`

</th>
<th valign="top">

`TextArrangement`

</th>
<th valign="top">

Display Format in a Dialog

</th>
<th valign="top">

Display Format in a Dropdown List

</th>
</tr>
<tr>
<td valign="top">

not annotated

</td>
<td valign="top">

not annotated

</td>
<td valign="top">

Value

</td>
<td valign="top">

Value

</td>
</tr>
<tr>
<td valign="top">

annotated

</td>
<td valign="top">

not annotated

</td>
<td valign="top">

Value

</td>
<td valign="top">

Description Value

</td>
</tr>
<tr>
<td valign="top">

annotated

</td>
<td valign="top">

`TextFirst`

</td>
<td valign="top">

Description Value

</td>
<td valign="top">

Description Value

</td>
</tr>
<tr>
<td valign="top">

annotated

</td>
<td valign="top">

`TextLast`

</td>
<td valign="top">

Value Description

</td>
<td valign="top">

Value Description

</td>
</tr>
<tr>
<td valign="top">

annotated

</td>
<td valign="top">

`TextSeparate`

</td>
<td valign="top">

Value

</td>
<td valign="top">

Value

</td>
</tr>
<tr>
<td valign="top">

annotated

</td>
<td valign="top">

`TextOnly`

</td>
<td valign="top">

Description

</td>
<td valign="top">

Description

</td>
</tr>
</table>

> ### Tip:  
> The system automatically excludes a column with the `Description` if the `Description` is already displayed in another column that uses one of the following text arrangements:
> 
> -   `TextFirst`
> 
> -   `TestLast`
> 
> -   `TextOnly`

> ### Note:  
> Consider the following when using a text arrangement annotation in a value help:
> 
> -   The `TextArrangement` of the value help entity set is used to determine the display of the fields that show up in the columns of the value help dialog. The `TextArrangement` specified at property level within the value help entity set takes precedence over the one defined at entity set level.
> 
> -   The `TextArrangement` annotation `#TextOnly` is supported in value help tables \(that is, in the value help dialog and for the type-ahead feature\). Other `TextArrangement` annotations like `#TextFirst`, `#TextLast`, or `#TextSeparate` are not considered. Combo boxes also support `#TextFirst` and `#TextLast`.
> 
> -   A separate text column is ignored if the text annotation is already used in another column using the `TextArrangement`.

**Best Practices for Value Help for `Edm.Guid`-Type Fields**

For `Edm.Guid`-type fields, you must not define the `Common.Text` annotation with the description path and the `Common.TextArrangement` with the `TextOnly` display format. Instead, annotate the `Common.ExternalID` with the description path, as shown in the following example:

> ### Sample Code:  
> Using the `Common.ExternalID` Annotation
> 
> ```
>     category @Common : {
>         //Text : category.name,
>         //TextArrangement : #TextOnly,
>         ExternalID : category.name, //or readable identifier
>         FieldControl : #Mandatory,
>         ValueList : {
>             $Type : 'Common.ValueListType',
>             CollectionPath : 'Categories',
>             Label : '{i18n>Categories}',
>             Parameters : [
>                 {
>                     $Type : 'Common.ValueListParameterInOut',
>                     LocalDataProperty : category_ID,
>                     ValueListProperty : 'ID',
>                 }
>                 ,
>                 {
>                     $Type : 'Common.ValueListParameterDisplayOnly',
>                     ValueListProperty : 'name',
>                 },
>             ],
>         },
>     };
> ```

You can explore and work with the coding yourself. Check out our live example in the flexible programming model explorer at [Field - Format Options](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/field/fieldFormatOptions).

For more information, see [Further Features of the Field](further-features-of-the-field-f49a0f7.md).



### Filter Fields Within the Value Help Dialog

Use the `SelectionFields` annotation on the entity of the value help to define the filter fields that are to be displayed in the filter panel of the value help dialog. Application developers must ensure that all relevant fields are part of the `SelectionFields`.

By default, the filter bar is collapsed. If one of the following conditions is met, the filter bar is expanded when the value help is opened:

-   if at least one filter field is mandatory

-   if the entity set of the value help is not search-enabled

-   if the data isn't loaded by default, which happens when the value list annotation `FetchedValues` is set to 2


> ### Note:  
> If no `SelectionFields` are annotated on the entity of the value help, all properties of the entity are displayed as filter fields. If there are no filterable fields \(see [Filter Restrictions](https://github.com/oasis-tcs/odata-vocabularies/blob/-/vocabularies/Org.OData.Capabilities.V1.xml#L430)\) within the value help entity, then the filter panel isn't visible.

**Help Icon for Fields Within the Filter Panel**

Filter fields always get a value help icon ‒ irrespective of whether a value list annotation is defined or not. This default value help icon opens up the value help dialog with only the *Define Conditions* tab. If the value list annotation is defined, then the value help dialog also contains the *Select from List* tab. If a `"ValueListWithFixedValues"` annotation is defined, then a drop-down menu is provided for the filter field instead of the value help icon. Similarly, a date picker is provided instead of the value help icon if the filter field is a date-based field with a single value.

> ### Note:  
> -   The *Define Conditions* tab is not visible for filter fields marked with `"AllowedExpressions : 'SingleValue'"` or `"AllowedExpressions : 'MultiValue'"`.
> 
> -   The *Select from List* tab only appears if, for the filter field, at least one of the value help annotations described above is found.

**Filter Operators**

The filter operators offered within the value help dialog \(under the *Define Conditions* tab\) can be restricted according to the [Filter Expression Restrictions](https://github.com/oasis-tcs/odata-vocabularies/blob/-/vocabularies/Org.OData.Capabilities.V1.md#FilterExpressionType).

For each filter expression type, the operators shown in the value help dialog depend on the base type of the property \(`String`, `Date`, `DateTime`, `Time`, `Boolean`, `Unit`, `Numeric`\). For filter fields with no defined filter expression type, or if it is incompatible with the base type, the complete default set of operators for the respective base type is used.

For `Date` and `DateTime` fields that have the filter expression type "Single Value" instead of the filter conditions dialog, a `Date` or `DateTime` picker is shown directly in the filter field.

> ### Note:  
> For a `Date` or `DateTime` field. value help is only available for fields marked with the `MultipleValue` or `MultipleRange` filter restrictions. Value help is not available for a `Date` field that is marked with `SingleValue` or `SingleRange`.

For more information about filter restrictions, see [Configuring Filter Fields](configuring-filter-fields-f5dcb29.md).



### Search Field Within a Value Help Dialog

You can control the visibility of the search field within a value help dialog by using the `Searchable` annotation set for the entity set of the value help.

> ### Sample Code:  
> ```
> annotate Customer with @(Capabilities.SearchRestrictions : {
>     Searchable : true
> });
> ```

By default, the entity set of a value help is searchable.

> ### Tip:  
> If a field has a `SearchRestriction` annotation with `Searchable : false`, no type-ahead is available for the field.



### Controlling the Columns to be Displayed in the Type-Ahead List of a Value Help Field

Application developers can control the number of columns shown in the type-ahead list of a value help field by using the `Importance` annotation on a parameter of the value list. Only those columns that are annotated with `"@Importance":#High` are shown. If there is no `"Importance"="High"` annotation, the number of columns that are shown corresponds to the number in the value help dialog.

> ### Sample Code:  
> Controlling the Column Number
> 
> ```
> ValueList             : {
>     Label          : 'Sold-to Party',
>     CollectionPath : 'Customer',
>     Parameters     : [
>         {
>             $Type             : 'Common.ValueListParameterInOut',
>             LocalDataProperty : SoldToParty,
>             ValueListProperty : 'Customer',
>             "@UI.Importance" : #High
>         },
>         {
>             $Type             : 'Common.ValueListParameterDisplayOnly',
>             ValueListProperty : 'CustomerName',
>             "@UI.Importance" : #High
>         },
> ...
> ```



### Sorting Within Value Help Dialogs and Dropdown Lists

A default sorting mechanism is applied to the first column of the value help table, as well as to the dropdown list. Text-arrangement annotations for `TextOnly` are also taken into account: If the first column has a `TextOnly` annotation, the sorting is applied to the column to which the text arrangement refers.

You can change the sorting of the table using the `UI.PresentationVariant`.

> ### Sample Code:  
> `UI.PresentationVariant`
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.SalesOrderItem/Material">
>     <Annotation Term="Common.FieldControl" Path="fieldControlType_item"/>
>     <Annotation Term="Common.IsUpperCase" Bool="true"/>
>     <Annotation Term="Common.Label" String="Material"/>
>     <Annotation Term="Common.Text" Path="_Material/Material_Text"/>
>     <Annotation Term="Common.ValueList">
>         <Record Type="Common.ValueListType">
>             <PropertyValue Property="CollectionPath" String="C_MaterialBySlsOrgDistrChnl"/>
>             <PropertyValue Property="Label" String="Materials for Manage Sales Order"/>
>             <PropertyValue Property="Parameters">
>                 <Collection>
>                     <Record Type="Common.ValueListParameterInOut">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="Material"/>
>                         <PropertyValue Property="ValueListProperty" String="Material"/>
>                     </Record>                
>                     <Record Type="Common.ValueListParameterOut">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="RequestedQuantityUnit"/>
>                         <PropertyValue Property="ValueListProperty" String="RequestedQuantityUnit"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterDisplayOnly">
>                         <PropertyValue Property="ValueListProperty" String="MaterialName"/>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>             <PropertyValue Property="PresentationVariantQualifier" String="SortOrderPV"/>
>         </Record>
>     </Annotation>
> </Annotations>
>  
> <Annotations Target="com.c_salesordermanage_sd.EntityContainer/C_MaterialBySlsOrgDistrChnl">
>     <Annotation Term="UI.PresentationVariant" Qualifier="SortOrderPV">
>         <Record Type="UI.PresentationVariantType">
>             <PropertyValue Property="Visualizations">
>                 <Collection>
>                     <AnnotationPath>@UI.LineItem</AnnotationPath>
>                 </Collection>
>             </PropertyValue>
>             <PropertyValue Property="SortOrder">
>                 <Collection>
>                     <Record Type="Common.SortOrderType">
>                         <PropertyValue Property="Property" PropertyPath="MaterialName"/>
>                         <PropertyValue Property="Descending" Bool="false"/>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>>
> ```

> ### Tip:  
> SAP Fiori elements recommends using a `PresentationVariant`.



### Hierarchical Display Within a Value Help Dialog

You can display a hierarchy within a value help dialog.

To do so, the hierarchy qualifier must be provided through the [`RecursiveHiearchyQualifier`](https://github.com/SAP/odata-vocabularies/blob/0b5633ecc0fb85498720a8da07a46ef24b99ca74/vocabularies/UI.xml#L1175) term within the `PresentationVariant` annotation. The initial expansion level of the hierarchy can be set additionally by using the `InitialExpansionLevel` term, as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="Self.ArtistsType/CountryOfOrigin">
>     <Annotation Term="Common.ValueList">
>         <Record>
>             <PropertyValue Property="CollectionPath" String="myEntityName"/>
>             <PropertyValue Property="SearchSupported" Bool="true"/>
>             <PropertyValue Property="Parameters">
>                 <Collection>
>                     <Record Type="Common.ValueListParameterInOut">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="CountryOfOrigin"/>
>                         <PropertyValue Property="ValueListProperty" String="CountryCode"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterDisplayOnly">
>                         <PropertyValue Property="ValueListProperty" String="CountryCode_Text"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterDisplayOnly">
>                         <PropertyValue Property="ValueListProperty" String="CountryIndicator"/>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>             <PropertyValueProperty="PresentationVariantQualifier"String="Country_Pres" />
>         </Record>
>     </Annotation>
>     <Annotation Term="UI.PresentationVariant" Qualifier="Country_Pres">
>         <Record>
>             <PropertyValue Property="Visualizations">
>                 <Collection>
>                     <AnnotationPath>@UI.LineItem#DefaultLineItem</AnnotationPath>
>                 </Collection>
>             </PropertyValue>
>             <PropertyValue Property="InitialExpansionLevel" Int="2"/>
>             <PropertyValue Property="RecursiveHierarchyQualifier" String="CountryHierarchy"/>
>         </Record>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Consumption.valueHelpDefinition: [
>     {
>           entity :{
>             name    : ' myEntityName', // ValueList CollectionPath (The collection path points to consumption VH entity and will have the ValueListParameterDisplayOnly fields within it)
>             element : ' CountryCode' // ValueListProperty of ValueListParameterInOut           
>           },
>           label  : 'mylabel', // ValueList label
>           qualifier: 'test'
>           presentationVariantQualifier: 'Country_Pres'  // value list presentvariantqualifier
>           }
> ]
> @UI.presentationVariant: [
>     {
>       visualizations: [
>         {
>           type: #AS_LINEITEM,
>           qualifier: 'DefaultLineItem'
>         }
>       ],
>       initialExpansionLevel: 2,
>       recursiveHierarchyQualifier: 'CountryHierarchy',
>       qualifier: 'Country_Pres'
>     }
> ]
> CountryOfOrigin, // LocalDataProperty of ValueListParameterInOut
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> entity Artist {
>     CountryOfOrigin                   : String(40)           @(Common : {
>    Label        : 'Country',
>     ValueList    : {
>         CollectionPath : 'myEntityName',
>         Parameters     : [
>         {
>             $Type             : 'Common.ValueListParameterInOut',
>             LocalDataProperty : CountryOfOrigin,
>             ValueListProperty : 'CountryCode'
>         },
>         {
>             $Type             : 'Common.ValueListParameterDisplayOnly',
>             ValueListProperty : 'CountryCode_Text'
>         },
>         {
>             $Type             : 'Common.ValueListParameterDisplayOnly',
>             ValueListProperty : 'CountryIndicator'
>         }
>         ],
>         PresentationVariantQualifier: 'Country_Pres'
>     }
>     },
>     UI : {
>         PresentationVariant #Country_Pres : {
>             Visualizations : [
>                 '@UI.LineItem#DefaultLineItem',
>             ],
>             InitialExpansionLevel : 2,
>             RecursiveHierarchyQualifier: 'CountryHierarchy'
>         }
>     }
> );
> 
> ```

Check out our live examples in the flexible programming model explorer:

-   Display of a hierarchy within a value help at [Field - Edit Mode](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/field/fieldEdit)
-   Display of a hierarchy within a value help for a multi-input field at [Field - Multi Value Field](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/field/multiValueField)
-   Property with a tree table within a value help at [Filter Bar - Overview](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarDefault)



### Client Validation Against Value Help

You can use the `ValueListForValidation` annotation to configure that the values of certain fields entered on the UI are checked at the client against the value help \(`ValueList` or `ValueListMapping`\) entity set associated to the field.

Use `ValueListForValidation` annotations under property level annotations:

> ### Sample Code:  
> `Common.ValueListForValidation`
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.SalesOrderManage/IncotermsVersion">
>     <Annotation Term="Common.IsUpperCase" Bool="true"/>
>     <Annotation Term="Common.Label" String="Incoterms Version"/>
>     <Annotation Term="Common.Text" Path="_IncotermsVersion/IncotermsVersion_Text"/>
>     <Annotation Term="Common.ValueListForValidation" String=""/>
>     <Annotation Term="Common.ValueList">
>         ...Definition of ValueList...
>     </Annotation>
> </Annotations>
> ```

The following sample code shows an example for the usage of the annotation term `Common.ValueListForValidation` with a conditional expression binding:

> ### Sample Code:  
> `Common.ValueListForValidation` with conditional expression binding
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.HeaderPartner/BusinessPartner">
>     <Annotation Term="com.sap.vocabularies.Common.v1.ValueListForValidation">
>         <If>
>             <Eq>
>                 <Path>PartnerFunction</Path>
>                 <String>WE</String>
>             </Eq>
>             <String>BusinessPartner</String>
>             <String />
>         </If>
>     </Annotation>
> </Annotations>
> ```

> ### Note:  
> -   Ensure that the `ValueListForValidation` contains the qualifier of the `ValueList` or `ValueListMapping` to be used for validation.
> 
> -   User input that does not match the entries in the `ValueListForValidation` aren't stored in the back end \(not even for drafts\). Use this feature only in cases where the value can't be transferred to the back end.
> 
> -   App developers have two options to configure the `ValueListForValidation`:
> 
>     -   the `ValueListForValidation` can be a fixed string \(which is the qualifier of the value help\)
> 
>     -   the value for the `ValueListForValidation` can be a conditional expression that results in the qualifier of the `ValueList` or `ValueListMapping` to be used for validation
> 
> 
> -   For a conditional expression, ensure that the result contains only one qualifier that points to a valid `ValueList` or `ValueListMapping` at runtime.
> 
> -   The `ValueListForValidation` annotation with a conditional expression binding must have the If-Then-Else pattern.
> 
> -   When the field is used in a filter context, such as within a filter bar, and the `ValueListForValidation` is not defined, the default value list \(without the qualifier\) is used for validation. In such cases, if the default value list is not found, field help for the field is not displayed.



### Context-Dependent Value Help

Some scenarios require different value help dialogs based on a context. This context is determined by a property other than the annotated property.

You can use the annotation term `Common.ValueListRelevantQualifiers` to configure that valid qualifiers for a value help are determined, dependent on the value of another field.

> ### Example:  
> A sales order has different types of assigned partners. Depending on the partner function, you have to provide different details in the value help to which the partner can be added. If the partner function is `"WE"`, the value help with qualifier `"BusinessPartner"` should be determined. In all other cases, the value help without a qualifier should be determined.

> ### Sample Code:  
> `Common.ValueListRelevantQualifiers`
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.HeaderPartner/BusinessPartner">
>     <Annotation Term="com.sap.vocabularies.Common.v1.ValueListRelevantQualifiers">
>         <Collection>
>             <String />
>             <If>
>                 <Eq>
>                     <Path>PartnerFunction</Path>
>                     <String>WE</String>
>                 </Eq>
>                 <String>BusinessPartner</String>
>             </If>
>         </Collection>
>         </Annotation>
>     <Annotation Term="Common.ValueList" Qualifier="BusinessPartner">
>         ...Definition of ValueList...
>     </Annotation>
>     <Annotation Term="Common.ValueList">
>         ...Definition of ValueList w/o qualifier...
>     </Annotation>
> </Annotations>
> ```

> ### Note:  
> All `ValueList` definitions must have the same In/Out parameters.



### Initial Value for Value Help IN Parameters

The annotation `InitialValueIsSignificant` allows you to identify an initial value, for example an empty string, as a valid and significant value for value help IN parameters.

> ### Note:  
> Please note that the annotation below is only supported for parameters of data type `Edm.String`.

> ### Sample Code:  
> XML Annotation for `InitialValueIsSignificant`
> 
> ```
> <Annotation Term="Common.ValueList">
>     <Record Type="Common.ValueListType">
>         <PropertyValue Property="CollectionPath" String="ShippingCondition"/>
>         <PropertyValue Property="Label" String="Shipping Condition"/>
>         <PropertyValue Property="Parameters">
>             <Collection>
>                 <Record Type="Common.ValueListParameterInOut">
>                     <PropertyValue Property="LocalDataProperty" PropertyPath="ShippingCondition"/>
>                     <PropertyValue Property="ValueListProperty" String="ShippingCondition"/>
>                 </Record>
>                 <Record Type="Common.ValueListParameterIn">
>                     <PropertyValue Property="LocalDataProperty" PropertyPath="SoldToParty"/>
>                     <PropertyValue Property="ValueListProperty" String="SoldToParty"/>
>                     <PropertyValue Property="InitialValueIsSignificant" Bool="true"/>
>                 </Record>
>                 <Record Type="Common.ValueListParameterDisplayOnly">
>                     <PropertyValue Property="ValueListProperty" String="ShippingCondition_Text"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> CDS Annotation for `InitialValueIsSignificant`
> 
> ```
> Context-dependent value help currently does not support individual In/Out parameters for the differentShippingCondition             : ShippingCondition : ShippingCondition @(Common : {
>     Text            : _ShippingCondition.ShippingCondition_Text,
>     TextArrangement : #TextFirst,
>     IsUpperCase     : true,
>     ValueList       : {
>         Label          : 'Shipping Condition',
>         CollectionPath : 'ShippingCondition',
>         Parameters     : [
>         {
>             $Type             : 'Common.ValueListParameterInOut',
>             LocalDataProperty : ShippingCondition,
>             ValueListProperty : 'ShippingCondition'
>         },
>         {
>             $Type             : 'Common.ValueListParameterIn',
>             LocalDataProperty : SoldToParty,
>             ValueListProperty : 'SoldToParty',
>             InitialValueIsSignificant: true
>         },
>         {
>             $Type             : 'Common.ValueListParameterDisplayOnly',
>             ValueListProperty : 'ShippingCondition_Text'
>         }
>         ]
>     }
> });
> ```



### Multiple Value Help Dialogs / Collective Search Help

Some scenarios require more than one value help.

> ### Sample Code:  
> Multiple Value Help Dialogs
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.HeaderPartner/BusinessPartner">
>     <Annotation Term="Common.ValueList" Qualifier="BusinessPartner">
>         ...Definition of ValueList...
>     </Annotation>
>     <Annotation Term="Common.ValueList" Qualifier="SingleColumn">
>         ...Definition of ValueList...
>     </Annotation>
>     <Annotation Term="Common.ValueList">
>         ...Definition of ValueList w/o qualifier...
>     </Annotation>
> </Annotations>
> ```



<a name="loioa5608eabcc184aee99e1a7d88b28816c__section_h1j_xt3_5pb"/>

## Value Help for Draft-Enabled Entities

Value help for draft-enabled entities only shows active documents.



<a name="loioa5608eabcc184aee99e1a7d88b28816c__section_zmj_gw3_5pb"/>

## Value Help Using the `FetchValuesType`

By default, a value help requests the data immediately when the dialog is opened. Application developers can use the <code><a href="https://github.com/SAP/odata-vocabularies/blob/-/vocabularies/Common.md#FetchValuesType">FetchValuesType</a></code> to bring up value help for fields, allowing users to choose that a value help doesn't load the data immediately. Users can then first maintain a filter, and then request the data by clicking the *Go* button.

You achieve this by setting the property "FetchValues = 2".

> ### Sample Code:  
> `ValueList` with `FetchValues`
> 
> ```
>  XML<Annotation Term="Common.ValueList">
>     <Record Type="Common.ValueListType">
>         <PropertyValue Property="CollectionPath" String="ShippingCondition"/>
>         <PropertyValue Property="Label" String="Shipping Condition"/>
>         <PropertyValue Property="FetchValues" Int="2"/>
>         <PropertyValue Property="Parameters">
>             <Collection>
>                 <Record Type="Common.ValueListParameterInOut">
>                     <PropertyValue Property="LocalDataProperty" PropertyPath="ShippingCondition"/>
>                     <PropertyValue Property="ValueListProperty" String="ShippingCondition"/>
>                 </Record>
>                 <Record Type="Common.ValueListParameterIn">
>                     <PropertyValue Property="LocalDataProperty" PropertyPath="SoldToParty"/>
>                     <PropertyValue Property="ValueListProperty" String="SoldToParty"/>
>                 </Record>
>                 <Record Type="Common.ValueListParameterDisplayOnly">
>                     <PropertyValue Property="ValueListProperty" String="ShippingCondition_Text"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```



<a name="loioa5608eabcc184aee99e1a7d88b28816c__section_c4b_x5y_q4b"/>

## Fixed Values

For information about fixed values, see [Value Help as a Dropdown List](value-help-as-a-dropdown-list-2a0a630.md).



<a name="loioa5608eabcc184aee99e1a7d88b28816c__section_n45_zgm_s1c"/>

## History of Recently Entered Values

Filter bar fields can show the history of recently entered values, which is especially useful when end users frequently select the same values from a long list.

When enabled, this feature saves the values a user has entered in the field. When the user sets the focus on the field, a list of recently entered values is displayed. When the user starts typing, the list is filtered according to their input. If the field has no previously entered values the list is not displayed, even if this feature is enabled.

To enable the history of recently entered values, enable the `INPUTFIELD_HISTORY` parameter in SAP Fiori launchpad. For more information, see [Manage Launchpad Settings](https://help.sap.com/docs/SAP_S4HANA_CLOUD/4fc8d03390c342da8a60f8ee387bca1a/22d573aead754b80abca18ec71872fb7.html).



<a name="loioa5608eabcc184aee99e1a7d88b28816c__section_jxp_rtv_s4b"/>

## Date Picker and Date/Time Picker

Based on the data type of the property, you can also render a date picker or a date/time picker if the filter field is restricted to a single value \(via the `Capabilities.FilterRestrictions` annotation\). Otherwise, the corresponding picker is rendered in a value help dialog.

When you choose a property with the data type "`Edm.Date`", a date picker is rendered:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <EntityType Name="SalesOrderManage">
>    ...<Property Name="SalesOrderDate" Type="Edm.Date"/>
> </EntityType>
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> entity SalesOrderManage {
> …       SalesOrderDate                       : Date;
> }
> ```

![](images/Date_Picker_bba0ad9.png)

When you choose a property with the data type "`Edm.DateTimeOffset`", a date/time picker is rendered:

> ### Sample Code:  
> Date/Time Picker
> 
> ```
> <EntityType Name="SalesOrderManage">
>    ...<Property Name="LastChangedDateTime" Type="Edm.DateTimeOffset"/>
> </EntityType>
> ```

![](images/Input_Field_Without_a_Timezone_Dialog_b07bbe3.png)

You can specify a timezone for a field of type "`Edm.DateTimeOffset`". If the timezone is specified \(annotated\), then the timezone is displayed in the input field and the text field in display mode. You can make the following settings:

-   You can use a fixed value for the annotation `Timezone` in the `@Common` vocabulary, according to the IANA \(Internet Assigned Numbers Authority\) standard:

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```
    > <EntityType Name="SalesOrderManage">
    >    <Property Name="timeDefault" Type="Edm.DateTimeOffset"/>
    >    <Property Name="testTimeFixed" Type="Edm.DateTimeOffset"/>
    >    <Property Name="testTime" Type="Edm.DateTimeOffset"/>
    >    <Property Name="testTimezone" Type="Edm.String"/>
    > </EntityType>
    >   
    > <Annotations Target="com.c_salesordermanage_sd.SalesOrderManage/timeDefault">
    >    <Annotation Term="Common.Label" String="Timestamp with default timezone"/>
    > </Annotations>
    >  
    > <Annotations Target="com.c_salesordermanage_sd.SalesOrderManagerManage/testTimeFixed">
    >    <Annotation Term="Common.Timezone" String="Asia/Riyadh"/>
    >    <Annotation Term="Common.Label" String="Timestamp with fixed timezone"/>
    > </Annotations>
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > entity SalesOrderManage {
    > …
    > testTimeFixed                     : DateTime @Common : { Timezone : 'Asia/Riyadh' };
    > …
    > ```

-   You can base it on another property value:

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```
    > <Annotations Target="com.c_salesordermanage_sd.SalesOrderManage/testTime">
    >    <Annotation Term="Common.Timezone" Path="testTimezone"/>
    >    <Annotation Term="Common.Label" String="Datetime Stamp with Timezone based on Property"/>
    > </Annotations>
    >   
    > <Annotations Target="com.c_salesordermanage_sd.SalesOrderManager/testTimezone">
    >    <Annotation Term="Common.Label" String="Timezone Property"/>
    > </Annotations>
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
    > @Semantics.timeZoneReference: 'MySAPTimezone'
    > MyDateTime,
    >   
    > @Semantics.timeZone
    > MySAPTimezone,
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > entity SalesOrderManage {
    > …
    >         testTime                          : DateTime @Common : { Timezone : testTimezone };
    > …
    > ```


Check out our live example in the flexible programming model explorer at [Field - Format Options](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/field/fieldFormatOptions).

If you don't explicitly define the timezone, the `DateTimeOffset` field is converted and displayed in the timezone of the UI as determined by SAPUI5.

The following screenshot shows an input field with no specified timezone or the default timezone:

![](images/Input_Field_with_No_Timezone_or_the_Default_Timezone_a2f5fc8.png)

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> entity SalesOrderManage {
> …
>         timeDefault                       : DateTime;
> …
> ```

The following screenshot shows an input field where a timezone has been specified:

![](images/Input_Field_with_Specified_Timezone_b3b7f08.png)

The following screenshot shows that the timezone is specified for the corresponding input field. The Date/Time Picker doesn't show any timezone in the dialog:

![](images/Input_Field_Without_a_Timezone_Dialog_b07bbe3.png)

> ### Restriction:  
> Parameterized value help service isn't supported.

