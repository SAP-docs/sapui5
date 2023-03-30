<!-- loio11ff444f82e14eb3a2e8eca0065a5055 -->

# Prefilling Fields When Creating a New Entity

When a user creates a new entity, it is possible to prefill fields with specific values.





### Prefilling Fields When Creating a New Entity

If the entity is draft-enabled, the relevant service implementation can be used to prefill the fields.

In some cases, the values result from a user interaction that took place before the creation of the entity was triggered. Then, the relevant information must be transferred from the front end to the back end.

For more information about creation using cross-app navigation, see [Handling of the preferredMode Parameter](handling-of-the-preferredmode-parameter-bfaf3cc.md).

> ### Note:  
> Use this feature carefully as the user might not expect to come upon prefilled fields.
> 
> Do not use this feature if the fields are not \(or might not be\) visible to the user.



<a name="loio11ff444f82e14eb3a2e8eca0065a5055__section_q51_1rd_2nb"/>

## Additional Features in SAP Fiori Elements for OData V2

There are more options for supporting the prefilling of fields on the UI.

-   [Prefilling Fields When Creating a New Entity Using an Extension Point](prefilling-fields-when-creating-a-new-entity-using-an-extension-point-189e2d8.md)

-   Prefilling Fields When Creating a New Entity or Item Using `DefaultValuesFunction`. For more information, see [Prefilling Fields Using the `DefaultValuesFunction`](prefilling-fields-using-the-defaultvaluesfunction-5ada91c.md)




<a name="loio11ff444f82e14eb3a2e8eca0065a5055__section_jjd_2rd_2nb"/>

## Additional Features in SAP Fiori Elements for OData V4

Applications can define `NewAction` and its parameters to ensure that end users can provide parameter values during creation \(`NewAction` is only supported for list report\). For `POST`-based creation, a dialog is still shown if there are any non-computed key fields or immutable fields. For more information, see [Actions](actions-cbf16c5.md).

> ### Sample Code:  
> ```
> <Annotation Term="Common.DraftRoot">
>     <Record Type="Common.DraftRootType">
>         <PropertyValue Property="NewAction" String="com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithSalesOrderType"/>
>         ....
>         ....
>     </Record>
> </Annotation>
> ```

**Related Information**  


[Actions in the List Report](actions-in-the-list-report-993e99e.md "The list report supports a number of actions.")

