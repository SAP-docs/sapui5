<!-- loiod59dbec411f04a64bd6d6dda898fdc84 -->

# Enabling the Upload Functionality

The SAP Fiori elements Table building block provides a built-in upload functionality that allows users to upload files to the server.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

When the upload functionality is enabled, the user can do the following:

-   Upload files either by dragging and dropping them onto the table, or by clicking the *Upload* button

-   Download the uploaded files by clicking on the file name in the table

-   Delete the uploaded files by selecting the lines and clicking on the *Delete* button, or by using the table's context menu


Uploading and deleting is only available in edit mode.

> ### Note:  
> To prevent security issues and protect data from being created or processed with malicious content, you must ensure the following security measures are in place:
> 
> -   Define `@Core.AcceptableMediaTypes` to specify allowed file types.
> 
> -   The back-end service framework must ensure a virus scan and other security measures, such as maximum file size limitations and MIME-type restrictions, are in place.
> 
> -   You must also implement file validation and data sanitization in the back end.
> 
> 
> For more security-related information, see [Security Configuration](security-configuration-ba0484b.md).



<a name="loiod59dbec411f04a64bd6d6dda898fdc84__section_uty_tp2_2cc"/>

## Prerequisites

To enable upload functionality, ensure the following prerequisites are met:

-   The entity type must have an `Edm.Stream` type property that is used to store the uploaded file.

-   The `UI.LineItem` annotation must contain a reference to the `Edm.Stream` type property that is used to store the uploaded file.

-   The entity type must have the `UI.MediaResource` annotation with the `Stream` property referencing the `Edm.Stream` type property that is used to store the uploaded file.


Here is an example of how to define the entity type with the required annotations:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="Namespace.EntityType">
>     <Annotation Term="UI.LineItem">
>         <Collection>
>             <Record Type="UI.DataField">
>                 <PropertyValue Property="Value" Path="PropertyOfEdmStreamType"/>
>                 <PropertyValue Property="Label" String="File"/>
>             </Record>
>         </Collection>
>     </Annotation>
>     <Annotation Term="UI.MediaResource">
>         <Record Type="UI.MediaResourceType">
>             <PropertyValue Property="Stream" Path="file"/>
>         </Record>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS annotation
> 
> You can use the `Attachments` plug-in to define the entity type. For more information about the plug-in, see [Attachments](https://cap.cloud.sap/docs/plugins/#attachments).

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Upload Table](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableUpload).



<a name="loiod59dbec411f04a64bd6d6dda898fdc84__section_zny_452_2cc"/>

## Additional Configuration



### Add Additional Columns and Actions to the Table

You can add additional columns and actions to the table by either defining further `UI.LineItem` annotations or by adding custom columns and actions into the `manifest.json` file, as described in [Defining Line Items](defining-line-items-f0e1e17.md).



### Control the Visibility and Enablement of the *Upload* Button

You can control the visibility and the enablement of the *Upload* button in the same way as you can control the *Create* button for any other table. A new instance is created through uploading a file, so the *Upload* button has the same semantic meaning as the *Create* button. For more information about controlling the visibility and enablement of the *Create* button, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).



### Restrict File Type and Size

The back-end service framework must ensure a virus scan and other security measures, such as maximum file size limitations and MIME-type restrictions, are in place.

You can restrict the file type and the size of the files to be uploaded with the `MaxLength` and `Core.AcceptableMediaTypes` annotation, as described in [Enabling Stream Support](enabling-stream-support-b236d32.md).

