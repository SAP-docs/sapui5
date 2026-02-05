<!-- loio20d1421533094b49865761f2888751b6 -->

# Prefilling Fields When Creating a New Entity

When a user creates a new entity, it is possible to prefill fields with specific values.

If the entity is draft-enabled, the relevant service implementation can be used to prefill the fields.

In some cases, the values result from a user interaction that took place before the creation of the entity was triggered. Then, the relevant information must be transferred from the front end to the back end.

For more information about creation using cross-app navigation, see [Handling of the preferredMode Parameter](handling-of-the-preferredmode-parameter-2e40363.md).

> ### Note:  
> Use this feature carefully as the user might not expect to come upon prefilled fields.
> 
> Do not use this feature if the fields are not \(or might not be\) visible to the user.

There are more options for supporting the prefilling of fields on the UI.

-   [Prefilling Fields When Creating a New Entity Using an Extension Point](prefilling-fields-when-creating-a-new-entity-using-an-extension-point-189e2d8.md)

-   [Prefilling Fields Using the `DefaultValuesFunction`](prefilling-fields-using-the-defaultvaluesfunction-6613e42.md)


**Related Information**  


[Actions in the List Report](actions-in-the-list-report-page-43ff607.md "The list report supports a number of actions.")

