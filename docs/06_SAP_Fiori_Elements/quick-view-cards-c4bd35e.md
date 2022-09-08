<!-- loioc4bd35e657df4285bb6d4b2a6c51a5af -->

# Quick View Cards

Quick view cards display detailed information about a single record, in greater depth than would be displayed in a table or list.



The information displayed in quick view cards is configured in the `com.sap.vocabularies.UI.v1.HeaderInfo` and `com.sap.vocabularies.UI.v1.Facets` terms. The `com.sap.vocabularies.UI.v1.HeaderInfo` term is used to present the entity header information, and the `com.sap.vocabularies.UI.v1.Facets` term is used to present detailed information about the record. Quick view card supports the following properties:

-   `TypeNamePlural`

-   `ImageUrl` 

-   `Title` 

-   `Description`




The content area shows `FieldGroup` records from `referenceFacet` items that have been tagged using the `IsSummary` annotation in the `com.sap.vocabularies.UI.v1.Facets` annotation.

The `com.sap.vocabularies.UI.v1.Facets` term can be configured in the application manifest file by setting the `annotationPath` property with a qualifier, as shown in the example below. If the `annotationPath` property is not configured, the `com.sap.vocabularies.UI.v1.Facets` term, without a qualifier, is used.



### Card Footer

You can assign actions to the quick view cards that open in the object stream of the stack card. The actions are displayed as buttons in the card footer.

From `com.sap.vocabularies.UI.v1.Identification`, there are two kinds of actions that you can display in the card footer:

-   `com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation` 
-   `com.sap.vocabularies.UI.v1.DataFieldForAction`

Depending on the number of assigned actions, they are displayed in the footer as follows:

-   If there is only one action, the button is aligned to the right of the footer area.
-   If there are two actions, such as *OK* and *Cancel*, they are presented according to their importance and order of entry. We recommend providing the annotation in a such a way that the positive action is on the left and the negative action is on the right.
-   If there are more than two actions, an *Actions* button is displayed. Clicking the *Actions* button opens an `ActionSheet` control with all of the defined actions in the order that they appear in the metadata.
-   If no actions are assigned to the card, the footer area is not displayed.

Each OData action is translated into a request according to the annotation. Clicking an action invokes the OData service request. Complex actions open a dialog box with the action parameters or a confirmation message.

> ### Sample Code:  
> ```
> "sap.ovp": {
>     ...
>     "cards": {
>         ...
>         "card01": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.table",
>             "settings": {
>                 ...
>                 "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#Qualifier1",
>                 ...
>             }
>         },
>         ...
>     }
> }
> ```

Interaction buttons in the footer area are part of `sap.m.OverflowToolbar` so that quick view cards can display action buttons based on the width of the card, and if more actions are necessary, the remaining actions are shown in the overflow toolbar.

> ### Note:  
> Cards can have different sizes because the height of each quick view card is aligned with the content of the card. If there is more content than can be shown in the card, you'll be able to scroll vertically, but only within the content area itself. The header and footers stay fixed.

> ### Sample Code:  
> ```
> "sap.ovp": {
>     ...
>     "cards": {
>         "card00": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.stack",
>             "settings": {
>                 "category": "{{card01_category}}",
>                 "entitySet": "BusinessPartners",
>                 "objectStreamCardsSettings": {
>                     "annotationPath": "com.sap.vocabularies.UI.v1.Facets#Qualifier2"
>                 }
>             }
>         },
>         ...
>     }
> }
> ```

