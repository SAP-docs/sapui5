<!-- loio59bfd317ed5d4af3b490abbe7a9731d8 -->

# Extending Delivered Apps With Key User Adaptation

App developers and key users can extend and configure the app UI.

**UI Adaptation**


<table>
<tr>
<th valign="top" rowspan="2">

Adaptation Type

</th>
<th valign="top" rowspan="2">

Developer Adaptation \(Adaptation Project\)

</th>
<th valign="top" colspan="2">

Key User Adaptation

</th>
</tr>
<tr>
<th valign="top">

Enabling Adaptation

</th>
<th valign="top">

Adapting the UI

</th>
</tr>
<tr>
<td valign="top">

**Description**

</td>
<td valign="top">

App developers can adapt the UI at design time.

</td>
<td valign="top" colspan="2">

Key users can adapt the application at runtime by changing the UI from the initial state of the app to a personalized view for end users. In the *User Menu*, key users can then choose *Adapt UI* and change the user interface of SAP Fiori apps directly.

For more information about key user adaptation, see [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md).

</td>
</tr>
<tr>
<td valign="top">

**Performed By**

</td>
<td valign="top">

App Developer

</td>
<td valign="top">

App Developer

</td>
<td valign="top">

Key User

</td>
</tr>
<tr>
<td valign="top">

**Documentation**

</td>
<td valign="top">

App developers adapt the UI manually or use SAP Fiori tools for the most common settings. For more information, see [Extending SAP Fiori Applications](https://help.sap.com/docs/bas/developing-sap-fiori-app-in-sap-business-application-studio/extending-sap-fiori-application?version=Cloud).

</td>
<td valign="top">

For information about how application developers can enable an app for key user adaptation, see [Enabling an App for Key User Adaptation](enabling-an-app-for-key-user-adaptation-ccd45ba.md).

For more information about what you have to consider when developing apps that support key user adaptation, see [SAPUI5 Flexibility: Enable Your App for UI Adaptation](../05_Developing_Apps/sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md).

</td>
<td valign="top">

See further in this topic.

</td>
</tr>
</table>

SAP Fiori elements for OData V4 provides configuration settings for the list report page, the object page, and for the filter bar and tables. These configuration settings are applied to the app's `manifest.json` file, so they are not immediately visible on the UI. When a key user activates a new version and exits key user adaptation mode, the application automatically reloads with the new settings.

Key users can make the following adaptations on applications:

-   Create different variants of the list report page for users by adjusting filters, column sorting, and tab selection, for example.

-   Change the text arrangement of fields

-   Change the label for fields

-   Define the fields visible in the mass edit dialog. In the key user adaptation mode, all fields except static read-only fields are available.

-   Move, rename, and remove buttons and add previously removed buttons to the following places:

    -   A toolbar in the header and the table of the list report page

    -   The header, section, subsection, table, and footer of the object page


    > ### Restriction:  
    > Some standard actions, such as edit, save, and delete, are excluded from key user adaptation.
    > 
    > Actions with dynamic visibility cannot be added nor removed.


-   Split and combine actions in tables on the object page and on the list report page.

-   Move, rename, remove, and reveal sections and subsections of the object page.

-   Edit the facets of the object page header. For more information, see the [Enabling Key User Adaptation on the Object Page Header](enabling-an-app-for-key-user-adaptation-ccd45ba.md#loioccd45ba3f0b446a0901b2c9d42b8ad53__section_rhq_1nh_tcc) section in the [Enabling an App for Key User Adaptation](enabling-an-app-for-key-user-adaptation-ccd45ba.md) topic.

-   Move, rename, add, and remove parts of forms. For more information, see the [Enabling Key User Adaptation in Forms](enabling-an-app-for-key-user-adaptation-ccd45ba.md#loioccd45ba3f0b446a0901b2c9d42b8ad53__section_shq_1nh_tcc) section in the [Enabling an App for Key User Adaptation](enabling-an-app-for-key-user-adaptation-ccd45ba.md) topic.

-   Embed, update, move and remove iFrame content \(that is, embedded content\) on object page headers and sections. For more information, see [Embedding Content](https://help.sap.com/docs/ui5-flexibility-for-key-users/ui5-flexibility-for-key-users/embedding-content).

    > ### Caution:  
    > You cannot embed another SAP Fiori elements app into an existing SAP Fiori elements app by using an iFrame.


The following table provides an overview of the additional SAP Fiori elements-specific configuration settings for key users:

**Configuration Settings for Key Users**


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

Setting

</th>
<th valign="top">

Values

</th>
<th valign="top">

Description

</th>
<th valign="top">

Documentation

</th>
<th valign="top">

Additional Information

</th>
</tr>
<tr>
<td valign="top" rowspan="2">

List Report Page

</td>
<td valign="top">

*Variant Management*

</td>
<td valign="top">

*Page*

*Control*

*None*

</td>
<td valign="top">

Configure how variant management is used on the list report page.

</td>
<td valign="top">

[Creating a List Report Page Without Variant Management](creating-a-list-report-page-without-variant-management-094fe8c.md)

</td>
<td valign="top">

> ### Note:  
> Settings made by a key user can override those made by an end user. This means that end users may need to reapply their personalization settings.



</td>
</tr>
<tr>
<td valign="top">

*Initial Load*

</td>
<td valign="top">

*Auto*

*Enabled*

*Disabled*

</td>
<td valign="top">

Configure how data is loaded initially when the app is loaded.

</td>
<td valign="top">

[Loading Behavior of Data on Initial Launch of the Application](loading-behavior-of-data-on-initial-launch-of-the-application-9f4e119.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Filter Bar

</td>
<td valign="top" colspan="2">

*Display Clear Button*

</td>
<td valign="top">

Configure if the *Clear* button is displayed in the filter bar.

</td>
<td valign="top">

[Adding a Clear Button](adapting-the-filter-bar-609c39a.md#loio609c39a7498541559dbef503c1ffd194__add_clear_button) in [Adapting the Filter Bar](adapting-the-filter-bar-609c39a.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Use Semantic Date Range*

</td>
<td valign="top">

Configure if the semantic date range options in the `manifest.json` are active.

</td>
<td valign="top">

[Enabling Semantic Operators in the Filter Bar](enabling-semantic-operators-in-the-filter-bar-fef65d0.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

Object Page

</td>
<td valign="top" colspan="2">

*Table Variant Management*

</td>
<td valign="top">

Configure if variant management is used in tables on the object page.

</td>
<td valign="top">

[Enabling Variant Management on the Object Page](enabling-variant-management-on-the-object-page-f26d42b.md)

</td>
<td valign="top">

> ### Note:  
> Settings made by a key user can override those made by an end user. This means that end users may need to reapply their personalization settings.



</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Form*

</td>
<td valign="top">

Configure the list of properties from navigation entities to include them as form fields.

</td>
<td valign="top">

[Adapting the Form](adapting-the-form-ac54768.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

*Avatar Image Fit Type*

</td>
<td valign="top">

*Cover*

*Contain*

</td>
<td valign="top">

Configure how an image fits in the avatar's container.

</td>
<td valign="top">

[Using Images and Icons](using-images-and-icons-5760b63.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" rowspan="12">

Table

</td>
<td valign="top" colspan="2">

*Enable Export*

</td>
<td valign="top">

Configure if the *Export* button is displayed in the table.

</td>
<td valign="top">

[Using the Export Button](using-the-export-button-4bab6f2.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Frozen Column Count*

</td>
<td valign="top">

Configure the count of columns that are always visible when scrolling horizontally. Not applicable to responsive tables.

</td>
<td valign="top">

[Tables](tables-c0f6592.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

*Personalization*

</td>
<td valign="top">

*Enabled*

*Disabled*

*Own Settings:*

-   *Sorting*

-   *Columns*

-   *Filtering*

-   *Grouping*




</td>
<td valign="top">

Configure if the table personalization settings are enabled. To configure the listed settings individually, choose `Own Settings`.

</td>
<td valign="top">

[Enabling Table Personalization](enabling-table-personalization-3e2b4d2.md)

</td>
<td valign="top">

> ### Note:  
> Settings made by a key user can override those made by an end user. This means that end users may need to reapply their personalization settings.

Grouping is not applicable to grid and tree tables.

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Row Count*

</td>
<td valign="top">

Configure the number of rows to be displayed in the table.

</td>
<td valign="top">

 

</td>
<td valign="top">

Only applicable to the object page.

Not applicable to responsive tables.

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Condensed Table Layout*

</td>
<td valign="top">

Configure if the table uses this layout.

</td>
<td valign="top">

[Using the Condensed Table Layout](using-the-condensed-table-layout-f3cc057.md)

</td>
<td valign="top">

Not applicable to responsive tables.

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Width Including Column Header*

</td>
<td valign="top">

Configure if the *Column Header* label is considered when calculating the column width.

</td>
<td valign="top">

[Setting the Default Column Width](setting-the-default-column-width-a765253.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Select All*

</td>
<td valign="top">

Configure if the *Select All* option is displayed in the table.

</td>
<td valign="top">

[Configuring the Selection Mode for Tables](configuring-the-selection-mode-for-tables-116b5d8.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Selection Limit*

</td>
<td valign="top">

Configure the maximum limit of the number of rows that can be selected at once.

</td>
<td valign="top">

[Configuring the Selection Mode for Tables](configuring-the-selection-mode-for-tables-116b5d8.md)

</td>
<td valign="top">

Not applicable to responsive tables.

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Scroll Threshold*

</td>
<td valign="top">

Configures the number of additional records that must be dynamically loaded when scrolling the application

</td>
<td valign="top">

[Optimizing Data Loading Using the `ScrollThreshold` Property](tables-c0f6592.md#loioc0f6592a592e47f9bb6d09900de47412__section_ygl_t1s_kdc) section in [Tables](tables-c0f6592.md)

</td>
<td valign="top">

Not applicable to responsive tables.

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Threshold*

</td>
<td valign="top">

Configures the number of records that must be loaded during the initial load of the application.

</td>
<td valign="top">

[Initial Data Loading Using the `Threshold` Property](tables-c0f6592.md#loioc0f6592a592e47f9bb6d09900de47412__section_xkq_dhx_rfc) in [Tables](tables-c0f6592.md)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" colspan="2">

*Hide Add Card to Insights*

</td>
<td valign="top">

Configure the *Add Card to Insights* feature for *My Home* in SAP S/4HANA and SAP S/4HANA Cloud Public Edition.

</td>
<td valign="top">

[Creating Cards for the Insights Cards Section of My Home in SAP S/4HANA Cloud Public Edition and My Home in SAP S/4HANA](creating-cards-for-the-insights-cards-section-of-my-home-in-sap-s-4hana-cloud-public-edit-9b13559.md)

</td>
<td valign="top">

Only applicable to the list report page.

</td>
</tr>
<tr>
<td valign="top">

*Creation Mode*

</td>
<td valign="top">

*Inline*

*Inline Creation Rows*

*New Page*

</td>
<td valign="top">

Configures the creation mode of the table.

</td>
<td valign="top">

[sap.fe.macros.table.TableCreationOptions](https://ui5.sap.com/#/api/sap.fe.macros.table.TableCreationOptions)

</td>
<td valign="top">

*Inline* is not applicable to analytical tables.

*Inline Creation Rows* is not applicable to tree and analytical tables.

*New Page* is not applicable to analytical tables.

</td>
</tr>
</table>



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Adapting the UI](adapting-the-ui-7837c7a.md).

