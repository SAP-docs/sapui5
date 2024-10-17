<!-- loio18b17bdd49d1436fa9172cbb01e26544 -->

# Side Effects

If a user changes the content of a field or performs another activity, this change can potentially influence other fields on the UI. This system behavior is called a side effect.

Side effects are performed in the back end. However, you need to annotate the side effects implemented in the back end using side effect annotations to "inform" the front end which fields on the UI are influenced by a change, so that the front end can request new data for these fields. Otherwise, the UI may still display outdated data.

> ### Note:  
> Default side effects are relevant for most apps. You do not need to annotate these side effects. They are available by default and cannot be switched off.



<a name="loio18b17bdd49d1436fa9172cbb01e26544__section_zkt_rsg_2nb"/>

## Default Side Effects

The following side effects are available in SAP Fiori elements by default:


<table>
<tr>
<th valign="top">

User Action

</th>
<th valign="top">

Side Effect

</th>
</tr>
<tr>
<td valign="top">

Creating a new entity or draft version, either in the list report or on the object page

</td>
<td valign="top">

List binding of the parent page is refreshed to show the newly created entity.

</td>
</tr>
<tr>
<td valign="top">

Deleting an entity, either in the list report or on the object page

</td>
<td valign="top">

List binding of the parent page is refreshed to remove the deleted entity.

</td>
</tr>
<tr>
<td valign="top">

Creating a draft for an active object

</td>
<td valign="top">

List binding of the list report page is refreshed to show the new draft.

</td>
</tr>
<tr>
<td valign="top">

Discarding a draft version

</td>
<td valign="top">

List binding of the list report page is refreshed to remove the draft and show the active version.

</td>
</tr>
<tr>
<td valign="top">

Activating a draft version

</td>
<td valign="top">

List binding of the list report page is refreshed to remove the draft and show the active version.

</td>
</tr>
<tr>
<td valign="top">

Triggering an action

</td>
<td valign="top">

After executing an action successfully, the collection for which the action is defined is refreshed automatically if the following conditions apply:

-   The action is a bound action.

-   The returned instance does not correspond to the bound instance. This applies to copy actions, for example.

> ### Note:  
> You can annotate side effects on actions.



</td>
</tr>
</table>



<a name="loio18b17bdd49d1436fa9172cbb01e26544__section_w2d_vff_vcc"/>

## Side Effect Annotation Format

A side effect annotation includes the following elements:

-   Side effect source: A property change, an action, or a structural change \(creating or deleting a subitem\)

-   Side effect target: A property or structural information

-   `TriggerAction` \(optional\): The value of this property denotes the path to a function import that needs to be executed when the side effect is triggered

    > ### Note:  
    > The `TriggerAction` replaces the `PreparationAction` property that is deprecated as of the SAPUI5 1.87 release.
    > 
    > The `EffectTypes` property is deprecated as of SAPUI5 1.84 release.




### Side Effect Annotation Properties

The following side effect annotations are supported:

-   **Source properties**

    If you use a value help, combo box, checkbox, date picker or date time picker, the side effect is triggered as soon as the value is set. However, if you are typing the value, the side effect is triggered when the focus moves away from the field. If the aforementioned controls are used in combination with other input fields as a source for a side effect, then the side effect is triggered only when the focus moves away from the source field group.

    **For SAP Fiori elements for OData V2:**

    -   You can define a single property or a list of properties as a source, which forms a virtual field group.

    -   When you modify the source property and move the focus away from the source, the side effect is triggered.

    -   When you modify the virtual field group and move the focus away from the virtual field group, the side effect is triggered immediately if there is no `TriggerAction` configured in the side effect annotation. However, if the focus is changed to a control within the same virtual field group, then the side effect is not triggered.


    > ### Restriction:  
    > You cannot use navigation properties as source properties.

-   **Source entities**

    You can specify a navigation property:

    In SAP Fiori elements for OData V2: Only 1:n navigation property can be specified as the source entity.

    In SAP Fiori elements for OData V4: Any kind of navigation property \(1:1 or 1:n\) can be specified as the source entity,

    > ### Caution:  
    > You cannot specify a 1:1 association or an empty target, such as `NavigationPropertyPath`, to ensure that the whole entity is considered as the source.

    The side effect is triggered when structural changes are made \(adding or deleting an item\). The side effect is not triggered if a property of any entity is changed. This needs to be done in the entity type of the associated entity.

-   **Target properties**

    You can define a property or a list of properties to be refreshed. You can also use 1:1 navigation properties. If this is the case, a request with a `$expand` to this navigation property is triggered.

-   **Target entities**

    You can specify 1:1 and 1:n navigation properties.

    If you specify an empty target, the whole entity is updated.

    If a trigger action is defined but the `TargetProperties` or `TargetEntities` are not defined, then only the trigger action is called.




<a name="loio18b17bdd49d1436fa9172cbb01e26544__section_yqw_b3g_vcc"/>

## Scenarios Where Side Effects Cannot Be Triggered

As a general rule, no data is sent to the back end until the UI validation errors are solved. This means that the side effect is not triggered when there are validation errors related to the source property or a set of properties.

For example, if a data field referencing the `ProductCategory` or `MainProductCategory` property has a field value entered with greater than `MaxLength="40"`, no side effect is triggered. Both properties are successfully validated to trigger the side effect.

> ### Sample Code:  
> ```
> <EntityType Name="SEPMRA_I_ProductCategoryType" sap:label="Category" sap:content-version="1">
>     <Key>
>         <PropertyRef Name="ProductCategory"/>
>     </Key>
>     <Property Name="ProductCategory" Type="Edm.String" Nullable="false" MaxLength="40" sap:label="Category"/>
>     <Property Name="MainProductCategory" Type="Edm.String" MaxLength="40" sap:label="Main Category" sap:value-list="fixed-values"/>
>     <NavigationProperty Name="to_MainCategory" Relationship="STTA_PROD_MAN.assoc_BBDC3EA034F824A7382F8EEF561C1160" FromRole="FromRol
>      e_assoc_BBDC3EA034F824A7382F8EEF561C1160" ToRole="ToRole_assoc_BBDC3EA034F824A7382F8EEF561C1160"/>
> </EntityType>
> 
> ```

> ### Sample Code:  
> ```
> 
> <Annotations Target="NAMESPACE.ENTITYTYPE">
>     <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="ProductChanged">
>         <Record>
>             <PropertyValue Property="SourceProperties">
>                 <Collection>
>                     <PropertyPath>ProductCategory</PropertyPath>
>                     <PropertyPath>MainProductCategory</PropertyPath>
>                 </Collection>
>             </PropertyValue>
>             <PropertyValue Property="TargetEntities">
>                 <Collection>
>                     <NavigationPropertyPath></NavigationPropertyPath>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> ```



<a name="loio18b17bdd49d1436fa9172cbb01e26544__section_qcm_s54_drb"/>

## Additional Features in SAP Fiori Elements for OData V2



### Side Effect Annotation Format

You can define side effects either in the back end or in local annotation files.



### Side Effect Annotation Properties

-   **Target Entities**

    For 1:n, the request is not sent by the binding of the table. This means that paging is not considered. Therefore, 1:n should be used carefully.

-   **Side effect without a specific source**

    You can define a side effect without any source properties or source entities. This is called a global side effect. For more information, see [Using Global Side Effects](using-global-side-effects-955ae31.md).


> ### Note:  
> -   Side effects for non-draft apps are supported. The side effects with source properties are triggered once the user saves the entity and the save action is successful. They are also supported when structural changes are made to the items table in the object page that is configured as source.
> 
> -   If a text arrangement annotation is used, especially in combination with a value list annotation, you also need to provide a side-effect annotation to indicate that the text must be updated when the user sets a different key.
> 
> -   Side effects for non-draft apps are also supported for action buttons. See *Example: Side effect after executing an action* in [Side Effect Annotations: Examples](side-effect-annotations-examples-61cf21d.md).



<a name="loio18b17bdd49d1436fa9172cbb01e26544__section_t4t_nv4_drb"/>

## Additional Features in SAP Fiori Elements for OData V4



### Defining Side Effects on Unbound Actions

In SAP Fiori elements for OData V4, you can define side effects on unbound actions. As these actions are not bound to a context, the definition must use an absolute path.

This allows you to influence all the entities of a list when completing an unbound action, refreshing the entire entity list, as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Schema Namespace="sap.fe.core.Service" xmlns=http://docs.oasis-open.org/odata/ns/edm>
>     <EntityContainer Name="EntityContainer">
>         <ActionImport Name="unBoundAction" Action="sap.fe.core.Service.unBoundAction" />
>         ...
>     </EntityContainer>
>     ...
>     <Action Name="unBoundAction" IsBound="false" />
>     ...
>     <Annotations Target="sap.fe.core.Service.RootEntity">
>         <Annotation Term="UI.LineItem" Qualifier="sample7">
>             <Collection>
>                 <Record Type="UI.DataFieldForAction">
>                     <PropertyValue Property="Label" String="Table Refresh" />
>                     <PropertyValue Property="Action" String="sap.fe.core.Service.EntityContainer/unBoundAction" />
>                     <PropertyValue Property="InvocationGrouping" EnumMember="UI.OperationGroupingType/ChangeSet" />
>                 </Record>
>                 ...
>             </Collection>
>         </Annotation>
>     </Annotations>
>     <Annotations Target="sap.fe.core.Service.UnboundAction()">
>         <Annotation Term="Common.SideEffects">
>             <Record Type="Common.SideEffectsType">
>                 <PropertyValue Property="TargetEntities">
>                     <Collection>
>                         <NavigationPropertyPath>"/sap.fe.core.Service.EntityContainer/RootEntity"
>                         </NavigationPropertyPath>
>                     </Collection>
>                 </PropertyValue>
>             </Record>
>         </Annotation>
>     </Annotations>
> </Schema>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> // LineItem annotation with an unbound action
> annotate RootEntity with @(
>     UI    : {
>         …
>             LineItem : [
>                 {
>                     $Type             : 'UI.DataFieldForAction',
>                     Label             : 'My Unbound action',
>                     Action            : 'MyService.EntityContainer/unBoundAction',
>                     InvocationGrouping: #ChangeSet
>                 },
>                 {
>                     $Type: 'UI.DataField',
>                     Value: property1,
>                 },
>                 {
>                     $Type: 'UI.DataField',
>                     Value: property2
>       },
>       {
>         $Type: 'UI.DataField',
>         Value: property3
>       }
>     ],
>   },
> …
> );
> 
> //actions and corresponding side effects for different samples
> service MyService {
> 
> //Side effect annotation using an abosolute path
> @Common.SideEffects: {TargetEntities: ['/MyService.EntityContainer/RootEntity']}
>     action unBoundAction();
> }
> ```



### Target Entities

The list is refreshed if a 1:n association is mentioned as a target entity.

You can also specify absolute paths, that is, paths starting with the entity container. They can be defined as `TargetEntities` to refresh complete entity sets in the list report.

> ### Example:  
> `<NavigationPropertyPath>/namespace.to.EntityContainer/EntityType</NavigationPropertyPath>`



### Value List Refresh

Value lists are cached during runtime for better performance. Define an absolute side effect with the value list collection as the target in the following cases:

-   If you are using a value list referring to transactional data

-   If you expect the value list to change due to actions or changes made by users


You can find an example in the following sample code:

> ### Sample Code:  
> ValueListCollection
> 
> ```
> <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="ChangeOfProperty">
>      <Record>
>           <PropertyValue Property="SourceProperties">
>                <Collection>
>                     <PropertyPath>PropertyName</PropertyPath>
>                </Collection>
>           </PropertyValue>
>           <PropertyValue Property="TargetEntities">
>                <Collection>
>                     <NavigationPropertyPath>/Namespace.EntityContainer/ValueListCollection</NavigationPropertyPath>
>                </Collection>
>           </PropertyValue>
>      </Record>
> </Annotation>
> ```



### Side Effects for Extension Fields in Forms

SAP Fiori elements for OData V4 supports executing side effects when using custom extension fields in a form if the source properties of a side effect contain the property used in an extension field. To enable side effects for extension fields, specify the property used in the extension field in the `manifest.json` file with the `property` key.

In the following example, the side effects with `NameProperty` as a source property are executed:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "targets": {
>     "MyObjectPage": {
>         "type": "Component",
>         "id": "Default",
>         "name": "sap.fe.templates.ObjectPage",
>         "viewLevel": 1,
>         "options": {
>             "settings": {
>                 "contextPath": "/RootEntity",
>                 "editableHeaderContent": true,
>                 "controlConfiguration": {
>                     "@com.sap.vocabularies.UI.v1.Identification": {
>                         "fields": {
>                             "customFormElementIdentification1": {
>                                 "template": "sap.fe.core.fpmExplorer.customFormElementContent.CustomFormElement1",
>                                 "label": "Custom FormElement 1",
>                                 "property": "NameProperty"
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

Side effects are executed when the focus moves away from the extension field.

Check out our live example in the flexible programming model explorer at [Extension Points - Custom Form Element](https://latest.testapp.sapfe.c.eu-de-2.cloud.sap/test-resources/sap/fe/core/fpmExplorer/index.html#/customElements/customFormElementContent).

**Related Information**  


[Side Effect Annotations: Examples](side-effect-annotations-examples-61cf21d.md "This topic provides some examples for annotating side effects.")

[Using Global Side Effects](using-global-side-effects-955ae31.md "Global side effects are those side effects that are defined without any source properties or source entities.")

