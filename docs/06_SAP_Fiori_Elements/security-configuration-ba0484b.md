<!-- loioba0484b19d0d4ce08e826299315b5621 -->

# Security Configuration

Security has always been an important element for the complete product life cycle of all SAP products, including product development, planning, and quality assurance. SAP takes care of some of the security focus areas, while others have to be handled by you.

For SAP Fiori elements for OData V4, if you’re using CAP, you must ensure the security configurations in the back end are compatible with the design and configuration of your app.

> ### Example:  
> You must ensure that the setting for the total number of requests of OData batches is high enough in case you want to use the `InvocationGrouping: Changeset`.

For more information, see [https://cap.cloud.sap/docs/guides/security/aspects](https://cap.cloud.sap/docs/guides/security/aspects) and the section [Grouping of Multiple Invocations of the Same Action via Multiple Selections in the Table](actions-cbf16c5.md#loiocbf16c599f2d4b8796e3702f7d4aae6c__handlingWithinButtons) in [Actions](actions-cbf16c5.md).

