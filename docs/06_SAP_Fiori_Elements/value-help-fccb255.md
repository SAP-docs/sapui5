<!-- loiofccb255723d3489cae955648756411f6 -->

# Value Help

Value help allows end users to either select a value from a value help entity associated with the field or define a condition to retrieve a suitable value for the field from the main entity.

> ### Note:  
> Value help for draft-enabled entities only shows active documents.



<a name="loiofccb255723d3489cae955648756411f6__Annotations"/>

## Annotations

A value help or value help dialog is configured using the  `Common.ValueList` or  `Common.ValueListMapping`  annotation.



### `ValueList` Annotation

Use the `Common.ValueList` annotation when the value help entity is defined within the main entity’s metadata. This is relevant only for applications based on the Cloud Application Programming \(CAP\) model.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="MyService.Travel/AgencyId">
>   <Annotation Term="Common.ValueList">
>     <Record>
>       <PropertyValue Property="CollectionPath" String="TravelAgency" />
>       <PropertyValue Property="Label" String="Travel Agency" />
>       <PropertyValue Property="SearchSupported" Bool="true" />
>       <PropertyValue Property="FetchValues" Int="2" />
>       <PropertyValue Property="Parameters">
>         <Collection>
>           <Record Type="Common.ValueListParameterInOut">
>             <PropertyValue Property="LocalDataProperty" PropertyPath="AgencyId" />
>             <PropertyValue Property="ValueListProperty" String="Agency_Id" />
>             <PropertyValue Property="Importance" EnumMember="Common.ImportanceType/High" />
>           </Record>
>           <Record Type="Common.ValueListParameterInOut">
>             <PropertyValue Property="LocalDataProperty" PropertyPath="_TourOperator/RegionId" />
>             <PropertyValue Property="ValueListProperty" String="Region_Id" />
>             <PropertyValue Property="InitialValueIsSignificant" Bool="true" />
>           </Record>
>           <Record Type="Common.ValueListParameterDisplayOnly">
>             <PropertyValue Property="ValueListProperty" String="AgencyName" />
>             <PropertyValue Property="Importance" EnumMember="Common.ImportanceType/High" />
>           </Record>
>           <Record Type="Common.ValueListParameterOut">
>             <PropertyValue Property="LocalDataProperty" PropertyPath="CountryIndicator" />
>             <PropertyValue Property="ValueListProperty" String="Country_Flag" />
>           </Record>
>         </Collection>
>       </PropertyValue>
>     </Record>
>   </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate MyService.Travel with {
>   AgencyId @Common.ValueList: {
>     CollectionPath : 'TravelAgency',
>     Label          : 'Travel Agency',
>     SearchSupported,
>     FetchValues    : 2,
>     Parameters     : [
>       {
>         $Type             : 'Common.ValueListParameterInOut',
>         LocalDataProperty : AgencyId,
>         ValueListProperty : 'Agency_Id',
>         ![@UI.Importance] : #High,
>       },
>       {
>         $Type                    : 'Common.ValueListParameterInOut',
>         LocalDataProperty        : to_TourOperator.RegionId,
>         ValueListProperty        : 'Region_Id',
>         InitialValueIsSignificant
>       },
>       {
>         $Type             : 'Common.ValueListParameterDisplayOnly',
>         ValueListProperty : 'AgencyName',
>         ![@UI.Importance] : #High,
>       },
>       {
>         $Type             : 'Common.ValueListParameterOut',
>         LocalDataProperty : CountryIndicator,
>         ValueListProperty : 'Country_Flag'
>       }
>     ]
>   };
> };
> 
> ```



### `ValueListMapping` Annotation

Use the `Common.ValueListMapping` annotation when the value help entity’s metadata is not part of the main service’s metadata. This is relevant only for applications based on the RESTful ABAP Programming \(RAP\) model.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="MyService.Travel/AgencyId">
>   <Annotation Term="Common.ValueListMapping">
>     <Record>
>       <PropertyValue Property="CollectionPath" String="TravelAgency" />
>       <PropertyValue Property="Label" String="Travel Agency" />
>       <PropertyValue Property="SearchSupported" Bool="true" />
>       <PropertyValue Property="FetchValues" Int="2" />
>       <PropertyValue Property="Parameters">
>         <Collection>
>           <Record Type="Common.ValueListParameterInOut">
>             <PropertyValue Property="LocalDataProperty" PropertyPath="AgencyId" />
>             <PropertyValue Property="ValueListProperty" String="Agency_Id" />
>             <PropertyValue Property="Importance" EnumMember="Common.ImportanceType/High" />
>           </Record>
>           <Record Type="Common.ValueListParameterInOut">
>             <PropertyValue Property="LocalDataProperty" PropertyPath="_TourOperator/RegionId" />
>             <PropertyValue Property="ValueListProperty" String="Region_Id" />
>             <PropertyValue Property="InitialValueIsSignificant" Bool="true" />
>           </Record>
>           <Record Type="Common.ValueListParameterDisplayOnly">
>             <PropertyValue Property="ValueListProperty" String="AgencyName" />
>             <PropertyValue Property="Importance" EnumMember="Common.ImportanceType/High" />
>           </Record>
>           <Record Type="Common.ValueListParameterOut">
>             <PropertyValue Property="LocalDataProperty" PropertyPath="CountryIndicator" />
>             <PropertyValue Property="ValueListProperty" String="Country_Flag" />
>           </Record>
>         </Collection>
>       </PropertyValue>
>     </Record>
>   </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

**`ValueListReference` Annotation**

When the `Common.ValueListMapping` annotation is used, the value help entity must be referenced using the `Common.ValueListReference` annotation.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="Self.TravelType/AgencyId">
>   <Annotation Term="Common.ValueListReferences">
>     <Collection>
>       <String>../../../../srvd_f4/sap/myentityname/0001;ps='srvd-sadl_gw_apptravel_definition-0001';va='com.sap.gateway.srvd.sadl_gw_apptravel_definition.v0001.et-c_mdbu_v4_travel.agencyid'/$metadata</String>
>     </Collection>
>   </Annotation>
> </Annotations>
> 
> ```

The string in this XML annotation represents the path relative to the main metadata file that contains the  `Common.ValueListReference`  annotation.

Both `ValueList` and `ValueListMapping` annotations are used in similar contexts and support the following properties:

-   `Label`: Determines the title of the value help dialog. For more information, see [Title](value-help-dialog-3faed83.md#loio3faed838512648b099e14dfec458d847__Title) subsection in [Value Help Dialog](value-help-dialog-3faed83.md).

-   `CollectionPath`: Refers to the value help entity that provides the data shown in the value help dialog, allowing end users to select a value.

-   `SearchSupported`: Determines whether the search bar is displayed in the value help dialog. For more information, see [Search Field](value-help-dialog-3faed83.md#loio3faed838512648b099e14dfec458d847__searchfield) subsection in [Value Help Dialog](value-help-dialog-3faed83.md).

-   `Parameters`: Determines how the selection in the value help dialog affects the fields outside the value help dialog \(`OUT` mapping\), how external fields influence the contents of the value help dialog \(`IN` mapping\), or both \(`IN/OUT` mapping\). For more information, see [In/Out Mappings in the ValueList Annotation](in-out-mappings-in-the-valuelist-annotation-4de40b3.md).

-   `FetchValues`: Controls the data request for the table within the value help dialog. It can have the following values:

    -   `1`: Data is loaded immediately when the value help dialog is opened, without any input from the end user. This is the default behavior.

    -   `2` : Data is loaded only after the end user applies the filters.


-   `Importance`: Indicates whether the field value must appear in the type-ahead suggestion. For more information, see [Type-Ahead Support](field-help-a5608ea.md#loioa5608eabcc184aee99e1a7d88b28816c__Type-AheadSupport) section in [Field Help](field-help-a5608ea.md).


> ### Note:  
> The value help appears in filter fields, even if the `Common.ValueList`  or  `Common.ValueListMapping`  annotation isn't defined. In such cases, only the *Define Conditions* tab is shown in the value help dialog.



### `ValueListParameterConstant` Annotation

Use the `ValueListParameterConstant` annotation as a constant value to filter the value list with `eq` comparison, using the same representation as property default values.

> ### Sample Code:  
> XML Annotation
> 
> ```
> 
> <Annotation Term="Common.ValueList">
>     <Record Type="Common.ValueListType">
>         <PropertyValue Property="CollectionPath" String="Customer" />
>         <PropertyValue Property="Label" String="Sold-to Party" />
>         <PropertyValue Property="Parameters">
>             <Collection>
>                 <Record Type="Common.ValueListParameterConstant">
>                     <PropertyValue Property="Constant" String="001" />
>                     <PropertyValue Property="ValueListProperty" String="PredefinedField" />
>                 </Record>
>                 <Record Type="Common.ValueListParameterInOut">
>                     <PropertyValue Property="LocalDataProperty" PropertyPath="SoldToParty" />
>                     <PropertyValue Property="ValueListProperty" String="Customer" />
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> 
> ```



<a name="loiofccb255723d3489cae955648756411f6__section_tcv_wsm_nfc"/>

## Client Validation Against Value Help

You can use the `ValueListForValidation`  annotation to configure client-side validation for certain fields. The values entered in the UI are then checked against the value help entity set \(`ValueList`  or  `ValueListMapping`\) associated with the field. The value help annotation used for validation can be either hard-coded or applied based on conditions.

> ### Note:  
> If `ValueListForValidation` is not specified for filter fields, validation is still performed using the value help entity defined by the default \(unqualified\) `ValueList` annotation.



### Validating Using Hard-Coded Settings

You can validate user input against the default value list \(unqualified\) by setting the `ValueListForValidation` annotation to an empty string \(""\). To validate against a qualified value list, set the annotation to the corresponding qualifier name.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="serviceNamespace.BookingType/FlightDate">
>     …….
>     …….
>     <Annotation Term="Common.ValueListForValidation" String=""/>
>     <Annotation Term="Common.ValueList">
>         ...Definition of ValueList...
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> annotate schema.Booking {
>   @Common.ValueListForValidation : ''
>   @Common.ValueList : {
>       $Type : 'Common.ValueListType',
>       CollectionPath : 'Flight',
>   }
>   FlightDate;
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate schema.Booking {
>   @Common.ValueListForValidation : ''
>   @Common.ValueList : {
>       $Type : 'Common.ValueListType',
>       CollectionPath : 'Flight',
>   }
>   FlightDate;
> }
> 
> ```



### Validating Using Conditional Settings

You can specify a conditional expression to validate the user input using the `Common.ValueListForValidation` annotation. The conditional expression must return a single and valid `ValueList` or `ValueListMapping` qualifier at runtime. The following sample code shows how to use the `Common.ValueListForValidation` annotation with a conditional expression binding:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.HeaderPartner/BusinessPartner">
>     <Annotation Term="com.sap.vocabularies.Common.v1.ValueListForValidation">
>         <If>
>             <Eq>
>                 <Path>PartnerFunction</Path>
>                 <String>WE</String>
>             </Eq>
>             <String>BusinessPartnerQualifier</String>
>             <String />
>         </If>
>     </Annotation>
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
> annotate schema.HeaderPartner { 
>   @Common.ValueListForValidation: {$edmJson: {$If: [ 
>     {$Eq: [ 
>       {$Path: 'PartnerFunction'}, 
>       'WE' 
>     ]}, 
>     'BusinessPartnerQualifier', 
>     '' 
>   ]}} 
>   BusinessPartner; 
> } 
> 
> OR 
> 
> annotate schema.HeaderPartner with { 
>   @Common.ValueListForValidation :  
>    (PartnerFunction = 'WE' ? 'BusinessPartnerQualifier' : '') 
>   BusinessPartner; 
> };
> 
> ```



<a name="loiofccb255723d3489cae955648756411f6__section_y2x_kvm_nfc"/>

## Context-Dependent Value Help

In some scenarios, different value help dialogs are required based on the context, which is determined by a property other than the one annotated. To support this, you can use the `Common.ValueListRelevantQualifiers` annotation to determine the valid qualifiers based on the value of another field.

> ### Example:  
> A sales order has different types of assigned partners. Depending on the partner function, you have to provide different details in the value help to which the partner can be added. If the partner function is `WE`, the value help with qualifier `BusinessPartner` must be used. In all other cases, the value help without a qualifier must be used.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.HeaderPartner/BusinessPartner">
>     <Annotation Term="com.sap.vocabularies.Common.v1.ValueListRelevantQualifiers">
>         <Collection>
>             <String/>
>             <If>
>                 <Eq>
>                     <Path>PartnerFunction</Path>
>                     <String>WE</String>
>                 </Eq>
>                 <String>BusinessPartnerQualifier</String>
>             </If>
>         </Collection>
>     </Annotation>
>     <Annotation Term="Common.ValueList" Qualifier="BusinessPartnerQualifier">
>         ...Definition of ValueList...
>     </Annotation>
>     <Annotation Term="Common.ValueList">
>         ...Definition of ValueList w/o qualifier...
>     </Annotation>
> </Annotations>
> 
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
> annotate schema.HeaderPartner with {
>   @Common.ValueListRelevantQualifiers:
>     (PartnerFunction = 'WE' ? 'BusinessPartnerQualifier' : '')
>   @Common.ValueList: {
>     $Type: 'Common.ValueListType',
>     . . .
>   }
>   @Common.ValueList#BusinessPartnerQualifier: {
>     $Type: 'Common.ValueListType',
>     . . .
>   }
>   BusinessPartner;
> };
> 
> ```



<a name="loiofccb255723d3489cae955648756411f6__section_usl_pwm_nfc"/>

## Initial Value \(Empty or Null\) as a Filter

The `InitialValueIsSignificant` property allows you to identify an initial value, such as an empty string, as a valid and significant value for value help `IN` parameters.

> ### Restriction:  
> -   The `InitialValueIsSignificant` annotation is only supported for object page.
> -   The `InitialValueIsSignificant` annotation is only supported for parameters of the `Edm.String` data type.

In the following sample code, `InitialValueIsSignificant` is used to consider an empty value for the local property `SoldToParty` \(indicated by an `<empty>` tag\) as a valid filter value. As a result, when the value help for the `ShippingCondition` field is opened, it lists only those records where the `SoldToParty` field in the value help entity is either `""` or `null` \(if the field is nullable\).

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.SalesOrderManage/ShippingCondition"> 
>     <Annotation Term="Common.ValueList">
>         <Record Type="Common.ValueListType">
>             <PropertyValue Property="CollectionPath" String="ShippingCondition"/>
>             <PropertyValue Property="Label" String="Shipping Condition"/>
>             <PropertyValue Property="Parameters">
>                 <Collection>
>                     <Record Type="Common.ValueListParameterInOut">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="ShippingCondition"/>
>                         <PropertyValue Property="ValueListProperty" String="ShippingCondition"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterIn">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="SoldToParty"/>
>                         <PropertyValue Property="ValueListProperty" String="SoldToParty"/>
>                         <PropertyValue Property="InitialValueIsSignificant" Bool="true"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterDisplayOnly">
>                         <PropertyValue Property="ValueListProperty" String="ShippingCondition_Text"/>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> 
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
> 
> Context-dependent value help doesn't support individual In/Out parameters for the different ShippingCondition            
> 
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
> 
> 
> ```

> ### Restriction:  
> Parameterized value help service isn't supported.

