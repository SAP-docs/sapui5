<!-- loio1c90f8d1200e4213b4ea80e994e1c864 -->

# Using Global Side Effects

You can configure global side effects.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Using Global Side Effects](using-global-side-effects-955ae31.md).

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

If the `TriggerAction` is annotated with a global side effect, then on pressing [Enter\] the `TriggerAction` replaces the `PreparationAction` call. For more information, see [Draft Handling](draft-handling-b0eb3cc.md).

To optimize performance, make the annotations for the desired side effects as specific as possible.

It is recommended to specify the target properties or target entities for global side effects. For exceptional cases, apps can configure to refresh the whole entity with the help of the `forceGlobalRefresh` parameter in the `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "sap.ui.generic.app": {
>     "settings": {
>         "forceGlobalRefresh": true,
>         ...
>     }
> },
> ```

-   If the `forceGlobalRefresh` parameter is set to `true`, a refresh of the entire model is triggered when you press [Enter\].

-   If the parameter is set to `false`, then only the annotated targets are refreshed, and/or the annotated `TriggerAction` is called.

-   As of SAPUI5 1.106, if the parameter is not set, the \(runtime\) default is `false`.


For newly generated apps, the \(design time\) default is `false`, that is, the project generation wizard generates `"forceGlobalRefresh": false`.

**Related Information**  


[Draft Handling](draft-handling-b0eb3cc.md "You can configure how your SAP Fiori elements app handles drafts.")

