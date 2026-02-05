<!-- loio14338eeac1b549b9aada477e4f547391 -->

# Adding Action Buttons to Forms in Sections

You can add action buttons to the forms contained in sections. These forms are indicated by `com.sap.vocabularies.UI.v1.FieldGroup`. A form action button is then displayed in the toolbar of the object page section that contains the form.



You can add the following action buttons:

-   Buttons calling an OData function \(using `DataFieldForAction`\)

-   Buttons triggering intent-based navigation \(using `DataFieldForIntentBasedNavigation`\)


To do so, add a `DataFieldForAction` or `DataFieldForIntentBasedNavigation` to the data of your `FieldGroup` definition. The following example shows the definition of a form with two buttons:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotation Term="UI.FieldGroup" Qualifier="TechnicalData">
>     <Record>
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="Width"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Medium"/>
>                 </Record>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="Depth"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Medium"/>
>                 </Record>
>                 ...
>                 <Record Type="UI.DataFieldForAction">
>                     <PropertyValue Property="Label" String="Copy"/>
>                     <PropertyValue Property="Action" String="STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductCopy"/>
>                 </Record>
>                 <Record Type="UI.DataFieldForIntentBasedNavigation">
>                     <PropertyValue Property="Label" String="Manage Products (ST)" />
>                     <PropertyValue Property="SemanticObject" String="EPMProduct" />
>                 </Record>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="Label" String="Technical Data"/>
>     </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.fieldGroup: [
>   {
>     importance: #MEDIUM,
>     position: 10,
>     qualifier: 'TechnicalData',
>     groupLabel: 'Technical Data'
>   }
> ]
> WIDTH;
> 
> @UI.fieldGroup: [
>   {
>     importance: #MEDIUM,
>     position: 20,
>     qualifier: 'TechnicalData'
>   }
> ]
> DEPTH;
> 
> @UI.fieldGroup: [
>   {
>     label: 'Copy',
>     dataAction: 'STTA_C_MP_ProductCopy',
>     type: #FOR_ACTION,
>     position: 30,
>     qualifier: 'TechnicalData'
>   },
>   {
>     label: 'Manage Products (ST)',
>     type: #FOR_INTENT_BASED_NAVIGATION,
>     position: 40,
>     qualifier: 'TechnicalData'
>   }
> ]
> 
> @Consumption.semanticObject: 'EPMProduct'
> product;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.FieldGroup #TechnicalData : {
>     Data : [
>         {
>             $Type : 'UI.DataField',
>             Value : Width,
>             ![@UI.Importance] : #Medium
>         },
>         {
>             $Type : 'UI.DataField',
>             Value : Depth,
>             ![@UI.Importance] : #Medium
>         },
>         {
>             $Type : 'UI.DataFieldForAction',
>             Label : 'Copy',
>             Action : 'STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductCopy'
>         },
>         {
>             $Type : 'UI.DataFieldForIntentBasedNavigation',
>             Label : 'Manage Products (ST)',
>             SemanticObject : 'EPMProduct'
>         }
>     ],
>     Label : 'Technical Data'
> }
> 
> ```

You must now link the `UI.FieldGroup` configured above to the `UI.ReferenceFacet` that corresponds to the form:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Facets">
>     <Collection>
>     ....                  
>         <Record Type="UI.ReferenceFacet">
>             <PropertyValue Property="Label" String="Technical Data"/>
>             <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#TechnicalData"/>
>         </Record>
>     ....
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.Facet: [
>   {
>     label: 'Technical Data',
>     targetQualifier: 'TechnicalData',
>     type: #FIELDGROUP_REFERENCE,
>     purpose: #STANDARD
>  }
> ]
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> {
>    $Type             : 'UI.ReferenceFacet',
>    Label             : 'Technical Data',
>    ID                : 'TechnicalData',
>    Target            : '@UI.FieldGroup#TechnicalData'
> },
> 
> ```

For more information, see [Configuring External Navigation](configuring-external-navigation-df91695.md).

> ### Tip:  
> SAP recommends applications to place the action that is most important on the very left. For more information, see [Action Placement](https://experience.sap.com/fiori-design-web/action-placement/).

You can change the form action button styles through UI adaptations.

