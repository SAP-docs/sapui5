<!-- loioe3b12f41d70c442f9d4cc2e7722bbb17 -->

# Creating a List Report Page Without Variant Management

The applications generated using the SAP Fiori elements includes the variant management option by default. However, you can also choose to create one without variant management.



<a name="loioe3b12f41d70c442f9d4cc2e7722bbb17__section_w32_z3d_fhc"/>

## Context

Without variant management, and with no custom title added, your application appears as follows:

  
  
**App without Variant Management**

![](images/Creating_Apps_without_Variant_Management_8b85684.jpg "App without Variant Management")

Without variant management and with a custom title added, your application appears as follows:

  
  
**App without Variant Management and with Custom Title**

![](images/Custom_Title_98d4cb0.jpg "App without Variant Management and with Custom Title")

For more information, see [Managing Variants](managing-variants-b82d987.md).



<a name="loioe3b12f41d70c442f9d4cc2e7722bbb17__section_yqk_jjd_fhc"/>

## Procedure

1.  Include the `variantManagementHidden` flag in the settings of the list report component in the `manifest.json` file of your application.

    -   If you set the flag to `true`, then the standard variant management isn't available in the application. The application name is displayed instead.

    -   If you set the flag to `false`, or if the flag is not configured in the `manifest.json` file of your application, the standard variant management is available and can be either enabled or disabled.


    > ### Sample Code:  
    > List Report without Variant Management
    > 
    > ```
    > "sap.ui.generic.app": {
    >         "_version":"1.1.0",
    >         "pages": [
    >             {
    >                 "entitySet": "XXXXXX_Product",
    >                 "component": {
    >                     "name": "sap.suite.ui.generic.template.ListReport",
    >                     "list": true,
    >                     "settings" : {
    >                         "gridTable" : false,
    >                         "smartVariantManagement": true,
    >                         "variantManagementHidden": true // Hides Variant management
    >                     }
    >                 },
    > ```

2.  If you want to use an app-specific title instead of the variant, include the `subTitleIfVariantMgmtHidden` property in the `i18n` file and enter a text value, as shown in the following sample code:

    > ### Sample Code:  
    > ```json
    > 
    > #XTIT,40
    > subTitleIfVariantMgmtHidden = List Report Custom Title
    > ```

3.  Add a new property in the `manifest.json` file of the application, as shown in the following sample code:

    > ### Sample Code:  
    > ```
    > "sap.ui.generic.app": {
    >         "_version":"1.1.0",
    >         "pages": [
    >             {
    >                 "entitySet": "XXXXXX_Product",
    >                 "component": {
    >                     "name": "sap.suite.ui.generic.template.ListReport",
    >                     "list": true,
    >                     "settings" : {
    >                         "gridTable" : false,
    >                         "smartVariantManagement": true,
    >                         "variantManagementHidden": true,
    >                         "subTitleIfVariantMgmtHidden": "{{subTitleIfVariantMgmtHidden}}" // Adding Custom Title here
    >                     }
    >                 },
    > 
    > ```

    > ### Note:  
    > The `variantManagementHidden` property must be used in combination with `smartVariantManagement = true` to hide both the page variant and control variant. If used alone, it hides only the filter bar variant.


**Related Information**  


[Enabling Variant Management on the Object Page](enabling-variant-management-on-the-object-page-ca0eb16.md "You can enable and disable variant management on the object page.")

