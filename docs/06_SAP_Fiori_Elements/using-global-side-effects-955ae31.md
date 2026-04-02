<!-- loio955ae316856a4dcdbe07a1dbf584fa98 -->

# Using Global Side Effects

You can configure global side effects.

> ### Note:  
> Global side effects are only applicable to draft-enabled applications.

Global side effects are those side effects that are defined without any source properties or source entities. Global side effects can be annotated under each entity separately. When you press [Enter\] on any input field, the global side effect defined under the corresponding entity is triggered.

The following sample code shows the global side effect with target fields and the `TriggerAction`:

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
>           <PropertyValue Property="TriggerAction" String="NAMESPACE.MyAction"/>
>         </Record>
>     </Annotation>
> </Annotations>
> 
> ```

The following CAP CDS sample code shows the global side effect with target fields and the `TriggerAction`:

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate NAMESPACE.ENTITYTYPE @(
> Common.SideEffects #GlobalSideEffect : {
>     TargetProperties : [
>         TaxAmount,
>         NetAmount,
>         GrossAmount
>     ],
>     TriggerAction : 'NAMESPACE.MyAction'
> }
> );
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Using Global Side Effects](using-global-side-effects-1c90f8d.md).

**Related Information**  


[Draft Handling](draft-handling-ed9aa41.md "You can configure how your SAP Fiori elements app handles drafts.")

