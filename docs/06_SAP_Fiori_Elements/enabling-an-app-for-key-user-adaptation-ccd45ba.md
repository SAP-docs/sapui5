<!-- loioccd45ba3f0b446a0901b2c9d42b8ad53 -->

# Enabling an App for Key User Adaptation

You can enable key users to make adaptations in the list report and on the object page.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

To enable an app for key user adaptation, you must set `flexEnabled` to 'true' in the `manifest.json` file. For more information, see [SAPUI5 Flexibility: Enable Your App for UI Adaptation](../05_Developing_Apps/sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md).

Key users can make the following adaptations on applications:

-   Create different variants of the list report for users by adjusting filters, column sorting, and tab selection, for example.

-   Define the fields visible in the mass edit dialog. In the key user adaptation mode, all fields except static read-only fields are available.

-   Move, rename, and remove buttons and add previously removed buttons to the following places:

    -   A toolbar in the header and the table of the list report

    -   The header, section, subsection, table, and footer of the object page


    > ### Restriction:  
    > Some standard actions, such as edit, save, and delete, are excluded from key user adaptation.
    > 
    > Actions with dynamic visibility cannot be added nor removed.


-   Split and combine actions in tables on the object page and in the list report.
-   Move, rename, remove, and reveal sections and subsections of the object page.

-   Edit the facets of the object page header. For more information, see the [Enabling Key User Adaptation on the Object Page Header](enabling-an-app-for-key-user-adaptation-ccd45ba.md#loioccd45ba3f0b446a0901b2c9d42b8ad53__section_rhq_1nh_tcc) section in this topic.

-   Move, rename, add, and remove parts of forms. For more information, see the [Enabling Key User Adaptation in Forms](enabling-an-app-for-key-user-adaptation-ccd45ba.md#loioccd45ba3f0b446a0901b2c9d42b8ad53__section_shq_1nh_tcc) section in this topic.

-   Embed, update, move and remove iFrame content \(that is, embedded content\) on object page headers and sections. For more information, see [Embedding Content](https://help.sap.com/docs/ui5-flexibility-for-key-users/ui5-flexibility-for-key-users/embedding-content).

    > ### Caution:  
    > You cannot embed another SAP Fiori elements app into an existing SAP Fiori elements app by using an iFrame.




<a name="loioccd45ba3f0b446a0901b2c9d42b8ad53__section_rhq_1nh_tcc"/>

## Enabling Key User Adaptation on the Object Page Header

You can enable key users to make the following adaptations on the object page header:

-   Remove header facets

-   Add predefined header facets

-   Change the order of header facets

-   Rename the titles of header facets


You can prepare annotations for header facets. These facets can later be added by the key user to the object page header. Make the settings as shown in the following sample code:

> ### Sample Code:  
> ```xml
> <Annotation Term="UI.HeaderFacets">
> <Collection>
>   ...
>   <Record Type="UI.ReferenceFacet">
>     <PropertyValue Property="Label" String="Column MicroChart"/>
>     <PropertyValue Property="ID" String="ColumnMicroChart"/>
>     <PropertyValue Property="Target" AnnotationPath="_Item/@UI.Chart#ColumnMaxPath"/>
>     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>   </Record>
>   <Record Type="UI.ReferenceFacet">
>     <PropertyValue Property="Label" String="Progress Indicator"/>
>     <PropertyValue Property="ID" String="ProgressIndicator"/>
>     <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#Progress"/>
>     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>   </Record>
>   ...
> </Collection>
> </Annotation>
> 
> ```

You can remove header facets by stashing, as well as restrict the adaptability of the header facets. Make the settings in the `manifest.json` file as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "SalesOrderManageObjectPage": {
>        "type": "Component",
>         "id": "SalesOrderManageObjectPage",
>         "name": "sap.fe.templates.ObjectPage",
>         "options": {
>               "settings": {
>                    "editableHeaderContent ": false,
>                    "controlConfiguration": {
>                         "@com.sap.vocabularies.UI.v1.HeaderFacets": {
>                             "facets": {
>                                 "ColumnMicroChart": {
>                                     "stashed": true
>                                 },
>                                 "ProgressIndicator": {
>                                     "stashed": false,
>                                     "flexSettings": {
>                                         "designtime": "not-adaptable-visibility"
> }}}}}}}}
> ```

> ### Note:  
> If you do not provide any entries for the header facet in the `manifest.json` file, it will be rendered on the UI with the standard behavior: By default, header facets are not stashed, and there are no restrictions regarding the adaptability.



### Referencing Header Facets

To stash header facets or restrict their adaptability, you must reference header facets in the `manifest.json` file using the ID defined in the annotation. If no ID is defined in the annotation, you can reference the header facet using an ID that consists of the `AnnotationPath` term part and the qualifier. The following sample code shows how the ID is defined or generated:

> ### Sample Code:  
> ```xml
> <Record Type="UI.ReferenceFacet">
>     <PropertyValue Property="Label" String="Progress Indicator"/>
>     <PropertyValue Property="ID" String="ProgressIndicator"/>
>     <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#Progress"/>
> </Record>
> <Record Type="UI.ReferenceFacet">
>     <PropertyValue Property="Label" String="Rating Indicator"/>
>     <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#Rating"/>
> </Record>
> 
> ```

For the first facet, the ID is "`ProgressIndicator`", and for the second facet, it is generated from the annotation path, in this case, "`DataPoint::Rating`".



### Stashing

If you have defined header facets as stashed in the `manifest.json` file, they are initially not visible on the UI. Stashed header facets are not loaded when the app is started. Key users can add header facets that have been stashed and make them visible for end users on the object page header. For more information, see [Header Facets](header-facets-17dbd5b.md).



### Restricting the Adaptability

You can restrict the adaptability of header facets by using the manifest setting '`flexSettings'/'designtime`'. For example, the value '`not-adaptable-visibility`' disables all actions that influence visibility, meaning 'remove' and 'add' are not possible but 'move' is enabled. For more information, see the [Restrict Adaptation for Certain Controls](../05_Developing_Apps/enabling-ui-adaptation-other-things-to-consider-de9fd55.md#loiode9fd55c69af4b46863f5d26b5d796c4__section_restrictadaptation) section in [Enabling UI Adaptation: Other Things to Consider](../05_Developing_Apps/enabling-ui-adaptation-other-things-to-consider-de9fd55.md).



<a name="loioccd45ba3f0b446a0901b2c9d42b8ad53__section_shq_1nh_tcc"/>

## Enabling Key User Adaptation in Forms

You can also enable key users to move fields inside a `FormContainer` or from one `FormContainer` to another within the same form, provided that the `FormContainers` are based on the same entity. Key users can do the following:

-   Rename fields by changing the label text

-   Remove and add fields

-   Remove, add, and move `FormContainers` within a form

-   Add simple properties that are not visible on the screen but that are defined in the model, as a new field to a `FormContainer`. If the value help for the property is available, the value help is also generated. Key users can only add fields to a form once, which means that a field must not appear in the *Add* dialog if the property is already visible on the screen within this form.


You can also provide properties with the annotation `DataFieldDefault`. This annotation acts like a wrapper for different types of `DataFieldAbstract`. You should specifically use `DataFieldDefault` for personalization purposes by adding a `DataField` or a `DataFieldWithUrl` in the `DataFieldDefault` annotation, for example.

> ### Note:  
> `DataFieldForAction`, `DataFieldForIntendBasedNavigation`, `DataFieldWithAction`, and `DataFieldWithIntentBasedNavigation` annotations are not supported because you must not add buttons to the `FormContainer`.

```js
OrganizationDivision : String(2) @(
      Common : {Label : 'Division'},
      UI : {
         DataFieldDefault : {
               $Type: 'UI.DataField',
               Value: OrganizationDivision,
               Label: 'Default Division'
         }
     }
 );

```

Properties for which no label has been defined get a label that consists of a warning text and the technical property name, such as `[LABEL_MISSING: mediaType]`.

> ### Note:  
> Fields that are added using key user adaptation have a stable ID provided by SAPUI5 flexibility that is different from the stable ID generated by SAP Fiori elements.

