<!-- loio955ae316856a4dcdbe07a1dbf584fa98 -->

# Using the Global Side Effect

Global side effects are the side effects that are defined without any source properties or source entities.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2. Currently, global side effect is only applicable for draft applications.

Global side effect can be annotated under each entity separately. When you press [Enter\] on any input field, the global side effect defined under the corresponding entity is triggered.

If the `TriggerAction` is annotated with global side effect, then on pressing [Enter\] the `TriggerAction` replaces the `PreparationAction` call. For more information, see [Draft Handling](draft-handling-ed9aa41.md).

To optimize performance, make the annotations for the desired side effects as specific as possible.

It is recommended to specify the target properties or target entities for global side effects. For exceptional cases, apps can configure to refresh the whole entity with the help of `forceGlobalRefresh` parameter in the manifest.

> ### Sample Code:  
> ```
> "sap.ui.generic.app": {
>         "_version": "1.3.0",
>         "settings": {
>             "forceGlobalRefresh": true,
>             .....
>                 }
>             },
> ```

-   If the `forceGlobalRefresh` parameter is set to `true`, a refresh of the entire model is triggered when you press [Enter\].

-   If the parameter is set to `false`, then only the annotated targets are refreshed, and/or the annotated `TriggerAction` is called.

-   From SAPUI5 1.106 onwards, if the parameter is not set, the \(runtime\) default is `false`.


For newly generated apps, the \(design time\) default is `false`, that is, the project generation wizard generates `"forceGlobalRefresh": false`.

Following is the sample code for global side effect with target fields and `TriggerAction`.



> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotations Target="NAMESPACE.ENTITYTYPE">
>     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="GlobalSideEffect">
>         <Record>
>             <PropertyValue Property="TargetProperties">
>                 <Collection>
>                     <String>TaxAmount</String>
>                     <String>NetAmount</String>
>                     <String>GrossAmount</String>
>                 </Collection>
>             </PropertyValue>
>           <PropertyValue Property="TriggerAction" String="STTA_SALES_ORDER_WD_20_SRV.STTA_SALES_ORDER_WD_20_SRV_Entities/CalculatePriceIncludingRegionalTax"/>
>         </Record>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate NAMESPACE.ENTITYTYPE @(
>  Common.SideEffects #GlobalSideEffect : {
>     EffectTypes : #ValueChange,
>     TargetProperties : [
>         TaxAmount,
>         NetAmount,
>         GrossAmount
>     ]
>  }
> );
> ```



We recommend that you use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code, to build your apps. You can also use SAP Web IDE.

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../03_Get-Started/app-development-using-sap-business-application-studio-6bbad66.md).

For more information about SAP Web IDE, see the documentation for SAP Web IDE on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_Web\_IDE](https://help.sap.com/viewer/p/SAP_Web_IDE).

