<!-- loioccd45ba3f0b446a0901b2c9d42b8ad53 -->

# Enabling an App for Key User Adaptation

Application developers can enable key users to make adaptations on the object page.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.

To enable an app for key user adaptation, application developers must set `flexEnabled` to 'true' in the `manifest.json`. For more information, see [SAPUI5 Flexibility: Enable Your App for UI Adaptation](../05_Developing_Apps/sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md).



<a name="loioccd45ba3f0b446a0901b2c9d42b8ad53__section_hdv_jzx_lqb"/>

## Working on the List Report

Key users can create different variants of the list report for users via adjusting filters, column sorting, and tab selection, for example.



## Working on the Object Page



### Enabling the Feature *Key User Adaptation* on the Object Page Header

Application developers can enable key users to make the following adaptations on the object page header:

-   remove header facets

-   add predefined header facets

-   change the order of header facets

-   rename the titles of header facets


Application developers can prepare annotations for header facets that can later be added by the key user to the object page header as follows:

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

Application developers can remove header facets via stashing, as well as restrict the adaptability of the header facets. Both can be done in the manifest:

```js
"SalesOrderManageObjectPage": {
       "type": "Component",
        "id": "SalesOrderManageObjectPage",
        "name": "sap.fe.templates.ObjectPage",
        "options": {
              "settings": {
                   "editableHeaderContent ": false,
                   "controlConfiguration": {
                        "@com.sap.vocabularies.UI.v1.HeaderFacets": {
                            "facets": {
                                "ColumnMicroChart": {
                                    "stashed": true
                                },
                                "ProgressIndicator": {
                                    "stashed": false,
                                    "flexSettings": {
                                        "designtime": "not-adaptable-visibility"
}}}}}}}}

```

> ### Note:  
> If you do not provide any entries for the header facet in the manifest, it will be rendered on the UI with the standard behavior \(by default, header facets are not stashed, and there are no restrictions regarding the adaptability\).

**Stashing**

If the application developer has defined header facets as stashed in the manifest, they are initially not visible on the UI. Such header facets are not loaded when the app is started. Key users can add these stashed header facets via key user adaptation, and make them visible for end users on the object page header. For more information, refer to [Header Facets](header-facets-17dbd5b.md).

**Restricting the Adaptability**

Application developers can restrict the adaptability of header facets via the manifest setting '`flexSettings'/'designtime`'. For example, the value '`not-adaptable-visibility`' means that all actions that influence visibility are disabled, that is, 'remove' and 'add' are not possible, but 'move' is enabled. For more details, refer to the section *Restrict adaptation for certain controls* in the topic [Enabling UI Adaptation: Other Things to Consider](../05_Developing_Apps/enabling-ui-adaptation-other-things-to-consider-de9fd55.md).

**Referencing Header Facets**

To stash header facets or restrict their adaptability, you must reference header facets in the manifest using the ID defined in the annotation. If no ID is defined in the annotation, you can reference the header facet using the concatenated ID consisting of the `AnnotationPath` term part, and the qualifier. Refer to the following metadata snippet:

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

For the first facet, the ID would be `"ProgressIndicator"`, for the second facet, it would be generated from the annotation path, in this case `"DataPoint::Rating"`.



### Form

Application developers can also enable key users to move fields inside a `FormContainer`, or from one `FormContainer` to another within the same form, provided that the `FormContainers` are based on the same entity. Key users can rename fields by changing the label text. They can also remove and add fields, and can remove, add, and move `FormContainers` within a form.

Key users can add simple properties that are not visible on the screen, but that are defined in the model, as a new field to a `FormContainer`. If the value help for the property is available, the value help is also generated. Key users can only add fields to a form once, which means that a field must not appear in the `Add` dialog if the property is already visible on the screen within this form.

Application developers can also prepare properties with the annotation `DataFieldDefault`. This annotation acts like a wrapper for different types of `DataFieldAbstract`, and app developers should specifically use it for personalization. For example, as an app developer you can add a `DataField` or a `DataFieldWithUrl` in the `DataFieldDefault` annotation.

> ### Note:  
> `DataFieldForAction`, `DataFieldForIntendBasedNavigation`, `DataFieldWithAction` and `DataFieldWithIntentBasedNavigation` annotations are not supported, as buttons should not be added to the `FormContainer`.

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

Properties for which no label has been defined get a label that consists of a warning text and the technical property name, for example `[LABEL_MISSING: mediaType]`.

> ### Note:  
> Fields that are added using key user adaptation have a stable ID provided by SAPUI5 flexibility that is different from the stable ID generated by SAP Fiori elements.



### Section/Subsection

Key users can move and rename sections and subsections on the object page.



### Embedding Content

Key users can embed, update, move and remove iFrame content \(that is, embed content\) on object page headers and sections. For more information, see [Embedding Content](https://help.sap.com/viewer/0f8b49c4dfc94bc0bda25a19aa93d5b2/Cloud/en-US/bfdf15154f16419fb60ce598b21fe515.html?q=embedding%20content).

> ### Caution:  
> You cannot embed another SAP Fiori elements app via an iFrame into an existing SAP Fiori elements app.

