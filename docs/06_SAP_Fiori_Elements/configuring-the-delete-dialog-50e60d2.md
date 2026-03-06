<!-- loio50e60d259d2a4c939f8b0955c20afe52 -->

# Configuring the Delete Dialog

You can adapt the text in the delete dialog to match your requirements when deleting an object or item from the tables in the list report or object page.

The delete dialog derives its text from the `Title` and `Description` properties of the `UI.HeaderInfo` annotation, which is defined in the entity set bound to the table. The table can be in the list report, object page, and subobject page.

-   In fullscreen mode, the delete option is available in the list report, object page header, and subobject page header.

    When a user deletes an item from the table, the delete confirmation message appears in three different formats, based on the properties defined in the `UI.HeaderInfo` annotation.

    -   Both the `Title` and `Description` properties are defined:

        The delete confirmation message includes only the title, even though the description is defined, as shown in the following screenshot:

        ![](images/Delete_Dialog_1b_ad1d3f4.png)

        The following sample code shows the `UI.HeaderInfo` annotation in which `Title` and `Description` are defined:

        > ### Sample Code:  
        > XML Annotation
        > 
        > ```xml
        > <Annotation Term="UI.HeaderInfo"> 
        >   <Record> 
        >     <PropertyValue Property="TypeName" String="Sales Order" /> 
        >     <PropertyValue Property="TypeNamePlural" String="Sales Orders" /> 
        >     <PropertyValue Property="Title"> 
        >       <Record Type="UI.DataField"> 
        >         <PropertyValue Property="Value" Path="so_id" /> 
        >        </Record> 
        >     </PropertyValue> 
        >     <PropertyValue Property="Description"> 
        >       <Record Type="UI.DataField"> 
        >         <PropertyValue Property="Value" String="Sales Order" /> 
        >       </Record>   
        >     </PropertyValue> 
        >   </Record> 
        > </Annotation>
        > 
        > ```

        > ### Sample Code:  
        > ABAP CDS Annotation
        > 
        > ```
        > 
        > @UI.headerInfo: {
        >   typeName: 'Sales Order',
        >   typeNamePlural: 'Sales Orders',
        >   title: {
        >     value: 'SO_ID',
        >     type: #STANDARD
        >   },
        >   description: {
        >     type: #STANDARD
        >   }
        > }
        > annotate view SALESORDERMANAGE with {
        > 
        > }
        > 
        > ```

    -   Both the `Title` and `Description` properties aren't defined:

        The following generic delete confirmation message is displayed:

        ![](images/Configure_Delete_dialog_-_FCL-_Both_properties_undefined_8a3c637.png)



-   In flexible column layout mode, the delete option is available in the list report, object page table, and subobject page table.

    When a user deletes an item from the table, the delete confirmation message appears in three different formats, based on the properties defined in the `UI.HeaderInfo` annotation.

    -   Both the `Title` and `Description` properties are defined:

        The delete confirmation message includes both the title and description, as shown in the following screenshot:

        ![](images/Configure_Delete_dialog_-_FCL-_Both_properties_defined_c9da227.png)

    -   Only `Title` is defined:

        The delete confirmation message includes only the title, as shown in the following screenshot:

        ![](images/Configuring_Delete_dialog-_FCL-Only_Title_defined_2c2de7f.png)

    -   Both the `Title` and `Description` properties aren't defined:

        The following generic delete confirmation message is displayed:

        ![](images/Configure_Delete_dialog_-_FCL-_Both_properties_undefined_8a3c637.png)



For more information about the i18n keys to override the default texts, see [Localization of UI Texts](localization-of-ui-texts-91b525b.md).

