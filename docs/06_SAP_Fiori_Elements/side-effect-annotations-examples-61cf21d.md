<!-- loio61cf21d50ed34cbf888713496c618904 -->

# Side Effect Annotations: Examples

This topic provides some examples for annotating side effects.

> ### Example:  
> Using `TriggerAction` to calculate the `GrossPrice` and `NetPriceIncludingTax` through the function import `CalculatePriceIncludingRegionalTax`, when the source property `UnitPrice` or `ProductQuantity` is modified. The side effect is triggered only when `UnitPrice` and `ProductQuantity` are successfully validated.
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > 
> > <Annotations Target="STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrder_WD_20Type">
> >     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="CalculatePrice">
> >         <Record>
> >             <PropertyValue Property="SourceProperties">
> >                 <Collection>
> >                     <PropertyPath>UnitPrice</PropertyPath>
> >                     <PropertyPath>ProductQuantity</PropertyPath>
> >                 </Collection>
> >             </PropertyValue>
> >             <PropertyValue Property="TargetProperties">
> >                 <Collection>
> >                     <String>GrossPrice</String>
> >                     <String>NetPriceIncludingTax</String>
> >                 </Collection>
> >             </PropertyValue>
> >             <PropertyValue Property="TriggerAction" String="STTA_SALES_ORDER_WD_20_SRV.STTA_SALES_ORDER_WD_20_SRV_Entities/CalculatePriceIncludingRegionalTax"/>
> >         </Record>
> >     </Annotation>
> > </Annotations>
> > ```



<a name="loio61cf21d50ed34cbf888713496c618904__section_cby_npc_4mb"/>

## Additional Features in SAP Fiori Elements for OData V2

You can define side effects either in the \*`MPC_EXT` class or in the local annotation file.

> ### Example:  
> **Annotating side effects in the `DEFINE` method of the `CL_MM_PUR_PO_AI_MAINT_MPC_EXT` class**
> 
> > ### Sample Code:  
> > ```
> > 
> > * define Side Effects for Purchase Order:
> >     DATA lo_ann_target TYPE REF TO /iwbep/if_mgw_vocan_ann_target.   " Vocabulary Annotation Target                     "#EC NEEDED
> >     DATA lo_annotation TYPE REF TO /iwbep/if_mgw_vocan_annotation.   " Vocabulary Annotation                            "#EC NEEDED
> >     DATA lo_collection TYPE REF TO /iwbep/if_mgw_vocan_collection.   " Vocabulary Annotation Collection                 "#EC NEEDED
> >     DATA lo_function   TYPE REF TO /iwbep/if_mgw_vocan_function.     " Vocabulary Annotation Function                   "#EC NEEDED
> >     DATA lo_fun_param  TYPE REF TO /iwbep/if_mgw_vocan_fun_param.    " Vocabulary Annotation Function Parameter         "#EC NEEDED
> >     DATA lo_property   TYPE REF TO /iwbep/if_mgw_vocan_property.     " Vocabulary Annotation Property                   "#EC NEEDED
> >     DATA lo_record     TYPE REF TO /iwbep/if_mgw_vocan_record.       " Vocabulary Annotation Record                     "#EC NEEDED
> >     DATA lo_reference  TYPE REF TO /iwbep/if_mgw_vocan_reference.    " Vocabulary Annotation Reference
> >  
> >  
> >     lo_reference = vocab_anno_model->create_vocabulary_reference( iv_vocab_id = '/IWBEP/VOC_COMMON'
> >                                                                   iv_vocab_version = '0001').
> >     lo_reference->create_include( iv_namespace = 'com.sap.vocabularies.Common.v1' ).
> >     lo_reference = vocab_anno_model->create_vocabulary_reference( iv_vocab_id = '/IWBEP/VOC_CORE'
> >                                                                   iv_vocab_version = '0001').
> >     lo_reference->create_include( iv_namespace = 'Org.OData.Core.V1' ).
> >  
> >     lo_ann_target = vocab_anno_model->create_annotations_target( 'MM_PUR_PO_AI_MAINTAIN.C_PurchaseOrderEnhWDType' ) ##NO_TEXT . "Add annotation term for VIPs introduced
> >  
> >     lo_annotation = lo_ann_target->create_annotation( iv_term = 'com.sap.vocabularies.Common.v1.SideEffects' ) ##NO_TEXT .
> >  
> >     lo_record     = lo_annotation->create_record( )  ##NO_TEXT.
> >     lo_property   = lo_record->create_property( 'SourceProperties' )   ##NO_TEXT.
> >     lo_collection = lo_property->create_collection( ).
> >  
> >     lo_collection->create_simple_value( )->set_property_path( 'Supplier' )  ##NO_TEXT .
> >     lo_collection->create_simple_value( )->set_property_path( 'CompanyCode' )  ##NO_TEXT .
> >     lo_collection->create_simple_value( )->set_property_path( 'DocumentCurrency' )  ##NO_TEXT .
> >     lo_collection->create_simple_value( )->set_property_path( 'PurchasingGroup' )  ##NO_TEXT.
> >     lo_collection->create_simple_value( )->set_property_path( 'PurchasingOrganization' )  ##NO_TEXT.
> > ```

> ### Example:  
> **User changes the source properties and the system refreshes the `Price`**
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > <Annotations Target="NAMESPACE.ENTITYTYPE">
> >     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="PriceChanged">
> >         <Record>
> >             <PropertyValue Property="SourceProperties">
> >                 <Collection>
> >                     <PropertyPath>Amount</PropertyPath>
> >                     <PropertyPath>Discount</PropertyPath>
> >                     <PropertyPath>ProductDetail/DeliveryLocations</PropertyPath>// Source property pointing to multi input field
> >                 </Collection>
> >             </PropertyValue>
> >             <PropertyValue Property="TargetProperties">
> >                 <Collection>
> >                     <String>Price</String>
> >                 </Collection>
> >             </PropertyValue>
> >         </Record>
> >     </Annotation>
> > </Annotations>
> > ```

> ### Example:  
> **User changes the supplier and the system refreshes the 1:1 navigation `toSupplier`**
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > <Annotations Target="NAMESPACE.ENTITYTYPE">
> >     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="SupplierChanged">
> >         <Record>
> >             <PropertyValue Property="SourceProperties">
> >                 <Collection>
> >                     <PropertyPath>Supplier</PropertyPath>
> >                 </Collection>
> >             </PropertyValue>
> >             <PropertyValue Property="TargetEntities">
> >                <Collection>
> >                    <NavigationPropertyPath>toSupplier</NavigationPropertyPath>
> >                </Collection>
> >             </PropertyValue>
> >         </Record>
> >     </Annotation>
> > </Annotations>
> > ```

> ### Example:  
> **User changes a single property, and the system reads the whole entity due to the field control**
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > <Annotations Target="NAMESPACE.ENTITYTYPE">
> >     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="PriceChanged">
> >         <Record>
> >             <PropertyValue Property="SourceProperties">
> >                 <Collection>
> >                     <PropertyPath>Status</PropertyPath>
> >                 </Collection>
> >             </PropertyValue>
> >             <PropertyValue Property="TargetEntities">
> >                 <Collection>
> >                     <NavigationPropertyPath></NavigationPropertyPath>
> >                 </Collection>
> >             </PropertyValue>
> >         </Record>
> >     </Annotation>
> > </Annotations>
> > ```

> ### Example:  
> **Side effect on structural changes of a 1:n association**
> 
> If any header information or any other associated entity needs to be refreshed once a subitem has been created or deleted, add side effect annotations as shown in the following example:
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > <Annotations Target="NAMESPACE.ENTITYTYPE">
> >     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="ReactOnItemCreationOrDeletion">
> >         <Record>
> >             <PropertyValue Property="SourceEntities">
> >                 <Collection>
> >                     <NavigationPropertyPath>toSalesOrderItems</NavigationPropertyPath>
> >                 </Collection>
> >             </PropertyValue>
> >             <PropertyValue Property="TargetProperties">
> >                 <Collection>
> >                     <String>OverallAmount</String>
> >                 </Collection>
> >             </PropertyValue>
> >         </Record>
> >     </Annotation>
> > </Annotations>
> > ```

> ### Example:  
> **Side effect after executing an action**
> 
> After executing an action, if the returned entity is different from the entity for which the action was called, then the related list binding is refreshed. Alternatively, you need to define a side effect annotation explicitly if any other entity or an association is changed due to an action call.
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > <!-- In the below example, the function import action "Setcurrency" is expected to refresh the "Currency_Code_Text" which is coming from the associated entity "to_Currency" -->
> >             <Annotations Target="STTA_SALES_ORDER_WD_20_SRV.STTA_SALES_ORDER_WD_20_SRV_Entities/Setcurrency">
> >                     <Record>
> >                         <PropertyValue Property="TargetProperties">
> >                             <Collection>
> >                                 <PropertyPath>to_Currency/Currency_Code_Text</PropertyPath>
> >                             </Collection>
> >                         </PropertyValue>
> >                         <!-- Side Effects for action annotation with an entity as a target. Here, controls associated with "to_Item" will be refreshed-->
> >                             <PropertyValue Property="TargetEntities">
> >                             <Collection>
> >                                 <NavigationPropertyPath>to_Item</NavigationPropertyPath>
> >                             </Collection>
> >                         </PropertyValue>
> >                     </Record>
> >                 </Annotation>
> >             </Annotations>
> > ```

> ### Example:  
> **Refresh the navigation target**
> 
> In the following example, when the item `TaxAmount` is changed, the navigation property leading to the root entity \(`to_SalesOrder`\) is updated.
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > <Annotations Target="STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrderItem_WD_20Type">
> >     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="TaxAmountChanged">
> >         <Record>
> >             <PropertyValue Property="SourceProperties">
> >                 <Collection>
> >                      <PropertyPath>TaxAmount</PropertyPath>
> >                 </Collection>
> >             </PropertyValue>
> >             <PropertyValue Property="TargetEntities">
> >                <Collection>
> >                      <NavigationPropertyPath>to_SalesOrder</NavigationPropertyPath>
> >                 </Collection>
> >             </PropertyValue>
> >         </Record>
> >     <Annotation>
> > </Annotations>
> > 
> > ```
> 
> In the following example, when the item `TaxAmount` is changed, the navigation property leading to the property of the root entity \(`to_SalesOrder`\) is updated. If `*` is defined, then all properties of the root entity are updated.
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > 
> > <Annotations Target="STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrderItem_WD_20Type">
> >     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="TaxAmountChanged">
> >         <Record>
> >             <PropertyValue Property="SourceProperties">
> >                 <Collection>
> >                     <PropertyPath>TaxAmount</PropertyPath>
> >                 </Collection>
> >             </PropertyValue>
> >             <PropertyValue Property="TargetProperties">
> >                 <Collection>
> >                     <String>to_SalesOrder/*</String>
> >                 </Collection>
> >             </PropertyValue>
> >         </Record>
> >     </Annotation>
> > </Annotations>
> > ```

> ### Example:  
> **Side effect on 1:1 associated entity set's property**
> 
> You can add a side effect annotation on a property that has a 1:1 association with the main entity set. In this case, when you change the associated smart field \(that is rendered in a smart form\), side effect call is triggered.
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > 
> > <Annotations Target="<Schema Namespace>.<EntityType Name>">
> >     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="<Qualifier Name (Optional)>">
> >         <PropertyValue Property="SourceProperties">
> >             <Collection>
> >                 <PropertyPath><1:1 Associated Navigation Property Name.Ex:to_Rating/Rating>/<Property Name></PropertyPath>
> >             </Collection>
> >         </PropertyValue>
> >         <PropertyValue Property="TargetProperties">
> >             <Collection>
> >                 <String><Target Property Name></String>
> >             </Collection>
> >         </PropertyValue>
> >     </Annotation>
> > </Annotations>
> > 
> > ```

> ### Example:  
> **Side Effect to Call `Triggeraction` without Refreshing Any Data \(No Target\)**
> 
> You can configure a side effect to call the `TriggerAction` function import without refreshing any data, that is, without any targets \(`TargetProperties`/`TargetEntities`\).
> 
> > ### Sample Code:  
> > XML Annotation
> > 
> > ```
> > <Annotations Target="STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrder_WD_20Type">
> >     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="CalculatePrice">
> >         <Record>
> >             <PropertyValue Property="SourceProperties">
> >                 <Collection>
> >                     <PropertyPath>UnitPrice</PropertyPath>
> >                     <PropertyPath>ProductQuantity</PropertyPath>
> >                 </Collection>
> >             </PropertyValue>
> >             <PropertyValue Property="TriggerAction" String="STTA_SALES_ORDER_WD_20_SRV.STTA_SALES_ORDER_WD_20_SRV_Entities/CalculatePriceIncludingRegionalTax"/>
> >         </Record>
> >     </Annotation>
> > </Annotations>
> > 
> > ```



## Additional Features in SAP Fiori Elements for OData V4

The **Guidance** section in our live example shows the various uses of side effects along with examples in XML and ABAP CDS annotation. Check out our live example in the flexible programming model explorer at [Side Effects](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/advancedFeatures/guidanceSideEffects).

Side effects are configured according to the modeling such as create, update, delete in RAP BDEF \(behavior definition\). You can see the ABAP CDS annotation examples in the RAP documentation. For more information, see [Side Effects](https://help.sap.com/docs/abap-cloud/abap-rap/side-effects).

The following sample code shows you an example with actions, multiple targets, and messages:

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> side effects {
>     field IntegerValue affects field ProgressIntegerValue, field RadialIntegerValue;
>     field Timestamp affects field IANATimestamp;
>     field Supplier affects entity toSupplier;
>     action changeCriticality affects field CriticalityCode;
>     action resetTimesChildCreated affects field TimesChildCreated, permissions ( action resetTimesChildCreated );
>     action overwriteTimezone affects $self;
>     determine action validateDate executed on field ValidTo affects messages;
>     $self affects permissions ( update _Child );
>     determine action updateTimes executed on entity _Child affects field TotalPieces;
>   }
> ```

