<!-- loio5760b638ea274d7aab59e4e434899528 -->

# Using Images and Icons

You can use images, initials, and icons in SAP Fiori elements.

You can display a field as an avatar by using the following annotations:

-   Annotate an ***Edm.Stream*** type field with any of the following:

    -   `UI.isImage`

    -   `Core.MediaType` starting with `image/`


-   Annotate an ***Edm.String*** type field with `UI.IsImageUrl`.


The usage of the field as an avatar is supported in forms and all table types.

For `Edm.Stream` properties, upload is supported, so the user can change the image used in the avatar.

The avatar shape is a square by default. You can turn it into a circle by using the `Common.IsNaturalPerson` annotation for images of people.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <EntityType Name="Items">
>     <Key>
>         <PropertyRef Name="ID"/>
>     </Key>
>     <Property Name="ID" Type="Edm.Int32" Nullable="false"/>
>     <Property Name="binaryImage" Type="Edm.Stream"/>
>     <Property Name="streamImage" Type="Edm.Stream"/>
>     <Property Name="stringImage" Type="Edm.String"/>
> </EntityType>
> 
> <Annotations Target=“MyImageService.Items/binaryImage">
>     <Annotation Term="UI.IsImage" Bool="true"/>
>     <Annotation Term="Common.IsNaturalPerson" Bool="true"/>
> </Annotations>
>       
> <Annotations Target="MyImageService.Items/streamImage">
>     <Annotation Term="Core.MediaType" String="image/gif"/>
> </Annotations>
> 
> <Annotations Target="MyImageService.Items/stringImage">
>     <Annotation Term="UI.IsImageUrl" Bool="true"/>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> entity Items
> {
>     key ID : Integer;
>         binaryImage : LargeBinary @(
>             UI.IsImage : true,
>             Common.IsNaturalPerson: true
>         );
>         streamImage : LargeBinary @(
>             Core.MediaType: "image/gif"
>         );
> 
>         stringImage : String (
>             UI.IsImageUrl : true
>         );
> }
> ```

For more information, see [Enabling Stream Support](enabling-stream-support-b236d32.md).

You can set the `imageFitType` property for a field to determine how an image fits in the avatar's container using the `formatOptions` of the field. The default value is `Cover`, which sets the image to be scaled to cover the container. You can set the `imageFitType` to `Contain`, which sets the image to be scaled so that the width and height can fit in the container. You can also set the `enableEnlargeImage` property to define if users can open and enlarge the image in a popup, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.FieldGroup#myFieldGroup": {
>         "fields": {
>             "DataField::myImage_content": {
>                 "formatOptions": {
>                     "imageFitType": "Contain",
>                     "enableEnlargeImage": true
>                 }
>             }
>         }
>     }
> }
> ```

For the avatar in the object page header, use the `imageFitType` annotation as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui5": {
>     "routing": {
>         "targets": {
>             "SalesOrderManageObjectPage": {
>                 "options": {
>                     "settings": {
>                         "content": {
>                             "header": {
>                                 "avatar": {
>                                     "imageFitType": "Contain"
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

For more information about the usage of the avatar in the object page header, see [Setting Up the Object Page Header](setting-up-the-object-page-header-cce93e6.md).

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Field - Avatar](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/field/fieldAvatar).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Using Images, Initials, and Icons](using-images-initials-and-icons-79fb5fd.md).

