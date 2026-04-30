<!-- loio11ff444f82e14eb3a2e8eca0065a5055 -->

# Prefilling Fields When Creating a New Entity

When users create a new entity, you can prefill the fields with specific values.

If the entity is draft-enabled, the relevant service implementation can be used to prefill the fields.

In some cases, the values result from a user interaction that took place before the creation of the entity was triggered. Then, the relevant information must be transferred from the front end to the back end.

For more information about creation using cross-app navigation, see [Handling of the preferredMode Parameter](handling-of-the-preferredmode-parameter-bfaf3cc.md).

> ### Note:  
> Use this feature carefully as the user might not expect to come upon prefilled fields.
> 
> Do not use this feature if the fields are not \(or might not be\) visible to the user.

Applications can define `NewAction` and its parameters to ensure that users can provide parameter values during creation \(`NewAction` is only supported for the list report page\). For `POST`-based creation, a dialog is still shown if there are any non-computed key fields or immutable fields. For more information, see [Actions](actions-cbf16c5.md).

> ### Sample Code:  
> ```
> <Annotation Term="Common.DraftRoot">
>     <Record Type="Common.DraftRootType">
>         <PropertyValue Property="NewAction" String="com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithSalesOrderType"/>
>         ...
>         ...
>     </Record>
> </Annotation>
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Prefilling Fields When Creating a New Entity](prefilling-fields-when-creating-a-new-entity-20d1421.md).

**Related Information**  


[Actions in the List Report](actions-on-the-list-report-page-993e99e.md "You can configure various action buttons on the list report page.")

