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

The **Guidance** section in our live example shows the various uses of side effects along with examples in XML and ABAP CDS annotation. For more information and live examples, see the SAP Fiori development portal at [Global Patterns - Side Effects](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/advancedFeatures/guidance/guidanceSideEffects).

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



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Side Effect Annotations: Examples](side-effect-annotations-examples-c5562cb.md).

