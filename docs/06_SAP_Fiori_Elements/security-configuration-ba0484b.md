<!-- loioba0484b19d0d4ce08e826299315b5621 -->

# Security Configuration

Security has always been an important element for the complete product life cycle of all SAP products, including product development, planning, and quality assurance. SAP takes care of some of the security focus areas, while others have to be handled by you.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

Consider the following security aspects:

-   If you're using CAP, you must ensure the security configurations in the back end are compatible with the design and configuration of your app.

    > ### Example:  
    > You must ensure that the setting for the total number of requests of OData batches is high enough in case you want to use the `InvocationGrouping: Changeset`.

    For more information, see [Security Aspects](https://cap.cloud.sap/docs/guides/security/aspects) and the section [Grouping of Multiple Invocations of the Same Action Using Multiple Selections in the Table](actions-cbf16c5.md#loiocbf16c599f2d4b8796e3702f7d4aae6c__handlingWithinButtons) in [Actions](actions-cbf16c5.md).

-   If you're using ABAP, see [Implementing Search in an Unmanaged Query](https://help.sap.com/docs/abap-cloud/abap-rap/implementing-search-in-unmanaged-query) and [Implementing Filtering in an Unmanaged Query](https://help.sap.com/docs/abap-cloud/abap-rap/implementing-filtering-in-unmanaged-query) for more information about security-related configurations.

-   Application developers must define `@Core.AcceptableMediaTypes`. This avoids security issues by enabling SAP Fiori elements to check for allowed file types. The back-end service framework must ensure a virus scan and other security measures, such as maximum file size limitations and MIME-type restrictions, are in place.

    For more information, see [Enabling Stream Support](enabling-stream-support-b236d32.md).




<a name="loioba0484b19d0d4ce08e826299315b5621__section_z5b_c51_h2c"/>

## Protecting Potentially Sensitive Data

To protect potentially sensitive data, consider the following:

-   Export functionality can be disabled on sensitive data.

    For more information, see [Using the Export Button](using-the-export-button-4bab6f2.md).

-   To prevent exposing sensitive data, you can disable copying to clipboard.

    For more information, see [Tables](tables-c0f6592.md).

-   If you have fields that contain sensitive personal data, you can use the `com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive` annotation to disable the storing of data in the history.

    For more information, see [Enabling the History of Recently Entered Values](enabling-the-history-of-recently-entered-values-37dbf1f.md).

-   If a potentially sensitive field \(a property that is annotated using the `PersonalData.v1.IsPotentiallySensitive` annotation\) is changed, SAP Fiori elements doesn't store/restore this information. Any changes added by users are therefore lost when refreshing. This limitation doesn't apply to fields used in filter context.

    For more information, see [Store/Restore the Application State](store-restore-the-application-state-46bf248.md).

-   Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations.

    To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. The `adaptNavigationContext` extension method allows you to modify which information available in the navigation context is passed to the target application, excluding sensitive information.

    For more information, see [Creating an Extension to Modify Properties in the Navigation Context](creating-an-extension-to-modify-properties-in-the-navigation-context-199a496.md).

-   During external outbound navigation, sensitive data is removed from the navigation context. However, sensitive properties of navigation entities beyond one level aren't removed from the navigation context.

    For more information, see [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).

-   If your application contains sensitive and personal data, enabling the *Share: Microsoft Teams* › *As Card* option results in the transfer of this information outside the SAP S/4HANA environment. Application teams need to carefully consider whether such data should be excluded by providing the corresponding annotation.

    For more information, see [The Share: Microsoft Teams Functionality](the-share-microsoft-teams-functionality-ff89e4b.md).


